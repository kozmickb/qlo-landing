import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Live Wait Time Visualisation',
    description: 'Show your customers real-time wait times and reduce walk-outs.',
  },
  {
    title: 'AI-Powered Predictions',
    description: 'Use machine learning to forecast traffic and optimise staffing.',
  },
  {
    title: 'Smart Check-In',
    description: 'Enable geofencing for seamless customer tracking and engagement.',
  },
  {
    title: 'Performance Dashboards',
    description: 'Tailored metrics for barbers, managers, and admins in real time.',
  },
  {
    title: 'Consent-First Data',
    description: 'Built with full GDPR compliance and data transparency.',
  },
  {
    title: 'Multi-Sector Ready',
    description: 'Qlo adapts to salons, clinics, cafés, and any walk-in business.',
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Features That Power Success</h2>
        <p className="text-zinc-400 mt-4">Designed for both business owners and walk-in customers</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-700"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-zinc-400">{feat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}