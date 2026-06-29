import { motion } from 'framer-motion'
import { galerie } from '../data'
import Photo from './Photo'

export default function Galerie() {
  return (
    <section id="galerie" className="bg-cream-200/60 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="eyebrow mb-3">Nos réalisations</p>
          <h2 className="font-serif text-4xl text-brown md:text-5xl">La galerie</h2>
          <div className="gold-rule mt-5" />
        </header>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galerie.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <Photo
                name={g.fichier}
                alt={g.legende}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-brown/60 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-serif text-lg text-cream">{g.legende}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brown-500">
          Suivez-nous pour plus de réalisations 💫
        </p>
      </div>
    </section>
  )
}
