import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="bg-zinc-900 px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="bg-zinc-800 p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/screenshots/feature1.png"
            alt="Feature 1"
            className="rounded-lg shadow-lg max-w-full"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold mt-4">Feature Title</h3>
          <p className="text-zinc-400">Feature description goes here.</p>
        </motion.div>
      </div>
    </section>
  );
}
