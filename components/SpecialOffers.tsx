
import React from 'react';
import { SPECIAL_OFFERS } from '../constants';
import SectionWrapper from './SectionWrapper';

const SpecialOffers: React.FC = () => {
  const ORDER_LINK = "https://www.restaurantlogin.com/api/fb/gp_jye";

  return (
    <SectionWrapper id="offers" className="py-20 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">Limited Time</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-2">SPECIAL OFFERS</h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-sm uppercase font-bold tracking-widest leading-relaxed">
            Wembley's best value deals for the stadium crowd and late-night legends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SPECIAL_OFFERS.map((offer, i) => (
            <div key={i} className="group relative bg-neutral-800/50 p-8 rounded-3xl border border-neutral-700 hover:border-orange-600 transition-all duration-300">
              <div className="absolute top-6 right-6 bg-orange-600 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                {offer.tag}
              </div>
              <h3 className="text-2xl font-black mb-3 group-hover:text-orange-500 transition-colors uppercase">{offer.title}</h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed italic">{offer.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-3xl font-black text-white">{offer.price}</span>
                <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-orange-600 hover:text-white px-5 py-2 rounded-xl font-bold text-xs text-center uppercase transition-all transform group-hover:scale-105">
                  Grab Deal
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SpecialOffers;
