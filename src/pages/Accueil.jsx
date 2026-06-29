import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import PrestationRow from '../components/PrestationRow'
import OfferBand from '../components/OfferBand'
import PerruquesShowcase from '../components/PerruquesShowcase'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import { prestations, galerie, atouts, apropos, salon, rdvMessage } from '../data'

export default function Accueil() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`

  return (
    <>
      <Hero />

      {/* Atouts */}
      <section className="border-y border-ink/10 bg-cream-100 px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((a) => (
            <div key={a.titre} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/12 text-orange-deep"><Icon name={a.icon} className="h-6 w-6" /></span>
              <div>
                <h5 className="font-serif text-lg text-ink">{a.titre}</h5>
                <p className="text-sm text-ink-500">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spécialité : perruques */}
      <PerruquesShowcase />

      {/* Prestations (lignes alternées) */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Nos prestations" title="L'excellence à chaque détail" sub="Un savoir-faire complet pour révéler votre beauté." />
          <div className="space-y-16 md:space-y-24">
            {prestations.slice(0, 3).map((p, i) => <PrestationRow key={p.titre} p={p} index={i} />)}
          </div>
          <div className="mt-14 text-center">
            <Link to="/prestations" className="btn-orange">Toutes les prestations <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <OfferBand />

      {/* Galerie (masonry) */}
      <section className="bg-cream-200/60 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Nos réalisations" title="La galerie" />
          <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {galerie.slice(0, 6).map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}
                className="overflow-hidden rounded-2xl shadow-card">
                <Photo name={g.fichier} alt={g.legende} className={`w-full object-cover ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`} />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/galerie" className="btn-ghost">Voir la galerie <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* À propos teaser */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-orange/25 to-gold/20 blur-xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <Photo name={apropos.image} alt="Notre salon" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">À propos</p>
            <h2 className="font-serif text-4xl text-ink md:text-5xl">Bienvenue chez <span className="text-grad-orange">Renia House</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">{apropos.texte}</p>
            <Link to="/a-propos" className="btn-ghost mt-7">En savoir plus <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Stats />

      {/* CTA final */}
      <section className="px-5 py-20 text-center">
        <h2 className="font-serif text-4xl text-ink md:text-6xl">Prête à rayonner ?</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-500">Réservez votre rendez-vous en un message. On s'occupe du reste.</p>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-orange mt-8"><Icon name="whatsapp" className="h-5 w-5" /> Prendre rendez-vous</a>
      </section>
    </>
  )
}
