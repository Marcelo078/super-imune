import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import soloImage from "@/assets/super-imune-solo.webp";
import duoImage from "@/assets/super-imune-duo.webp";

const pricingOptions = [
  {
    title: "LEVE 1 POTE",
    image: soloImage,
    originalPrice: "R$ 147,00",
    price: "R$ 13,54",
    installments: "ou R$ 149,90 à vista",
    link: "https://app.monetizze.com.br/r/AKS25517419?u=c&pl=LF337965",
    popular: false
  },
  {
    title: "LEVE 2 POTES",
    image: duoImage,
    originalPrice: "R$ 294,00",
    price: "R$ 20,07",
    installments: "ou R$ 199,90 à vista",
    link: "https://app.monetizze.com.br/r/AKS25517419?u=c&pl=JJ303866",
    popular: true,
    badge: "MAIS VENDIDO"
  },
  {
    title: "LEVE 3 POTES",
    image: soloImage,
    originalPrice: "R$ 441,00",
    price: "R$ 24,98",
    installments: "ou R$ 249,90 à vista",
    link: "https://app.monetizze.com.br/r/AKS25517419?u=c&pl=PH337966",
    popular: false
  },
  {
    title: "LEVE 6 POTES",
    image: duoImage,
    originalPrice: "R$ 882,00",
    price: "R$ 37,49",
    installments: "ou R$ 374,90 à vista",
    link: "https://app.monetizze.com.br/r/AKS25517419?u=c&pl=CN337967",
    popular: false,
    badge: "MELHOR OFERTA"
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="ofertas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ESCOLHA A MELHOR <span className="text-primary">OFERTA PARA VOCÊ</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Aproveite valores exclusivos de lançamento
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-destructive font-semibold text-lg">
            <span className="animate-pulse">⏰</span>
            Aproveite! Promoção por tempo limitado!
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all hover:shadow-2xl ${
                option.popular ? 'border-primary border-2 shadow-xl scale-105' : 'hover:scale-105'
              }`}
            >
              {option.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground">
                  {option.badge}
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-primary">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <img 
                    src={option.image} 
                    alt={`Super Imune Nature's Prime ${option.title} - Suplemento para fortalecer imunidade`}
                    className="w-full h-48 object-contain"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground line-through">
                    {option.originalPrice}
                  </p>
                  <div className="space-y-1">
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                      {option.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {option.installments}
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-base"
                  asChild
                >
                  <a href={option.link}>
                    COMPRAR AGORA
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              Frete com desconto
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% seguro
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Compra protegida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;