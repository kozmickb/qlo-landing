import React from 'react';

export default function Features() {
  const features = [
    {
      title: 'Live Wait Time Visualisation',
      desc: 'Show your customers real-time wait times and reduce walk-outs.',
    },
    {
      title: 'AI-Powered Predictions',
      desc: 'Use machine learning to forecast traffic and optimise staff schedules.',
    },
    {
      title: 'Smart Check-In',
      desc: 'Enable geofencing for automatic customer check-in and flow tracking.',
    },
    {
      title: 'Performance Dashboards',
      desc: 'Barber, manager and admin views tailored for operations and insight.',
    },
    {
      title: 'Consent-First Data',
      desc: 'Fully GDPR-compliant consent management built in from day one.',
    },
    {
      title: 'Multi-Sector Ready',
      desc: 'From salons to clinics and cafés – Qlo adapts to any walk-in business.',
    },
  ];

  return (
    <section id="features" className="bg-zinc-900 px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, index) => (
          <div key={index} className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-zinc-400">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
