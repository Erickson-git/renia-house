import { Link } from 'react-router-dom'
import { salon } from '../data'

export default function Footer() {
  const annee = new Date().getFullYear()
  const logo = `${import.meta.env.BASE_URL}assets/${salon.logoXofix}`

  return (
    <footer className="bg-brown-700 px-5 pt-12 text-cream/70">
      <div className="mx-auto grid max-w-6xl gap-8 pb-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">Renia<span className="text-gold-soft"> House</span></p>
          <p className="mt-2 text-sm">{salon.activite}</p>
          <p className="text-sm">{salon.ville}</p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-luxe text-gold-soft">Navigation</p>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/" className="hover:text-cream">Accueil</Link></li>
            <li><Link to="/prestations" className="hover:text-cream">Prestations</Link></li>
            <li><Link to="/galerie" className="hover:text-cream">Galerie</Link></li>
            <li><Link to="/a-propos" className="hover:text-cream">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-luxe text-gold-soft">Suivez-nous</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={salon.reseaux.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cream">Instagram</a>
            <a href={salon.reseaux.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-cream">TikTok</a>
            <a href={salon.reseaux.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cream">Facebook</a>
          </div>
          <p className="mt-3 text-sm">{salon.telephone}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-cream/10 py-6 text-center sm:flex-row">
        <p className="text-xs uppercase tracking-luxe text-cream/40">© {annee} Renia House</p>
        <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-luxe text-cream/50">
          Réalisé par
          <img src={logo} alt="XOFIX" className="h-5 w-auto opacity-80" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <span className="font-semibold text-cream/70">XOFIX</span>
        </a>
      </div>
    </footer>
  )
}
