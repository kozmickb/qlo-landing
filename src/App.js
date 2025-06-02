import React from 'react';
import QloLogo from '/QLO logo.png';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-black text-white">
      <img
        src={QloLogo}
        alt="Qlo Logo"
        className="w-48 mb-8 rounded-xl drop-shadow-xl"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-qloPink via-qloOrchid to-qloViolet">
        Qlo – Intelligent Footfall Management
      </h1>
      <p className="text-xl text-gray-300 mt-6 text-center max-w-xl">
        Designed for walk-in businesses. Predict traffic. Reduce wait. Boost revenue.
      </p>

      <a
        href="https://qlo.replit.app"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-qloPink via-qloOrchid to-qloViolet text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        Launch Web App
      </a>

      <footer className="mt-16 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Qlo Technologies. All rights reserved.
      </footer>
    </main>
  );
}
