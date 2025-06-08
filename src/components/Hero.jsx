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
        className="h-24 mx-auto mb-6"
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
        Qlo empowers walk-in businesses to maximise throughput and efficiency using real-time insights and AI forecasts.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a href="#features" className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition">
          See Features
        </a>
        <a href="https://web.qlo.app" target="_blank" className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold border border-purple-400 hover:bg-purple-100 transition">
          Launch App
        </a>
        <a href="https://www.instagram.com/direct/t/yourusername/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-md font-medium transition">
          <FaInstagram className="text-lg" />
          Message Us
        </a>
      </motion.div>
    </motion.section>
  );
}
