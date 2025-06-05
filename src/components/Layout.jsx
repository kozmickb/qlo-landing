import Hero from './Hero';
import Features from './Features';

export default function Layout() {
  return (
    <main className="bg-zinc-950 text-white">
      <Hero />
      <Features />
    </main>
  );
}