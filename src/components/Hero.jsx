import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center px-6 py-24 max-w-5xl mx-auto relative overflow-hidden"
    >
      <motion.img
        src="/QLO-logo.png"
        alt="Qlo Logo"
        className="h-20 mx-auto mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Qlo helps walk-in businesses manage queues, improve service, and grow revenue with real-time insights and predictive traffic tools.
      </motion.p>

     <motion.div
  className="mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-white text-sm sm:text-base"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 1 }}
>
  {[
    { label: 'See Features', href: '#features' },
    { label: 'Launch App', href: 'https://web.qlo.app', external: true },
    { label: 'Notify Me', href: '#early-access' },
  ].map((cta, i) => (
    <a
      key={cta.label}
      href={cta.href}
      target={cta.external ? '_blank' : undefined}
      rel={cta.external ? 'noopener noreferrer' : undefined}
      className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition whitespace-nowrap"
    >
      {cta.label}
    </a>
  ))}

  <a
    href="https://www.instagram.com/direct/t/yourusername/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition whitespace-nowrap"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.246 2.466.415a4.92 4.92 0 011.675 1.084 4.92 4.92 0 011.084 1.675c.169.463.359 1.26.415 2.466.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.246 2.003-.415 2.466a4.902 4.902 0 01-1.084 1.675 4.902 4.902 0 01-1.675 1.084c-.463.169-1.26.359-2.466.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.246-2.466-.415a4.92 4.92 0 01-1.675-1.084 4.92 4.92 0 01-1.084-1.675c-.169-.463-.359-1.26-.415-2.466C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.246-2.003.415-2.466A4.92 4.92 0 013.732 3c.463-.169 1.26-.359 2.466-.415C7.464 2.175 7.844 2.163 12 2.163zM12 0C8.741 0 8.332.013 7.053.072 5.775.13 4.802.346 4.002.663a6.865 6.865 0 00-2.49 1.616A6.865 6.865 0 00.663 4.002C.346 4.802.13 5.775.072 7.053.013 8.332 0 8.741 0 12s.013 3.668.072 4.947c.058 1.278.274 2.25.591 3.05a6.865 6.865 0 001.616 2.49 6.865 6.865 0 002.49 1.616c.8.317 1.772.533 3.05.591 1.279.059 1.688.072 4.947.072s3.668-.013 4.947-.072c1.278-.058 2.25-.274 3.05-.591a6.865 6.865 0 002.49-1.616 6.865 6.865 0 001.616-2.49c.317-.8.533-1.772.591-3.05.059-1.279.072-1.688.072-4.947s-.013-3.668-.072-4.947c-.058-1.278-.274-2.25-.591-3.05a6.865 6.865 0 00-1.616-2.49A6.865 6.865 0 0019.998.663c-.8-.317-1.772-.533-3.05-.591C15.668.013 15.259 0 12 0z"/>
      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
    </svg>
    Instagram
  </a>
</motion.div>
    </motion.section>
  );
}
