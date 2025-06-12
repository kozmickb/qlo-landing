import { motion } from 'framer-motion';

const customerFeatures = [
  {
    title: 'Live Wait Times',
    description: 'Real-time updates on queue lengths so customers can decide when to visit.',
    image: '/Screenshots/live-wait-preview.png',
  },
  {
    title: 'Smart Predictions',
    description: 'AI-powered forecasts help customers avoid busy times.',
    image: '/Screenshots/prediction-card-preview.png',
  },
  {
    title: 'Distance & ETA',
    description: 'See how far you are from your chosen business and expected wait time.',
    image: '/Screenshots/distance-card-preview.png',
  },
  {
    title: 'Today’s Best Times',
    description: 'Daily recommendations on when to drop by with the shortest wait.',
    image: '/Screenshots/best-time-today-preview.png',
  },
];

export default function CustomerJourney() {
  return (
    <section id="customer" className="bg-zinc-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {customerFeatures.map((feature, idx) => (
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
