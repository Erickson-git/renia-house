export default function SectionHeader({ eyebrow, title, sub, light = false }) {
  return (
    <header className="mb-12 text-center">
      {eyebrow && <p className={`eyebrow mb-3 ${light ? 'text-orange-soft' : ''}`}>{eyebrow}</p>}
      <h2 className={`font-serif text-4xl md:text-5xl ${light ? 'text-cream' : 'text-ink'}`}>{title}</h2>
      <div className="gold-rule mt-5" />
      {sub && <p className={`mx-auto mt-4 max-w-xl ${light ? 'text-cream/70' : 'text-ink-500'}`}>{sub}</p>}
    </header>
  )
}
