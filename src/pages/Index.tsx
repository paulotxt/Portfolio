import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-graduation.jpg";
import projectTheater from "@/assets/project-theater.jpg";
import projectAfropunk from "@/assets/project-afropunk.jpg";
import projectCoral from "@/assets/project-coral.jpg";
import projectPalestra from "@/assets/project-palestra.jpg";
import projectDesfile from "@/assets/project-desfile.jpg";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";

const heroSlides = [
  { image: heroImage, title: "Formaturas" },
  { image: projectTheater, title: "Teatro" },
  { image: projectAfropunk, title: "Afropunk" },
  { image: projectCoral, title: "Coral Natalino" },
  { image: projectDesfile, title: "Desfile Natalino" },
];

const projects = [
  {
    title: "Formaturas",
    category: "Eventos Sociais",
    image: heroImage,
    slug: "formaturas",
  },
  {
    title: "Teatro",
    category: "Apresentações",
    image: projectTheater,
    slug: "teatro",
  },
  {
    title: "Desfile Afropunk",
    category: "Cultural",
    image: projectAfropunk,
    slug: "afropunk",
  },
  {
    title: "Coral Natalino",
    category: "Eventos Festivos",
    image: projectCoral,
    slug: "coral-natalino",
  },
  {
    title: "Palestras",
    category: "Institucional",
    image: projectPalestra,
    slug: "palestras",
  },
  {
    title: "Desfile Natalino",
    category: "Eventos Culturais",
    image: projectDesfile,
    slug: "desfile-natalino",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all duration-300 backdrop-blur-sm bg-background/10"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all duration-300 backdrop-blur-sm bg-background/10"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 800);
                }
              }}
              className={`h-1 transition-all duration-500 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-4 bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 container mx-auto">
          <div className="max-w-2xl animate-slide-up">
            <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
              Fotógrafo de Eventos
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[0.9]">
              Momentos que
              <br />
              <span className="text-primary">permanecem</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-8 font-body">
              Registrando a emoção, intensidade e cores vibrantes dos seus eventos 
              mais importantes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projetos">
                <Button variant="hero" size="lg">
                  Ver Projetos
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="editorial" size="lg">
                  Entrar em Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in z-20" style={{ animationDelay: '1s' }}>
          <span className="text-xs tracking-editorial uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* About Section (full) */}
      <AboutSection />

      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
                Portfólio
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Projetos Recentes
              </h2>
            </div>
            <Link to="/projetos">
              <Button variant="editorial">
                Ver Todos <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                image={project.image}
                slug={project.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={projectTheater}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay-dark" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
            Vamos Trabalhar Juntos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 max-w-3xl mx-auto">
            Tem um evento especial?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Entre em contato para conversarmos sobre como posso registrar os 
            momentos mais importantes do seu evento.
          </p>
          <Link to="/contato">
            <Button variant="cta" size="xl">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
              Serviços
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Tipos de Eventos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Formaturas",
                description: "Acompanhamento contínuo do formando, registrando cada etapa e momento importante da cerimônia.",
              },
              {
                title: "Palestras & Eventos Institucionais",
                description: "Registro completo do evento, com foco no apresentador, na interação com o público e na ambientação.",
              },
              {
                title: "Apresentações de Teatro",
                description: "Registro respeitando a narrativa da cena, a iluminação de palco e a expressividade dos atores.",
              },
              {
                title: "Coral Natalino",
                description: "Fotografia voltada para os momentos de maior alegria e emoção da apresentação.",
              },
              {
                title: "Desfiles Culturais",
                description: "Cobertura de desfiles com registros que exploram cores, movimento e interação com o público.",
              },
              {
                title: "Festas & Eventos Sociais",
                description: "Registro espontâneo dos principais momentos, priorizando interações e expressões.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="p-8 border border-border hover:border-primary/30 transition-colors duration-300 group"
              >
                <span className="text-primary text-xs tracking-editorial uppercase mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button variant="editorial">
                Ver Valores e Serviços <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
