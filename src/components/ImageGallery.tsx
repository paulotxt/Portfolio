import React, { useEffect, useRef, useState } from 'react';

type Props = {
  images: string[];
  className?: string;
};

const ImageGallery: React.FC<Props> = ({ images, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index]);

  const open = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch {}
  };

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        // @ts-ignore
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {}
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => open(i)}
            className="block w-full overflow-hidden rounded-lg bg-muted focus:outline-none"
            aria-label={`Abrir imagem ${i + 1}`}
          >
            <img
              src={src}
              alt={`Imagem ${i + 1}`}
              className="w-full h-40 object-cover hover:scale-105 transition-transform"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          ref={containerRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2"
            aria-label="Fechar"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-4 text-white bg-black/40 rounded-full p-2"
            aria-label="Imagem anterior"
          >
            ‹
          </button>

          <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={images[index]}
              alt={`Imagem ${index + 1}`}
              className="max-w-full max-h-full object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          <button
            onClick={next}
            className="absolute right-4 text-white bg-black/40 rounded-full p-2"
            aria-label="Próxima imagem"
          >
            ›
          </button>

          <button
            onClick={toggleFullscreen}
            className="absolute bottom-6 right-6 text-white bg-black/40 rounded-md px-3 py-2"
            aria-label="Alternar tela cheia"
          >
            Fullscreen
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
