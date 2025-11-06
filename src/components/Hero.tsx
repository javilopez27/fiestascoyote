
import React, { useState, useEffect } from 'react';

const sliderImages = [
  'https://i.imgur.com/RoEGFJD.jpeg',
  'https://i.imgur.com/9PCIP53.jpeg',
  'https://i.imgur.com/MtKuYjo.jpeg',
  'https://i.imgur.com/FnyBfpP.jpeg',
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);


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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
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
            Contáctanos
          </a>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
