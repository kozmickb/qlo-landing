import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/LiveWaitTimes.png', caption: 'Live Wait Times (Customer)', type: 'customer' },
  { src: '/BestTimesToday.png', caption: 'AI Predictions (Customer)', type: 'customer' },
  { src: '/tp_prediction_guide.jpg', caption: 'Prediction Guide (Customer)', type: 'customer' },
  { src: '/ManagerSchedule.png', caption: 'Scheduling (Business)', type: 'business' },
  { src: '/ManagerNotifications.png', caption: 'Staff Notifications (Business)', type: 'business' },
  { src: '/ManagerMetrics.png', caption: 'Business Metrics Dashboard', type: 'business' },
  { src: '/ManagerTrafficPattern.png', caption: 'Heatmap Insights (Business)', type: 'business' },
];

export default function Screenshots() {
  return (
    <section className="bg-zinc-950 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Product Experience</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          See how Qlo empowers both your team and your customers through real-time visibility and powerful forecasting.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-800 p-4 rounded-lg shadow-md"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-auto rounded mb-3 object-cover shadow"
            />
            <p className="text-sm text-zinc-300">{img.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}