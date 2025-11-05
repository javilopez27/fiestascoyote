import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const CORDON = "https://i.imgur.com/JNH46k3.jpeg"; // <- reemplaza

// SVG Icon Components
const IconAnimacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.624L16.5 21.75l-.398-1.126a3.375 3.375 0 00-2.455-2.456L12.75 18l1.126-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.126a3.375 3.375 0 002.456 2.456L20.25 18l-1.126.398a3.375 3.375 0 00-2.456 2.456z" /></svg>
);
const IconTalleres = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.622-3.385m-5.043-.025a15.998 15.998 0 01-3.388-1.621m-4.904 9.098a15.998 15.998 0 01-1.622-3.385m5.043.025a15.998 15.998 0 00-3.388-1.622m5.043.025a15.998 15.998 0 01-1.622 3.385m3.388-1.62a15.998 15.998 0 011.622 3.385m-5.043-.025a15.998 15.998 0 003.388 1.622m-5.043.025a15.998 15.998 0 013.388 1.621m0 0a2.25 2.25 0 003.771 1.649 2.25 2.25 0 00-1.649-3.771M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
);
const IconTartas = () => (
 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A3.75 3.75 0 006 8.625v11.25m8.25-15.188a3.75 3.75 0 016 0v11.25m-12-8.25h12" /></svg>
);
const IconDecoracion = () => (
 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688 0-1.25-.562-1.25-1.25s.562-1.25 1.25-1.25h3.32c.688 0 1.25.562 1.25 1.25s-.562 1.25-1.25 1.25h-3.32zM12 4.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5z" transform="rotate(-45 12 12)" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.364 4.636l1.06 1.06M20.485 9.757l-1.06 1.06M4.636 15.364l1.06 1.06M9.757 20.485l-1.06 1.06" /></svg>
);
const IconMerienda = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 19.5v-8.25a1.5 1.5 0 01.36-1.003L7.5 4.5l1.64 1.64m6.36 0L20.64 10.247a1.5 1.5 0 01.36 1.003M7.5 4.5L6.36 3.36a1.5 1.5 0 00-2.12 0L3.36 4.24a1.5 1.5 0 000 2.12l1.14 1.14" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5L12 3 7.5 7.5" /></svg>
);
const IconPinatas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
);
const IconInvitacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.868-9.455L12 5.25 2.25 9" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 9l4.5 2.406a2.25 2.25 0 002.5 0l4.5-2.406m5.633-3.188L12 2.25 2.25 6.367m19.5.001L12 2.25 2.25 6.367m19.5 3.536L12 14.25 2.25 9.906" /></svg>
);
const IconPiscinaBolas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="3.5" /><circle cx="6.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="6.5" r="2.5" /><circle cx="6.5" cy="6.5" r="2.5" /></svg>
);
const IconMago = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5M4.5 12.75v3.75a3 3 0 003 3h6a3 3 0 003-3v-3.75M5.25 9.75h13.5" /></svg>
);
const IconFotografo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008v-.008z" /></svg>
);

const servicesList = [
  { icon: <IconAnimacion />, title: 'Animación', description: 'Juegos, música y diversión sin fin para todas las edades.' },
  {
    icon: <IconTalleres />,
    title: 'Talleres Creativos',
    description: 'Pintacamisetas, totebags, tarta de chuches, y más.',
    details: [
      { img: 'https://i.imgur.com/RCK35zn.png', title: 'Personaliza tu objeto',  price: '5€', unit: '/ niño' },
      { img: 'https://i.imgur.com/iWUpFLB.jpeg', title: 'Personaliza tu totebag', price: '6€',     unit: '/ niño' },
      { img: 'https://i.imgur.com/qAfC2CW.jpeg', title: 'Pinta Camisetas',        price: '6€',     unit: '/ niño' },
      { img: 'https://i.imgur.com/PW0QpbZ.jpeg', title: 'Taller tarta de chuches', price: '8€',    unit: '/ niño' },
    ]
  },
  {
    icon: <IconTartas />,
    title: 'Tartas Personalizadas',
    description: 'Deliciosas y temáticas para el momento más dulce.',
    details: [
      { img: 'https://i.imgur.com/5ZuDbsZ.jpeg', title: 'Tarta de chuches',                      price: '50€' },
      { img: 'https://i.imgur.com/YFn3dNS.jpeg', title: 'Tarta de chuches personalizable',       price: 'desde 50€' },
      { img: 'https://i.imgur.com/fr8BXCT.jpeg', title: 'Tarta 3 chocolates', badge: CORDON,     price: '50€' },
      { img: 'https://i.imgur.com/rkQmhPU.png',  title: 'Tarta de limón y merengue', badge: CORDON, price: '50€' },
      { img: 'https://i.imgur.com/ODmgJOM.jpeg', title: 'Mus choco y lacasitas', badge: CORDON,  price: '54€' },
      { img: 'https://i.imgur.com/LZxDb9x.jpeg', title: 'Queso con frambuesa',  badge: CORDON,   price: '50€' },
      { img: 'https://i.imgur.com/SPpBNSo.jpeg', title: 'Zanahoria',            badge: CORDON,   price: '50€' },
      { img: 'https://i.imgur.com/O4q2O5R.jpeg', title: 'Manzana',                               price: '50€' },
      { img: 'https://i.imgur.com/1oAIvsK.jpeg', title: 'Banoffe',            badge: CORDON,     price: '50€' },
    ]
  },
  { icon: <IconDecoracion />, title: 'Decoración Mágica', description: 'Transformamos cualquier espacio en un mundo de fantasía.' },
  { 
    icon: <IconMerienda />, 
    title: 'Mesas de Merienda', 
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
