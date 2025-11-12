import React, { useState, useEffect, useCallback } from 'react';

const images: string[] = [
  "https://i.imgur.com/9PCIP53.jpeg",
  "https://i.imgur.com/MtKuYjo.jpeg",
  "https://i.imgur.com/FnyBfpP.jpeg",
  "https://i.imgur.com/ACpRsPN.jpeg",
  "https://i.imgur.com/Zlltyv3.jpeg",
  "https://i.imgur.com/MGoQU14.jpeg",
  "https://i.imgur.com/GI7ZcOL.jpeg",
  "https://i.imgur.com/pxfnHus.jpeg",
  "https://i.imgur.com/BcYMQkC.jpeg",
  "https://i.imgur.com/dQ2KLpt.jpeg",
  "https://i.imgur.com/gT9OyJm.jpeg",
  "https://i.imgur.com/390c0ya.jpeg",
  "https://i.imgur.com/vGrpjq0.jpeg",
  "https://i.imgur.com/ilSTzfG.jpeg",
  "https://i.imgur.com/Kmd9qY8.jpeg",
  "https://i.imgur.com/yAguvWZ.jpeg",
];

const Gallery: React.FC = () => {
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpenSrc(null);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onKey]);

  useEffect(() => {
    if (openSrc) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [openSrc]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Galería de Momentos</h2>
          <p className="text-lg text-gray-600 mt-2">Un vistazo a la magia que creamos.</p>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Fiesta infantil ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => setOpenSrc(src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox: clic en cualquier sitio fuera de la imagen -> cerrar */}
      {openSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/85 cursor-zoom-out"
          onClick={() => setOpenSrc(null)}
        >
          <div className="w-screen h-screen flex items-center justify-center">
            <img
              src={openSrc}
              alt="Imagen ampliada"
              className="max-w-screen max-h-screen object-contain rounded-xl shadow-2xl cursor-auto"
              onClick={(e) => e.stopPropagation()}   // no cierres al clicar la imagen
            />
            <button
              onClick={(e) => { e.stopPropagation(); setOpenSrc(null); }}
              className="absolute top-3 right-3 rounded-full bg-black/70 text-white px-3 py-1 text-sm hover:bg-black/90"
              aria-label="Cerrar"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
