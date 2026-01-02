
import React from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full z-0 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-neutral-900 tracking-tight">
                REDEFINING <br/> THE <span className="text-orange-600">BURGER</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  At Angus Burger, we are committed to providing the best food experience in your own home or on the go. We don't just do fast food; we do <span className="text-green-600 font-bold underline decoration-2 underline-offset-4">fresh food</span>.
                </p>
                <p>
                  From our signature 100% Aberdeen Angus patties to our flame-grilled peri peri chicken, every bite is crafted for quality. Our kitchen is the heart of Wembley, where tradition meets modern urban taste.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-neutral-900">100%</div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Angus Beef</div>
                  </div>
                  <div className="w-px h-12 bg-neutral-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neutral-900">12h+</div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Marination</div>
                  </div>
                  <div className="w-px h-12 bg-neutral-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neutral-900">2AM</div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Late Bites</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://picsum.photos/seed/grill/800/1000" 
                alt="Grilling Beef" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 max-w-[200px]">
                <p className="text-xs font-bold text-orange-600 uppercase mb-1">Our Promise</p>
                <p className="text-sm font-semibold text-neutral-800">Locally sourced, charcoal-grilled, and made to order.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
