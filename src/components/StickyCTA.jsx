import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <div className={`fixed bottom-6 left-0 right-0 z-50 flex justify-center transition-opacity ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] px-6 py-3 rounded-full shadow-xl flex gap-6 items-center text-white">
        <a href="#features" className="font-semibold hover:underline">See Features</a>
        <a href="https://web.qlo.app" target="_blank" className="font-semibold hover:underline">Launch App</a>
        <a href="#early-access" className="font-semibold hover:underline">Notify Me</a>
        <a href="https://www.instagram.com/direct/t/yourusername/" target="_blank" className="font-semibold hover:underline">Instagram</a>
      </div>
    </div>
  );
}
