import { useEffect, useState } from 'react'
import { salon, rdvMessage } from '../data'

const liens = [
  { href: '#prestations', label: 'Prestations' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#apropos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'bg-cream/90 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-wide text-brown">
          Renia<span className="text-gold"> House</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {liens.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-brown-500 transition-colors hover:text-gold-deep">
              {l.label}
            </a>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-5 !py-2.5 !text-xs">
            Rendez-vous
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="text-2xl text-brown md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brown/10 bg-cream/95 px-5 py-4 md:hidden">
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-brown-500"
            >
              {l.label}
            </a>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-3 w-full">
            Prendre rendez-vous
          </a>
        </div>
      )}
    </header>
  )
}
