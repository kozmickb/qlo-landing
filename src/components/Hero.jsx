function Hero() {
  return (
    <header className="px-6 py-16 text-center border-b border-zinc-800 relative">
      <a href="https://web.qlo.app" target="_blank" className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:opacity-90 transition">
        Launch App
      </a>
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent mb-4">
        The Future of Walk-in Traffic is Predictable
      </h1>
      <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
        Every minute your customers wait, you lose revenue. Qlo gives you the tools to take control — in real time.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#problem" className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-white transition">Why Qlo?</a>
        <a href="#manager" className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-white transition">Manager Journey</a>
        <a href="#customer" className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-white transition">Customer Experience</a>
        <a href="mailto:hello@qlo.app" className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">See Qlo in Action</a>
      </div>
    </header>
  )
}
export default Hero
