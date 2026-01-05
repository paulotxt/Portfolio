import React from 'react';
import photographerPortrait from '@/assets/photographer-portrait.jpg';
import projectAfropunk from '@/assets/project-afropunk.jpg';
import projectCoral from '@/assets/project-coral.jpg';
import { Camera, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <>
      {/* Hero Section (About) */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary text-sm tracking-editorial uppercase mb-4 block animate-fade-in">
                Sobre Mim
              </span>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Paulo
              </h1>
              <p className="text-2xl text-muted-foreground mb-8 font-display animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Fotógrafo de Eventos
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <p>
                  Sou fotógrafo com foco em fotografia de eventos, atuando há 2 anos 
                  no registro de momentos sociais, culturais e institucionais. 
                  Atualmente, curso Técnico em Processos Fotográficos, o que fortalece 
                  meu domínio técnico e minha abordagem visual.
                </p>
                <p>
                  Meu trabalho busca registrar o evento de forma fiel, sensível e 
                  impactante, valorizando a emoção, a narrativa e a atmosfera real 
                  de cada momento.
                </p>
                <div className="mt-4">
                  <Link to="/sobre">
                    <Button variant="editorial">Conhecer mais</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 image-hover animate-fade-in">
              <img
                src={photographerPortrait}
                alt="Paulo - Fotógrafo"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border hover:border-primary/30 transition-colors">
              <MapPin className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl text-foreground mb-2">Local de Atuação</h3>
              <p className="text-muted-foreground text-sm">São Luís – Maranhão, com disponibilidade para outros estados conforme a proposta do evento.</p>
            </div>
            <div className="p-8 border border-border hover:border-primary/30 transition-colors">
              <Award className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl text-foreground mb-2">Diferencial</h3>
              <p className="text-muted-foreground text-sm">Entrega de imagens vivas, coloridas e impactantes, que retratam o momento com emoção e intensidade.</p>
            </div>
            <div className="p-8 border border-border hover:border-primary/30 transition-colors">
              <Camera className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl text-foreground mb-2">Equipamentos</h3>
              <p className="text-muted-foreground text-sm">Canon SL2, Canon SL3 e lentes variadas, adequadas a diferentes tipos de evento e condições de luz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">Abordagem</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Minha Filosofia de Trabalho</h2>
            <p className="text-muted-foreground text-lg">Cada tipo de evento exige uma abordagem específica. Meu objetivo é sempre capturar a essência do momento, respeitando a atmosfera única de cada ocasião.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-xl text-foreground">Formaturas</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Acompanhamento contínuo do formando, registrando cada etapa e momento importante da cerimônia, com atenção à emoção e à celebração.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl text-foreground">Palestras</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Registro completo do evento, com foco no apresentador, na interação com o público e na ambientação do espaço.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl text-foreground">Teatro</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Registro respeitando a narrativa da cena, a iluminação de palco e a expressividade dos atores, sem interferir na experiência.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-xl text-foreground">Coral Natalino</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Fotografia voltada para os momentos de maior alegria e emoção, valorizando o clima coletivo e festivo.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl text-foreground">Desfile Afropunk</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Evento cultural com foco na valorização da cultura afro, incluindo cobertura geral e retratos destacando identidade e estética.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl text-foreground">Festas & Eventos Sociais</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Registro espontâneo dos principais momentos, priorizando interações, expressões e a atmosfera do evento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-8 bg-card overflow-hidden">
        <div className="flex gap-4 animate-[slide-in-right_20s_linear_infinite]">
          {[projectAfropunk, projectCoral, photographerPortrait, projectAfropunk, projectCoral].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-80 aspect-[4/3] image-hover">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
