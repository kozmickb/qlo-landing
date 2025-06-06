import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section
      id="book-demo"
      className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">Ready to transform your walk-in experience?</h2>
      <p className="text-zinc-400 mb-8">Let us show you how Qlo reduces queue times, boosts service, and increases profit.</p>
      <a href="mailto:hello@qlo.app" className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:opacity-90 transition">
        Book a Demo
      </a>
    </motion.section>
  );
}