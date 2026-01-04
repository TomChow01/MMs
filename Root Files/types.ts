import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'Turf' | 'Pickleball' | 'Interior' | 'Multi-sport' | 'Sketches' | 'Structures';
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}