import { motion } from 'framer-motion';

const businessFeatures = [
  {
    title: 'Performance Metrics',
    description: 'Live insights into queue volume, dwell time, and throughput rates.',
    image: '/Screenshots/manager-metrics-preview.png',
  },
  {
    title: 'Staff Scheduling',
    description: 'Align staffing levels with real-time demand and predictive traffic patterns.',
    image: '/Screenshots/manager-schedule-preview.png',
  },
  {
    title: 'Traffic Pattern Analysis',
    description: 'Visualise customer flow trends across days and hours.',
    image: '/Screenshots/manager-traffic-pattern-preview.png',
  },
  {
    title: 'Live Notifications',
    description: 'Instant alerts for queue surges and staffing thresholds.',
    image: '/Screenshots/manager-notifications-preview.png',
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
              className="bg-zinc-900 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded shadow mb-4"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
