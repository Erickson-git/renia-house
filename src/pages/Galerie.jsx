import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Photo from '../components/Photo'
import { galerie, salon } from '../data'

export default function Galerie() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Nos réalisations"
          title="La galerie"
          sub="Un aperçu de nos coiffures, maquillages et créations onglerie."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galerie.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <Photo name={g.fichier} alt={g.legende} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-brown/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-serif text-lg text-cream">{g.legende}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-brown-500">
          Suivez-nous sur{' '}
          <a href={salon.reseaux.instagram} target="_blank" rel="noopener noreferrer" className="font-medium text-gold-deep hover:underline">Instagram</a>{' '}
          et{' '}
          <a href={salon.reseaux.tiktok} target="_blank" rel="noopener noreferrer" className="font-medium text-gold-deep hover:underline">TikTok</a>{' '}
          pour plus de réalisations.
        </p>
      </div>
    </section>
  )
}
