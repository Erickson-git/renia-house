import { motion } from 'framer-motion'
import { temoignages } from '../data'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

export default function Testimonials() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Elles nous font confiance" title="Avis de nos clientes" />
        <div className="grid gap-6 md:grid-cols-3">
          {temoignages.map((t, i) => (
            <motion.figure
              key={t.nom}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card relative p-7"
            >
              <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-orange text-white shadow-glow">
                <Icon name="quote" className="h-5 w-5" />
              </span>
              <div className="mb-3 flex gap-1 text-orange">
                {Array.from({ length: t.note }).map((_, k) => <Icon key={k} name="star" className="h-4 w-4" />)}
              </div>
              <blockquote className="text-ink-500">“{t.texte}”</blockquote>
              <figcaption className="mt-5 border-t border-ink/10 pt-4">
                <p className="font-serif text-lg text-ink">{t.nom}</p>
                <p className="text-xs uppercase tracking-widest text-orange-deep">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
