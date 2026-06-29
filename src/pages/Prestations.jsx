import SectionHeader from '../components/SectionHeader'
import PrestationCard from '../components/PrestationCard'
import Icon from '../components/Icon'
import { prestations, salon, rdvMessage } from '../data'

export default function Prestations() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Nos prestations"
          title="Nos services"
          sub="De la coiffure à l'onglerie, chaque prestation est réalisée avec soin et passion."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prestations.map((p, i) => <PrestationCard key={p.titre} p={p} index={i} />)}
        </div>

        <div className="mt-14 rounded-3xl border border-brown/10 bg-cream-100 p-8 text-center shadow-card">
          <h3 className="font-serif text-3xl text-brown">Un besoin précis ?</h3>
          <p className="mx-auto mt-2 max-w-md text-brown-500">
            Écrivez-nous sur WhatsApp pour un devis ou un rendez-vous personnalisé.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6">
            <Icon name="whatsapp" className="h-5 w-5" /> Nous contacter
          </a>
        </div>
      </div>
    </section>
  )
}
