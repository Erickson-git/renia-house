import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { salon } from '../data'

export default function Contact() {
  const [nom, setNom] = useState('')
  const [msg, setMsg] = useState('')

  const tel = `tel:${salon.telephone.replace(/\s/g, '')}`
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(salon.mapsQuery)}&output=embed`

  const envoyer = (e) => {
    e.preventDefault()
    const texte = `Bonjour Renia House,\nJe suis ${nom || '[nom]'}.\n${msg || 'Je souhaite prendre rendez-vous.'}`
    window.open(`https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(texte)}`, '_blank')
  }

  return (
    <section className="bg-ink px-5 py-16 text-cream md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader light eyebrow="Contact" title="Prenez rendez-vous" sub="Écrivez-nous, appelez-nous ou passez nous voir." />

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <form onSubmit={envoyer} className="space-y-4 rounded-2xl border border-cream/15 bg-cream/5 p-6">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-luxe text-orange-soft">Votre nom</label>
                <input value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom"
                  className="w-full rounded-lg border border-cream/20 bg-ink-700 px-3 py-2.5 text-cream outline-none focus:border-orange" />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-luxe text-orange-soft">Votre message</label>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows="3" placeholder="Ex : je voudrais une perruque sur mesure…"
                  className="w-full rounded-lg border border-cream/20 bg-ink-700 px-3 py-2.5 text-cream outline-none focus:border-orange" />
              </div>
              <button type="submit" className="btn-whatsapp w-full">
                <Icon name="whatsapp" className="h-5 w-5" /> Envoyer sur WhatsApp
              </button>
            </form>

            <ul className="space-y-3 text-cream/90">
              <li className="flex items-center gap-3"><span className="text-orange-soft"><Icon name="phone" className="h-5 w-5" /></span><a href={tel} className="hover:text-orange-soft">{salon.telephone}</a></li>
              <li className="flex items-center gap-3"><span className="text-orange-soft"><Icon name="mappin" className="h-5 w-5" /></span> {salon.adresse}</li>
              <li className="flex items-center gap-3"><span className="text-orange-soft"><Icon name="mail" className="h-5 w-5" /></span><a href={`mailto:${salon.email}`} className="hover:text-orange-soft">{salon.email}</a></li>
            </ul>

            <div className="border-t border-cream/15 pt-5">
              <p className="mb-2 text-sm uppercase tracking-luxe text-orange-soft">Horaires</p>
              <ul className="space-y-1.5 text-sm text-cream/80">
                {salon.horaires.map((h) => (
                  <li key={h.jour} className="flex justify-between gap-6"><span>{h.jour}</span><span className="text-cream">{h.heures}</span></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={salon.reseaux.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-sm hover:border-orange hover:text-orange-soft">Instagram</a>
              <a href={salon.reseaux.tiktok} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-sm hover:border-orange hover:text-orange-soft">TikTok</a>
              <a href={salon.reseaux.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-sm hover:border-orange hover:text-orange-soft">Facebook</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="overflow-hidden rounded-2xl border border-cream/15 shadow-soft">
            <iframe title="Carte Renia House" src={mapsSrc} className="h-full min-h-[440px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
