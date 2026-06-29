// ============================================================================
//  data.js — Toutes les infos du salon. MODIFIEZ ICI (textes, prix, contacts).
//  Les éléments [À COMPLÉTER] sont à remplacer par les vraies informations.
//  Les images sont dans /public/assets (remplacez-les par vos vraies photos).
// ============================================================================

export const salon = {
  nom: 'Renia House',
  slogan: 'Votre beauté, notre passion',
  activite: 'Salon de coiffure & beauté',
  ville: 'Lomé, Togo',
  logoXofix: 'xofix-logo.png',

  // --- Contacts (À COMPLÉTER) ---
  telephone: '+228 90 00 00 00',
  whatsapp: '22890000000', // format international SANS le "+"
  email: 'contact@reniahouse.tg',
  adresse: 'Quartier [À COMPLÉTER], Lomé',
  mapsQuery: 'Renia House Lomé Togo',

  horaires: [
    { jour: 'Lundi – Vendredi', heures: '08h00 – 19h00' },
    { jour: 'Samedi', heures: '08h00 – 20h00' },
    { jour: 'Dimanche', heures: 'Sur rendez-vous' },
  ],

  reseaux: {
    instagram: 'https://www.instagram.com/renia_house/',
    tiktok: 'https://www.tiktok.com/@reniahouse',
    facebook: 'https://web.facebook.com/people/Renia-house/100068424218674/',
  },
}

export const rdvMessage = 'Bonjour Renia House, je souhaite prendre rendez-vous.'

// Diaporama d'accueil
export const heroSlides = ['perruque4.jpg', 'perruque8.jpg', 'perruque6.jpg']

// Bandeau défilant (marquee)
export const marquee = [
  'Coiffure', 'Tresses', 'Tissages', 'Perruques', 'Soins', 'Maquillage',
  'Onglerie', 'Mariage', 'Événements',
]

// Atouts (trust)
export const atouts = [
  { icon: 'gem', titre: 'Savoir-faire', desc: 'Des mains expertes et passionnées.' },
  { icon: 'droplet', titre: 'Produits de qualité', desc: 'Les meilleures marques pour vos cheveux.' },
  { icon: 'clock', titre: 'Sur rendez-vous', desc: 'Réservez en un clic sur WhatsApp.' },
  { icon: 'heart', titre: 'Écoute & conseil', desc: 'Un accompagnement personnalisé.' },
]

// --- Prestations (prix À COMPLÉTER) ---
export const prestations = [
  { titre: 'Coiffure', image: 'coiffure.jpg', icon: 'scissors', desc: 'Coupe, brushing, mise en plis, soins du cheveu.', prix: 'à partir de [—] FCFA' },
  { titre: 'Tresses & Nattes', image: 'tresses.jpg', icon: 'waves', desc: 'Tresses collées, twists, nattes africaines, vanilles.', prix: 'à partir de [—] FCFA' },
  { titre: 'Tissages & Perruques', image: 'perruque1.jpg', icon: 'crown', desc: 'Perruques de qualité, lace sur mesure, pose de tissage impeccable.', prix: 'à partir de [—] FCFA' },
  { titre: 'Soins & Défrisage', image: 'soins.jpg', icon: 'leaf', desc: 'Soins profonds, traitements, défrisage, coloration.', prix: 'à partir de [—] FCFA' },
  { titre: 'Maquillage', image: 'maquillage.jpg', icon: 'brush', desc: 'Maquillage jour, soirée, mariage et événements.', prix: 'à partir de [—] FCFA' },
  { titre: 'Onglerie', image: 'onglerie.jpg', icon: 'sparkles', desc: 'Manucure, pédicure, pose d\'ongles, nail art.', prix: 'à partir de [—] FCFA' },
]

// --- Perruques (la spécialité de Renia House) ------------------------------
export const perruques = {
  eyebrow: 'Notre spécialité',
  titre: 'Des perruques de qualité',
  texte:
    "Renia House est reconnue pour ses perruques d'exception : lace sur mesure, finitions naturelles, densité parfaite. Trouvez la perruque qui vous ressemble, ou faites-la créer selon vos envies.",
  cta: 'Commander ma perruque',
  images: [
    'perruque1.jpg', 'perruque2.jpg', 'perruque3.jpg', 'perruque4.jpg', 'perruque5.jpg',
    'perruque6.jpg', 'perruque7.jpg', 'perruque8.jpg', 'perruque9.jpg', 'perruque10.jpg',
  ],
}

// --- Galerie ---
export const galerie = [
  { fichier: 'perruque2.jpg', legende: 'Perruque lace' },
  { fichier: 'g3.jpg', legende: 'Maquillage' },
  { fichier: 'perruque5.jpg', legende: 'Perruque sur mesure' },
  { fichier: 'g2.jpg', legende: 'Mains soignées' },
  { fichier: 'perruque7.jpg', legende: 'Perruque longue' },
  { fichier: 'g4.jpg', legende: 'Make-up soirée' },
  { fichier: 'g5.jpg', legende: 'Peau éclatante' },
  { fichier: 'perruque9.jpg', legende: 'Coiffure perruque' },
  { fichier: 'g6.jpg', legende: 'Vernis' },
  { fichier: 'g8.jpg', legende: 'Onglerie pro' },
]

// --- Marketing -------------------------------------------------------------
export const offre = {
  chip: 'Offre découverte',
  titre: '-20% sur votre première visite',
  texte: 'Nouvelle cliente ? Profitez de 20% de réduction sur la prestation de votre choix. Places limitées chaque semaine.',
  cta: 'Réserver mon créneau',
}

export const stats = [
  { n: 500, suffix: '+', l: 'Clientes satisfaites' },
  { n: 5, suffix: '/5', l: 'Note moyenne' },
  { n: 6, suffix: '', l: 'Prestations' },
  { n: 7, suffix: ' j/7', l: 'Sur rendez-vous' },
]

export const temoignages = [
  { nom: 'Akossiwa A.', role: 'Cliente fidèle', note: 5, texte: "Un travail soigné et une équipe adorable. Mes tresses tiennent parfaitement et le rendu est magnifique. Je ne vais plus ailleurs !" },
  { nom: 'Délali K.', role: 'Mariée 2025', note: 5, texte: "Maquillage et coiffure de mariage sublimes. J'ai reçu des compliments toute la journée. Merci Renia House pour ce moment !" },
  { nom: 'Sandra M.', role: 'Cliente', note: 5, texte: "Accueil chaleureux, salon propre et élégant, et un vrai savoir-faire. La pose de tissage est impeccable. Je recommande à 100%." },
]

export const apropos = {
  image: 'about.jpg',
  texte:
    "Chez Renia House, chaque cliente repart plus belle et plus confiante. Notre salon à Lomé réunit le savoir-faire, l'écoute et les meilleurs produits pour sublimer votre beauté — coiffure, soins, maquillage et onglerie. Prenez place, détendez-vous : on s'occupe de tout.",
  chiffres: [
    { n: '100%', l: 'Satisfaction' },
    { n: '6+', l: 'Prestations' },
    { n: '★★★★★', l: 'Avis clientes' },
  ],
}
