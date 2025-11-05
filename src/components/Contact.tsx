
import React, { useState } from 'react';
import { getBudgetEstimate } from '../services/geminiService';

const cakeOptions = [
  'Tarta de chuches',
  'Tarta de chuches personalizable',
  'Tarta 3 chocolates',
  'Tarta de limón y merengue',
  'Mus choco y lacasitas',
  'Queso con frambuesa',
  'Zanahoria',
  'Manzana',
  'Banoffe',
];

const workshopOptions = [
  'Personaliza tu objeto',
  'Personaliza tu totebag',
  'Pinta Camisetas',
  'Taller tarta de chuches',
];


interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  kidsCount: string;
  details: string;
  selectedCakes: string[];
  selectedWorkshops: string[];
}

interface Estimation {
    explanation: string;
    estimatedCost: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    kidsCount: '10',
    details: '',
    selectedCakes: [],
    selectedWorkshops: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [estimation, setEstimation] = useState<Estimation | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prevData => {
        const currentSelection = prevData[name as keyof FormData] as string[];
        if (checked) {
            return { ...prevData, [name]: [...currentSelection, value] };
        } else {
            return { ...prevData, [name]: currentSelection.filter(item => item !== value) };
        }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setEstimation(null);

    try {
      const result = await getBudgetEstimate(formData);
      setEstimation(result);
    } catch (err) {
      setError('Lo sentimos, ha ocurrido un error al calcular el presupuesto. Por favor, inténtalo de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Nombre" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]" value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]" value={formData.email} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Teléfono" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]" value={formData.phone} onChange={handleChange} />
              <input type="date" name="eventDate" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]" value={formData.eventDate} onChange={handleChange} />
              <input type="number" name="kidsCount" min="1" placeholder="Nº de niños" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]" value={formData.kidsCount} onChange={handleChange} />
            </div>
            
            <div className="space-y-3">
              <label className="font-semibold text-gray-700">Tartas Personalizadas (opcional)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
                {cakeOptions.map(cake => (
                  <label key={cake} className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                    <input type="checkbox" name="selectedCakes" value={cake} checked={formData.selectedCakes.includes(cake)} onChange={handleCheckboxChange} className="rounded text-[#ff6b35] focus:ring-[#ff6b35] transition" />
                    <span>{cake}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-semibold text-gray-700">Talleres Creativos (opcional)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {workshopOptions.map(workshop => (
                  <label key={workshop} className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                    <input type="checkbox" name="selectedWorkshops" value={workshop} checked={formData.selectedWorkshops.includes(workshop)} onChange={handleCheckboxChange} className="rounded text-[#ff6b35] focus:ring-[#ff6b35] transition" />
                    <span>{workshop}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea name="details" placeholder="Cuéntanos más sobre el evento, otros servicios que te interesan, etc." rows={5} required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b35]" value={formData.details} onChange={handleChange}></textarea>
            
            <div className="text-center">
              <button type="submit" disabled={loading} className="bg-[#ff6b35] text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 disabled:bg-gray-400">
                {loading ? 'Calculando...' : 'Calcular Presupuesto Estimado'}
              </button>
            </div>
          </form>

          {error && <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-md text-center">{error}</div>}
          
          {estimation && (
            <div className="mt-8 p-6 bg-orange-50 border-l-4 border-[#ff6b35] rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Presupuesto Estimado</h3>
              <p className="text-gray-700 mb-4 whitespace-pre-wrap">{estimation.explanation}</p>
              <p className="text-3xl font-bold text-[#ff6b35]">{estimation.estimatedCost}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;