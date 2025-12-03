import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Search, Sparkles, Info, ClipboardList, BarChart3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [, setLocation] = useLocation();
  const [searchRegion, setSearchRegion] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchRegion.trim()) {
      setLocation(`/buscar?regiao=${encodeURIComponent(searchRegion.trim())}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-purple-50 to-background flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 flex justify-center gap-6 z-20">
        <button 
          onClick={() => setLocation("/sobre")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          data-testid="nav-about"
        >
          <Info size={16} />
          <span>Sobre</span>
        </button>
        <button 
          onClick={() => setLocation("/formulario")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          data-testid="nav-form"
        >
          <ClipboardList size={16} />
          <span>Formulário</span>
        </button>
        <button 
          onClick={() => setLocation("/dashboard")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          data-testid="nav-dashboard"
        >
          <BarChart3 size={16} />
          <span>Dashboard</span>
        </button>
      </nav>

      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full text-center space-y-8 z-10"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Sparkles size={14} />
              <span>História Digital & Humanidades</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground font-serif leading-tight">
              Mapa das Mulheres <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                na Computação
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore a contribuição fundamental das mulheres para a tecnologia. 
              Descubra pioneiras, cientistas e engenheiras que moldaram o nosso mundo digital.
            </p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            onSubmit={handleSearch}
            className="max-w-md mx-auto w-full relative group"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-white rounded-xl shadow-lg p-2 border border-purple-100 focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all">
              <Search className="ml-3 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Digite um país (ex: Brasil, Portugal, EUA)..."
                value={searchRegion}
                onChange={(e) => setSearchRegion(e.target.value)}
                className="border-none shadow-none focus-visible:ring-0 text-lg h-12 bg-transparent placeholder:text-muted-foreground/70"
                data-testid="input-search"
              />
              <Button type="submit" size="lg" className="rounded-lg px-8 font-medium" data-testid="button-search">
                Buscar
              </Button>
            </div>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6 mt-8"
          >
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span>Sugestões:</span>
              {["Brasil", "Estados Unidos", "Reino Unido", "França", "Alemanha"].map((country) => (
                <button 
                  key={country}
                  onClick={() => setLocation(`/buscar?regiao=${encodeURIComponent(country)}`)}
                  className="hover:text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-all"
                  data-testid={`suggestion-${country}`}
                >
                  {country}
                </button>
              ))}
            </div>

            <div className="w-full max-w-md p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Sparkles size={20} className="text-primary animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground truncate">Homenagem: Mulheres de Código</h3>
                <p className="text-xs text-muted-foreground truncate">Música gerada por IA (Suno)</p>
              </div>
              <a 
                href="https://suno.com/s/n6CTILILLys6C6eb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-full hover:bg-primary/90 transition-colors shadow-sm hover:shadow"
                data-testid="link-music"
              >
                Ouvir
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
