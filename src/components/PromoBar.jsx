import { salon, rdvMessage } from '../data'

export default function PromoBar() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`
  return (
    <div className="bg-brown text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2 text-center text-xs sm:text-sm">
        <span>✨ Salon de beauté à Lomé</span>
        <span className="text-gold-soft">•</span>
        <span className="hidden sm:inline">Sur rendez-vous</span>
        <span className="hidden text-gold-soft sm:inline">•</span>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="font-medium text-gold-soft hover:underline">
          Réserver sur WhatsApp
        </a>
      </div>
    </div>
  )
}
