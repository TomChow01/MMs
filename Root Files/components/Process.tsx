
import React from 'react';
import ScrollFloat from './ScrollFloat';

const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We meet to understand your vision, site requirements, and budget expectations.',
      color: 'text-brand-rust',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Creation of detailed layouts, architectural sketches, and material selection for approval.',
      color: 'text-brand-gold',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Execution with high-precision fabrication, civil work, and professional installation on site.',
      color: 'text-brand-rust',
    },
    {
      num: '04',
      title: 'Delivery',
      desc: 'Final handover of a polished, ready-to-use premium space that exceeds expectations.',
      color: 'text-brand-gold',
    }
  ];

  return (
    <section className="bg-slate-50 py-24 md:py-48 border-t border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mb-16 md:mb-32 text-center md:text-left">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs md:text-xl mb-4 block">Workflow Architecture</span>
          <div className="flex flex-col">
            <ScrollFloat 
              textClassName="text-4xl xs:text-5xl md:text-8xl font-display font-bold text-slate-900 uppercase leading-[0.9]"
            >
              THE MASTER
            </ScrollFloat>
            <ScrollFloat 
              textClassName="text-4xl xs:text-5xl md:text-8xl font-display font-bold text-brand-rust uppercase leading-[0.9]"
            >
              STROKE PROCESS
            </ScrollFloat>
          </div>
          <div className="w-16 md:w-48 h-2 bg-brand-rust mt-10 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-10 xs:p-12 md:p-16 bg-white border border-slate-200 rounded-[2.5rem] md:rounded-[4rem] shadow-sm hover:shadow-2xl hover:border-brand-gold/30 transition-all duration-700 flex flex-col h-full overflow-hidden">
              
              <span className={`absolute -top-6 -right-2 font-display font-bold text-7xl md:text-[12rem] opacity-[0.05] select-none pointer-events-none ${step.color}`}>
                {step.num}
              </span>
              
              <div className="relative pt-2 md:pt-6 space-y-6 md:space-y-10 flex-grow">
                <h3 className={`text-2xl md:text-4xl font-display font-bold uppercase tracking-wider ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-slate-600 text-lg xs:text-xl md:text-2xl font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 md:mt-12 flex items-center gap-4">
                 <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-brand-rust' : 'bg-brand-gold'}`}></div>
                 <div className="flex-grow h-[1px] bg-slate-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
