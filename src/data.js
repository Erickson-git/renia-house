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
  responsable: 'Mme HOUNKPE Holewassi Irène',
  logoXofix: 'xofix-logo.png',

  // --- Contacts ---
  telephone: '+228 96 68 10 55',
  whatsapp: '22892225900', // WhatsApp : +228 92 22 59 00 (format international SANS le "+")
  email: '',
  adresse: 'Togo 2000, Amangotigome — Lomé',
  mapsQuery: 'Amangotigome Lomé Togo',

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
  'Coiffure', 'Tresses', 'Perruques', 'Soins du visage', 'Extension de cils',
  'Microblading', 'Mariage', 'Événements',
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
  { titre: 'Perruques & Tissages', image: 'perruque1.jpg', icon: 'crown', desc: 'Perruques de qualité, lace sur mesure, pose de tissage impeccable.', prix: 'à partir de [—] FCFA' },
  { titre: 'Soins du visage', image: 'soins.jpg', icon: 'leaf', desc: 'Nettoyage, hydratation et éclat du visage.', prix: 'à partir de [—] FCFA' },
  { titre: 'Extension de cils', image: 'cils.jpg', icon: 'sparkles', desc: 'Pose de cils : volume russe, classique, hybride.', prix: 'à partir de [—] FCFA' },
  { titre: 'Microblading', image: 'microblading.jpg', icon: 'brush', desc: 'Restructuration et maquillage semi-permanent des sourcils.', prix: 'à partir de [—] FCFA' },
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
  { fichier: 'coiffure.jpg', legende: 'Coiffure' },
  { fichier: 'perruque5.jpg', legende: 'Perruque sur mesure' },
  { fichier: 'cils.jpg', legende: 'Extension de cils' },
  { fichier: 'perruque7.jpg', legende: 'Perruque longue' },
  { fichier: 'g5.jpg', legende: 'Soin du visage' },
  { fichier: 'microblading.jpg', legende: 'Microblading' },
  { fichier: 'perruque9.jpg', legende: 'Coiffure perruque' },
  { fichier: 'tresses.jpg', legende: 'Tresses' },
  { fichier: 'g3.jpg', legende: 'Mise en beauté' },
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
    "Fondé et dirigé par Mme HOUNKPE Holewassi Irène, Renia House est votre adresse beauté à Amangotigome (Lomé). Coiffure, tresses, perruques de qualité, soins du visage, extension de cils et microblading : chaque cliente repart plus belle et plus confiante. Prenez place, détendez-vous — on s'occupe de tout.",
  chiffres: [
    { n: '100%', l: 'Satisfaction' },
    { n: '6+', l: 'Prestations' },
    { n: '★★★★★', l: 'Avis clientes' },
  ],
}
