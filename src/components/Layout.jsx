import React from 'react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="p-6 border-b border-zinc-800 flex justify-between items-center">
        <img src="/QLO logo.png" alt="Qlo Logo" className="h-12" />
        <a href="https://web.qlo.app" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">Launch Web App</a>
      </header>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Optimise Footfall. Predict Demand. Delight Customers.</h1>
        <p className="text-zinc-400 mb-8">Qlo empowers walk-in businesses to manage queues and grow revenue using real-time insights and predictive analytics.</p>
      </main>
      <footer className="p-6 border-t border-zinc-800 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Qlo Technologies. All rights reserved.
      </footer>
    </div>
  );
}