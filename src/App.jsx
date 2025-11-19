import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A1E42]">
      {/* subtle star grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07]" style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: '24px 24px'
      }} />

      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Showcase />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App