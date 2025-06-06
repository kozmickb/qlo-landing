import { motion } from 'framer-motion';

export default function EarlyAccess() {
  return (
    <section className="bg-gradient-to-br from-zinc-800 to-zinc-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Be the First to Know
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Qlo is launching soon. Sign up now to get early access, pilot invites, and updates.
        </motion.p>

        <motion.form
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Register Interest
          </button>
        </motion.form>
      </div>
    </section>
  );
}
