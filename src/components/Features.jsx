function Features() {
  return (
    <section id="features" className="bg-zinc-900 px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Live Wait Time Visualisation</h3>
          <p className="text-zinc-400">Show your customers real-time wait times and reduce walk-outs.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">AI-Powered Predictions</h3>
          <p className="text-zinc-400">Use machine learning to forecast traffic and optimise staff schedules.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Smart Check-In</h3>
          <p className="text-zinc-400">Enable geofencing for automatic customer check-in and flow tracking.</p>
        </div>
      </div>
    </section>
  )
}
export default Features
