import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Daniel – Barber Shop Owner, London',
    quote: 'Qlo doubled our walk-ins within a month. The wait-time transparency gave customers the confidence to come in.',
  },
  {
    name: 'Claire – Nail Salon Manager, Birmingham',
    quote: 'We used to guess our busiest times. Now we optimise staff around real data. Qlo’s a game changer.',
  },
  {
    name: 'Mo – MOT Centre Operator, Manchester',
    quote: 'No more queues out the door. People arrive steadily thanks to traffic predictions.',
  },
  {
    name: 'Sarah – Beauty Therapist, Liverpool',
    quote: 'It’s sleek, simple, and my clients love the real-time queue visibility.',
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="testimonials" className="bg-zinc-800 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Businesses Say</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 p-8 rounded-xl shadow-lg"
          >
            <p className="text-xl mb-4 italic">“{testimonials[index].quote}”</p>
            <p className="text-zinc-400 text-sm">{testimonials[index].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
