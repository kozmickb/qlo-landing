
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Optimise Footfall. Predict Demand. Delight Customers.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
        Every minute your customers wait, you lose revenue. Qlo gives you the tools to take control — in real time.
      </motion.p>
    </motion.div>
  );
}
