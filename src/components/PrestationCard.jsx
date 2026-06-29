import { motion } from 'framer-motion'
import Photo from './Photo'

export default function PrestationCard({ p, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-brown/10 bg-cream-100 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative h-52 overflow-hidden">
        <Photo name={p.image} alt={p.titre} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-lg">{p.icone}</span>
        <h3 className="absolute bottom-3 left-4 font-serif text-2xl text-cream">{p.titre}</h3>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-brown-500">{p.desc}</p>
        <p className="mt-4 text-sm font-medium uppercase tracking-wide text-gold-deep">{p.prix}</p>
      </div>
    </motion.article>
  )
}
