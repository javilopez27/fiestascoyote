
import React from 'react';

const Hero: React.FC = () => {

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Offset for the fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://i.imgur.com/RoEGFJD.jpeg')` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Eventos infantiles que se recuerdan siempre
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Temáticas personalizadas, animación profesional y juegos para todas las edades.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#services" onClick={handleScrollClick} className="bg-[#ff6b35] text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
            Ver Servicios
          </a>
          <a href="#contact" onClick={handleScrollClick} className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Pedir Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;