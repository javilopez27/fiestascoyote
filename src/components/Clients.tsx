import React from 'react';

type ClientType = 'familia' | 'negocio';

interface Client {
  name: string;
  type: ClientType;
  note?: string;        // opcional: breve contexto (“Cumple 6 años”, “Cafetería”)
  src?: string;         // avatar/logo (opcional)
}

const clients: Client[] = [
  // Familias (usa tus fotos/avatares reales o placeholders)
  { name: 'Familia García', type: 'familia', note: 'Cumple 6 años', src: 'https://i.pravatar.cc/120?img=12' },
  { name: 'Familia López',  type: 'familia', note: 'Comunión',      src: 'https://i.pravatar.cc/120?img=32' },
  { name: 'Familia Pérez',  type: 'familia', note: 'Fiesta temática', src: 'https://i.pravatar.cc/120?img=45' },

  // Pequeños negocios (pon sus logos reales si los tienes)
  { name: 'Panadería La Espiga', type: 'negocio', note: 'Evento infantil', src: 'https://i.imgur.com/8r3mYrx.png' },
  { name: 'Cafetería Dulce Día', type: 'negocio', note: 'Taller creativo', src: 'https://i.imgur.com/2vJ0ZzX.png' },
  { name: 'Ludoteca El Bosque',  type: 'negocio', note: 'Animación',       src: 'https://i.imgur.com/jyQy1pT.png' },
];

const typeStyles: Record<ClientType, { label: string; className: string }> = {
  familia: { label: 'Familia', className: 'bg-emerald-100 text-emerald-700' },
  negocio: { label: 'Negocio local', className: 'bg-blue-100 text-blue-700' },
};

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-[#FDF8F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Familias y Pequeños Negocios</h2>
          <p className="text-lg text-gray-600 mt-2">Quienes ya han confiado en nosotros.</p>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c, i) => {
            const t = typeStyles[c.type];
            return (
              <div key={i} className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-gray-100 shrink-0">
                  {c.src ? (
                    <img src={c.src} alt={c.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-500 font-semibold">
                      {c.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-gray-800 truncate">{c.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${t.className}`}>
                      {t.label}
                    </span>
                  </div>
                  {c.note && <p className="text-sm text-gray-600 mt-1">{c.note}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque opcional de métricas sociales/reviews */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="px-3 py-1 rounded-full bg-white shadow-sm">
            ★★★★★ 4.9/5 — 30+ reseñas
          </div>
          <div className="px-3 py-1 rounded-full bg-white shadow-sm">
            +100 niños felices este año
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
