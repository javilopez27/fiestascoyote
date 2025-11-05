
import React from 'react';

const images: string[] = [
  "https://i.imgur.com/9PCIP53.jpeg",
  "https://i.imgur.com/MtKuYjo.jpeg",
  "https://i.imgur.com/FnyBfpP.jpeg",
  "https://i.imgur.com/ACpRsPN.jpeg",
  "https://i.imgur.com/Zlltyv3.jpeg",
  "https://i.imgur.com/MGoQU14.jpeg",
  "https://i.imgur.com/GI7ZcOL.jpeg",
  "https://i.imgur.com/pxfnHus.jpeg",
];

const Gallery: React.FC = () => {
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
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
