import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  index?: number;
}

const ProjectCard = ({ title, category, image, slug, index = 0 }: ProjectCardProps) => {
  return (
    <Link
      to={`/projetos/${slug}`}
      className="group block image-hover relative overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/5] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-xs tracking-editorial uppercase text-primary mb-2 block">
              {category}
            </span>
            <h3 className="font-display text-xl text-foreground text-shadow">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
