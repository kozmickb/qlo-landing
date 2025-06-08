import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center px-6 py-28 max-w-6xl mx-auto relative overflow-hidden"
    >
      <motion.img
        src="/QLO-logo.png"
        alt="Qlo Logo"
        className="h-24 mx-auto mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Qlo helps walk-in businesses manage queues, improve service, and grow revenue with real-time insights and predictive traffic tools.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a
          href="#features"
          className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition-all duration-300"
        >
          See Features
        </a>
        <a
          href="https://web.qlo.app"
          target="_blank"
          className="border border-purple-400 text-purple-300 px-6 py-3 rounded-md font-semibold hover:bg-purple-800 hover:text-white transition-all duration-300"
        >
          Launch App
        </a>
        <a
          href="https://www.instagram.com/direct/t/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition-all duration-300"
        >
          <FaInstagram size={18} /> DM Us
        </a>
        <a
          href="#early-access"
          className="bg-zinc-800 text-white px-6 py-3 rounded-md font-semibold border border-zinc-700 hover:bg-zinc-700 transition-all duration-300"
        >
          Notify Me
        </a>
      </motion.div>
    </motion.section>
  );
}
