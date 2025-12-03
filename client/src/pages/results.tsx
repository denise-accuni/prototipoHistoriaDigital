import { useEffect, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { searchWomenInComputing, type Woman } from "@/lib/wikidata";
import { WomanCard } from "@/components/woman-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Results() {
  const [location, setLocation] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const region = params.get("regiao") || "";
  
  const [women, setWomen] = useState<Woman[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!region) {
      setLocation("/");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const data = await searchWomenInComputing(region);
      setWomen(data);
      setLoading(false);
    };

    fetchData();
  }, [region, setLocation]);

  return (
    <div className="min-h-screen bg-background w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setLocation("/")}
              className="hover:bg-primary/10 hover:text-primary"
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-lg font-serif font-bold text-foreground leading-none">
                Mapa das Mulheres
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                Resultados para: <span className="font-medium text-primary">{region}</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[300px] w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : women.length > 0 ? (
          <>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-2 text-muted-foreground"
            >
              <Users size={18} />
              <span>Encontradas <strong>{women.length}</strong> mulheres pioneiras em {region}</span>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {women.map((woman, index) => (
                <WomanCard key={woman.id} woman={woman} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="text-muted-foreground" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Nenhum resultado encontrado</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Não encontramos registros na Wikidata para "{region}". Tente buscar por outro país ou verifique a grafia.
            </p>
            <Button onClick={() => setLocation("/")} variant="default">
              Nova Busca
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
