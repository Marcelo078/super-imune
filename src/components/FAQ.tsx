import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "O QUE É SUPER IMUNE?",
    answer: "Super Imune é um suplemento alimentar desenvolvido pela Nature's Prime, formulado para fortalecer o sistema imunológico e melhorar o bem-estar geral. Sua fórmula equilibrada combina Vitamina C, Lisina, Própolis, Selênio, Zinco, Vitamina D e B2 em cápsulas de 400mg. Cada vitamina e mineral foi cuidadosamente selecionado para atuar em sinergia, oferecendo suporte nutricional completo para suas defesas naturais e vitalidade diária."
  },
  {
    question: "COMO DEVO UTILIZAR SUPER IMUNE?",
    answer: "Recomenda-se tomar 2 cápsulas por dia, preferencialmente junto às refeições principais. As cápsulas devem ser ingeridas com água para melhor absorção dos nutrientes. Para resultados ótimos, mantenha o uso contínuo conforme orientação. O Super Imune foi desenvolvido para ser facilmente incorporado à sua rotina diária, proporcionando praticidade sem comprometer a eficácia do suplemento."
  },
  {
    question: "QUEM PODE USAR SUPER IMUNE? EXISTE CONTRAINDICAÇÃO?",
    answer: "O Super Imune é indicado para adultos que buscam fortalecer sua imunidade e melhorar a saúde geral. Gestantes, lactantes, crianças e pessoas com condições médicas específicas devem consultar um médico ou nutricionista antes de iniciar o uso. Se você estiver tomando medicamentos regularmente ou tiver alguma alergia aos componentes da fórmula, busque orientação profissional. O produto é contraindicado para pessoas com hipersensibilidade a qualquer um dos ingredientes."
  },
  {
    question: "ÉENTE É SEGURO?",
    answer: "Sim, o Super Imune é totalmente seguro quando usado conforme as instruções. É produzido pela Nature's Prime seguindo rigorosos padrões de qualidade e boas práticas de fabricação. Todos os ingredientes são cuidadosamente selecionados e testados. O produto passa por controle de qualidade em todas as etapas de produção, garantindo pureza, potência e segurança. Além disso, oferecemos garantia de 30 dias, demonstrando nossa confiança total na qualidade do Super Imune."
  },
  {
    question: "OS BENEFÍCIOS DO SUPER IMUNE SÃO COMPROVADOS CIENTIFICAMENTE?",
    answer: "Sim! Cada ingrediente do Super Imune possui respaldo científico comprovado. A Vitamina C é reconhecida por fortalecer o sistema imunológico, a Lisina auxilia na absorção de nutrientes, o Própolis tem propriedades antimicrobianas naturais, o Selênio e Zinco são essenciais para a função imunológica, e as Vitaminas D e B2 contribuem para diversos processos metabólicos. Diversos estudos clínicos validam a eficácia desses componentes na melhora da imunidade e bem-estar geral."
  },
  {
    question: "TIPOS IMUNE É VENDIDO NA FARMÁCIA OU MERCADO LIVRE?",
    answer: "Não. O Super Imune é vendido exclusivamente através do site oficial da Nature's Prime para garantir a autenticidade do produto e oferecer o melhor preço direto ao consumidor. Comprar pelo site oficial garante que você receba o produto original, com garantia de qualidade, prazo de validade adequado e a garantia de satisfação de 30 dias. Evite produtos falsificados ou vencidos comprando apenas pelo canal oficial."
  },
  {
    question: "QUAL O PRAZO DE ENTREGA DO SUPER IMUNE?",
    answer: "O prazo de entrega varia conforme sua região. Após a confirmação do pagamento, o produto é enviado em até 2 dias úteis. O tempo de entrega pelos Correios é geralmente de 7 a 15 dias úteis para todo o Brasil, podendo variar em regiões mais distantes. Você receberá um código de rastreamento por e-mail para acompanhar seu pedido em tempo real. Trabalhamos com transportadoras confiáveis para garantir que seu Super Imune chegue com segurança e rapidez."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg"
            asChild
          >
            <a href="https://app.monetizze.com.br/r/AKS25517419">
              SIM! EU QUERO FORTALECER MINHA IMUNIDADE
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;