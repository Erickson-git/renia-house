// Icônes vectorielles (aucun emoji). Couleur via `currentColor`.
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

const ICONS = {
  scissors: (<g {...P}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.1 8.1 21 18M8.1 15.9 21 6" /></g>),
  waves: (<g {...P}><path d="M3 7c3-3 6 3 9 0s6-3 9 0M3 12c3-3 6 3 9 0s6-3 9 0M3 17c3-3 6 3 9 0s6-3 9 0" /></g>),
  crown: (<g {...P}><path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z" /><path d="M5 21h14" /></g>),
  leaf: (<g {...P}><path d="M5 21c0-9 6-15 15-15 0 9-6 15-15 15z" /><path d="M9 17c3-4 6-6 9-7" /></g>),
  brush: (<g {...P}><path d="M14 4l6 6-9 9H5v-6z" /><path d="M11 7l6 6" /></g>),
  sparkles: (<g {...P}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" /><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" /></g>),
  gem: (<g {...P}><path d="M6 3h12l3 6-9 12L3 9z" /><path d="M3 9h18M9 3l3 18 3-18" /></g>),
  droplet: (<g {...P}><path d="M12 3s6 5.5 6 10a6 6 0 0 1-12 0c0-4.5 6-10 6-10z" /></g>),
  clock: (<g {...P}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>),
  heart: (<g {...P}><path d="M12 20s-7-4.4-9.2-8.4A5 5 0 0 1 12 6a5 5 0 0 1 9.2 5.6C19 15.6 12 20 12 20z" /></g>),
  calendar: (<g {...P}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></g>),
  phone: (<g {...P}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></g>),
  mappin: (<g {...P}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></g>),
  mail: (<g {...P}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>),
  star: (<path d="M12 3l2.9 6 6.6.6-5 4.3 1.5 6.5L12 17.8 6 20.4l1.5-6.5-5-4.3 6.6-.6z" fill="currentColor" stroke="none" />),
  arrow: (<g {...P}><path d="M5 12h14M13 6l6 6-6 6" /></g>),
  menu: (<g {...P}><path d="M4 7h16M4 12h16M4 17h16" /></g>),
  close: (<g {...P}><path d="M6 6l12 12M18 6L6 18" /></g>),
  check: (<g {...P}><path d="M4 12l5 5L20 6" /></g>),
  quote: (<path fill="currentColor" stroke="none" d="M7 7h5v6c0 2.8-1.7 4.4-4.4 5l-.6-1.3c1.6-.5 2.3-1.4 2.4-2.7H7V7zm8 0h5v6c0 2.8-1.7 4.4-4.4 5l-.6-1.3c1.6-.5 2.3-1.4 2.4-2.7H15V7z" />),
  whatsapp: (<path fill="currentColor" stroke="none" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.13c-.24.68-1.42 1.31-1.95 1.36-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.22 1.36.28.14.44.12.6-.07.16-.19.69-.81.87-1.09.18-.28.36-.23.61-.14.25.09 1.57.74 1.84.87.27.14.45.21.51.32.07.12.07.66-.17 1.34z" />),
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  const path = ICONS[name]
  if (!path) return null
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {path}
    </svg>
  )
}
