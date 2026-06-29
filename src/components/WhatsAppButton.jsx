import { salon, rdvMessage } from '../data'
import Icon from './Icon'

/** Bouton WhatsApp flottant, toujours visible. */
export default function WhatsAppButton() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(rdvMessage)}`
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Prendre rendez-vous sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-110"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  )
}
