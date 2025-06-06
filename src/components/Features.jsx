import { motion } from 'framer-motion';

const customerFeatures = [
  { title: "Live Wait Times", img: "/screenshots/LiveWaitTimes.png", desc: "Real-time visibility to reduce walkouts and improve satisfaction." },
  { title: "Best Times To Visit", img: "/screenshots/BestTimesToday.png", desc: "Customers can plan ahead and avoid peak periods." },
  { title: "Daily Predicts", img: "/screenshots/DailyPredicts.png", desc: "AI-based demand forecasting for smarter queue management." },
  { title: "Prediction Guide", img: "/screenshots/tp_prediction_guide.jpg", desc: "Contextual indicators to set expectations and reduce friction." },
  { title: "Location Check-ins", img: "/screenshots/distance_card.jpg", desc: "Track customer flow and geofenced presence with ease." }
];

const managerFeatures = [
  { title: "Traffic Patterns", img: "/screenshots/ManagerTrafficPattern.png", desc: "Identify peak demand and optimise staff allocation." },
  { title: "Manager Metrics", img: "/screenshots/ManagerMetrics.png", desc: "Track queue durations, throughput, and dwell time analytics." },
  { title: "Notification Triggers", img: "/screenshots/ManagerNotifications.png", desc: "Instant alerts for abnormal footfall or capacity spikes." },
  { title: "Smart Scheduling", img: "/screenshots/ManagerSchedule.png", desc: "Auto-suggest optimal staffing based on historic demand." },
  { title: "AI Forecasting", img: "/screenshots/AIPoweredPredicts.png", desc: "Predict and prepare — insights tailored for managers." }
];

function renderFeatureBlock({ title, img, desc }, index) {
  return (
    <motion.div
      key={index}
      className="bg-zinc-800 p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <img src={img} alt={title} className="rounded-lg shadow-lg max-w-full" loading="lazy" />
      <h3 className="text-xl font-semibold mt-4 text-white">{title}</h3>
      <p className="text-zinc-400">{desc}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-zinc-950 px-6 py-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Experience</h2>
        <p className="text-zinc-400 max-w-3xl mx-auto">
          Give your customers confidence and control with transparent queue times, smart predictions, and the best time to visit.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {customerFeatures.map(renderFeatureBlock)}
      </div>
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Manager Insights</h2>
        <p className="text-zinc-400 max-w-3xl mx-auto">
          Powerful dashboards and predictive intelligence to help owners, managers, and operators optimise revenue and resources.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {managerFeatures.map(renderFeatureBlock)}
      </div>
    </section>
  );
}
