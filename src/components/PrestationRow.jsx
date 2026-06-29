import { motion } from 'framer-motion'
import Photo from './Photo'
import Icon from './Icon'

export default function PrestationRow({ p, index }) {
  const reversed = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative ${reversed ? 'md:order-2' : ''}`}
      >
        <div aria-hidden className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-orange/25 to-gold/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative aspect-[5/4] overflow-hidden rounded-[1.8rem] shadow-card">
          <Photo name={p.image} alt={p.titre} className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
        </div>
        <span className="absolute -top-5 left-3 font-serif text-7xl text-orange/25 md:text-8xl">{num}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={reversed ? 'md:order-1' : ''}
      >
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/12 text-orange-deep">
          <Icon name={p.icon} className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-4xl text-ink md:text-5xl">{p.titre}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-ink-500">{p.desc}</p>
        <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-orange-deep">{p.prix}</p>
      </motion.div>
    </div>
  )
}
