import React from 'react';

const phoneNumber = '+34656647218';
const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;
const formattedPhoneNumber = '656 64 72 18';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <img src="https://i.imgur.com/6qtveZW.png" alt="Fiestas Coyote Logo" className="h-12 w-12 bg-white rounded-full p-1" />
          <p className="text-2xl font-bold">Fiestas Coyote</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-6">
          <a href="https://www.instagram.com/fiestascoyote_" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">Instagram</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">WhatsApp</a>
          <a href={`tel:${phoneNumber}`} className="hover:text-[#ff6b35] transition-colors">{formattedPhoneNumber}</a>
        </div>
        <p className="text-gray-400">&copy; {currentYear} Fiestas Coyote. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;