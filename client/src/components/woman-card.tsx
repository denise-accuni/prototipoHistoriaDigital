import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar, Flower2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Woman } from "@/lib/wikidata";

interface WomanCardProps {
  woman: Woman;
  index: number;
}

export function WomanCard({ woman, index }: WomanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30">
          {woman.image ? (
            <img
              src={woman.image}
              alt={woman.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/50 text-primary/40 gap-3 p-4 text-center">
              <Flower2 size={48} strokeWidth={1.5} />
              <span className="text-xs font-medium uppercase tracking-wider opacity-70">Sem foto pública</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="flex-1 p-6 pt-6">
          <h3 className="text-2xl font-serif font-bold text-primary mb-2 line-clamp-2">
            {woman.name}
          </h3>
          
          <div className="space-y-2 text-muted-foreground text-sm">
            {woman.country && (
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary/60" />
                <span>{woman.country}</span>
              </div>
            )}
            {woman.birthYear && (
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-primary/60" />
                <span>Nascida em {woman.birthYear}</span>
              </div>
            )}
          </div>

          {woman.description && (
            <p className="mt-4 text-sm line-clamp-3 text-foreground/80">
              {woman.description}
            </p>
          )}
        </CardContent>

        <CardFooter className="p-6 pt-0">
          {woman.wikiUrl && (
            <Button 
              variant="outline" 
              className="w-full gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary"
              asChild
            >
              <a href={woman.wikiUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                Ver na Wikipédia
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
