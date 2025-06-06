import React, { useEffect, useState } from 'react';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#top">
          <img src="/QLO-logo.png" alt="Qlo Logo" className={`h-10 transition-all ${scrolled ? 'h-8' : 'h-10'}`} />
        </a>
        <div className="space-x-4">
          <a href="#features" className="text-sm text-white font-medium hover:text-pink-400 transition">Features</a>
          <a
            href="https://web.qlo.app"
            target="_blank"
            className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:opacity-90"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
}
