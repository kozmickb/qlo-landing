import React from 'react';

const features = [
  {
    title: "Live Wait Time Visualisation",
    description: "Show your customers real-time wait times and reduce walk-outs."
  },
  {
    title: "AI-Powered Predictions",
    description: "Use machine learning to forecast traffic and optimise staff schedules."
  },
  {
    title: "Performance Dashboards",
    description: "Barber, manager and admin views tailored for operations and insight."
  },
  {
    title: "Consent-First Data",
    description: "Fully GDPR-compliant consent management built in from day one."
  },
  {
    title: "Smart Check-In",
    description: "Enable geofencing for automatic customer check-in and flow tracking."
  },
  {
    title: "Multi-Sector Ready",
    description: "From salons to clinics and cafés – Qlo adapts to any walk-in business."
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feat, idx) => (
          <div key={idx} className="p-6 bg-zinc-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-zinc-400">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
