import React from 'react';

const features = [
  {
    title: 'Live Wait Time Visualisation',
    desc: 'Show customers real-time wait times and reduce walk-outs.',
  },
  {
    title: 'AI-Powered Predictions',
    desc: 'Forecast busy periods and staff intelligently using ML.',
  },
  {
    title: 'Performance Dashboards',
    desc: 'Get insights from check-ins, queues, and footfall patterns.',
  },
  {
    title: 'Smart Notifications',
    desc: 'Alert barbers and staff when customers are nearby or overdue.',
  },
  {
    title: 'Geofenced Check-In',
    desc: 'Track visits and queues using passive geolocation triggers.',
  },
  {
    title: 'Multi-Sector Ready',
    desc: 'Barbers, cafés, clinics – Qlo adapts to any walk-in business.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-900 px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Features That Drive Results</h2>
        <p className="text-zinc-400 mb-10">
          Discover what makes Qlo a must-have tool for customer-first walk-in businesses.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}