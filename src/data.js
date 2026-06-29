// ============================================================================
//  data.js — Toutes les infos du salon. MODIFIEZ ICI (textes, prix, contacts).
//  Les éléments [À COMPLÉTER] sont à remplacer par les vraies informations.
// ============================================================================

export const salon = {
  nom: 'Renia House',
  slogan: 'Votre beauté, notre passion',
  activite: 'Salon de coiffure & beauté',
  ville: 'Lomé, Togo',

  // --- Contacts (À COMPLÉTER) ---
  telephone: '+228 90 00 00 00', // affiché
  whatsapp: '22890000000', // format international SANS le "+" (ex. Togo : 228…)
  email: 'contact@reniahouse.tg', // [À COMPLÉTER ou retirer]
  adresse: 'Quartier [À COMPLÉTER], Lomé', // [À COMPLÉTER]
  // Lien Google Maps (remplacez par l'adresse réelle pour la carte)
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

// Message pré-rempli pour la prise de rendez-vous WhatsApp
export const rdvMessage =
  'Bonjour Renia House 👋, je souhaite prendre rendez-vous.'

// --- Prestations (prix À COMPLÉTER) ---
export const prestations = [
  {
    titre: 'Coiffure',
    desc: 'Coupe, brushing, mise en plis, soins du cheveu.',
    prix: 'à partir de [—] FCFA',
    icone: '✂️',
  },
  {
    titre: 'Tresses & Nattes',
    desc: 'Tresses collées, twists, nattes africaines, vanilles.',
    prix: 'à partir de [—] FCFA',
    icone: '💇🏾‍♀️',
  },
  {
    titre: 'Tissages & Perruques',
    desc: 'Pose de tissage, perruques sur mesure, lace.',
    prix: 'à partir de [—] FCFA',
    icone: '👑',
  },
  {
    titre: 'Soins & Défrisage',
    desc: 'Soins profonds, traitements, défrisage, coloration.',
    prix: 'à partir de [—] FCFA',
    icone: '🧴',
  },
  {
    titre: 'Maquillage',
    desc: 'Maquillage jour, soirée, mariage et événements.',
    prix: 'à partir de [—] FCFA',
    icone: '💄',
  },
  {
    titre: 'Onglerie',
    desc: 'Manucure, pédicure, pose de faux ongles, nail art.',
    prix: 'à partir de [—] FCFA',
    icone: '💅🏾',
  },
]

// --- Galerie : remplacez par vos photos dans /public/assets ----------------
// Mettez vos images (galerie1.jpg … galerie6.jpg) puis indiquez-les ici.
export const galerie = [
  { fichier: 'galerie1.jpg', legende: 'Tresses' },
  { fichier: 'galerie2.jpg', legende: 'Tissage' },
  { fichier: 'galerie3.jpg', legende: 'Coiffure' },
  { fichier: 'galerie4.jpg', legende: 'Maquillage' },
  { fichier: 'galerie5.jpg', legende: 'Onglerie' },
  { fichier: 'galerie6.jpg', legende: 'Perruque' },
]

export const apropos =
  "Chez Renia House, chaque cliente repart plus belle et plus confiante. Notre salon à Lomé réunit le savoir-faire, l'écoute et les meilleurs produits pour sublimer votre beauté — coiffure, soins, maquillage et onglerie. Prenez place, détendez-vous : on s'occupe de tout."
