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
          <FaInstagram className="w-4 h-4" />
          Instagram
        </a>
      </motion.div>
    </motion.section>
  );
}
