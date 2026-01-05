import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const services = [
  {
    title: "Cobertura por Hora",
    price: "R$ 150",
    unit: "por hora",
    description: "Cobertura fotográfica profissional do seu evento com entrega digital tratada.",
    features: [
      "Registro profissional do evento",
      "Tratamento de cor e luz",
      "Entrega por link digital",
      "Fotos em alta resolução",
    ],
  },
  {
    title: "Cobertura Completa",
    price: "Sob consulta",
    unit: "",
    description: "Para eventos com mais de 3 horas, valores progressivos conforme duração.",
    features: [
      "Acompanhamento completo",
      "Registro de todos os momentos",
      "Tratamento profissional",
      "Entrega digital prioritária",
      "Seleção das melhores fotos",
    ],
    highlighted: true,
  },
  {
    title: "Desconto Transporte",
    price: "-R$ 50",
    unit: "de desconto",
    description: "Caso o cliente ofereça transporte para o local do evento.",
    features: [
      "Desconto aplicável a qualquer pacote",
      "Transporte ida e volta",
      "Válido para São Luís e região",
    ],
  },
];

const eventTypes = [
  {
    name: "Formaturas",
    description: "Acompanhamento contínuo do formando, registrando cada etapa e momento importante.",
  },
  {
    name: "Palestras e Eventos Institucionais",
    description: "Registro completo com foco no apresentador e na interação com o público.",
  },
  {
    name: "Apresentações de Teatro",
    description: "Respeito à narrativa da cena, iluminação de palco e expressividade dos atores.",
  },
  {
    name: "Coral Natalino",
    description: "Momentos de alegria e emoção da apresentação, valorizando o clima festivo.",
  },
  {
    name: "Desfile Afropunk",
    description: "Valorização da cultura afro com cobertura geral e retratos durante o evento.",
  },
  {
    name: "Desfile Natalino",
    description: "Registros que exploram cores, movimento e interação com o público.",
  },
  {
    name: "Festas e Eventos Sociais",
    description: "Registro espontâneo priorizando interações e atmosfera do evento.",
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <span className="text-primary text-sm tracking-editorial uppercase mb-4 block animate-fade-in">
            Serviços & Valores
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Investimento
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Valores calculados com base no tempo de cobertura. Ajustes conforme 
            tipo, duração e complexidade do evento.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`p-8 border transition-all duration-300 ${
                  service.highlighted
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {service.highlighted && (
                  <span className="text-primary text-xs tracking-editorial uppercase mb-4 block">
                    Mais Popular
                  </span>
                )}
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {service.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-4xl text-primary">
                    {service.price}
                  </span>
                  {service.unit && (
                    <span className="text-muted-foreground text-sm">
                      {service.unit}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contato">
                  <Button
                    variant={service.highlighted ? "cta" : "editorial"}
                    className="w-full"
                  >
                    Solicitar Orçamento
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
              Especialidades
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Tipos de Eventos
            </h2>
            <p className="text-muted-foreground">
              Experiência em diversos tipos de eventos, cada um com abordagem 
              fotográfica específica para capturar a essência do momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {eventTypes.map((event, index) => (
              <div
                key={event.name}
                className="p-6 border border-border hover:border-primary/30 transition-colors group"
              >
                <span className="text-primary text-xs mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
              Entrega
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Como funciona a entrega
            </h2>
            <p className="text-muted-foreground mb-8">
              As fotografias passam por tratamento profissional de cor e luz, 
              mantendo fidelidade ao evento e realçando a emoção das imagens. 
              A entrega é feita por link digital, em prazo acordado previamente.
            </p>
            <Link to="/contato">
              <Button variant="hero" size="lg">
                Fale Comigo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
