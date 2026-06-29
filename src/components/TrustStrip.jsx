import { motion } from 'framer-motion'
import { atouts } from '../data'
import Icon from './Icon'

export default function TrustStrip() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {atouts.map((a, i) => (
          <motion.div
            key={a.titre}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-center gap-4 rounded-2xl border border-brown/10 bg-cream-100 p-5 shadow-card"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-deep"><Icon name={a.icon} className="h-6 w-6" /></span>
            <div>
              <h5 className="font-serif text-lg text-brown">{a.titre}</h5>
              <p className="text-sm text-brown-500">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
