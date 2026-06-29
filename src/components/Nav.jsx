import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { salon, rdvMessage } from '../data'

const liens = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/prestations', label: 'Prestations' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${isActive ? 'text-gold-deep font-medium' : 'text-brown-500 hover:text-gold-deep'}`

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-cream/95 shadow-card backdrop-blur-md' : 'bg-cream/80 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-brown">
          Renia<span className="text-gold"> House</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {liens.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-5 !py-2.5 !text-xs">
            Rendez-vous
          </a>
        </div>

        <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="text-2xl text-brown md:hidden">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brown/10 bg-cream/95 px-5 py-3 md:hidden">
          {liens.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className="block py-2 text-brown-500"
            >
              {l.label}
            </NavLink>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-3 w-full">
            Prendre rendez-vous
          </a>
        </div>
      )}
    </header>
  )
}
