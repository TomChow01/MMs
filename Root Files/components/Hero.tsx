
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    url: "https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0166.jpg",
    title: "Elite Sports Infrastructure",
    accent: "Turf Arenas"
  },
  {
    url: "https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.12%20(2).jpeg",
    title: "Professional Pickleball",
    accent: "Court Design"
  },
  {
    url: "https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0035.jpg",
    title: "Luxury Real Estate",
    accent: "Designer Interiors"
  },
  {
    url: "https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0127.jpg",
    title: "Industrial Precision",
    accent: "Structural Builds"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden flex items-center bg-slate-950">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-[2500ms] ease-in-out will-change-[opacity,transform] ${
              index === currentSlide 
                ? 'opacity-80 scale-100 z-10' 
                : 'opacity-0 scale-110 z-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.title} 
              className={`w-full h-full object-cover ${
                index === currentSlide ? 'animate-ken-burns' : ''
              }`}
            />
          </div>
        ))}
        
        {/* Consistent Overlays for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent z-20"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-50/10 to-transparent pointer-events-none z-20"></div>
        <div className="absolute inset-0 bg-slate-950/20 z-20"></div>
        
        {/* Architectural Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none z-30" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      <div className="relative z-40 container mx-auto px-6 pt-20">
        <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
          <div className="mb-4 md:mb-6">
            <div className="overflow-hidden">
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[9px] xs:text-[10px] md:text-base block mb-3 drop-shadow-lg animate-fade-in-up">
                {slides[currentSlide].title}
              </span>
            </div>
            <div className="w-10 md:w-20 h-[2px] bg-brand-rust mx-auto md:mx-0 shadow-lg"></div>
          </div>
          
          <h1 className="text-[2.75rem] xs:text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] font-display font-bold leading-[0.9] tracking-tighter uppercase text-white mb-6 md:mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            MASTER <br className="hidden xs:block" />
            <span className="text-brand-rust">STOKES</span> <br className="hidden sm:block md:hidden" />
            <span className="text-white block xs:inline"> DESIGN</span>
          </h1>
          
          <div className="mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-2xl text-slate-100 max-w-2xl leading-relaxed font-light drop-shadow-md">
              The gold standard in <span className="text-brand-gold font-semibold">{slides[currentSlide].accent}</span> & Luxury Turnkey Solutions. Transforming spaces since 2014.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 max-w-xs mx-auto sm:max-w-none md:mx-0">
            <Link 
              to="/#contact" 
              className="w-full sm:w-auto group relative overflow-hidden flex items-center justify-center gap-2 md:gap-3 bg-brand-rust text-white px-6 md:px-14 py-3.5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] xs:text-xs md:text-base transition-all duration-500 shadow-2xl hover:shadow-brand-rust/50 active:scale-95 border border-brand-rust"
            >
              <span className="relative z-10">START A PROJECT</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/projects" 
              className="w-full sm:w-auto group flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 md:px-14 py-3.5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] xs:text-xs md:text-base hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-xl active:scale-95"
            >
              VIEW PORTFOLIO
            </Link>
          </div>
        </div>
      </div>

      {/* Slideshow Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex items-center gap-4 z-50">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="group py-4 px-1"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={`h-[2px] transition-all duration-700 rounded-full ${
              i === currentSlide ? 'w-12 md:w-20 bg-brand-gold shadow-[0_0_10px_rgba(197,156,52,0.5)]' : 'w-4 md:w-8 bg-white/30 hover:bg-white/60'
            }`}></div>
          </button>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 flex items-center gap-3 z-50 opacity-60 md:opacity-100 hidden sm:flex">
        <div className="w-6 md:w-12 h-[1px] bg-brand-gold"></div>
        <span className="text-slate-300 text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-black">Crafting Excellence</span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 12s infinite alternate ease-in-out;
        }
      `}} />
    </section>
  );
};

export default Hero;
