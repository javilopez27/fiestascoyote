import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const CORDON = "https://i.imgur.com/JNH46k3.jpeg"; // <- reemplaza

/** ========== NUEVOS ICONOS (color heredado de text-[#ff6b35]) ========== */

// Tarta / Cake
const IconTartas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
  </svg>
);

// Animación (cara feliz)
const IconAnimacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
  </svg>
);

// Decoración (globo)
const IconDecoracion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 8a2 2 0 0 0 -2 -2" />
    <path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" />
    <path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" />
  </svg>
);

// Talleres (tijeras)
const IconTalleres = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
  </svg>
);

// Piñatas (confeti) — icono relleno (usa currentColor)
const IconPinatas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5a1 1 0 0 1 1 -1a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 1 .117 1.993l-.117 .007a1 1 0 1 1 -2 0a1 1 0 0 1 -1 -1m7.53 -1.243a1 1 0 1 1 1.94 .486l-.5 2a1 1 0 1 1 -1.94 -.486zm6.47 1.243a1 1 0 0 1 1 -1a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 1 .117 1.993l-.117 .007a1 1 0 0 1 -2 0a1 1 0 0 1 -1 -1m-8.81 4.293l6.517 6.518a1 1 0 0 1 -.29 1.617l-9.573 4.387a2 2 0 0 1 -2.661 -2.652l4.39 -9.58a1 1 0 0 1 1.616 -.29m7.517 -1a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1 -1.414 -1.414l1 -1a1 1 0 0 1 1.414 0m4.05 3.237a1 1 0 0 1 .486 1.94l-2 .5a1 1 0 0 1 -.486 -1.94zm-2.756 7.47a1 1 0 0 1 1 -1a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 1 .117 1.993l-.117 .007a1 1 0 0 1 -2 0a1 1 0 0 1 -1 -1" />
  </svg>
);

// Invitaciones (mail)
const IconInvitacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {/* <path d="M0 0h24v24H0z" fill="none" stroke="none" />  ← quitado */}
    <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
    <path d="M11.5 19h-6.5a2 2 0 0 1 -2 -2v-9.999a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
);

// Piscina de bolas (monkeybar)
const IconPiscinaBolas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {/* <path d="M0 0h24v24H0z" fill="none" stroke="none" />  ← quitado */}
    <path d="M3 21v-15l5 -3l5 3v15" />
    <path d="M8 21v-7" />
    <path d="M3 14h10" />
    <path d="M6 10a2 2 0 1 1 4 0" />
    <path d="M13 13c6 0 3 8 8 8" />
  </svg>
);

// Fotografía (camera-star)
const IconFotografo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {/* <path d="M0 0h24v24H0z" fill="none" stroke="none" />  ← quitado */}
    <path d="M10.5 20h-5.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2.5" />
    <path d="M14.569 11.45a3 3 0 1 0 -4.518 3.83" />
    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
  </svg>
);

// Magia (varita)
const IconMago = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {/* <path d="M0 0h24v24H0z" fill="none" stroke="none" />  ← quitado */}
    <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
    <path d="M15 6l3 3" />
    <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
    <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
  </svg>
);

// Candy Bar (piruleta)
const IconCandyBar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#ff6b35]" width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {/* <path d="M0 0h24v24H0z" fill="none" stroke="none" />  ← quitado */}
    <path d="M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 10a3.5 3.5 0 0 0 -7 0" />
    <path d="M14 10a3.5 3.5 0 0 1 -7 0" />
    <path d="M14 17a3.5 3.5 0 0 0 0 -7" />
    <path d="M14 3a3.5 3.5 0 0 0 0 7" />
    <path d="M3 21l6 -6" />
  </svg>
);

/** ===================== DATOS ===================== */

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
      { img: 'https://i.imgur.com/O4q2O5R.jpeg', title: 'Manzana',              badge: CORDON },
      { img: 'https://i.imgur.com/1oAIvsK.jpeg', title: 'Banoffe',            badge: CORDON },
    ]
  },
  { icon: <IconDecoracion />, title: 'Decoración Personalizada', description: 'Transformamos cualquier espacio en un mundo de fantasía.' },
  { icon: <IconCandyBar />, title: 'Candy Bar', description: 'Snacks y dulces para reponer energías y disfrutar.' },
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
  details?: { img: string; title: string; description?: string; badge?: string }[];
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
    if (service.details) setSelectedService(service);
  };

  const closeModal = () => setSelectedService(null);

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

      {selectedService?.details && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </section>
  );
};

export default Services;
