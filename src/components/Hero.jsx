
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20 px-4">
      <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl font-bold">
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <p className="mt-4 text-zinc-400">
        Qlo provides smart insights for walk-in traffic to reduce queues and maximise revenue.
      </p>
      <div className="mt-6">
        <a href="https://web.qlo.app" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full">
          Launch App
        </a>
      </div>
    </section>
  );
}
