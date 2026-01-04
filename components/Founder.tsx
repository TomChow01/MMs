
import React from 'react';
import { Quote } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="bg-white py-20 md:py-32 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* Founder Image Area - Dramatically increased aspect ratio to show "3x more body" */}
          <div className="lg:col-span-5 relative order-1 lg:order-none">
            <div className="relative z-10 aspect-[9/16] max-w-[420px] mx-auto lg:max-w-none rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-700">
              <img 
                src="https://ik.imagekit.io/jai777/Masterstroke%20/Gemini_Generated_Image_l5kq46l5kq46l5kq.png" 
                alt="Mayuuresh - Founder of Master Stokes Design" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            
            {/* Calligraphy Quote Overlay - Adjusted position for the taller frame */}
            <div className="absolute bottom-12 -right-2 sm:-right-4 md:bottom-20 md:-right-8 bg-brand-rust p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-white shadow-2xl z-20 max-w-[200px] sm:max-w-none transform transition-transform hover:scale-105 duration-500">
              <Quote size={20} className="md:w-10 md:h-10 mb-1 opacity-40" />
              <p className="font-marathi text-base sm:text-xl md:text-2xl font-bold leading-tight">
                जागेचा कायापालट,<br />आमचा ध्यास.
              </p>
            </div>
          </div>

          {/* Founder Narrative Area */}
          <div className="lg:col-span-7 pt-4">
            <div className="mb-8 md:mb-12">
              <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm block mb-4">
                THE VISIONARY | संकल्पक
              </span>
              <ScrollFloat 
                textClassName="text-5xl md:text-8xl font-display font-bold text-brand-rust uppercase leading-none tracking-tighter mb-4"
              >
                MAYUURESH
              </ScrollFloat>
              <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-4">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-sm">
                  FOUNDER & PRINCIPAL CONSULTANT
                </span>
                <div className="w-10 h-[1px] bg-slate-200"></div>
                <span className="text-brand-rust font-marathi font-extrabold text-base md:text-xl">
                  संस्थापक आणि मुख्य सल्लागार
                </span>
              </div>
            </div>

            <div className="space-y-8 text-slate-600 text-base md:text-xl font-light leading-relaxed max-w-2xl">
              <p>
                With over a decade of hands-on experience in Mumbai's architectural landscape, Mayuuresh established Master Stokes Design to solve a unique challenge: creating professional-grade sports infrastructure that doesn't compromise on luxury.
              </p>
              
              {/* Marathi Blockquote */}
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl md:rounded-[1.5rem] border-l-[6px] border-brand-gold relative">
                <p className="font-marathi text-slate-800 font-medium leading-snug text-lg md:text-2xl italic">
                  "प्रत्येक प्रोजेक्ट हा माझ्यासाठी एक नवीन संधी असतो - एका साध्या जागेला एका उत्कृष्ट अनुभवात बदलण्याची. आमचे काम केवळ स्ट्रक्चर्स उभे करणे नाही, तर स्वप्नांना आकार देणे आहे."
                </p>
              </div>

              <p>
                His dual expertise in high-end interiors and civil sports infrastructure has made Master Stokes a trusted partner for 150+ elite clients across India, bringing precision and prestige to every stroke.
              </p>
            </div>

            {/* Signature Block */}
            <div className="mt-12 md:mt-16">
              <div className="inline-block">
                <p className="font-calligraphy text-3xl md:text-5xl text-slate-900 mb-1">Mayuuresh</p>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-6 bg-slate-300"></div>
                  <p className="text-[8px] md:text-[9px] uppercase font-black tracking-[0.2em] text-slate-400">
                    SIGNATURE OF EXCELLENCE
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
