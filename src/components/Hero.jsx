import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="relative text-center px-6 py-24 max-w-5xl mx-auto overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/QLO-logo.png"
        alt="Qlo Logo"
        className="h-20 mx-auto mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold leading-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Qlo empowers walk-in businesses with real-time insights, wait-time transparency, and predictive footfall analytics to drive smarter decisions.
      </motion.p>
      <motion.div
        className="mt-8 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a href="#features" className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-90 transition">
          See Features
        </a>
        <a href="https://web.qlo.app" target="_blank" className="border border-purple-500 text-purple-300 px-6 py-3 rounded-full font-semibold hover:bg-purple-900 hover:text-white transition">
          Launch App
        </a>
      </motion.div>
    </motion.section>
  );
}
