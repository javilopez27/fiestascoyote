// ServiceModal.tsx
import React from 'react';

interface ServiceDetail {
  img: string;
  title: string;
  description?: string;
  badge?: string;
}

interface Service {
  title: string;
  details?: ServiceDetail[];
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service.details) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 id="service-modal-title" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          {service.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {service.details.map((detail, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img src={detail.img} alt={detail.title} className="w-full h-48 object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  {detail.badge && (
                    <img
                      src={detail.badge}
                      alt=""
                      aria-hidden="true"
                      className="w-6 h-6 shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span>{detail.title}</span>
                </h3>
                {detail.description && <p className="text-gray-600">{detail.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceModal;