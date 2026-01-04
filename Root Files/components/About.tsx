
import React from 'react';
import { Target, Award, Shield, Users } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

interface AboutProps {
  isPage?: boolean;
}

const About: React.FC<AboutProps> = ({ isPage = false }) => {
  const values = [
    {
      title: "Precision",
      marathi: "अचूकता",
      desc: "Every project is executed with architectural rigor and attention to the finest details.",
      icon: <Target className="text-brand-rust" size={32} />,
    },
    {
      title: "Quality",
      marathi: "गुणवत्ता",
      desc: "We use premium materials that withstand the test of time and professional athletic use.",
      icon: <Award className="text-brand-gold" size={32} />,
    },
    {
      title: "Integrity",
      marathi: "प्रामाणिकता",
      desc: "Transparent processes and honest consultation are the cornerstones of our studio.",
      icon: <Shield className="text-brand-rust" size={32} />,
    },
    {
      title: "Client-Centric",
      marathi: "ग्राहक-केंद्रित",
      desc: "Your vision is our blueprint. We build spaces that reflect your unique lifestyle.",
      icon: <Users className="text-brand-gold" size={32} />,
    }
  ];

  return (
    <div id="about" className="bg-slate-50 min-h-screen scroll-mt-14 md:scroll-mt-20">
      {/* Sub-page Header */}
      {isPage && (
        <section className="relative pt-36 pb-20 md:pt-56 md:pb-40 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop" 
              alt="Background texture" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-slate-950/40"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm md:text-xl mb-4 block">The Studio | स्टुडिओ</span>
            <div className="flex justify-center">
              <ScrollFloat 
                animationDuration={1} 
                ease='back.out(2)'
                textClassName="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold text-white uppercase tracking-tighter leading-none"
              >
                OUR STORY
              </ScrollFloat>
            </div>
            <p className="text-slate-300 text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed mt-6">
              A decade of transforming Mumbai's landscape through <span className="text-white font-medium">elite infrastructure</span>.
            </p>
          </div>
        </section>
      )}

      {/* Main Narrative */}
      <section className="py-20 md:py-48">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div className="space-y-8 md:space-y-16">
              <div className="space-y-3 md:space-y-6 text-center md:text-left">
                <h2 className="text-brand-rust font-calligraphy text-3xl md:text-6xl">आमची ओळख</h2>
                <h3 className="text-4xl xs:text-5xl md:text-8xl font-display font-bold text-slate-900 uppercase leading-tight tracking-tighter">Mastering the <br className="hidden md:block" /><span className="text-brand-gold">Art of Space</span></h3>
              </div>
              <div className="space-y-10 md:space-y-14 text-slate-600 text-lg xs:text-xl md:text-4xl font-light leading-relaxed">
                <p>
                  Since 2014, Master Stokes Design has specialized in blending the rugged durability of world-class sports facilities with the refined elegance of luxury interiors.
                </p>
                <p className="font-marathi font-medium text-slate-900 text-2xl md:text-5xl border-l-8 border-brand-rust pl-8 md:pl-12 py-6 leading-snug bg-slate-100 rounded-r-3xl">
                  आम्ही केवळ जागा डिझाइन करत नाही, तर आम्ही त्या जागेला जिवंत करतो. 'मास्टर स्टोक्स' प्रत्येक ठिकाणी गुणवत्तेचा ठसा उमटवते.
                </p>
              </div>
            </div>
            <div className="relative group px-2 md:px-0 mt-8 md:mt-0">
              <div className="aspect-[4/3] xs:aspect-square overflow-hidden rounded-3xl md:rounded-[4rem] shadow-2xl border border-slate-200">
                <img 
                  src="https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0137.jpg" 
                  alt="Architecture work" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 md:-bottom-12 -left-2 md:-left-12 bg-brand-rust p-8 md:p-16 rounded-2xl md:rounded-[3rem] text-white shadow-2xl">
                <p className="text-4xl md:text-8xl font-display font-bold leading-none">150+</p>
                <p className="text-[10px] md:text-xs uppercase font-black tracking-[0.3em] mt-2">Success Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-48 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-32">
             <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs md:text-xl mb-4 block">Our Core Values</span>
             <div className="flex justify-center flex-col items-center">
              <ScrollFloat 
                textClassName="text-4xl md:text-8xl font-display font-bold text-slate-900 uppercase tracking-tight leading-[0.9]"
              >
                THE PILLARS OF
              </ScrollFloat>
              <ScrollFloat 
                textClassName="text-4xl md:text-8xl font-display font-bold text-brand-rust uppercase tracking-tight leading-[0.9]"
              >
                EXCELLENCE
              </ScrollFloat>
             </div>
             <div className="w-16 md:w-48 h-2 bg-brand-rust mx-auto mt-8 md:mt-14"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-200/40">
                <div className="mb-8 md:mb-12 text-brand-rust flex justify-center md:justify-start">{value.icon}</div>
                <div className="text-center md:text-left">
                  <h4 className="text-brand-rust font-calligraphy text-2xl md:text-4xl mb-2">{value.marathi}</h4>
                  <h3 className="text-xl md:text-4xl font-display font-bold text-slate-900 uppercase tracking-wide mb-4 md:mb-8">{value.title}</h3>
                  <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
