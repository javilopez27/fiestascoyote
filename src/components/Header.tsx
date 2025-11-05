import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'Quiénes Somos' },
  { href: '#services', label: 'Servicios' },
  { href: '#gallery', label: 'Galería' },
  { href: '#clients', label: 'Clientes' },
  { href: '#contact', label: 'Contacto' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.slice(1);
    // The hero section's ID is 'home'
    const targetElement = document.getElementById(targetId === '' ? 'home' : targetId);

    if (targetElement) {
      const headerOffset = 80; // Adjust this value based on your header's height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#home" onClick={handleNavClick} className="flex items-center gap-2 text-xl font-bold transition-colors">
          <img
            src="https://i.imgur.com/6qtveZW.png"
            alt="Fiestas Coyote Logo"
            className="h-12 w-12"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <span className={`transition-colors ${isScrolled ? 'text-[#ff6b35]' : 'text-white'}`}>Fiestas Coyote</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick} className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#ff6b35]' : 'text-white hover:text-orange-200'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-700 hover:text-[#ff6b35] font-semibold">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
