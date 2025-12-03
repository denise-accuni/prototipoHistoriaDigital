export interface Woman {
  id: string;
  name: string;
  country?: string;
  birthYear?: string;
  wikiUrl?: string;
  description?: string;
  image?: string;
}

const SPARQL_ENDPOINT = "https://query.wikidata.org/sparql";

export async function searchWomenInComputing(region: string): Promise<Woman[]> {
  if (!region) return [];

  const sparqlQuery = `
    SELECT DISTINCT ?pessoa ?pessoaLabel ?countryLabel ?articlePt ?articleEn ?birthYear ?image ?description WHERE {
      ?pessoa wdt:P31 wd:Q5;
              wdt:P21 wd:Q6581072;
              wdt:P106 ?ocupacao;
              wdt:P27 ?country.

      VALUES ?ocupacao {
        wd:Q82594
        wd:Q5482740
        wd:Q81096
        wd:Q201476
        wd:Q15976092
        wd:Q193391
        wd:Q183888
        wd:Q11661
        wd:Q2143855
        wd:Q4964182
      }

      ?country rdfs:label ?countryLabel.
      FILTER(REGEX(?countryLabel, "${region}", "i"))
      FILTER(LANG(?countryLabel) = "pt")

      OPTIONAL { ?pessoa wdt:P569 ?dob. BIND(YEAR(?dob) AS ?birthYear) }
      OPTIONAL { ?pessoa wdt:P18 ?image. }
      OPTIONAL { ?pessoa schema:description ?description. FILTER(LANG(?description) = "pt") }
      
      OPTIONAL {
        ?articlePt schema:about ?pessoa ;
                   schema:isPartOf <https://pt.wikipedia.org/>.
      }
      OPTIONAL {
        ?articleEn schema:about ?pessoa ;
                   schema:isPartOf <https://en.wikipedia.org/>.
      }

      SERVICE wikibase:label { bd:serviceParam wikibase:language "pt,en". }
    }
    LIMIT 100
  `;

  const url = `${SPARQL_ENDPOINT}?query=${encodeURIComponent(sparqlQuery)}&format=json`;

  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/sparql-results+json",
      }
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    
    const seen = new Set();
    const results: Woman[] = [];

    for (const binding of data.results.bindings) {
      const id = binding.pessoa.value;
      if (seen.has(id)) continue;
      seen.add(id);

      const wikiPt = binding.articlePt?.value;
      const wikiEn = binding.articleEn?.value;
      const finalWikiUrl = wikiPt || wikiEn || null;

      results.push({
        id: id,
        name: binding.pessoaLabel.value,
        country: binding.countryLabel?.value,
        birthYear: binding.birthYear?.value,
        wikiUrl: finalWikiUrl,
        description: binding.description?.value,
        image: binding.image?.value
      });
    }

    for (let i = results.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [results[i], results[j]] = [results[j], results[i]];
    }

    return results.slice(0, 10);
  } catch (error) {
    console.error("Error fetching from Wikidata:", error);
    return [];
  }
}
