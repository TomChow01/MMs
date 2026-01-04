
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ArrowRight, X, Maximize2 } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const projects: Project[] = [
  // Pickleball
  { id: 501, title: 'Elite Pickleball Arena', category: 'Pickleball', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.12%20(2).jpeg' },
  { id: 502, title: 'Professional Court System', category: 'Pickleball', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.45%20(1).jpeg' },
  { id: 503, title: 'Urban Pickleball Hub', category: 'Pickleball', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.44%20(2).jpeg' },
  { id: 504, title: 'Premium Playing Surface', category: 'Pickleball', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.12.jpeg' },
  { id: 505, title: 'Tournament Grade Court', category: 'Pickleball', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.11.jpeg' },
  { id: 506, title: 'Pickleball Infrastructure', category: 'Pickleball', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.44.jpeg' },
  { id: 507, title: 'Bespoke Court Design', category: 'Pickleball', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/WhatsApp%20Image%202025-12-25%20at%2013.45.44%20(1).jpeg' },

  // Turf
  { id: 101, title: 'Elite Sports Turf', category: 'Turf', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0128.jpg?updatedAt=1765719591980' },
  { id: 102, title: 'Professional Arena', category: 'Turf', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0132.jpg?updatedAt=1765719591634' },
  { id: 103, title: 'Community Grounds', category: 'Turf', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0166.jpg?updatedAt=1765719590414' },
  { id: 104, title: 'Training Complex', category: 'Turf', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0109.jpg?updatedAt=1765719583730' },
  { id: 105, title: 'Multi-sport Surface', category: 'Turf', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0111.jpg?updatedAt=1765719580772' },
  
  // Interior
  { id: 201, title: 'Luxury Living', category: 'Interior', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0111.jpg?updatedAt=1765719580772' },
  { id: 202, title: 'Penthouse Design', category: 'Interior', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0052.jpg?updatedAt=1765719590710' },
  { id: 203, title: 'Executive Studio', category: 'Interior', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0002.jpg?updatedAt=1765719590653' },
  { id: 204, title: 'Modern Workspace', category: 'Interior', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0099.jpg?updatedAt=1765719590561' },
  { id: 205, title: 'Bespoke Residence', category: 'Interior', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0011.jpg?updatedAt=1765719590485' },
  { id: 206, title: 'Designer Lounge', category: 'Interior', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0006.jpg?updatedAt=1765719590116' },
  { id: 207, title: 'High-end Interior', category: 'Interior', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0062.jpg?updatedAt=1765719588569' },
  
  // Sketches
  { id: 301, title: 'Architectural Sketch', category: 'Sketches', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0168.jpg?updatedAt=1765719591125' },
  { id: 302, title: 'Design Concept', category: 'Sketches', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0142.jpg?updatedAt=1765719582919' },
  { id: 303, title: 'Structural Blueprint', category: 'Sketches', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0154.jpg?updatedAt=1765719582669' },
  { id: 304, title: 'Plan Layout', category: 'Sketches', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0146.jpg?updatedAt=1765719580472' },
  
  // Structures
  { id: 401, title: 'Tensile Structure', category: 'Structures', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0127.jpg?updatedAt=1765719569558' },
  { id: 402, title: 'Steel Framework', category: 'Structures', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0148.jpg?updatedAt=1765719569446' },
  { id: 403, title: 'Industrial Roof', category: 'Structures', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0137.jpg?updatedAt=1765719567931' },
  { id: 404, title: 'Structural Build', category: 'Structures', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0028.jpg?updatedAt=1765719578271' },
  { id: 405, title: 'Foundation Work', category: 'Structures', image: 'https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0004.jpg?updatedAt=1765719587114' },
];

const categories = ['All', 'Turf', 'Pickleball', 'Interior', 'Structures', 'Sketches'];

interface GalleryProps {
  isHome?: boolean;
  isPage?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isHome = false, isPage = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPage) {
      const categoryParam = searchParams.get('category');
      if (categoryParam && categories.includes(categoryParam)) {
        setFilter(categoryParam);
      } else {
        setFilter('All');
      }
    }
  }, [searchParams, isPage]);

  const displayProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const homeProjects = projects.slice(0, 12);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleCategoryClick = (cat: string) => {
    if (isHome) {
      navigate(`/projects?category=${cat === 'All' ? '' : cat}`);
    } else {
      setSearchParams({ category: cat });
      setFilter(cat);
    }
  };

  return (
    <>
      {isPage && (
        <div className="relative w-full h-[40vh] md:h-[50vh] bg-slate-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="https://ik.imagekit.io/jai777/Masterstroke%20/IMG-20251207-WA0137.jpg" className="w-full h-full object-cover opacity-30" alt="Portfolio Header" />
             <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950/40"></div>
          </div>
          <div className="relative z-20 text-center px-6 pt-12">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-3 block">Full Portfolio</span>
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-none">GALLERY</h1>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" onClick={closeModal}></div>
          <div className="bg-white w-full max-w-5xl md:rounded-[2rem] shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row animate-fade-in-up max-h-[90vh]">
            <button onClick={closeModal} className="absolute top-4 right-4 z-50 text-slate-500 hover:text-brand-rust p-2 bg-white/90 rounded-full shadow-lg">
              <X size={20} strokeWidth={3} />
            </button>
            <div className="h-64 md:h-auto md:w-2/3 bg-slate-100 flex items-center justify-center overflow-hidden">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white overflow-y-auto">
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-[10px] mb-2">{selectedProject.category}</span>
              <h2 className="text-2xl md:text-4xl font-display font-bold uppercase mb-4 text-slate-900">{selectedProject.title}</h2>
              <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed mb-8">
                Premium infrastructure built with attention to every detail, combining aesthetics with professional functionality.
              </p>
              <Link to="/#contact" onClick={closeModal} className="w-full py-4 bg-brand-rust text-white font-bold uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all text-center rounded-xl shadow-lg">
                INQUIRE ABOUT THIS
              </Link>
            </div>
          </div>
        </div>
      )}

      <section id="projects" className={`bg-slate-50 scroll-mt-20 ${isHome ? 'py-20 md:py-40' : 'py-16'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 text-center md:text-left gap-8">
            <div>
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-base mb-3 block">Our Projects</span>
              <h2 className="text-3xl md:text-7xl font-display font-bold text-slate-900 uppercase tracking-tight">
                {isHome ? 'LATEST WORK' : 'PORTFOLIO'}
              </h2>
            </div>
            
            <div className="flex gap-4 md:gap-8 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar justify-start md:justify-end border-b border-slate-200">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => handleCategoryClick(cat)} 
                  className={`text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap pb-3 border-b-2 ${filter === cat ? 'text-brand-rust border-brand-rust' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
            {(isHome ? homeProjects : displayProjects).map((project, idx) => (
              <div 
                key={project.id} 
                className="group cursor-pointer transform animate-fade-in-up" 
                style={{ animationDelay: `${idx * 50}ms` }}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-[2rem] shadow-sm aspect-[4/5] bg-slate-200">
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-brand-rust/30 transition-all duration-500 opacity-0 md:group-hover:opacity-100 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-rust shadow-xl">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-rust shadow">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isHome && (
            <div className="mt-16 md:mt-24 text-center">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-4 md:px-14 md:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand-rust transition-all shadow-xl group"
              >
                VIEW FULL COLLECTION <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
