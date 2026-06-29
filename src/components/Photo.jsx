import { useState } from 'react'

/**
 * Photo — image avec repli élégant si le fichier n'existe pas encore.
 * Déposez les images dans /public/assets et indiquez le nom dans data.js.
 */
export default function Photo({ name, alt, className = '' }) {
  const [errored, setErrored] = useState(false)
  const src = `${import.meta.env.BASE_URL}assets/${name}`

  if (errored || !name) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-cream-200 to-rose-soft/60 text-center ${className}`}
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <circle cx="12" cy="13" r="3.4" />
          <path d="M8 6l1.5-2h5L16 6" />
        </svg>
        <span className="mt-2 px-3 font-serif text-sm uppercase tracking-widest text-brown-500">
          {alt}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className={className}
    />
  )
}
