import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import Stats from '../components/Stats'
import { apropos, atouts } from '../data'

export default function APropos() {
  return (
    <>
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-orange/25 to-gold/20 blur-xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <Photo name={apropos.image} alt="Le salon Renia House" className="aspect-[4/5] w-full object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="eyebrow mb-3">À propos</p>
            <h1 className="font-serif text-5xl text-ink md:text-6xl">Renia <span className="text-grad-orange">House</span></h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">{apropos.texte}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Reconnues pour nos <span className="font-semibold text-orange-deep">perruques de qualité</span> et nos
              finitions impeccables, nous mettons tout notre cœur à vous rendre plus belle, à chaque visite.
            </p>
            <Link to="/contact" className="btn-orange mt-8"><Icon name="mappin" className="h-5 w-5" /> Nous rendre visite</Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-200/60 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((a) => (
            <div key={a.titre} className="card p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange/12 text-orange-deep"><Icon name={a.icon} className="h-6 w-6" /></span>
              <h3 className="mt-3 font-serif text-xl text-ink">{a.titre}</h3>
              <p className="mt-1 text-sm text-ink-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Stats />
    </>
  )
}
