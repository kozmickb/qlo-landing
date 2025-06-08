import React, { useState, useEffect } from 'react';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <a href="/" className="text-white text-lg font-bold">
          <img src="/QLO-logo.png" alt="Qlo Logo" className="h-8 md:h-10 transition-all" />
        </a>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#features" className="hover:text-white text-zinc-400 transition">Features</a>
          <a href="#business" className="hover:text-white text-zinc-400 transition">For Business</a>
          <a href="#customer" className="hover:text-white text-zinc-400 transition">For Customers</a>
          <a href="#testimonials" className="hover:text-white text-zinc-400 transition">Testimonials</a>
        </nav>
        <a
          href="https://web.qlo.app"
          target="_blank"
          className="ml-4 bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:opacity-90 transition"
        >
          Launch App
        </a>
      </div>
    </header>
  );
}
