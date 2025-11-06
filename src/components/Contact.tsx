import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  kidsAge: string;
  kidsCount: string;
  eventDate: string;
  details: string;
  website?: string; // honeypot
}

// Web3Forms
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "59c08429-d3a6-4662-aed4-d9aa22ee5e01"; // ← pon aquí tu clave

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    kidsAge: '',
    kidsCount: '10',
    eventDate: '',
    details: '',
    website: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot
    if (formData.website?.trim()) return;

    const formattedDate = formData.eventDate
      ? new Date(formData.eventDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'No especificada';

    // Payload Web3Forms
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Solicitud de información para fiesta infantil - ${formData.name}`,
      from_name: formData.name,
      replyto: formData.email,
      name: formData.name,
      email: formData.email,
      kidsAge: formData.kidsAge,
      kidsCount: formData.kidsCount,
      eventDate: formattedDate,
      details: formData.details,
      // opcionales:
      // redirect: "https://tu-dominio/thanks",
      // from_email: "[email protected]" // si quieres forzar remitente
    };

    try {
      setSubmitting(true);
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error enviando el formulario");

      setShowSuccessPopup(true);
      setFormData({
        name: '',
        email: '',
        kidsAge: '',
        kidsCount: '10',
        eventDate: '',
        details: '',
        website: '',
      });
    } catch (err) {
      alert("No se pudo enviar el formulario. Inténtalo más tarde.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contacta con Nosotras</h2>
          <p className="text-lg text-gray-600 mt-2">Cuéntanos tu idea y te ayudamos a hacerla realidad.</p>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
            {/* Honeypot (oculto) */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
              tabIndex={-1}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Tu Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Tu Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="kidsAge" className="block text-sm font-medium text-gray-700 mb-2">Edad de los niños</label>
                <input
                  id="kidsAge"
                  type="text"
                  name="kidsAge"
                  placeholder="Ej: 5-7 años"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
                  value={formData.kidsAge}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="kidsCount" className="block text-sm font-medium text-gray-700 mb-2">Número de niños (aprox.)</label>
                <input
                  id="kidsCount"
                  type="number"
                  name="kidsCount"
                  min="1"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
                  value={formData.kidsCount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">Fecha deseada del evento</label>
              <input
                type="date"
                name="eventDate"
                id="eventDate"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
                value={formData.eventDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">Cuéntanos más sobre la fiesta que imaginas</label>
              <textarea
                id="details"
                name="details"
                placeholder="Temática, lugar, servicios de interés, etc."
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
                value={formData.details}
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#ff6b35] text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 disabled:opacity-60"
              >
                {submitting ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </div>
          </form>

          {showSuccessPopup && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]"
              onClick={() => setShowSuccessPopup(false)}
            >
              <div
                className="bg-white p-8 rounded-lg shadow-xl text-center animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Solicitud enviada!</h3>
                <p className="text-gray-600 mb-6">
                  Gracias por tu mensaje. Nos pondremos en contacto contigo a la mayor brevedad.
                </p>
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="bg-[#ff6b35] text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
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
    </section>
  );
};

export default Contact;
