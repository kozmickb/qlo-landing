import { motion } from 'framer-motion';

function Hero() {
  return (
    <header className="px-6 py-20 text-center border-b border-zinc-800 relative overflow-hidden animated-bg">
      <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
        <img src="/QLO logo.png" alt="Qlo Logo" className="h-16 w-auto" />
        <a href="https://web.qlo.app" target="_blank" className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:opacity-90 transition">
          Launch App
        </a>
      </div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl mt-10 font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent mb-6">
        Optimise Footfall. Predict Demand. Delight Customers.
      </h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="text-zinc-400 max-w-2xl mx-auto mb-6">
        Every minute your customers wait, you lose revenue. Qlo gives you the tools to take control — in real time.
      </p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-wrap justify-center gap-4">
        <a href="#problem" className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-white transition">Why Qlo?</a>
        <a href="#manager" className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-white transition">Manager Journey</a>
        <a href="#customer" className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-white transition">Customer Experience</a>
        <a href="mailto:hello@qlo.app" className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition">See Qlo in Action</a>
      </div>
    </header>
  )
}
export default Hero

<style>
  .animated-bg::before {
    content: "";
    position: absolute;
    top: -30%;
    left: -25%;
    width: 160%;
    height: 160%;
    background: radial-gradient(circle at 20% 30%, rgba(255,63,141,0.07), transparent),
                radial-gradient(circle at 80% 60%, rgba(173,92,255,0.07), transparent);
    animation: bgMotion 24s linear infinite;
    z-index: 0;
  }

  @keyframes bgMotion {
    0% { transform: translate(0, 0); }
    50% { transform: translate(4%, -3%); }
    100% { transform: translate(0, 0); }
  }
</style>
