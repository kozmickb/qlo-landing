import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

export default function Layout() {
  return (
    <main className="bg-zinc-950 text-white">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
