import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Qlo helped us reduce wait times and keep customers happy.",
    name: "The Barber’s Chair",
    type: "Barbershop"
  },
  {
    quote: "We now serve 20% more clients with the same staff thanks to Qlo.",
    name: "Gloss & Go",
    type: "Nail Salon"
  },
  {
    quote: "Real-time predictions mean we’re never caught short-staffed.",
    name: "Beauty Haven",
    type: "Beauty Salon"
  },
  {
    quote: "Customers love knowing how long they’ll wait before arriving.",
    name: "The Deli Drop",
    type: "Deli Counter"
  },
  {
    quote: "Qlo helped us better manage the busy MOT rush hours.",
    name: "QuickFix MOT",
    type: "MOT Centre"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-900 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">What Businesses Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-zinc-300 text-lg italic mb-4">“{item.quote}”</p>
              <p className="text-white font-semibold">{item.name}</p>
              <p className="text-zinc-400 text-sm">{item.type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
