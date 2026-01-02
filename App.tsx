
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuGrid from './components/MenuGrid';
import SpecialOffers from './components/SpecialOffers';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import SEO from './components/SEO';
import CookieBanner from './components/CookieBanner';
import LegalModal, { LegalType } from './components/LegalModal';

const App: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);
  const ORDER_LINK = "https://www.restaurantlogin.com/api/fb/gp_jye";

  return (
    <div className="flex flex-col min-h-screen selection:bg-orange-600 selection:text-white bg-white">
      <SEO />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <SpecialOffers />
        <MenuGrid />
        <ContactInfo />
      </main>
      
      <Footer onLegalClick={setActiveLegal} />
      
      {/* Legal "Pages" as Overlays */}
      <LegalModal type={activeLegal} onClose={() => setActiveLegal(null)} />
      
      {/* Sticky Call to Action for Mobile */}
      <div className="md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-[90] w-[90%] pointer-events-none">
        <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-orange-600 text-white font-black py-4 rounded-2xl shadow-2xl pointer-events-auto active:scale-95 transition-transform uppercase tracking-widest text-sm flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Order Now
        </a>
      </div>

      <AIAssistant />
      <CookieBanner />
    </div>
  );
};

export default App;
