
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 text-white font-sans scroll-smooth">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
