import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, GraduationCap, Users, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-purple-50 to-background">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setLocation("/")}
              className="hover:bg-primary/10 hover:text-primary"
              data-testid="button-back"
            >
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-lg font-serif font-bold text-foreground">Sobre o Projeto</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles size={14} />
              <span>Protótipo Acadêmico</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Mapa das Mulheres <span className="text-primary">na Computação</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma digital dedicada a visibilizar as contribuições femininas 
              na história da tecnologia e das humanidades digitais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  Meninas do PIC - UNIG
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este protótipo foi desenvolvido como parte do <strong>Programa de Iniciação Científica (PIC)</strong> da 
                  Universidade Iguaçu (UNIG), com foco em promover a participação feminina 
                  na pesquisa científica e tecnológica.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O projeto busca inspirar novas gerações de mulheres a ingressarem nas áreas 
                  de STEM (Ciência, Tecnologia, Engenharia e Matemática), mostrando que a 
                  história da computação foi construída também por mãos femininas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  História Digital - UFRRJ
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  O projeto integra a proposta de solução da disciplina <strong>Introdução à História Digital</strong> da 
                  Universidade Federal Rural do Rio de Janeiro (UFRRJ), ministrada pelo 
                  <strong> Professor Eric Brasil</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A disciplina explora como as tecnologias digitais transformam a pesquisa 
                  histórica, incluindo o uso de dados abertos, web semântica e visualizações 
                  interativas para democratizar o acesso ao conhecimento.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm mt-8">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h2 className="text-xl font-serif font-bold text-foreground">
                Metodologia e Tecnologia
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  O <strong>Mapa das Mulheres na Computação</strong> utiliza tecnologias de ponta 
                  em Humanidades Digitais:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Wikidata:</strong> Base de conhecimento livre e colaborativa, 
                    fonte primária de dados estruturados sobre as pioneiras.
                  </li>
                  <li>
                    <strong>SPARQL:</strong> Linguagem de consulta semântica para extração 
                    de dados em tempo real.
                  </li>
                  <li>
                    <strong>React + TypeScript:</strong> Interface moderna e responsiva, 
                    acessível em qualquer dispositivo.
                  </li>
                  <li>
                    <strong>Dados Abertos Linkados:</strong> Princípios da Web Semântica 
                    para conectar informações de múltiplas fontes.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12 space-y-4">
            <p className="text-sm text-muted-foreground">
              Desenvolvido com carinho para celebrar as mulheres que moldaram o mundo digital.
            </p>
            <Button onClick={() => setLocation("/")} className="gap-2" data-testid="button-start-search">
              <Sparkles size={16} />
              Começar a Explorar
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
