
import React from 'react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <header className="flex justify-between items-center border-b border-zinc-800 pb-4">
        <img src="/QLO logo.png" alt="Qlo Logo" className="h-16" />
        <a href="https://web.qlo.app" className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 text-white px-6 py-2 rounded-full">
          Launch App
        </a>
      </header>
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-4">Optimise Footfall. Predict Demand. Delight Customers.</h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Qlo helps walk-in businesses manage queues, improve service, and grow revenue with real-time insights and predictive traffic tools.
        </p>
      </section>
    </div>
  );
}
