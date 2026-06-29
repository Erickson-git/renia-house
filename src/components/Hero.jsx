import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { salon, rdvMessage, heroSlides } from '../data'
import Photo from './Photo'
import Icon from './Icon'

export default function Hero() {
  const [i, setI] = useState(0)
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <header className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {/* Diaporama */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Photo name={heroSlides[i]} alt="Renia House" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/40 to-brown/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-4 text-gold-soft"
        >
          {salon.activite} · {salon.ville}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-6xl leading-[0.95] text-cream drop-shadow-lg md:text-8xl"
        >
          {salon.nom}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 font-serif text-2xl italic text-gold-soft md:text-3xl"
        >
          {salon.slogan}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <Icon name="whatsapp" className="h-5 w-5" /> Prendre rendez-vous
          </a>
          <Link to="/prestations" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-cream transition-colors hover:bg-cream hover:text-brown">
            Nos prestations
          </Link>
        </motion.div>

        {/* pastilles */}
        <div className="absolute bottom-6 flex gap-2">
          {heroSlides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Image ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? 'w-7 bg-gold-soft' : 'w-1.5 bg-cream/60'}`}
            />
          ))}
        </div>
      </div>
    </header>
  )
}
