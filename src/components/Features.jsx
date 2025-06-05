function Features() {
  const managerFeatures = [
    { title: "Actionable Metrics", img: "ManagerMetrics.png", desc: "Track performance KPIs across all locations with custom dashboards." },
    { title: "Smart Staff Scheduling", img: "ManagerSchedule.png", desc: "Align staff rotas with forecasted demand using Qlo's AI." },
    { title: "Traffic Pattern Analysis", img: "ManagerTrafficPattern.png", desc: "Plan for peak times with precision and avoid overstaffing." },
    { title: "Proactive Notifications", img: "ManagerNotifications.png", desc: "Get alerts before issues become complaints." }
  ];
  const customerFeatures = [
    { title: "Live Wait Time Displays", img: "LiveWaitTimes.png", desc: "Show customers exactly how long they’ll wait — before they arrive." },
    { title: "AI Predictive Insights", img: "AIPoweredPredicts.png", desc: "Help them choose quiet periods with confidence." },
    { title: "Visual Time Guidance", img: "tp_prediction_guide.jpg", desc: "A simple view of when it’s best to visit." },
    { title: "Best Time Cards", img: "BestTimesToday.png", desc: "Compare locations in seconds with intuitive traffic cards." }
  ];

  return (
    <div>
      <section id="problem" className="px-6 py-20 bg-zinc-950 text-center">
        <h2 className="text-3xl font-bold mb-4">Every minute a customer waits is money lost.</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Walk-in businesses lose up to 12% in daily revenue from poor queue experiences, unclear wait times, and unpredictable traffic.
          Qlo changes that — with real-time visibility and predictive control.
        </p>
      </section>

      <section id="manager" className="px-6 py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">For Business Managers</h2>
          <p className="text-zinc-400 mt-2">From chaos to clarity — insights that drive operations and revenue.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {managerFeatures.map(({ title, img, desc }) => (
            <div key={title} className="flex flex-col items-center text-center transform transition hover:-translate-y-1">
              <img src={`/assets/${img}`} alt={title} className="rounded shadow-md max-w-xs w-full mb-3" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="customer" className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">For Customers</h2>
          <p className="text-zinc-400 mt-2">A smooth, informed visit every time — no guessing, no queue anxiety.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {customerFeatures.map(({ title, img, desc }) => (
            <div key={title} className="flex flex-col items-center text-center transform transition hover:-translate-y-1">
              <img src={`/assets/${img}`} alt={title} className="rounded shadow-md max-w-xs w-full mb-3" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Features
