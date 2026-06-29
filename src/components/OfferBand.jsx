import { motion } from 'framer-motion'
import { salon, rdvMessage, offre } from '../data'
import Icon from './Icon'

export default function OfferBand() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage + ' (offre -20%)')}`
  return (
    <section className="px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-12 text-center text-white shadow-glow md:px-16 md:py-16"
        style={{ backgroundImage: 'linear-gradient(120deg,#bf551a,#e8742e 55%,#ff9a52)' }}
      >
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
        <span className="chip mb-4 border-white/40 bg-white/15 text-white">{offre.chip}</span>
        <h2 className="font-serif text-4xl md:text-6xl">{offre.titre}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">{offre.texte}</p>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-orange-deep transition-transform hover:-translate-y-0.5">
          <Icon name="whatsapp" className="h-5 w-5" /> {offre.cta}
        </a>
      </motion.div>
    </section>
  )
}
