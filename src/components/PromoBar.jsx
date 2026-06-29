import { salon, rdvMessage, offre } from '../data'

export default function PromoBar() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`
  return (
    <div className="bg-gradient-to-r from-orange-deep via-orange to-orange-light text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2 text-center text-xs font-medium sm:text-sm">
        <span className="font-semibold uppercase tracking-widest">{offre.titre}</span>
        <span className="hidden opacity-70 sm:inline">—</span>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="hidden underline-offset-2 hover:underline sm:inline">
          {offre.cta}
        </a>
      </div>
    </div>
  )
}
