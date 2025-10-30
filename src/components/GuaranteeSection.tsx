import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import productImage from "@/assets/super-imune-box-bottle.webp";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={productImage} 
                alt="Super Imune Nature's Prime com garantia de 30 dias - suplemento para sistema imunológico"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-accent" />
                <span className="font-semibold text-accent">Garantia Incondicional</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="text-primary">GARANTIA DE RESULTADOS</span>
                <br />
                OU SEU DINHEIRO DE VOLTA!
              </h2>
              
              <div className="text-lg text-foreground space-y-4 leading-relaxed">
                <p className="font-semibold text-xl">
                  Desafio 30 Dias Nature's Prime!
                </p>
                
                <p>
                  Estamos tão confiantes na qualidade e eficácia do Super Imune que oferecemos 
                  uma garantia incondicional de 30 dias. Se você não perceber melhora na sua 
                  imunidade e bem-estar, devolvemos o seu dinheiro!
                </p>
                
                <p>
                  Não há riscos para você. Experimente o Super Imune por 30 dias completos e 
                  sinta a diferença no seu sistema imunológico. Se não ficar satisfeito por 
                  qualquer motivo, basta nos avisar e faremos o reembolso total.
                </p>
                
                <div className="bg-card border-2 border-primary/20 rounded-lg p-6 space-y-3">
                  <p className="font-bold text-primary text-lg">
                    ✓ 30 dias de garantia total
                  </p>
                  <p className="font-bold text-primary text-lg">
                    ✓ Reembolso sem burocracia
                  </p>
                  <p className="font-bold text-primary text-lg">
                    ✓ Risco zero para você
                  </p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AKS25517419">
                  SIM! EU QUERO FORTALECER MINHA IMUNIDADE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;