
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import SectionWrapper from './SectionWrapper';

const ContactInfo: React.FC = () => {
  // Encoded address for the map link
  const encodedAddress = encodeURIComponent(BUSINESS_INFO.address);
  // Standard Google Maps Embed URL for 115 Wembley Park Drive, HA9 8HG
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.264775440263!2d-0.2883706233777478!3d51.563345871826274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876116309855555%3A0xe8d689650d51381!2s115%20Wembley%20Park%20Dr%2C%20Wembley%20HA9%208HG!5e0!3m2!1sen!2suk!4v1710345678901!5m2!1sen!2suk`;

  return (
    <SectionWrapper id="location" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black mb-6 tracking-tight uppercase">FIND US IN <span className="text-orange-500">WEMBLEY</span></h2>
              <div className="flex gap-4 items-start mb-6">
                <div className="bg-orange-600/20 p-3 rounded-xl text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-xl">{BUSINESS_INFO.address}</p>
                  <p className="text-neutral-400 mt-1 italic">"{BUSINESS_INFO.note}"</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-orange-600/20 p-3 rounded-xl text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-2xl tracking-widest">{BUSINESS_INFO.phone}</p>
                  <p className="text-neutral-400 mt-1 uppercase text-xs font-bold tracking-widest">Call for direct orders</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
                OPENING HOURS
              </h3>
              <div className="space-y-4">
                {Object.entries(BUSINESS_INFO.openingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center border-b border-neutral-700/50 pb-3">
                    <span className="font-bold text-neutral-300">{day}</span>
                    <span className={`font-black tracking-wide ${hours.includes('02:00 AM') ? 'text-orange-500' : 'text-white'}`}>
                      {hours}
                      {hours.includes('02:00 AM') && <span className="ml-2 text-[10px] bg-orange-600/20 px-2 py-0.5 rounded text-orange-500 uppercase">Late Night!</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[450px] border border-neutral-700 group shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.1)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
              title="Angus Burgers Wembley Location"
            ></iframe>
            
            {/* Overlay to encourage opening in Google Maps */}
            <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 bg-orange-600 text-white px-6 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl transform transition-all hover:scale-110 active:scale-95 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactInfo;
