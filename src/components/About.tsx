import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white" lang="es">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Quiénes Somos</h2>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://i.imgur.com/aseXgdK.jpeg"
              alt="Equipo de Fiestas Coyote"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Texto justificado + guiones automáticos + mejor legibilidad */}
          <div className="md:w-1/2 text-lg text-gray-600 space-y-4 text-justify hyphens-auto leading-relaxed">
            <p>
              En Fiestas Coyote, sabemos que los recuerdos más preciados se forman en la infancia, rodeados de risas, juegos y amigos. Por ello hemos querido reflejar en nuestro nombre “Fiestas Coyote” los más de 12 años de amistad entre nuestro grupo de amigas.
            </p>
            <p>
              Una amistad que comenzó en nuestros primeros años de colegio y que nos enseñó el valor de las primeras relaciones, los primeros cumpleaños y la magia de la diversión compartida.
            </p>
            <p className="font-semibold text-gray-700">
              Nuestro nombre, por tanto es un homenaje a nuestra propia historia de amistad y a los lazos inquebrantables que formamos durante nuestra niñez. Queremos compartir con vuestros hijos la misma alegría y fomentar el valor de la amistad que hemos tenido la oportunidad de disfrutar a lo largo de los años. 🦊✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
