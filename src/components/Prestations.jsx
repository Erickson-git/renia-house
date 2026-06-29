import { motion } from 'framer-motion'
import { prestations } from '../data'

export default function Prestations() {
  return (
    <section id="prestations" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="eyebrow mb-3">Nos prestations</p>
          <h2 className="font-serif text-4xl text-brown md:text-5xl">
            Tout pour votre <span className="text-gold-deep">beauté</span>
          </h2>
          <div className="gold-rule mt-5" />
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prestations.map((p, i) => (
            <motion.article
              key={p.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-2xl border border-brown/10 bg-cream-100 p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="mb-4 text-4xl">{p.icone}</div>
              <h3 className="font-serif text-2xl text-brown">{p.titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-500">{p.desc}</p>
              <p className="mt-4 text-sm font-medium uppercase tracking-wide text-gold-deep">
                {p.prix}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
