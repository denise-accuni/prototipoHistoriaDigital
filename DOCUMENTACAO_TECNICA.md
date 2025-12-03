# Documentação Técnica: Mapa das Mulheres na Computação

## 1. Visão Geral do Projeto
O **Mapa das Mulheres na Computação** é uma aplicação web interativa desenvolvida para catalogar, visualizar e celebrar a contribuição histórica das mulheres nas áreas de tecnologia, engenharia de software e ciências da computação. O projeto utiliza dados abertos linkados (Linked Open Data) para gerar visualizações em tempo real baseadas em consultas geográficas.

## 2. Arquitetura do Sistema

### 2.1. Stack Tecnológico
O projeto foi construído seguindo uma arquitetura **Single Page Application (SPA)**, totalmente executada no lado do cliente (Client-Side Rendering), garantindo performance e interatividade imediata.

*   **Linguagem:** TypeScript (superset tipado de JavaScript) para maior robustez e segurança de código.
*   **Framework:** React.js (v18+) para construção de interfaces reativas baseadas em componentes.
*   **Build Tool:** Vite para empacotamento otimizado e Hot Module Replacement (HMR).
*   **Estilização:** Tailwind CSS (v4) para design system utilitário e responsivo.
*   **Animações:** Framer Motion para micro-interações e transições de interface fluidas.
*   **Roteamento:** Wouter para gerenciamento leve de rotas no navegador.

### 2.2. Fluxo de Dados
A aplicação não possui banco de dados proprietário. Toda a informação é consumida dinamicamente através de APIs públicas, garantindo que os dados estejam sempre atualizados conforme a edição comunitária da Wikipédia/Wikidata.

1.  **Input do Usuário:** O usuário insere uma região/país.
2.  **Processamento:** O termo é inserido em uma query SPARQL parametrizada.
3.  **Requisição:** A aplicação realiza um `GET` para o endpoint `https://query.wikidata.org/sparql`.
4.  **Normalização:** O JSON retornado é tratado e tipado via TypeScript.
5.  **Renderização:** Os componentes React exibem os dados em cards interativos.

## 3. Metodologia de Dados (Científica)

### 3.1. Fonte de Dados: Wikidata
A base de dados utilizada é o **Wikidata**, um repositório de conhecimento livre e colaborativo que atua como armazenamento central para os dados estruturados de projetos irmãos da Wikimedia (como a Wikipédia).

### 3.2. Consulta SPARQL
A extração de dados é realizada através de **SPARQL** (SPARQL Protocol and RDF Query Language), uma linguagem de consulta semântica para bancos de dados orientados a grafos (RDF).

**Estrutura Lógica da Query:**
A consulta filtra entidades que satisfazem simultaneamente as seguintes condições ontológicas:
*   **Instância de (P31):** Ser humano (`wd:Q5`).
*   **Sexo ou Gênero (P21):** Feminino (`wd:Q6581072`).
*   **Ocupação (P106):** Filtro por IDs específicos de áreas tecnológicas:
    *   Cientista da computação (`wd:Q82594`)
    *   Programador(a) (`wd:Q5482740`)
    *   Engenheiro(a) de software (`wd:Q81096`)
    *   Matemático(a) (`wd:Q201476`) - *Incluído devido à forte correlação histórica (ex: Ada Lovelace).*
    *   Cientista de dados (`wd:Q15976092`)
    *   Administrador(a) de sistemas (`wd:Q193391`)
    *   Desenvolvedor(a) web (`wd:Q183888`)
*   **Cidadania (P27):** Filtrado pelo *label* do país inserido pelo usuário (ex: "Brasil").

### 3.3. Tratamento de Ausência de Dados
Para manter o rigor estético e informacional:
*   **Imagens:** Caso a propriedade `P18` (imagem) não exista, o sistema renderiza um ícone simbólico (Flor) com a notação "Sem foto pública", evitando espaços vazios (layout shift).
*   **Links:** Verificação de existência de artigo na Wikipédia em português (`schema:inLanguage "pt"`) para garantir acessibilidade do conteúdo linkado.

## 4. Design System e Interface

### 4.1. Identidade Visual
A interface foi projetada com foco em **Humanidades Digitais**, utilizando uma estética que combina modernidade tecnológica com elementos orgânicos.

*   **Paleta de Cores:** Tons de Roxo (`#8b5cf6`), Violeta e Lavanda. O roxo é historicamente associado a movimentos de igualdade de gênero e sabedoria.
*   **Tipografia:**
    *   *Playfair Display (Serif):* Para títulos, evocando história, elegância e editorial clássico.
    *   *Inter (Sans-serif):* Para dados e leituras longas, garantindo legibilidade em telas digitais.
*   **Glassmorphism:** Uso de desfoque de fundo (`backdrop-blur`) e transparências para criar profundidade e hierarquia visual moderna.

### 4.2. Acessibilidade e UX
*   Feedback visual de carregamento (Skeletons) enquanto a query SPARQL é processada.
*   Tratamento de erros de rede ou consultas vazias.
*   Responsividade total (Mobile-First).

## 5. Conclusão Técnica
O projeto demonstra a aplicação prática de **Web Semântica** e **Dados Abertos** para fins educacionais e sociológicos. Ao não depender de uma base de dados estática local, o "Mapa das Mulheres" torna-se uma ferramenta viva, refletindo em tempo real o estado da documentação histórica feminina na maior enciclopédia do mundo.
