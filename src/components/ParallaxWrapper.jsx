import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxWrapper({ speed = 0.3, children }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
