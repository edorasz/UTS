import { About } from './components/About'
import { RecentWork } from './components/RecentWork'
import { Testimonials } from './components/Testimonials'
import { Arrivals } from './components/Arrivals'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 font-sans text-[#1A1A1A]">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-3 leading-tight tracking-tight">How Developer — UI/UX</h1>
        <div className="w-28 h-[3px] bg-black"></div>
      </header>

      <About />
      <RecentWork />
      
      <div className="my-16 border-t border-black pt-8">
        <h3 className="text-xl font-medium mb-4">Consistent marks:</h3>
        <p className="text-lg">Exploration to minutes.</p>
      </div>

      <Testimonials />
      <Arrivals />
      <Footer />
    </div>
  )
}

export default App