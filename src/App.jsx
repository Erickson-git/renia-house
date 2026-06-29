import Nav from './components/Nav'
import Hero from './components/Hero'
import Prestations from './components/Prestations'
import Galerie from './components/Galerie'
import APropos from './components/APropos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Prestations />
        <Galerie />
        <APropos />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
