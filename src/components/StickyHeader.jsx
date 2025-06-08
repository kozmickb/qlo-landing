import { FaInstagram } from 'react-icons/fa';

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-lg font-bold text-pink-500">
        Qlo
      </a>

      <div className="flex items-center gap-4">
        {/* Optional CTA */}
        <a
          href="https://web.qlo.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-4 py-2 rounded-md font-medium text-sm shadow hover:opacity-90 transition"
        >
          Launch App
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/direct/t/qlo.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-white text-xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </header>
  );
}
