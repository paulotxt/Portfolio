import { useState } from "react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/hero-graduation.jpg";
import projectTheater from "@/assets/project-theater.jpg";
import projectAfropunk from "@/assets/project-afropunk.jpg";
import projectCoral from "@/assets/project-coral.jpg";
import projectPalestra from "@/assets/project-palestra.jpg";
import projectDesfile from "@/assets/project-desfile.jpg";

const allProjects = [
  {
    title: "Formaturas 2024",
    category: "Eventos Sociais",
    image: heroImage,
    slug: "formaturas",
  },
  {
    title: "Apresentações de Teatro",
    category: "Arte & Cultura",
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
    title: "Palestras Institucionais",
    category: "Corporativo",
    image: projectPalestra,
    slug: "palestras",
  },
  {
    title: "Desfile Natalino Ipicalhau",
    category: "Eventos Culturais",
    image: projectDesfile,
    slug: "desfile-natalino",
  },
];

const categories = ["Todos", "Eventos Sociais", "Arte & Cultura", "Cultural", "Eventos Festivos", "Corporativo", "Eventos Culturais"];

const Projetos = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <span className="text-primary text-sm tracking-editorial uppercase mb-4 block animate-fade-in">
            Portfólio
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Projetos
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Uma seleção dos meus trabalhos mais recentes em fotografia de eventos, 
            cada um contando uma história única.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-editorial uppercase px-4 py-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projetos;
