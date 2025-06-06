import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Live Wait Time Visualisation",
    description: "Show customers real-time wait times to reduce walkouts and anxiety.",
  },
  {
    title: "AI-Powered Predictions",
    description: "Forecast traffic patterns with machine learning to optimise staff planning.",
  },
  {
    title: "Smart Check-In",
    description: "Use geofencing to automate customer check-in and walk-in tracking.",
  },
  {
    title: "Performance Dashboards",
    description: "Access manager and team views tailored to drive operational insight.",
  },
  {
    title: "Consent-First Data",
    description: "Full GDPR compliance and transparency with customers.",
  },
  {
    title: "Multi-Sector Ready",
    description: "Barbers, cafés, clinics — Qlo adapts to any walk-in business.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-900 px-6 py-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Drive Results</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">Qlo’s feature set is designed to optimise footfall, improve customer experience, and increase profitability for walk-in businesses of all types.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-zinc-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}