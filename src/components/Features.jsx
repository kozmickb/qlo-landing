import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: 'Live Wait Time Visualisation',
      desc: 'Show real-time queue status and reduce walk-outs.',
      img: '/Screenshots/LiveWaitTimes.png',
    },
    {
      title: 'AI-Powered Predictions',
      desc: 'Forecast traffic and optimise staffing intelligently.',
      img: '/Screenshots/AIPoweredPredicts.png',
    },
    {
      title: 'Daily Prediction Guide',
      desc: 'See the day’s expected peaks in one glance.',
      img: '/Screenshots/DailyPredicts.png',
    },
    {
      title: 'Manager Metrics Dashboard',
      desc: 'Actionable KPIs tailored for operations and growth.',
      img: '/Screenshots/ManagerMetrics.png',
    },
    {
      title: 'Customer Distance Cards',
      desc: 'Visualise walk-in customer proximity data in real time.',
      img: '/Screenshots/distance_card.jpg',
    },
    {
      title: 'Consent-First GDPR Compliance',
      desc: 'Built-in privacy by design — no retrofitting required.',
      img: '/Screenshots/tp_prediction_guide.jpg',
    },
  ];

  return (
    <section id="features" className="bg-zinc-950 px-6 py-24 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Smart Features. Real Results.</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Every feature in Qlo is designed to reduce friction, boost engagement, and empower better business decisions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={f.img} alt={f.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-400">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
