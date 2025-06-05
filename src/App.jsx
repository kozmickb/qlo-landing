import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">
      <div className="space-y-32 scroll-smooth">
        <Hero />
        <Features />
      </div>
      <Footer />
    </div>
  )
}
export default App
