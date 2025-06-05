function Features() {
  const features = [
    { title: "AI Predictions", img: "AIPoweredPredicts.png" },
    { title: "Daily Predictions", img: "DailyPredicts.png" },
    { title: "Best Times", img: "BestTimesToday.png" },
    { title: "Live Wait Times", img: "LiveWaitTimes.png" },
    { title: "Manager Metrics", img: "ManagerMetrics.png" },
    { title: "Manager Notifications", img: "ManagerNotifications.png" },
    { title: "Staff Scheduling", img: "ManagerSchedule.png" },
    { title: "Location Overview", img: "distance_card.jpg" },
    { title: "Traffic Patterns", img: "ManagerTrafficPattern.png" },
    { title: "Prediction Guide", img: "tp_prediction_guide.jpg" }
  ]

  return (
    <section className="px-6 py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map(({ title, img }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <img src={`/assets/${img}`} alt={title} className="rounded shadow-md max-w-xs w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
