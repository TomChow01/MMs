
import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const BrandLogo = () => {
    const logoColor = "#C59C34"; 
    const brushRed = "#B92113";
    
    return (
      <div className="flex items-center gap-2 group py-1 origin-left">
        <svg width="130" height="90" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ferruleGradFooter" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#808B96" />
              <stop offset="50%" stopColor="#D5DBDB" />
              <stop offset="100%" stopColor="#808B96" />
            </linearGradient>
          </defs>
          {/* Extended path to clear the letter 'N' */}
          <path d="M5,40 C60,40 210,50 235,125" stroke={brushRed} strokeWidth="9" fill="none" strokeLinecap="butt" />
          <g style={{ fontFamily: '"Montserrat", sans-serif' }}>
            <text x="12" y="90" fill={logoColor} fontWeight="700" fontSize="28" letterSpacing="0.04em">MASTER</text>
            <text x="12" y="125" fill={logoColor} fontWeight="700" fontSize="28" letterSpacing="0.04em">STOKES</text>
            <text x="12" y="170" fill={logoColor} fontWeight="900" fontSize="56" letterSpacing="-0.03em" transform="scale(0.95, 1)">DESIGN</text>
          </g>
          {/* Adjusted ferrule positions for the longer path */}
          <g transform="translate(227, 122) rotate(6)">
            <rect x="0" y="0" width="16" height="22" fill="url(#ferruleGradFooter)" rx="1.5" />
            <path d="M0,22 L16,22 L17,40 C17,42 16,43 14.5,43 L1.5,43 C0,43 -1,42 -1,40 L0,22" fill="#F4F6F7" />
          </g>
          <g transform="translate(255, 22)">
            <rect x="4" y="0" width="8" height="100" fill={brushRed} rx="2" />
            <rect x="0" y="100" width="16" height="22" fill="url(#ferruleGradFooter)" rx="1.5" />
            <path d="M0,122 L16,122 L17,140 C17,142 16,143 14.5,143 L1.5,143 C0,143 -1,142 -1,140 L0,122" fill="#F4F6F7" />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <footer className="bg-slate-950 text-white py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-16 border-b border-white/5">
          <div className="md:col-span-5 space-y-8">
            <BrandLogo />
            <div className="space-y-2">
              <p className="text-white font-bold text-2xl font-marathi">मास्टर स्ट्रोक्स डिझाईन</p>
              <span className="text-brand-rust font-calligraphy text-2xl font-bold">मास्टर स्टोक्स</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg md:text-xl font-light">
              Transforming open grounds into elite indoor sports spaces. We bridge the gap between rugged sports functionality and refined luxury aesthetics.
            </p>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">संपर्क माहिती | Contact Details</h3>
            <div className="space-y-6">
              <p className="font-bold text-3xl text-white tracking-tight">+91 90298 88804</p>
              <p className="text-slate-300 hover:text-brand-rust transition-colors cursor-pointer text-xl font-medium">masterstokes1@gmail.com</p>
              <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-marathi font-medium">
                ३०३, रेल्कोन बिल्डिंग प्रीमिसेस,<br />महात्मा गांधी मार्ग, विलेपार्ले (पूर्व),<br />आमची मुंबई - ४०० ०५७
              </p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">Quick Navigation</h3>
            <div className="flex flex-col gap-5">
              <Link to="/#about" className="text-slate-400 hover:text-brand-gold transition-all text-base uppercase tracking-widest font-bold">About Studio</Link>
              <Link to="/#services" className="text-slate-400 hover:text-brand-gold transition-all text-base uppercase tracking-widest font-bold">Expertise</Link>
              <Link to="/projects" className="text-slate-400 hover:text-brand-gold transition-all text-base uppercase tracking-widest font-bold">Gallery</Link>
              <Link to="/#contact" className="text-slate-400 hover:text-brand-gold transition-all text-base uppercase tracking-widest font-bold">Inquiries</Link>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-slate-500">
          <p>© {new Date().getFullYear()} Master Stokes Design.</p>
          <p className="text-slate-600 font-marathi text-base">२०१४ पासून डिझाइन उत्कृष्टता | Since 2014</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
