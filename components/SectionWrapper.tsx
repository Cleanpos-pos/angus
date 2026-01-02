
import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  const revealRef = useReveal();

  // scroll-mt-24 ensures the section lands below the fixed header (approx 96px)
  return (
    <section id={id} ref={revealRef} className={`reveal scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
