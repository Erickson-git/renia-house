import { motion } from 'framer-motion'
import { salon, rdvMessage } from '../data'

export default function Contact() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`
  const tel = `tel:${salon.telephone.replace(/\s/g, '')}`
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(salon.mapsQuery)}&output=embed`

  return (
    <section id="contact" className="bg-brown px-5 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 text-center">
          <p className="eyebrow mb-3 text-gold-soft">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl">Prenez rendez-vous</h2>
          <div className="gold-rule mt-5" />
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
              <span aria-hidden>💬</span> Rendez-vous sur WhatsApp
            </a>

            <ul className="space-y-4 text-cream/90">
              <li className="flex items-center gap-3">
                <span className="text-gold-soft">📞</span>
                <a href={tel} className="hover:text-gold-soft">{salon.telephone}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-soft">📍</span> {salon.adresse}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-soft">✉️</span>
                <a href={`mailto:${salon.email}`} className="hover:text-gold-soft">{salon.email}</a>
              </li>
            </ul>

            <div className="border-t border-cream/15 pt-6">
              <p className="mb-3 text-sm uppercase tracking-luxe text-gold-soft">Horaires</p>
              <ul className="space-y-1.5 text-sm text-cream/80">
                {salon.horaires.map((h) => (
                  <li key={h.jour} className="flex justify-between gap-6">
                    <span>{h.jour}</span>
                    <span className="text-cream">{h.heures}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-2">
              <a href={salon.reseaux.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-sm hover:border-gold-soft hover:text-gold-soft">Instagram</a>
              <a href={salon.reseaux.tiktok} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-sm hover:border-gold-soft hover:text-gold-soft">TikTok</a>
              <a href={salon.reseaux.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-sm hover:border-gold-soft hover:text-gold-soft">Facebook</a>
            </div>
          </motion.div>

          {/* Carte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-cream/15 shadow-soft"
          >
            <iframe
              title="Carte Renia House"
              src={mapsSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
