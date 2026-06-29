import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { salon, rdvMessage, heroSlides, offre } from '../data'
import Photo from './Photo'
import Icon from './Icon'

export default function Hero() {
  const [i, setI] = useState(0)
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 4200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 md:pt-24">
      {/* halos orange */}
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-orange/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr,1fr]">
        {/* Texte */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <span className="chip mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" /> {offre.chip}
          </span>
          <h1 className="font-serif text-6xl leading-[0.92] text-ink md:text-7xl lg:text-8xl">
            Sublimez votre <span className="text-grad-orange">beauté</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-500">
            {salon.nom} — {salon.activite} à {salon.ville}. Coiffure, tresses, tissages,
            soins, maquillage et onglerie, dans un écrin chaleureux et raffiné.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-orange">
              <Icon name="whatsapp" className="h-5 w-5" /> Prendre rendez-vous
            </a>
            <Link to="/prestations" className="btn-ghost">
              Nos prestations <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-serif text-3xl text-orange-deep">500+</p>
              <p className="text-xs uppercase tracking-widest text-ink-500">Clientes</p>
            </div>
            <div className="h-10 w-px bg-ink/15" />
            <div className="flex items-center gap-1 text-orange">
              {[0, 1, 2, 3, 4].map((s) => <Icon key={s} name="star" className="h-5 w-5" />)}
              <span className="ml-2 text-xs uppercase tracking-widest text-ink-500">5/5</span>
            </div>
          </div>
        </motion.div>

        {/* Visuel : diaporama dans un cadre incliné + badge */}
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.4rem] bg-gradient-to-br from-orange/40 to-gold/30 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] shadow-glow ring-1 ring-white/40">
            <AnimatePresence mode="popLayout">
              <motion.div key={i} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }} className="absolute inset-0">
                <Photo name={heroSlides[i]} alt="Renia House" className="h-full w-full object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* badge flottant */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-cream-100 p-4 shadow-soft">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/15 text-orange-deep"><Icon name="calendar" className="h-6 w-6" /></span>
            <div>
              <p className="text-sm font-semibold text-ink">Sur rendez-vous</p>
              <p className="text-xs text-ink-500">Réservez sur WhatsApp</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
