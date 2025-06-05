import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Screenshots from './Screenshots';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Screenshots />
      <Footer />
    </div>
  );
}