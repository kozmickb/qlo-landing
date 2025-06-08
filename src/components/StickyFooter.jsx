import { FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function StickyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950 px-4 py-3 shadow-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-y-3">
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
          <a href="#features" className="text-sm font-medium text-white hover:text-purple-300 transition">See Features</a>
          <a href="https://web.qlo.app" target="_blank" className="text-sm font-medium text-white hover:text-purple-300 transition">Launch App</a>
          <a href="#early-access" className="text-sm font-medium text-white hover:text-purple-300 transition">Notify Me</a>
          <a
            href="https://www.instagram.com/direct/t/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white flex items-center gap-1 hover:text-purple-300 transition"
          >
            <FaInstagram className="text-base" /> Instagram
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white p-2 rounded-full shadow hover:opacity-90 transition"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}
