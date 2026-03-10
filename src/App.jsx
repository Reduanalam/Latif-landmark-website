import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import PlotMap from './components/PlotMap'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Properties />
      <PlotMap />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
