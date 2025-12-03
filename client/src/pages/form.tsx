import { motion } from "framer-motion";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Form() {
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
                Formulário de Pesquisa
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                Contribua com sua opinião
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
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <ClipboardList size={14} />
              <span>Pesquisa Acadêmica</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Sua opinião é importante!
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo para contribuir com nossa pesquisa sobre 
              a visibilidade das mulheres na computação.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScTBKpxdc4vCVau01nx-7fU2Zulx36mU0EOvVfgt97UaP4BJA/viewform?embedded=true" 
              width="100%" 
              height="2355" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
              title="Formulário de Pesquisa"
              data-testid="iframe-form"
            >
              Carregando...
            </iframe>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
