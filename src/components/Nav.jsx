import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { salon, rdvMessage } from '../data'
import Icon from './Icon'

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
    `relative text-sm font-medium transition-colors ${isActive ? 'text-orange-deep' : 'text-ink-500 hover:text-orange-deep'}`

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-cream/95 shadow-card backdrop-blur-md' : 'bg-cream/70 backdrop-blur'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange to-orange-deep font-serif text-lg font-bold text-white shadow-glow">R</span>
          <span className="font-serif text-2xl font-semibold tracking-wide text-ink">Renia<span className="text-orange"> House</span></span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {liens.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-orange !px-5 !py-2.5 !text-xs">
            <Icon name="whatsapp" className="h-4 w-4" /> Rendez-vous
          </a>
        </div>

        <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="text-ink md:hidden">
          <Icon name={open ? 'close' : 'menu'} className="h-7 w-7" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream/97 px-5 py-3 md:hidden">
          {liens.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} className="block py-2 text-ink-500">{l.label}</NavLink>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-orange mt-3 w-full">Prendre rendez-vous</a>
        </div>
      )}
    </header>
  )
}
