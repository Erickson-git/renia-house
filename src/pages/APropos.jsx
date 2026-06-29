import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Photo from '../components/Photo'
import { apropos, atouts } from '../data'

export default function APropos() {
  return (
    <>
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[2rem] shadow-soft"
          >
            <Photo name={apropos.image} alt="Le salon Renia House" className="aspect-[4/5] w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-3">À propos</p>
            <h1 className="font-serif text-5xl text-brown">Renia House</h1>
            <p className="mt-6 text-lg leading-relaxed text-brown-500">{apropos.texte}</p>
            <div className="mt-8 flex gap-8">
              {apropos.chiffres.map((c) => (
                <div key={c.l}>
                  <p className="font-serif text-4xl text-gold-deep">{c.n}</p>
                  <p className="text-sm text-brown-500">{c.l}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-gold mt-8">Nous rendre visite</Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-200/60 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((a) => (
            <div key={a.titre} className="rounded-2xl border border-brown/10 bg-cream-100 p-6 text-center shadow-card">
              <div className="text-4xl">{a.ico}</div>
              <h3 className="mt-3 font-serif text-xl text-brown">{a.titre}</h3>
              <p className="mt-1 text-sm text-brown-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
