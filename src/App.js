function App() {
  const features = [
    {
      title: "Real-Time Wait Times",
      description: "Instantly view up-to-date wait times for your local Barber or Nail Shop locations.",
      icon: "⏱️",
    },
    {
      title: "Smart Traffic Predictions",
      description: "Plan your visit with AI-powered predictions for the best times to avoid queues.",
      icon: "📊",
    },
    {
      title: "Multiple Locations",
      description: "See live data and info for multiple shop locations.",
      icon: "📍",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#1a1832] via-[#232346] to-[#313150] min-h-screen text-white font-sans">
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/QLO.png" alt="Qlo logo" className="h-16 md:h-20 w-auto" />
        </div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-[#7B3FE4] transition">Features</a>
          <a href="#locations" className="hover:text-[#7B3FE4] transition">Locations</a>
          <a href="#login" className="bg-[#7B3FE4] px-5 py-2 rounded-full text-white font-medium shadow-lg hover:bg-[#a58fff] transition">Sign In</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Smarter Walk-In<br className="hidden md:block" /> Queue Management
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-xl">
            Qlo makes walk-in visits effortless. Check wait times, compare locations, and plan your next  trip with confidence.
          </p>
          <a
            href="#login"
            className="inline-block bg-[#7B3FE4] hover:bg-[#a58fff] transition px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
          >
            Get Started
          </a>
        </div>
     <div className="flex-1 mt-10 md:mt-0 flex justify-center">
  <img
    src="/QLO.png"
    alt="Qlo logo"
    className="w-64 h-64 object-contain" // Adjust size as you wish
    style={{ background: "white", borderRadius: "2rem", boxShadow: "0 4px 32px rgba(123,63,228,0.08)" }}
  />
</div>
      </section>

      <section id="features" className="bg-[#232346] py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="bg-[#1a1832] rounded-2xl p-8 shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="locations" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Locations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1832] rounded-xl p-6 shadow-md">
            <h4 className="text-lg font-semibold">Brentwood</h4>
            <p className="text-gray-400">27 High Street, Brentwood, Essex CM14 4RG</p>
          </div>
          <div className="bg-[#1a1832] rounded-xl p-6 shadow-md">
            <h4 className="text-lg font-semibold">Chelmsford</h4>
            <p className="text-gray-400">2-4 New London Road, Chelmsford, Essex CM2 0PF</p>
          </div>
          <div className="bg-[#1a1832] rounded-xl p-6 shadow-md">
            <h4 className="text-lg font-semibold">Hornchurch</h4>
            <p className="text-gray-400">140 High Street, Hornchurch, RM12 6AH</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 bg-[#232346]">
        © {new Date().getFullYear()} Qlo. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
