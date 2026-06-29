import SectionHeader from '../components/SectionHeader'
import PrestationRow from '../components/PrestationRow'
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
          sub="De la coiffure à l'onglerie, chaque prestation est réalisée avec soin, passion et des produits de qualité."
        />
        <div className="space-y-20 md:space-y-28">
          {prestations.map((p, i) => <PrestationRow key={p.titre} p={p} index={i} />)}
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] bg-ink p-10 text-center text-cream shadow-soft md:p-14">
          <h3 className="font-serif text-3xl md:text-4xl">Un projet sur mesure ?</h3>
          <p className="mx-auto mt-3 max-w-md text-cream/70">
            Perruque personnalisée, coiffure de mariage, événement… Parlons-en sur WhatsApp.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-orange mt-7">
            <Icon name="whatsapp" className="h-5 w-5" /> Demander un devis
          </a>
        </div>
      </div>
    </section>
  )
}
