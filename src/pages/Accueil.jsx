import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import TrustStrip from '../components/TrustStrip'
import SectionHeader from '../components/SectionHeader'
import PrestationCard from '../components/PrestationCard'
import Photo from '../components/Photo'
import Icon from '../components/Icon'
import { prestations, galerie, apropos, salon, rdvMessage } from '../data'

export default function Accueil() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`

  return (
    <>
      <Hero />
      <Marquee />
      <TrustStrip />

      {/* Aperçu prestations */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Nos prestations" title="Tout pour votre beauté" sub="Coiffure, soins, maquillage, onglerie — un savoir-faire complet." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {prestations.slice(0, 3).map((p, i) => <PrestationCard key={p.titre} p={p} index={i} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/prestations" className="btn-gold">Voir toutes les prestations</Link>
          </div>
        </div>
      </section>

      {/* Aperçu galerie */}
      <section className="bg-cream-200/60 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Nos réalisations" title="La galerie" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galerie.slice(0, 4).map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl shadow-card"
              >
                <Photo name={g.fichier} alt={g.legende} className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/galerie" className="btn-gold">Voir la galerie</Link>
          </div>
        </div>
      </section>

      {/* Aperçu à propos */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <Photo name={apropos.image} alt="Notre salon" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-3">À propos</p>
            <h2 className="font-serif text-4xl text-brown md:text-5xl">Le salon Renia House</h2>
            <p className="mt-5 text-lg leading-relaxed text-brown-500">{apropos.texte}</p>
            <Link to="/a-propos" className="btn-gold mt-7">En savoir plus</Link>
          </div>
        </div>
      </section>

      {/* Bandeau CTA */}
      <section className="bg-brown px-5 py-16 text-center text-cream">
        <h2 className="font-serif text-4xl md:text-5xl">Envie d'un nouveau look ?</h2>
        <p className="mx-auto mt-4 max-w-md text-cream/70">Réservez votre créneau en un message — on s'occupe du reste.</p>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-8">
          <Icon name="whatsapp" className="h-5 w-5" /> Prendre rendez-vous
        </a>
      </section>
    </>
  )
}
