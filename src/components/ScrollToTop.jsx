import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition"
      >
        ↑ Top
      </button>
    )
  );
}
