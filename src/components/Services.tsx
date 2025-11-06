import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const CORDON = "https://i.imgur.com/JNH46k3.jpeg"; // <- reemplaza

// SVG Icon Components
const IconAnimacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconTalleres = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 5.25a3 3 0 013 3v10.5a3 3 0 01-3 3h-4.5a3 3 0 01-3-3V8.25a3 3 0 013-3h4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v.75M15 3v.75M12 21.75V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75H18.75" />
  </svg>
);
const IconTartas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.5v3.75c0 1.027.845 1.99 1.976 2.084 1.327.11 2.669.166 4.024.166m0 0c1.355 0 2.697-.056 4.024-.166C17.155 16.24 18 15.277 18 14.25v-3.75c0-1.027-.845-1.99-1.976-2.084A48.421 48.421 0 0012 8.25zm0 0V6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 18.75c.383.567.801 1.082 1.272 1.536M14.25 18.75c-.383.567-.801 1.082-1.272 1.536" />
  </svg>
);
const IconDecoracion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3 10.5v.75a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 11.25v-.75M4.5 18V9.75" />
  </svg>
);
const IconMerienda = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 0h10.5c.621 0 1.125-.504 1.125-1.125v-7.5c0-.621-.504-1.125-1.125-1.125H7.125c-.621 0-1.125.504-1.125 1.125v7.5c0 .621.504 1.125 1.125 1.125z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75V4.875c0-.621-.504-1.125-1.125-1.125h-6.75c-.621 0-1.125.504-1.125 1.125v4.875" />
  </svg>
);
const IconPinatas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013-3.832A8.983 8.983 0 0115.362 5.214z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75c-2.625 0-4.75-2.09-4.75-4.688 0-2.206 1.343-3.312 3-4.687a1.5 1.5 0 012.5 0c1.657 1.375 3 2.48 3 4.687C16.75 16.66 14.625 18.75 12 18.75z" />
  </svg>
);
const IconInvitacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const IconPiscinaBolas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="3" rx="1" />
  </svg>
);
const IconMago = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);
const IconFotografo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const servicesList = [
  { icon: <IconAnimacion />, title: 'Animación', description: 'Juegos, música y diversión sin fin para todas las edades.' },
  {
    icon: <IconTalleres />,
    title: 'Talleres Creativos',
    description: 'Pintacamisetas, totebags, tarta de chuches, y más.',
    details: [
      { img: 'https://i.imgur.com/RCK35zn.png', title: 'Personaliza tu objeto' },
      { img: 'https://i.imgur.com/iWUpFLB.jpeg', title: 'Personaliza tu totebag' },
      { img: 'https://i.imgur.com/qAfC2CW.jpeg', title: 'Pinta Camisetas' },
      { img: 'https://i.imgur.com/PW0QpbZ.jpeg', title: 'Taller tarta de chuches' },
    ]
  },
  {
    icon: <IconTartas />,
    title: 'Tartas Personalizadas',
    description: 'Deliciosas y temáticas para el momento más dulce.',
    details: [
      { img: 'https://i.imgur.com/5ZuDbsZ.jpeg', title: 'Tarta de chuches' },
      { img: 'https://i.imgur.com/YFn3dNS.jpeg', title: 'Tarta de chuches personalizable' },
      { img: 'https://i.imgur.com/fr8BXCT.jpeg', title: 'Tarta 3 chocolates', badge: CORDON },
      { img: 'https://i.imgur.com/rkQmhPU.png',  title: 'Tarta de limón y merengue', badge: CORDON },
      { img: 'https://i.imgur.com/ODmgJOM.jpeg', title: 'Mousse choco y lacasitas', badge: CORDON },
      { img: 'https://i.imgur.com/LZxDb9x.jpeg', title: 'Queso con frambuesa',  badge: CORDON },
      { img: 'https://i.imgur.com/SPpBNSo.jpeg', title: 'Zanahoria',            badge: CORDON },
      { img: 'https://i.imgur.com/O4q2O5R.jpeg', title: 'Manzana' },
      { img: 'https://i.imgur.com/1oAIvsK.jpeg', title: 'Banoffe',            badge: CORDON },
    ]
  },
  { icon: <IconDecoracion />, title: 'Decoración Personalizada', description: 'Transformamos cualquier espacio en un mundo de fantasía.' },
  { 
    icon: <IconMerienda />, 
    title: 'Candy bar', 
    description: 'Snacks y dulces para reponer energías y disfrutar.'
  },
  { icon: <IconPinatas />, title: 'Piñatas', description: 'El momento más esperado lleno de sorpresas y alegría.' },
  { icon: <IconInvitacion />, title: 'Diseño de Invitación', description: 'Invitaciones únicas para empezar a soñar con la fiesta.' },
  { icon: <IconPiscinaBolas />, title: 'Piscina de Bolas', description: 'Sumérgete en un mar de diversión y color.' },
  { icon: <IconMago />, title: 'Mago Profesional', description: 'Un espectáculo de magia que dejará a todos boquiabiertos.' },
  { icon: <IconFotografo />, title: 'Fotógrafo de Eventos', description: 'Capturamos los mejores momentos para un recuerdo imborrable.' },
];

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: { img: string; title: string; description?: string; badge?: string }[]; // <- badge opcional
}

const ServiceCard: React.FC<{ service: Service; onClick: () => void }> = ({ service, onClick }) => (
  <div 
    className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
    onClick={onClick}
    style={{ cursor: service.details ? 'pointer' : 'default' }}
    role="button"
    aria-haspopup={!!service.details}
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
  >
    <div className="mb-4 flex justify-center items-center h-16">{service.icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
    {service.details && <span className="text-sm text-[#ff6b35] font-semibold mt-2 block">Ver más...</span>}
  </div>
);

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleCardClick = (service: Service) => {
    if (service.details) {
      setSelectedService(service);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-[#FDF8F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 mt-2">Todo lo que necesitas para una fiesta inolvidable.</p>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} onClick={() => handleCardClick(service)} />
          ))}
        </div>
      </div>
      {selectedService && selectedService.details && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </section>
  );
};

export default Services;