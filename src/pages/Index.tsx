import ProductHero from "@/components/ProductHero";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ProductHero />
      <TrustBadges />
      <Testimonials />
      <GuaranteeSection />
      <PricingSection />
      <FAQ />
      
      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl">Nature's Prime</span>
            </div>
            
            <div className="max-w-3xl mx-auto text-sm text-muted-foreground space-y-2">
              <p className="font-semibold">FORMAS DE PAGAMENTO</p>
              <p>Cartão de Crédito (Visa, Mastercard, Elo, Hipercard, American Express) | Pix | Boleto Bancário</p>
              
              <div className="pt-4 space-y-2">
                <p className="font-semibold">LINKS</p>
                <p>Política de Privacidade | Termos de Uso | Política de Entrega</p>
              </div>
              
              <div className="pt-4 space-y-2">
                <p className="font-semibold">MÉTODOS DE ENTREGA</p>
                <p>Correios - Entrega em todo o Brasil</p>
              </div>
              
              <div className="pt-6 border-t border-border mt-6">
                <p className="text-xs">
                  Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, 
                  a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e 
                  mostrar todas as provas do produto e usar resultados reais.
                </p>
                <p className="text-xs mt-4">
                  © 2025 Nature's Prime. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;