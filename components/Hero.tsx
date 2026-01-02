
import React from 'react';

const Hero: React.FC = () => {
  const ORDER_LINK = "https://www.restaurantlogin.com/api/fb/gp_jye";

  return (
    <section id="home" className="relative h-[90vh] flex items-center overflow-hidden scroll-mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920&h=1080&auto=format&fit=crop" 
          alt="Angus Burgers Background" 
          className="w-full h-full object-cover scale-105 brightness-[0.4] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block bg-orange-600 text-white px-4 py-1.5 rounded-md font-bold text-xs uppercase tracking-widest animate-bounce">
            Best in Wembley
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            ANGUS <span className="text-orange-500 italic">BURGERS</span> <br/> WEMBLEY
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-medium max-w-lg leading-relaxed">
            100% Fresh Meat. Charcoal-Grilled Kebabs. The heart of Wembley's late-night food scene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white text-center text-lg font-bold py-5 px-10 rounded-2xl transform transition-all hover:scale-105 shadow-2xl uppercase tracking-wider">
              Order for Delivery
            </a>
            <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-center border border-white/30 text-lg font-bold py-5 px-10 rounded-2xl transition-all uppercase tracking-wider">
              Takeaway Menu
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Graphic Elements */}
      <div className="absolute bottom-0 right-0 p-8 hidden lg:block opacity-50">
        <div className="text-9xl font-black text-neutral-800 leading-none select-none">
          ANGUS<br/>BURGERS
        </div>
      </div>
    </section>
  );
};

export default Hero;
