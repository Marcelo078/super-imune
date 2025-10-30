import { Shield, Lock, Truck, CreditCard } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Compra 100%",
      subtitle: "Segura e protegida"
    },
    {
      icon: Lock,
      title: "Site Protegido",
      subtitle: "Dados criptografados"
    },
    {
      icon: Truck,
      title: "Entrega",
      subtitle: "Para todo Brasil"
    },
    {
      icon: CreditCard,
      title: "Parcele em até 12x",
      subtitle: "Sem juros no cartão"
    }
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            EM DÚVIDA QUANTO <span className="text-primary">COMPRAR PELA INTERNET?</span>
          </h3>
          <p className="text-muted-foreground">
            Veja por que você pode confiar na Nature's Prime com total segurança
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{badge.title}</p>
                  <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;