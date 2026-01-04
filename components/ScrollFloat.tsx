
import React, { useEffect, useMemo, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top bottom-=10%',
  scrollEnd = 'bottom center',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub: 1,
            markers: false
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <div ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </div>
  );
};

export default ScrollFloat;
