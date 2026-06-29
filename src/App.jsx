import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PromoBar from './components/PromoBar'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Accueil from './pages/Accueil'
import Prestations from './pages/Prestations'
import Galerie from './pages/Galerie'
import APropos from './pages/APropos'
import Contact from './pages/Contact'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <ScrollTop />
      <PromoBar />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
