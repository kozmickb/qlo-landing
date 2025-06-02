export default function App() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-zinc-800">
        <img src="/QLO logo.png" alt="Qlo Logo" className="h-10" />
        <a
          href="https://qlo.replit.app"
          target="_blank"
          className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          Launch Web App
        </a>
      </header>

      <section className="flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF]">
          Optimise Footfall. Predict Demand. Delight Customers.
        </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-xl">
          Qlo helps walk-in businesses manage queues, improve service, and grow revenue with real-time insights and predictive traffic tools.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://qlo.replit.app"
            target="_blank"
            className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition"
          >
            Try Live Demo
          </a>
          <a
            href="#features"
            className="border border-zinc-700 text-zinc-100 px-6 py-3 rounded-full font-semibold text-sm hover:border-zinc-500 transition"
          >
            See Features
          </a>
        </div>
      </section>

      <section id="features" className="bg-zinc-900 px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ['Live Wait Time Visualisation', 'Show your customers real-time wait times and reduce walk-outs.'],
            ['AI-Powered Predictions', 'Use machine learning to forecast traffic and optimise staff schedules.'],
            ['Smart Check-In', 'Enable geofencing for automatic customer check-in and flow tracking.'],
            ['Performance Dashboards', 'Barber, manager and admin views tailored for operations and insight.'],
            ['Consent-First Data', 'Fully GDPR-compliant consent management built in from day one.'],
            ['Multi-Sector Ready', 'From salons to clinics and cafés – Qlo adapts to any walk-in business.']
          ].map(([title, desc], i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-auto px-6 py-6 text-center text-zinc-500 border-t border-zinc-800 text-sm">
        &copy; {new Date().getFullYear()} Qlo Technologies. All rights reserved.
      </footer>
    </main>
  );
}
