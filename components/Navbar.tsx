
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const ORDER_LINK = "https://www.restaurantlogin.com/api/fb/gp_jye";
  const BOOK_LINK = "https://www.restaurantlogin.com/api/res/gp_jye";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'offers', 'menu', 'location'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for when a section is considered "active"
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'offers', label: 'Offers' },
    { id: 'menu', label: 'Menu' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-neutral-900/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-orange-600 text-white p-1 rounded transform transition-transform group-hover:rotate-12">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0 5.11 5.11 0 0 1 1.05 1.54 4 4 0 0 1 1.41 7.87L12 21Z"/><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M12 15h.01"/></svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white oswald">
            ANGUS <span className="text-orange-600">BURGER</span>
          </span>
        </a>

        {/* Desktop Links - Matching the user provided screenshot */}
        <div className="hidden lg:flex items-center gap-10 text-white font-bold uppercase text-[12px] tracking-[0.25em]">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`relative py-1 transition-all duration-300 hover:text-orange-500 ${activeSection === link.id ? 'text-orange-500' : 'text-white'}`}
            >
              {link.label}
              <span className={`absolute -bottom-3 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></span>
            </a>
          ))}
          <div className="flex items-center gap-6 ml-4">
            <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors py-2 border-b border-transparent hover:border-orange-500">
              Book a Table
            </a>
            <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl font-black text-xs">
              Order Online
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 flex flex-col gap-6 shadow-2xl transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100 p-8' : '-translate-y-5 opacity-0 pointer-events-none p-0 h-0 overflow-hidden'}`}>
        {navLinks.map(link => (
          <a 
            key={link.id}
            href={`#${link.id}`} 
            onClick={() => setIsMenuOpen(false)} 
            className={`text-2xl font-black uppercase transition-colors tracking-widest ${activeSection === link.id ? 'text-orange-500' : 'text-white'}`}
          >
            {link.label}
          </a>
        ))}
        <div className="flex flex-col gap-4 pt-4 border-t border-neutral-800">
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-white border border-white/20 text-center py-4 rounded-2xl text-lg font-black uppercase tracking-widest">
            Book a Table
          </a>
          <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white text-center w-full py-4 rounded-2xl text-lg font-black uppercase tracking-widest shadow-lg">
            Order Online
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
