import React from 'react';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-[#FDF8F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Nuestra Comunidad</h2>
          <p className="text-lg text-gray-600 mt-2">Creando sonrisas, evento a evento.</p>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Más de <span className="font-bold text-[#ff6b35]">100 familias</span> han confiado en nosotros para sus eventos más memorables.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
