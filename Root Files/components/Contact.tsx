
import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xgowboqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-50 text-slate-900 py-16 md:py-32 scroll-mt-14 md:scroll-mt-20 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24">
          <div className="space-y-8 md:space-y-16 text-center md:text-left">
            <div>
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-base mb-3 md:mb-4 block">Get in Touch | संपर्क साधा</span>
              <h2 className="text-3xl md:text-7xl font-display font-bold uppercase mb-3 leading-tight text-slate-900">
                START YOUR <br className="hidden md:block"/><span className="text-brand-rust">MASTER STROKE</span>
              </h2>
              <span className="text-brand-rust font-calligraphy text-2xl md:text-4xl block">प्रकल्पाची सुरुवात करा</span>
            </div>
            
            <div className="space-y-6 md:space-y-10 flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center md:items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-slate-200 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] mb-1">Call Us | कॉल करा</h4>
                  <p className="text-lg md:text-3xl font-bold text-slate-900 tracking-tight">+91 90298 88804</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center md:items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-slate-200 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] mb-1">Email | ईमेल</h4>
                  <p className="text-base md:text-2xl font-bold text-slate-900 tracking-tight">masterstokes1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center md:items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-slate-200 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] mb-1">Studio | स्टुडिओ</h4>
                  <p className="text-sm md:text-xl text-slate-600 leading-relaxed font-medium">
                    303, Relcon Premises,<br className="hidden md:block" />
                    Vile Parle (East), Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-16 rounded-[1.5rem] md:rounded-[3rem] border border-slate-200 shadow-xl">
            <h3 className="text-xl md:text-4xl font-display font-bold uppercase mb-6 md:mb-10 text-slate-900">Project Inquiry</h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 uppercase mb-2">Message Sent!</h4>
                <p className="text-slate-600 text-lg">Thank you for reaching out. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-rust font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}
                
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    placeholder="नाव / Name" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-lg outline-none focus:ring-2 focus:ring-brand-rust/20 transition-all text-slate-900 placeholder:text-slate-300"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-1">
                     <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Phone</label>
                     <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      placeholder="फोन / Phone" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-lg outline-none focus:ring-2 focus:ring-brand-rust/20 transition-all text-slate-900 placeholder:text-slate-300"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Email</label>
                     <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      placeholder="ईमेल / Email" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-lg outline-none focus:ring-2 focus:ring-brand-rust/20 transition-all text-slate-900 placeholder:text-slate-300"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Message</label>
                  <textarea 
                    rows={3} 
                    name="message"
                    value={formData.message}
                    placeholder="प्रकल्पाबद्दल / Project details" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-lg outline-none focus:ring-2 focus:ring-brand-rust/20 transition-all resize-none text-slate-900 placeholder:text-slate-300"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-brand-rust transition-all shadow-lg flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'} 
                  <ArrowRight size={18} className={`${status === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
