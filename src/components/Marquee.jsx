import { marquee } from '../data'

export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="overflow-hidden border-y border-brown/10 bg-brown py-4 text-cream">
      <div className="flex w-max animate-[scroll_28s_linear_infinite] gap-8 whitespace-nowrap">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-8 font-serif text-xl italic">
            {m} <span className="text-gold-soft">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  )
}
