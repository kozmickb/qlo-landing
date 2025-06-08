import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-zinc-950 text-zinc-400 text-sm text-center py-6 px-6 mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      &copy; {new Date().getFullYear()} Qlo. All rights reserved.
    </motion.footer>
  );
}
