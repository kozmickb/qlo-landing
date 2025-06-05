import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="px-6 pt-16 pb-24 text-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
    >
      <img
        src="/QLO logo.png"
        alt="Qlo Logo"
        className="h-20 mx-auto mb-6 drop-shadow-lg"
      />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
      >
        Intelligent Walk-in Traffic Management
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto"
      >
        Optimise footfall, predict customer demand, and unlock deeper insights
        for better service and better business.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 flex justify-center gap-4"
      >
        <a
          href="https://web.qlo.app"
          target="_blank"
          className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:opacity-90 transition"
        >
          Launch App
        </a>
        <a
          href="#features"
          className="border border-zinc-700 text-zinc-100 px-6 py-3 rounded-full font-semibold text-sm hover:border-zinc-500 transition"
        >
          See Features
        </a>
      </motion.div>
    </motion.section>
  );
}