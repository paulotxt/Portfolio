import Layout from "@/components/Layout";
import { Phone, Mail, Instagram } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

const Contato = () => {
  return (
    <Layout>
      <section className="pt-24 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          
          <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
            Contato
          </span>

          <h1 className="font-display text-4xl md:text-5xl mb-6">
            Vamos conversar
          </h1>

          <p className="text-muted-foreground text-base md:text-lg mb-12">
            Entre em contato para orçamentos, parcerias ou dúvidas.
          </p>

          <div className="space-y-6">
            
            <a
              href="https://wa.me/559888839166"
              className="flex items-center justify-center gap-3 border border-border rounded-lg py-4 hover:bg-muted transition"
            >
              <Phone size={20} />
              <span className="text-base">+55 98 8883-9166</span>
            </a>

            <a
              href="mailto:pauloandreesc@gmail.com"
              className="flex items-center justify-center gap-3 border border-border rounded-lg py-4 hover:bg-muted transition"
            >
              <Mail size={20} />
              <span className="text-base">pauloandreesc@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/_parecer.paulo"
              target="_blank"
              className="flex items-center justify-center gap-3 border border-border rounded-lg py-4 hover:bg-muted transition"
            >
              <Instagram size={20} />
              <span className="text-base">@_parecer.paulo</span>
            </a>

          </div>
        </div>
      </section>

      {/* Galeria de imagens responsiva */}
      <section className="pt-12 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-2xl mb-6">Galeria</h2>

          {/* Carrega imagens estáticas da pasta src/assets/projects via Vite */}
          {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
          }
          {/* @ts-ignore */}
          {(() => {
            // Mostrar uma imagem por projeto (pasta) — prioriza uma miniatura representativa
            const GALLERY_LIMIT = 12; // quantidade máxima de projetos mostrados
            const modules = import.meta.glob('/src/assets/projects/**/*', { eager: true, as: 'url' }) as Record<string, string>;
            const imageRE = /\.(jpe?g|png|webp|svg)$/i;

            // Agrupa urls por pasta de projeto
            const byProject = new Map<string, string[]>();

            Object.entries(modules).forEach(([rawPath, url]) => {
              const path = rawPath.replace(/^\.\//, '').replace(/^\//, '');
              if (!imageRE.test(path)) return;
              const m = path.match(/src\/assets\/projects\/([^\/]+)\//i);
              const folder = m ? m[1] : 'others';
              if (!byProject.has(folder)) byProject.set(folder, []);
              byProject.get(folder)!.push(url);
            });

            // Para cada projeto pegue a primeira imagem ordenada por nome de pasta
            const projects = Array.from(byProject.keys()).sort();
            const representative: string[] = projects.map((p) => byProject.get(p)![0]).filter(Boolean);

            // Limita ao número definido
            const limited = representative.slice(0, GALLERY_LIMIT);

            return <ImageGallery images={limited} />;
          })()}
        </div> 
        
      </section>
    </Layout>
  );
};

export default Contato;
