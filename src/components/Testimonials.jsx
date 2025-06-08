import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "We've seen a 30% increase in walk-ins thanks to Qlo’s predictive traffic data.",
    name: "Lisa",
    business: "Barber Lounge, Manchester"
  },
  {
    quote: "Qlo helped us reduce queue times and manage our schedule more efficiently.",
    name: "Adeel",
    business: "Beauty Studio, Birmingham"
  },
  {
    quote: "Our MOT garage now runs smoother during busy times — it’s transformed how we work.",
    name: "Sarah",
    business: "DriveSafe MOT, Liverpool"
  },
  {
    quote: "The daily insights are a game changer — especially for staff planning.",
    name: "Tasha",
    business: "Nail Lab, Leeds"
  },
  {
    quote: "We’ve grown repeat customers just by managing our busiest hours better.",
    name: "Jay",
    business: "Urban Deli, London"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-950 px-6 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Trusted by High Street Businesses</h2>
        <p className="text-zinc-400 mt-2">Barbers, nail salons, MOTs, and more are using Qlo to optimise footfall.</p>
      </div>
      <motion.div
        className="flex gap-6 animate-slide"
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear'
        }}
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-xs bg-zinc-900 p-6 rounded-xl shadow-lg flex-shrink-0"
          >
            <p className="text-zinc-300 text-sm italic mb-4">“{t.quote}”</p>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-zinc-500">{t.business}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
