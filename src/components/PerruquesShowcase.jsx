import { perruques, salon } from '../data'
import Photo from './Photo'
import Icon from './Icon'

export default function PerruquesShowcase() {
  const wa = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent('Bonjour Renia House, je suis intéressée par vos perruques.')}`
  const imgs = [...perruques.images, ...perruques.images]

  return (
    <section className="relative overflow-hidden bg-ink py-16 text-cream md:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange/25 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="chip mb-4 border-orange/40 bg-orange/15 text-orange-soft">{perruques.eyebrow}</span>
        <h2 className="font-serif text-4xl md:text-6xl">
          <span className="text-grad-orange">{perruques.titre}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/70">{perruques.texte}</p>
      </div>

      {/* Défilé d'images de perruques */}
      <div className="relative mt-12 overflow-hidden">
        <div className="flex w-max gap-5 px-3 animate-marquee hover:[animation-play-state:paused]">
          {imgs.map((im, i) => (
            <div key={i} className="h-72 w-56 shrink-0 overflow-hidden rounded-2xl shadow-glow ring-1 ring-white/10 md:h-80 md:w-60">
              <Photo name={im} alt="Perruque de qualité — Renia House" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-12 text-center">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-orange">
          <Icon name="whatsapp" className="h-5 w-5" /> {perruques.cta}
        </a>
      </div>
    </section>
  )
}
