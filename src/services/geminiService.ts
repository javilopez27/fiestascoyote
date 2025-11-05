
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

const PRICES = {
  ANIMATION_BASE: 150,
  EXTRA_MONITOR: 50, // For > 15 kids
  DECORACION: 100,
  MAGO: 200,
  FOTOGRAFO: 250,
  CAKES: {
    'Tarta de chuches': 50,
    'Tarta de chuches personalizable': 50, // Base price
    'Tarta 3 chocolates': 50,
    'Tarta de limón y merengue': 50,
    'Mus choco y lacasitas': 54,
    'Queso con frambuesa': 50,
    'Zanahoria': 50,
    'Manzana': 50,
    'Banoffe': 50,
  } as Record<string, number>,
  WORKSHOPS: {
    'Personaliza tu objeto': 5,
    'Personaliza tu totebag': 6,
    'Pinta Camisetas': 6,
    'Taller tarta de chuches': 8,
  } as Record<string, number>,
};

export const getBudgetEstimate = async (formData: FormData): Promise<Estimation> => {
  // Simulate a small delay for better user experience
  await new Promise(resolve => setTimeout(resolve, 400));

  let totalCost = 0;
  const breakdown: string[] = [];
  const kidsCount = parseInt(formData.kidsCount, 10) || 0;
  const detailsText = formData.details.toLowerCase();

  // 1. Calculate cake costs
  formData.selectedCakes.forEach(cakeName => {
    const price = PRICES.CAKES[cakeName];
    if (price) {
      totalCost += price;
      breakdown.push(`- ${cakeName}: ${price}€`);
    }
  });

  // 2. Calculate workshop costs
  formData.selectedWorkshops.forEach(workshopName => {
    const pricePerKid = PRICES.WORKSHOPS[workshopName];
    if (pricePerKid && kidsCount > 0) {
      const workshopTotal = pricePerKid * kidsCount;
      totalCost += workshopTotal;
      breakdown.push(`- ${workshopName} (${kidsCount} niños x ${pricePerKid}€): ${workshopTotal}€`);
    }
  });

  // 3. Check details for other main services
  if (detailsText.includes('animación') || detailsText.includes('animacion')) {
     totalCost += PRICES.ANIMATION_BASE;
     breakdown.push(`- Pack de Animación Base: ${PRICES.ANIMATION_BASE}€`);
  }
  if (detailsText.includes('decoración') || detailsText.includes('decoracion')) {
     totalCost += PRICES.DECORACION;
     breakdown.push(`- Decoración Mágica (desde): ${PRICES.DECORACION}€`);
  }
  if (detailsText.includes('mago')) {
     totalCost += PRICES.MAGO;
     breakdown.push(`- Mago Profesional: ${PRICES.MAGO}€`);
  }
  if (detailsText.includes('fotógrafo') || detailsText.includes('fotografo')) {
     totalCost += PRICES.FOTOGRAFO;
     breakdown.push(`- Fotógrafo de Eventos: ${PRICES.FOTOGRAFO}€`);
  }

  // 4. Add extra monitor cost if needed
  if (kidsCount > 15) {
    totalCost += PRICES.EXTRA_MONITOR;
    breakdown.push(`- Monitor adicional (más de 15 niños): ${PRICES.EXTRA_MONITOR}€`);
  }

  // If nothing was selected, return an informative message
  if (breakdown.length === 0) {
    return {
      explanation: "Para poder darte una estimación, por favor, selecciona alguna de nuestras tartas o talleres, o describe los servicios que te interesan en el campo de detalles.",
      estimatedCost: "0 €*"
    };
  }

  const explanationHeader = "Aquí tienes un desglose de tu presupuesto estimado:\n\n";
const breakdownText = breakdown.join('\n');
const footerText =
  "\n\n*Importante:* Esta estimación **no incluye los monitores** ni las **horas correspondientes pendientes de confirmar**. " +
  "Por tanto, **no es el precio final**; nuestro equipo te confirmará el importe definitivo.";
const explanation = explanationHeader + breakdownText + footerText;

  
  const estimatedCost = `${totalCost} €*`;

  return { explanation, estimatedCost };
};
