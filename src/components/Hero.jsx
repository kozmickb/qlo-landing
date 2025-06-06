import React from 'react';
import { motion } from 'framer-motion';

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
        className="mt-8 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
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