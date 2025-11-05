
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDF8F5] text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
