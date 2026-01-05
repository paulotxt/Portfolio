import React, { useEffect, useRef, useState } from 'react';
import getProjectImages from '@/lib/projectImages';

type ProjectGalleryProps = {
  slug: string;
  className?: string;
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ slug, className }) => {
  const images = getProjectImages(slug);

  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  // Debug logs to help identify issues (open browser console)
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.info(`[ProjectGallery] slug=${slug} imagesCount=${images.length}`);
  }

  if (!images || images.length === 0) {
    return (
      <div className={className}>
        <p className="text-muted-foreground">Nenhuma imagem disponível para este projeto.</p>
        <p className="text-sm text-muted-foreground mt-2">Dicas: verifique o nome da pasta em <code>src/assets/projects/{`<slug>`}</code> e extensões (.jpg/.JPG)</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-6">
        <button
          onClick={() => { setCurrent(selected); openModal(selected); }}
          className="w-full block overflow-hidden rounded-md focus:outline-none"
          aria-label={`Abrir imagem ${selected + 1} em visualização`
          }
        >
          <img
            src={images[selected]}
            alt={`Imagem principal ${selected + 1}`}
            className="w-full aspect-[16/9] object-cover rounded-md"
            loading="lazy"
          />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => { setSelected(idx); setCurrent(idx); openModal(idx); }}
            className={`overflow-hidden rounded-md focus:outline-none ${idx === selected ? 'ring-2 ring-primary' : ''}`}
            aria-label={`Abrir miniatura ${idx + 1} em visualização`}
          >
            <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-[96vw] max-h-[96vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-20 text-white bg-black/40 rounded-full p-2"
              aria-label="Fechar visualização"
            >
              ✕
            </button>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 rounded-full p-2"
              aria-label="Imagem anterior"
            >
              ‹
            </button>

            <div className="flex items-center justify-center">
              <img
                src={images[current]}
                alt={`Imagem ${current + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-md"
              />
            </div>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 rounded-full p-2"
              aria-label="Próxima imagem"
            >
              ›
            </button>

            <button
              onClick={toggleFullscreen}
              className="absolute bottom-4 right-4 z-20 text-white bg-black/40 rounded-md px-3 py-2"
              aria-label="Alternar tela cheia"
            >
              Fullscreen
            </button>
          </div>
        </div>
      )}
    </div>
  );

  function openModal(idx: number) {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setCurrent(idx);
    setIsOpen(true);
    // small timeout to ensure element exists before requesting fullscreen
    setTimeout(() => {
      try { modalRef.current?.focus(); } catch {}
    }, 0);
  }

  function closeModal() {
    setIsOpen(false);
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch {}
    // restore focus
    setTimeout(() => lastFocused.current?.focus(), 0);
  }

  function prev() {
    setCurrent((c) => {
      const nextIdx = (c - 1 + images.length) % images.length;
      setSelected(nextIdx);
      return nextIdx;
    });
  }

  function next() {
    setCurrent((c) => {
      const nextIdx = (c + 1) % images.length;
      setSelected(nextIdx);
      return nextIdx;
    });
  }

  function handleOverlayClick(e: React.MouseEvent) {
    // click outside image closes modal
    closeModal();
  }

  async function toggleFullscreen() {
    if (!modalRef.current) return;
    try {
      if (!document.fullscreenElement) {
        // @ts-ignore
        await modalRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {}
  }

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
};

export default ProjectGallery;
