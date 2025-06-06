import { motion } from 'framer-motion';

const customerFeatures = [
  {
    img: '/Screenshots/LiveWaitTimes.png',
    title: 'Live Wait Times',
    description: 'Customers can view real-time queue info before arrival.',
  },
  {
    img: '/Screenshots/BestTimesToday.png',
    title: 'Visit Smarter',
    description: 'App recommends optimal visit times to reduce wait.',
  },
  {
    img: '/Screenshots/DailyPredicts.png',
    title: 'Daily Predicts',
    description: 'Intelligent forecasts based on historic patterns.',
  },
  {
    img: '/Screenshots/distance_card.jpg',
    title: 'Distance View',
    description: 'Helps customers select the closest and least busy branch.',
  },
];

export default function CustomerJourney() {
  return (
    <section id="customer" className="bg-zinc-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Experience Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {customerFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-800 p-6 rounded-lg shadow"
              initial={{ opacity: 0, y: 40 }}
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
