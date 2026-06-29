import { salon } from '../data'

export default function Footer() {
  const annee = new Date().getFullYear()
  return (
    <footer className="bg-brown-700 px-5 py-10 text-center text-cream/70">
      <p className="font-serif text-2xl text-cream">
        Renia<span className="text-gold-soft"> House</span>
      </p>
      <p className="mt-2 text-sm">{salon.activite} · {salon.ville}</p>
      <p className="mt-6 text-xs uppercase tracking-luxe text-cream/40">
        © {annee} Renia House — Site réalisé par XOFIX
      </p>
    </footer>
  )
}
