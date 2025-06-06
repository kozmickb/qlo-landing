import { motion } from 'framer-motion';

export default function DemoCTA() {
  return (
    <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-16 text-center">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Ready to see Qlo in action?
      </motion.h2>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Book a live demo and discover how Qlo can transform your business.
      </motion.p>
      <motion.a
        href="mailto:hello@qlo.app"
        className="inline-block mt-8 bg-white text-purple-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-purple-200 transition"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Book a Demo
      </motion.a>
    </section>
  );
}
