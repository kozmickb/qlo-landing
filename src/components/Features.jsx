
import React from 'react';

export default function Features() {
  return (
    <section className="py-16 px-4 bg-zinc-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-8">Key Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <li>Live Wait Time Visualisation</li>
        <li>AI-Powered Predictions</li>
        <li>Smart Check-In</li>
        <li>Performance Dashboards</li>
        <li>Consent-First Data</li>
        <li>Multi-Sector Ready</li>
      </ul>
    </section>
  );
}
