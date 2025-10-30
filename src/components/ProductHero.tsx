import { Button } from "@/components/ui/button";
import productImage from "@/assets/super-imune-box-bottle.webp";
import { Shield, Zap, Heart, Award } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--gradient-warm))] via-background to-muted/30">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImhvbmV5Y29tYiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cG9seWdvbiBmaWxsPSIjZmY5ODAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiIHBvaW50cz0iMzAsMCAwLDE1IDAsNDUgMzAsNjAgNjAsNDUgNjAsMTUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0idXJsKCNob25leWNvbWIpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Award className="h-4 w-4" />
              Nature's Prime - Qualidade Garantida
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Super Imune
              <span className="block text-primary mt-2">
                Fortaleça Sua Imunidade Naturalmente
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Fórmula equilibrada com Vitamina C, Lisina, Própolis, Selênio, Zinco, Vitamina D e B2. 
              Proteja sua saúde com o poder da natureza em 60 cápsulas de 400mg.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Proteção Diária</h3>
                  <p className="text-sm text-muted-foreground">Fortalece o sistema imunológico</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Mais Energia</h3>
                  <p className="text-sm text-muted-foreground">Vitalidade para seu dia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">100% Natural</h3>
                  <p className="text-sm text-muted-foreground">Ingredientes selecionados</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Garantia 30 Dias</h3>
                  <p className="text-sm text-muted-foreground">Resultados comprovados</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AKS25517419">
                  SIM! QUERO FORTALECER MINHA IMUNIDADE
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Entrega Segura
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Compra Protegida
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <img 
              src={productImage} 
              alt="Super Imune Nature's Prime - Suplemento alimentar em cápsulas para fortalecer a imunidade com vitamina C, lisina, própolis, selênio, zinco e vitaminas"
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;