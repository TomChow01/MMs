
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '';
  const navSolid = isScrolled || !isHome || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
  ];

  const checkIsActive = (href: string) => {
    if (href === '/projects') return location.pathname === '/projects';
    if (href === '/') return location.pathname === '/' && (!location.hash || location.hash === '#hero');
    if (href.startsWith('/#')) {
      return location.hash === href.replace('/', '');
    }
    return location.pathname === href;
  };

  const BrandLogo = () => {
    const logoColor = "#784F17";
    const brushRed = "#B92113";
    const dynamicTextColor = navSolid ? logoColor : "#FFFFFF";
    const taglineColor = navSolid ? "text-slate-900" : "text-white";
    const sublineColor = navSolid ? "text-slate-400" : "text-white/60";
    
    return (
      <div className="flex items-center gap-2 md:gap-3">
        <div className="relative flex items-center scale-75 xs:scale-90 md:scale-100 origin-left">
          <svg width="110" height="75" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
            <defs>
              <linearGradient id="ferruleGradNav" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#808B96" />
                <stop offset="50%" stopColor="#D5DBDB" />
                <stop offset="100%" stopColor="#808B96" />
              </linearGradient>
            </defs>
            <path d="M5,40 C60,40 210,50 235,125" stroke={brushRed} strokeWidth="9" fill="none" strokeLinecap="butt" />
            <g style={{ fontFamily: '"Montserrat", sans-serif' }}>
               <text x="12" y="90" fill={dynamicTextColor} fontWeight="700" fontSize="28" letterSpacing="0.04em">MASTER</text>
               <text x="12" y="125" fill={dynamicTextColor} fontWeight="700" fontSize="28" letterSpacing="0.04em">STOKES</text>
               <text x="12" y="170" fill={dynamicTextColor} fontWeight="900" fontSize="56" letterSpacing="-0.03em" transform="scale(0.95, 1)">DESIGN</text>
            </g>
            <g transform="translate(227, 122) rotate(6)">
              <rect x="0" y="0" width="16" height="22" fill="url(#ferruleGradNav)" rx="1.5" />
              <path d="M0,22 L16,22 L17,40 C17,42 16,43 14.5,43 L1.5,43 C0,43 -1,42 -1,40 L0,22" fill="#F4F6F7" />
            </g>
            <g transform="translate(255, 22)">
              <rect x="4" y="0" width="8" height="100" fill={brushRed} rx="2" />
              <rect x="0" y="100" width="16" height="22" fill="url(#ferruleGradNav)" rx="1.5" />
              <path d="M0,122 L16,122 L17,140 C17,142 16,143 14.5,143 L1.5,143 C0,143 -1,142 -1,140 L0,122" fill="#F4F6F7" />
            </g>
          </svg>
          <div className="flex items-center ml-1">
            <div className={`h-8 w-[1px] ${navSolid ? 'bg-slate-200' : 'bg-white/20'}`}></div>
            <div className="pl-2 flex flex-col justify-center">
              <span className={`font-marathi text-xs md:text-base font-extrabold leading-none tracking-tight ${taglineColor}`}>मास्टर स्टोक्स</span>
              <span className={`text-[6px] md:text-[8px] font-black uppercase tracking-[0.1em] mt-0.5 whitespace-nowrap ${sublineColor}`}>INTERIOR | SPORTS</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isOpen ? 'bg-white h-screen overflow-hidden' : (navSolid ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent py-2 md:py-4')}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-16 md:h-20 lg:h-24">
        <NavLink to="/#hero" className="relative z-[120]">
          <BrandLogo />
        </NavLink>

        <div className="hidden lg:flex space-x-12 items-center">
          {navLinks.map((link) => {
            const isActive = checkIsActive(link.href);
            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={`
                  font-bold tracking-[0.2em] uppercase text-sm md:text-[15px] transition-all duration-300 hover:text-brand-rust relative group
                  ${isActive ? 'text-brand-rust' : (navSolid ? 'text-slate-600' : 'text-white')}
                `}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-rust transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
              </NavLink>
            );
          })}
          <NavLink to="/#contact" className="bg-brand-rust px-10 py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-slate-900 transition-all shadow-[0_10px_25px_-5px_rgba(139,35,22,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(139,35,22,0.5)] active:scale-95 border border-brand-rust">
            START PROJECT
          </NavLink>
        </div>

        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`relative z-[120] p-2 rounded-xl transition-all ${isOpen ? 'text-slate-900' : (navSolid ? 'text-slate-900' : 'text-white')}`} 
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-32 px-10 pb-12">
          <div className="flex-grow flex flex-col gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={`text-4xl font-display font-bold uppercase tracking-tight ${checkIsActive(link.href) ? 'text-brand-rust' : 'text-slate-900'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="space-y-6 pt-10 border-t border-slate-100">
            <a href="tel:+919029888804" className="flex items-center gap-4 text-slate-900 font-bold text-xl">
              <Phone className="text-brand-rust" size={24} /> +91 90298 88804
            </a>
            <NavLink
              to="/#contact"
              className="w-full py-6 bg-brand-rust text-white rounded-2xl font-black uppercase tracking-[0.2em] text-base flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(139,35,22,0.5)]"
              onClick={() => setIsOpen(false)}
            >
              FREE CONSULTATION <ArrowRight size={22} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
