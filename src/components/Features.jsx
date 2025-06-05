export default function Features() {
  const features = [
    { title: "Live Wait Time Visualisation", desc: "Reduce walk-outs by showing real-time wait times." },
    { title: "AI-Powered Predictions", desc: "Forecast traffic and optimise staff scheduling." },
    { title: "Smart Check-In", desc: "Enable auto check-in via geofencing." },
    { title: "Performance Dashboards", desc: "Insightful analytics for managers and barbers." },
    { title: "Consent-First Data", desc: "GDPR-compliant from day one." },
    { title: "Multi-Sector Ready", desc: "Built for salons, clinics, cafés and more." },
  ];

  return (
    <section className="bg-zinc-900 px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
            <p className="text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}