import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";

const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  approach: string;
}> = {
  formaturas: {
    title: "Formaturas",
    category: "Eventos Sociais",
    description: "Registro completo de cerimônias de formatura, capturando a emoção e celebração de cada momento.",
    approach: "Acompanhamento contínuo do formando, registrando cada etapa e momento importante da cerimônia, com atenção à emoção e à celebração.",
  },
  teatro: {
    title: "Apresentações de Teatro",
    category: "Arte & Cultura",
    description: "Fotografia teatral respeitando a narrativa da cena e a expressividade dos atores.",
    approach: "Registro respeitando a narrativa da cena, a iluminação de palco e a expressividade dos atores, sem interferir na experiência do espetáculo.",
  },
  afropunk: {
    title: "Desfile Afropunk",
    category: "Cultural",
    description: "Evento cultural com foco na valorização da cultura afro, destacando identidade, estética e presença.",
    approach: "Cobertura geral do evento e produção de retratos durante o evento, destacando identidade, estética e presença.",
  },
  "coral-natalino": {
    title: "Coral Natalino",
    category: "Eventos Festivos",
    description: "Fotografia voltada para os momentos de maior alegria e emoção das apresentações natalinas.",
    approach: "Fotografia voltada para os momentos de maior alegria e emoção, tanto da apresentação quanto das reações do público, valorizando o clima coletivo e festivo.",
  },
  palestras: {
    title: "Palestras Institucionais",
    category: "Corporativo",
    description: "Registro completo de eventos institucionais, palestras e conferências.",
    approach: "Registro completo do evento, com foco no apresentador, na interação com o público e na ambientação do espaço, buscando transmitir a dinâmica e a proposta do encontro.",
  },
  "desfile-natalino": {
    title: "Desfile Natalino Ipicalhau",
    category: "Eventos Culturais",
    description: "Cobertura anual de um desfile tradicional, com registros que exploram cores, movimento e interação.",
    approach: "Cobertura com registros que exploram cores, movimento e interação com o público, resultando em imagens marcantes e expressivas.",
  },
  "novidades-em-breve": {
    title: "Novidades em breve",
    category: "Em breve",
    description: "Em breve novos projetos e atualizações serão adicionados aqui. Fique ligado.",
    approach: "Conteúdo em atualização; entre em contato para ver novidades.",
  },
};

const ProjetoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-background min-h-screen">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">
              Projeto não encontrado
            </h1>
            <Link to="/projetos">
              <Button variant="editorial">
                <ArrowLeft size={16} /> Voltar aos Projetos
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const projectSlugs = Object.keys(projectsData);
  const currentIndex = projectSlugs.indexOf(slug!);
  const prevProject = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
  const nextProject = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span className="text-sm tracking-editorial uppercase">Voltar</span>
          </Link>
          
          <span className="text-primary text-sm tracking-editorial uppercase mb-4 block animate-fade-in">
            {project.category}
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <ProjectGallery slug={slug!} />
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
              Abordagem
            </span>
            <p className="text-foreground text-xl leading-relaxed font-display">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* (Galeria exibida acima pelo componente) */}

      {/* Navigation */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/projetos/${prevProject}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-xs tracking-editorial uppercase block">Anterior</span>
                  <span className="font-display text-lg text-foreground">
                    {projectsData[prevProject].title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextProject ? (
              <Link
                to={`/projetos/${nextProject}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group text-right"
              >
                <div>
                  <span className="text-xs tracking-editorial uppercase block">Próximo</span>
                  <span className="font-display text-lg text-foreground">
                    {projectsData[nextProject].title}
                  </span>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Gostou deste projeto?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Entre em contato para conversarmos sobre como posso registrar o seu evento.
          </p>
          <Link to="/contato">
            <Button variant="cta" size="lg">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjetoDetalhe;
