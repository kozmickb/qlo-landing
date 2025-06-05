function Hero() {
  return (
    <header className="px-6 py-10 text-center border-b border-zinc-800">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent mb-4">
        Optimise Footfall. Predict Demand. Delight Customers.
      </h1>
      <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
        Qlo helps walk-in businesses manage queues, improve service, and grow revenue with real-time insights.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#features" className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-white transition">See Features</a>
        <a href="mailto:hello@qlo.app" className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">Book a Demo</a>
      </div>
    </header>
  )
}

export default Hero
