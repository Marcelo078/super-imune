import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ana Paula",
    text: "O Super Imune da Nature's Prime é excelente! Desde que comecei a tomar, senti menos cansaço e minha saúde melhorou significativamente. Me sinto muito mais protegida contra gripes e resfriados. Super recomendo!",
    rating: 5
  },
  {
    name: "Carlos Moreira",
    text: "O Super Imune tem sido essencial para minha saúde. Sinto que meu sistema imunológico está muito mais forte. Um suplemento que realmente faz diferença! Aumentou minha resistência e reduziu minhas enfermidades.",
    rating: 5
  },
  {
    name: "Renata Santos",
    text: "Com o Super Imune, me sinto mais resiliente e enérgica. Excelente produto da Nature's Prime! A qualidade dos ingredientes é notável e os resultados aparecem rapidamente.",
    rating: 5
  },
  {
    name: "João Almeida",
    text: "Tomar o Super Imune foi uma das melhores decisões que tomei para minha saúde. Aumentou minha imunidade e me sinto fortalecido. Produto de alta qualidade com resultados visíveis!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem já experimentou, <span className="text-primary">recomenda!</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja os resultados de nossos clientes satisfeitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;