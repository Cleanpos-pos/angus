
import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-32 md:w-[450px] bg-neutral-900 text-white p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-neutral-800 z-[110] animate-fadeIn">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="bg-orange-600 p-2 rounded-xl shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-tight text-sm">Cookie Preferences</h5>
            <p className="text-neutral-400 text-xs leading-relaxed mt-1">
              We use cookies to enhance your ordering experience and analyze our traffic. By clicking "Accept", you agree to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <button 
            onClick={acceptCookies}
            className="flex-grow bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-2xl text-xs uppercase tracking-widest transition-all active:scale-95"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-400 font-bold rounded-2xl text-xs uppercase tracking-widest transition-all"
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
