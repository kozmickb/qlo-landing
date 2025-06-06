import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight"
      >
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-zinc-400 mt-6 text-lg max-w-xl"
      >
        Every minute your customers wait, you lose revenue. Qlo gives you the tools to take control — in real time.
      </motion.p>
      <motion.div
        className="flex gap-4 mt-10 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#features" className="border border-zinc-700 text-white px-6 py-2 rounded-full text-sm hover:border-zinc-500 transition">See Features</a>
        <a href="https://web.qlo.app" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">Launch App</a>
      </motion.div>
    </section>
  );
}
