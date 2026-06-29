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
        <span className="text-3xl">📷</span>
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
