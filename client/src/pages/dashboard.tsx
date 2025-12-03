import { motion } from "framer-motion";
import { ArrowLeft, BarChart3 } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
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
            <div>
              <h1 className="text-lg font-serif font-bold text-foreground leading-none">
                Dashboard de Pesquisa
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                Visualização dos dados coletados
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <BarChart3 size={14} />
              <span>Análise de Dados</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Resultados da Pesquisa
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acompanhe em tempo real os dados coletados através do formulário de pesquisa 
              sobre a visibilidade das mulheres na computação.
            </p>
          </div>

          {/* Bloco com os gráficos em vez da planilha */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 p-6 space-y-6">
            <h3 className="text-lg font-serif font-bold text-foreground">
              Visualização em Gráficos
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Gráfico 1 */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Gráfico 1
                </p>
                <div className="relative w-full aspect-[16/9]">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcVpaxujMGUduFMnorREMBe18yYObfrK6SFuNT7EMq0Amz8Erpof9PdGNIuCj9lOldSUcZM5ufsGw4/pubchart?oid=1558650001&format=interactive"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    title="Dashboard de Pesquisa - Gráfico 1"
                    data-testid="iframe-dashboard"
                  >
                    Carregando...
                  </iframe>
                </div>
              </div>

              {/* Gráfico 2 */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Gráfico 2
                </p>
                <div className="relative w-full aspect-[16/9]">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcVpaxujMGUduFMnorREMBe18yYObfrK6SFuNT7EMq0Amz8Erpof9PdGNIuCj9lOldSUcZM5ufsGw4/pubchart?oid=1855741587&format=interactive"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    title="Dashboard de Pesquisa - Gráfico 2"
                    data-testid="iframe-dashboard-2"
                  >
                    Carregando...
                  </iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md border border-purple-100 p-6">
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                Sobre os Dados
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Os dados apresentados neste dashboard são coletados em tempo real 
                através do formulário de pesquisa. As respostas são anônimas e 
                utilizadas exclusivamente para fins acadêmicos.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-purple-100 p-6">
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                Participe!
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Ainda não respondeu? Sua contribuição é muito importante para 
                nossa pesquisa sobre mulheres na tecnologia.
              </p>
              <Button 
                onClick={() => setLocation("/formulario")} 
                variant="outline"
                className="w-full border-primary/20 hover:bg-primary/5 hover:text-primary"
                data-testid="button-go-form"
              >
                Responder Formulário
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
