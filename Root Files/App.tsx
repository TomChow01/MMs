
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Process from './components/Process';
import Founder from './components/Founder';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
};

const HomePage = () => (
  <div className="w-full flex flex-col items-stretch">
    <Hero />
    <div className="reveal-trigger"><About /></div>
    <div className="reveal-trigger"><Founder /></div>
    <div className="reveal-trigger"><Process /></div>
    <div className="reveal-trigger"><Services /></div>
    <Gallery isHome={true} />
    <div className="reveal-trigger"><Clients /></div>
    <Contact />
  </div>
);

function App() {
  useEffect(() => {
    // 1. Initialize Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Reveal animation logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const triggers = document.querySelectorAll('.reveal-trigger');
    triggers.forEach(t => {
      t.classList.add('reveal');
      observer.observe(t);
    });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <div id="app-root" className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Gallery isPage={true} />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
