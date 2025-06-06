import { useEffect, useState } from 'react';

export default function StickyHeader() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${shrink ? 'py-2 bg-black/80 backdrop-blur-sm shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#">
          <img src="/QLO-logo.png" alt="Qlo" className={`transition-all duration-300 ${shrink ? 'h-10' : 'h-16'}`} />
        </a>
        <nav className="space-x-6 text-sm text-white font-medium">
          <a href="#features" className="hover:text-pink-400 transition">Features</a>
          <a href="https://web.qlo.app" className="hover:text-pink-400 transition">Launch App</a>
        </nav>
      </div>
    </header>
  );
}
