import { motion } from 'framer-motion';

const businessFeatures = [
  {
    img: '/Screenshots/ManagerMetrics.png',
    title: 'Performance Insights',
    description: 'Understand peak hours, team utilisation, and efficiency metrics.',
  },
  {
    img: '/Screenshots/ManagerSchedule.png',
    title: 'Smart Scheduling',
    description: 'Align staff coverage with real-time footfall data.',
  },
  {
    img: '/Screenshots/ManagerTrafficPattern.png',
    title: 'Traffic Pattern Analysis',
    description: 'Predict demand by hour, day, and seasonality trends.',
  },
  {
    img: '/Screenshots/ManagerNotifications.png',
    title: 'Real-time Alerts',
    description: 'Be notified when wait times spike or staffing drops below target.',
  },
];

export default function BusinessJourney() {
  return (
    <section id="business" className="bg-zinc-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Business Manager Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={feature.img} alt={feature.title} className="rounded shadow mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
