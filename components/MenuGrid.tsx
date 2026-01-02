
import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import SectionWrapper from './SectionWrapper';
import { MenuItem } from '../types';

const MenuGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('burgers');
  const ORDER_LINK = "https://www.restaurantlogin.com/api/fb/gp_jye";

  const categories = [
    { id: 'burgers', label: 'Burgers' },
    { id: 'kebabs-wraps', label: 'Kebabs & Wraps' },
    { id: 'platters', label: 'Platters' },
    { id: 'greek', label: 'Greek Menu' },
    { id: 'chicken-sides', label: 'Chicken & Sides' },
    { id: 'kids', label: 'Kids Meal' },
    { id: 'drinks', label: 'Drinks' },
  ];

  const groupedItems = useMemo(() => {
    const items = MENU_ITEMS.filter(item => item.category === activeCategory);
    const groups: { [key: string]: MenuItem[] } = {};
    items.forEach(item => {
      const sub = item.subcategory || 'Main';
      if (!groups[sub]) groups[sub] = [];
      groups[sub].push(item);
    });
    return groups;
  }, [activeCategory]);

  return (
    <SectionWrapper id="menu" className="py-24 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs">Fresh & Gourmet</span>
          <h2 className="text-5xl md:text-7xl font-black text-neutral-900 mt-4 mb-8 tracking-tighter">OUR FULL MENU</h2>
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 bg-neutral-200/50 p-2 rounded-2xl md:rounded-full inline-flex mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-6 py-3 rounded-xl md:rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-orange-600 text-white shadow-lg' 
                    : 'bg-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Menu Rendering */}
        <div className="space-y-16">
          {(Object.entries(groupedItems) as [string, MenuItem[]][]).map(([subcat, items]) => (
            <div key={subcat}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-neutral-300 flex-grow"></div>
                <h3 className="text-3xl font-black text-neutral-900 uppercase tracking-tight px-4">{subcat}</h3>
                <div className="h-px bg-neutral-300 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-neutral-100/80">
                    <div className="relative h-72 overflow-hidden bg-neutral-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=600&h=400&auto=format&fit=crop';
                        }}
                      />
                      {item.badge && (
                        <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl backdrop-blur-md ${
                          item.badge === 'Spicy' ? 'bg-red-600/90 text-white' : 
                          item.badge === 'Best Seller' ? 'bg-orange-500/90 text-white' : 
                          'bg-green-600/90 text-white'
                        }`}>
                          {item.badge}
                        </div>
                      )}
                      {!item.prices ? (
                        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-2xl text-xl font-black text-neutral-900 shadow-2xl">
                          {item.price}
                        </div>
                      ) : (
                        <div className="absolute bottom-6 right-6 flex flex-col gap-1">
                          {item.prices.map((p, pi) => (
                            <div key={pi} className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-xl text-sm font-black text-neutral-900 shadow-xl border border-neutral-100 flex justify-between gap-4">
                              <span className="text-[10px] uppercase text-neutral-400">{p.label}</span>
                              <span>{p.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-2xl font-black text-neutral-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow italic">
                        "{item.description}"
                      </p>
                      <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-neutral-900 text-white py-4.5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all hover:bg-orange-600 hover:shadow-orange-500/20 shadow-lg active:scale-95 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Add to Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {groupedItems['Main'] === undefined && Object.keys(groupedItems).length === 0 && (
            <div className="text-center py-20 opacity-40">
              <p className="text-xl font-bold uppercase tracking-widest">More items coming soon...</p>
            </div>
          )}
        </div>

        <div className="mt-24 p-12 bg-neutral-900 text-white rounded-[3rem] shadow-2xl border border-neutral-800 flex flex-col md:flex-row gap-12 justify-between items-center">
          <div className="max-w-md">
            <h4 className="text-2xl font-black uppercase mb-4 tracking-tight">WANT MORE FLAVOUR?</h4>
            <p className="text-neutral-400 text-sm leading-relaxed italic">
              Add Halloumi Slice, Pineapple, or Turkey Rashers to any burger for £1.95. Make it a meal for +£3.45!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="bg-neutral-800 px-6 py-4 rounded-2xl border border-neutral-700">
               <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Make it a Meal</p>
               <p className="text-lg font-bold">+£3.45</p>
             </div>
             <div className="bg-neutral-800 px-6 py-4 rounded-2xl border border-neutral-700">
               <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Table Service</p>
               <p className="text-lg font-bold">£1.95</p>
             </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MenuGrid;
