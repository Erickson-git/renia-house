import { motion } from 'framer-motion'
import { salon, rdvMessage } from '../data'
import Photo from './Photo'

export default function Hero() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
      {/* halo décoratif */}
      <div aria-hidden className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-rose-soft/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4">{salon.activite} · {salon.ville}</p>
          <h1 className="font-serif text-6xl leading-[0.95] text-brown md:text-7xl">
            {salon.nom}
          </h1>
          <p className="mt-5 max-w-md font-serif text-2xl italic text-gold-deep">
            {salon.slogan}
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-brown-500">
            Coiffure, tresses, tissages, soins, maquillage et onglerie — un salon
            où l'on prend soin de vous de la tête aux ongles.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <span aria-hidden>📅</span> Prendre rendez-vous
            </a>
            <a href="#prestations" className="btn-gold">Nos prestations</a>
          </div>
        </motion.div>

        {/* Visuel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/30 to-rose/30 blur-xl" />
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <Photo name="hero.jpg" alt="Renia House — salon" className="aspect-[4/5] w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
