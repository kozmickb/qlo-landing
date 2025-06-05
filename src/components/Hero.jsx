import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
      <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-white">
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-zinc-400 mt-4">
        Qlo helps walk-in businesses manage queues, improve service, and grow revenue with predictive insights.
      </motion.p>
      <div className="mt-6">
        <a href="https://web.qlo.app" target="_blank" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-2 rounded-full text-white">
          Launch App
        </a>
      </div>
    </motion.div>
  );
}