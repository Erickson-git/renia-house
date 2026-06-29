import { motion } from 'framer-motion'
import { apropos } from '../data'
import Photo from './Photo'

export default function APropos() {
  return (
    <section id="apropos" className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <Photo name="salon.jpg" alt="Notre salon" className="aspect-[4/3] w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <p className="eyebrow mb-3">À propos</p>
          <h2 className="font-serif text-4xl text-brown md:text-5xl">
            Le salon Renia House
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brown-500">{apropos}</p>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-serif text-4xl text-gold-deep">100%</p>
              <p className="text-sm text-brown-500">Satisfaction</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold-deep">6+</p>
              <p className="text-sm text-brown-500">Prestations</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold-deep">★★★★★</p>
              <p className="text-sm text-brown-500">Avis clientes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
