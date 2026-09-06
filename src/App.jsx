import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Starlight from './components/Starlight'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <div className="bg-bg text-white font-body min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Starlight />
        <About />
        <HowItWorks />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}

export default App