
import React, { useState, useEffect } from 'react';
import LogoLoop from './LogoLoop';

const clientLogos = [
  { src: 'https://ik.imagekit.io/jai777/Masterstroke%20/L16.jpeg', alt: 'Pepe Jeans' },
  // Removed L18 (DMart)
  { src: 'https://ik.imagekit.io/jai777/Masterstroke%20/L19.jpeg', alt: 'Lanvin' },
  { src: 'https://ik.imagekit.io/jai777/Masterstroke%20/L9.jpeg', alt: 'Educational Institution' },
  { src: 'https://ik.imagekit.io/jai777/Masterstroke%20/L11.jpeg', alt: 'Rebirth' },
  // Removed L3 (Cadbury)
  { src: 'https://ik.imagekit.io/jai777/Masterstroke%20/L13.jpeg', alt: 'Kansai Nerolac' },
  { src: 'https://ik.imagekit.io/jai777/Masterstroke%20/L15.jpeg', alt: 'Client 15' },
];

const Clients: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive values: Optimized size and speed for smooth premium feel
  const logoHeight = isMobile ? 60 : 120; 
  const speed = isMobile ? 30 : 60; 
  const gap = isMobile ? 60 : 140;

  return (
    <section className="py-24 md:py-48 bg-slate-100 border-y border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 md:mb-32 text-center">
        <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs md:text-xl mb-4 block">Our Network</span>
        <h2 className="text-4xl md:text-8xl font-display font-bold text-slate-900 uppercase tracking-tight leading-none">
          TRUSTED BY <span className="text-brand-rust">LEADERS</span>
        </h2>
        <div className="w-16 md:w-48 h-2 bg-brand-rust mx-auto mt-8 md:mt-14"></div>
      </div>
      
      <div className="relative">
        <LogoLoop
          logos={clientLogos}
          speed={speed}
          logoHeight={logoHeight} 
          gap={gap} 
          fadeOut
          fadeOutColor="#f1f5f9" 
          scaleOnHover={true}
          pauseOnHover={true}
          className="py-8 md:py-16"
        />
      </div>

      <div className="mt-16 md:mt-32 text-center px-6">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs md:text-3xl">Over 150+ successful collaborations across India</p>
      </div>
    </section>
  );
};

export default Clients;
