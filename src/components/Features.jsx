import { motion } from 'framer-motion';

const customerFeatures = [
  {
    title: 'Live Wait Times',
    description: 'Know exactly how long the queue is in real-time before you leave the house.',
    image: '/Screenshots/LiveWaitTimes.png'
  },
  {
    title: 'AI-Powered Predictions',
    description: 'Plan your visits with smart traffic forecasts, powered by usage patterns.',
    image: '/Screenshots/AIPoweredPredicts.png'
  },
  {
    title: 'Distance Tracking',
    description: 'See how far you are from the shop and estimated time to arrival.',
    image: '/Screenshots/distance_card.jpg'
  },
  {
    title: 'Best Times Today',
    description: 'Recommendations for the quietest times to visit today.',
    image: '/Screenshots/BestTimesToday.png'
  },
  {
    title: 'Daily Predicts',
    description: 'Overview of peak and off-peak hours by weekday.',
    image: '/Screenshots/DailyPredicts.png'
  }
];

const managerFeatures = [
  {
    title: 'Live Metrics Dashboard',
    description: 'Real-time performance stats for queue length, dwell time, and customer flow.',
    image: '/Screenshots/ManagerMetrics.png'
  },
  {
    title: 'Smart Notifications',
    description: 'Trigger alerts for queue surges and pattern changes.',
    image: '/Screenshots/ManagerNotifications.png'
  },
  {
    title: 'Staff Scheduling',
    description: 'Optimise staffing against traffic patterns and load forecasts.',
    image: '/Screenshots/ManagerSchedule.png'
  },
  {
    title: 'Traffic Pattern View',
    description: 'Historical view of footfall by time of day and week.',
    image: '/Screenshots/ManagerTrafficPattern.png'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white text-center">For Customers</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {customerFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg mb-4 shadow-md"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold mb-1 text-white">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white text-center">For Business Owners</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {managerFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg mb-4 shadow-md"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold mb-1 text-white">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
