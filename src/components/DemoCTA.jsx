import React from 'react';
import { motion } from 'framer-motion';

export default function DemoCTA() {
  return (
    <motion.section
      id="book-demo"
      className="bg-zinc-950 px-6 py-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your walk-in experience?</h2>
        <p className="text-zinc-400 mb-8">Let us show you how Qlo can reduce queue times, improve service, and grow your business.</p>
        <a href="mailto:hello@qlo.app" className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:opacity-90 transition">
          Book a Demo
        </a>
      </div>
    </motion.section>
  );
}