import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white"
      >
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <p className="mt-4 text-zinc-400">
        Real-time insights for walk-in business performance.
      </p>
      <div className="mt-6">
        <a
          href="https://web.qlo.app"
          target="_blank"
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-2 rounded-full text-white font-semibold"
        >
          Launch App
        </a>
      </div>
    </section>
  );
}
