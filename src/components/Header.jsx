import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 bg-zinc-950 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer" onClick={scrollToTop}>
          <img src="/QLO-logo.png" alt="Qlo Logo" className="h-12 sm:h-16 transition-all duration-300" />
        </div>
        <a href="https://web.qlo.app" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-5 py-2 rounded-full font-semibold shadow hover:opacity-90 transition">
          Launch App
        </a>
      </div>
    </header>
  );
}
