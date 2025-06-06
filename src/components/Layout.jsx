import React from 'react';
import Hero from './Hero';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';

export default function Layout() {
  return (
    <main className="bg-zinc-950 text-zinc-100 font-jakarta scroll-smooth">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}