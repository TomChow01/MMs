
import React from 'react';
import { Box, Hammer, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollFloat from './ScrollFloat';

const Services: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "Interior Design",
      subtitle: "Luxury Real Estate",
      description: "We craft aesthetic yet functional interiors for high-end residential and commercial properties.",
      features: ["Residential Luxury", "Commercial Lobbies", "Custom Furniture"],
      image: "https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0035.jpg?updatedAt=1765719589818",
      icon: <PenTool size={28} />,
      cta: "CONSULT NOW"
    },
    {
      id: "02",
      title: "Sports Infra",
      subtitle: "Elite Amenities",
      description: "Enhancing real estate value through elite sports infrastructure like turf and court arenas.",
      features: ["Turf Installation", "Pickleball Courts", "Multisport Arenas"],
      image: "https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0161.jpg?updatedAt=1765719591349",
      icon: <Box size={28} />,
      cta: "GET ESTIMATE"
    },
    {
      id: "03",
      title: "Turnkey Works",
      subtitle: "Project Execution",
      description: "Comprehensive end-to-end execution of real estate infrastructure and structural builds.",
      features: ["Architectural Layouts", "Civil Infrastructure", "Structural Build"],
      image: "https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0028.jpg?updatedAt=1765719578271",
      icon: <Hammer size={28} />,
      cta: "START PROJECT"
    }
  ];

  return (
    <section id="services" className="bg-slate-100 py-24 md:py-48 scroll-mt-14 md:scroll-mt-20 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mb-20 md:mb-32 text-center md:text-left">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs md:text-xl mb-4 block">Our Expertise</span>
          <div className="flex flex-col">
            <ScrollFloat 
              textClassName="text-4xl md:text-8xl font-display font-bold text-slate-900 uppercase leading-[1]"
            >
              COMPREHENSIVE
            </ScrollFloat>
            <ScrollFloat 
              textClassName="text-4xl md:text-8xl font-display font-bold text-brand-rust uppercase leading-[1]"
            >
              SOLUTIONS
            </ScrollFloat>
          </div>
          <p className="text-slate-600 mt-6 md:mt-10 text-xl md:text-4xl font-light">Design & Build Solutions Tailored to Excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-slate-200 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden hover:shadow-2xl transition-all duration-700 flex flex-col">
              <div className="h-64 md:h-[30rem] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-brand-rust p-5 md:p-6 rounded-2xl md:rounded-3xl text-white shadow-xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-10 md:p-16 flex-grow flex flex-col">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 uppercase mb-3 leading-tight">{service.title}</h3>
                <p className="text-brand-gold text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8 md:mb-12">{service.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-10 md:mb-16 text-lg md:text-2xl font-light">
                  {service.description}
                </p>
                
                <div className="space-y-4 md:space-y-6 pt-10 md:pt-16 border-t border-slate-100 mb-12 md:mb-16">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-rust/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-brand-rust" />
                      </div>
                      <span className="text-slate-700 font-bold text-xs md:text-lg uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/#contact" className="mt-auto inline-flex items-center justify-center gap-4 py-5 md:py-6 px-10 md:px-12 bg-slate-50 rounded-2xl md:rounded-3xl text-slate-900 font-bold uppercase tracking-widest text-[11px] md:text-sm hover:bg-brand-rust hover:text-white transition-all group shadow-sm active:scale-95">
                   {service.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
