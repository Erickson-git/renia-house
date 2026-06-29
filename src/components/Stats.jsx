import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'

function Counter({ to, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !done.current) {
        done.current = true
        const dur = 1400
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(eased * to))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="bg-ink px-5 py-16 text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <p className="font-serif text-5xl text-grad-orange md:text-6xl">
              <Counter to={s.n} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-cream/60">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
