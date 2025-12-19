
import { CompanyInfo, Service, Project, PricingPack, ProposalData } from './types';

export const COMPANY: CompanyInfo = {
  name: "HardSoft Technologies",
  address: "Nord Foire - Yoff, Dakar, Sénégal",
  phone: "+221781466421",
  email: "contact@hardsoft-technologies.net",
  website: "https://hardsoft-technologies.net"
};

export const SERVICES: Service[] = [
  {
    id: 'digital',
    title: 'Création Sites Web & Logiciels',
    description: 'Notre cœur de métier. Nous concevons des sites internet modernes, des applications mobiles intuitives et des logiciels sur mesure pour transformer vos idées en réalité.',
    iconName: 'Code',
    features: [
      "Sites Vitrine, E-commerce & Portails Web",
      "Applications Mobiles (iOS & Android)",
      "Logiciels Métiers & SaaS sur mesure",
      "Refonte & Optimisation technique",
      "Maintenance applicative & Évolutive"
    ]
  },
  {
    id: 'infra',
    title: 'Infrastructure & Réseaux',
    description: 'Une base technique solide. Nous installons et sécurisons vos réseaux, serveurs et systèmes électriques pour une performance sans faille.',
    iconName: 'Server',
    features: [
      "Câblage informatique & Baies de brassage",
      "Installation & Configuration Serveurs",
      "Vidéosurveillance & Sécurité électronique",
      "Électricité & Énergie Solaire",
      "Climatisation de précision"
    ]
  },
  {
    id: 'commercial',
    title: 'Matériel & Maintenance',
    description: 'Équipez votre entreprise avec le meilleur matériel et bénéficiez d\'un support réactif pour garantir la continuité de service.',
    iconName: 'ShoppingBag',
    features: [
      "Vente PC, Mac, Serveurs & Accessoires",
      "Solutions d'Encaissement (POS & TPE)",
      "Maintenance Parc Informatique (Contrats)",
      "Dépannage & Assistance Utilisateurs",
      "Fourniture de consommables"
    ]
  },
  {
    id: 'training',
    title: 'Formation & Conseil',
    description: 'Nous vous accompagnons dans la prise en main de vos outils et formons vos équipes pour une autonomie durable.',
    iconName: 'GraduationCap',
    features: [
      "Formation administration de sites web",
      "Initiation à la cybersécurité",
      "Formation logiciels de gestion",
      "Audit de système d'information"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Sénégal Délices',
    category: 'Site Vitrine & E-commerce',
    description: 'Conception d\'un site web pour un restaurant local avec menu numérique et système de commande en ligne.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200'
    ],
    liveUrl: 'https://example.com/senegal-delices',
    tags: ['Wordpress', 'E-commerce', 'SEO', 'Restaurant']
  },
  {
    id: 'proj2',
    title: 'Optima Gestion',
    category: 'Logiciel SaaS',
    description: 'Développement d\'une application de gestion de stock et de facturation pour les grossistes à Dakar.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    ],
    caseStudyUrl: '#',
    tags: ['React', 'Node.js', 'SaaS', 'Dashboard', 'Gestion']
  },
  {
    id: 'proj3',
    title: 'Clinique Santé+',
    category: 'Portail Web',
    description: 'Plateforme de prise de rendez-vous en ligne et présentation des services médicaux pour une clinique privée.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
    ],
    tags: ['Santé', 'Prise de RDV', 'UX/UI', 'Clinique']
  }
];

export const CASE_STUDIES = [
  {
    client: "Caritas Senegal",
    goal: "Couverture Nationale",
    details: "Objectifs institutionnels pour une transparence internationale et une couverture nationale.",
    link: "https://caritassenegal.org/",
    category: "Institutionnel"
  },
  {
    client: "Jik Jikoox",
    goal: "Marché Digital",
    details: "Création d'un marché digital ouvert et durable pour une vision e-commerce innovante.",
    link: "https://jikjikoox.com/",
    category: "E-commerce"
  },
  {
    client: "Birkama Balante",
    goal: "Patrimoine Digital",
    details: "Numérisation de l'héritage et opérationnalisation de la présence en ligne.",
    link: "https://birkamabalante.com/",
    category: "Culturel"
  },
  {
    client: "SEN SUPPLY SERVICE",
    goal: "Image de Marque",
    details: "Présence digitale robuste pour propulser l'image de marque et maximiser les leads.",
    link: "https://sensupplyservice.com/",
    category: "Industrie"
  },
  {
    client: "EMS-ARTS",
    goal: "Gestion Carrières",
    details: "Centralisation des carrières artistiques et gestion des événements culturels.",
    link: "https://emsarts.com/",
    category: "Événementiel"
  },
  {
    client: "FESTIVAL FEGOMUS",
    goal: "Vitrine Événementielle",
    details: "Plateforme officielle pour informer et crédibiliser ce festival majeur.",
    link: "https://fegomus-sn.emsarts.com/",
    category: "Événementiel"
  },
  {
    client: "Centre Source de la Vie",
    goal: "Santé & Développement",
    details: "Évangéliser la santé et financer le développement via une plateforme dédiée.",
    link: "https://sourcedeviesenegal.com/",
    category: "Santé"
  }
];

export const BASE_PACK: PricingPack = {
  name: "Packs Site Web",
  price: "100 000 FCFA",
  features: [
    "Templates conçus par des professionnels",
    "Site web 4 pages (Accueil, Services, etc.)",
    "Design Responsive (Mobile & Desktop)",
    "Nom de domaine gratuit (avec les plans annuels)",
    "Hébergement Web (1 an inclus)",
    "Trafic web illimité",
    "Nombre illimité de certificats de sécurité SSL",
    "Adresses email & Signature pro",
    "Sauvegardes et mises à jour automatiques",
    "Configuration Google Business",
    "Formulaire de contact sécurisé",
    "Intégration WhatsApp & Réseaux Sociaux",
    "Optimisation SEO de base",
    "Livraison sous 2 semaines"
  ],
  excluded: [
    "Fonctionnalités E-commerce complexes",
    "Rédaction de contenu spécialisé"
  ]
};

export const PROPOSAL_CONTENT: ProposalData = {
  title: "Proposition Commerciale: Digitalisation de votre activité",
  commercialText: `
    Madame, Monsieur,

    Dans un contexte économique de plus en plus connecté, la présence digitale n'est plus une option mais une nécessité stratégique pour les entreprises au Sénégal. HardSoft Technologies vous propose de franchir ce cap avec une solution web professionnelle, clé en main, conçue pour valoriser votre savoir-faire et capter une nouvelle clientèle.

    Notre offre "Pack Vitrine" à 100 000 FCFA a été spécialement pensée pour les PME et institutions locales. Elle allie maîtrise budgétaire et excellence technique. En seulement deux semaines, nous déployons une plateforme moderne, rapide et sécurisée, reflétant l'identité de votre structure à Nord Foire et au-delà.

    Au-delà de la simple création technique, nous vous accompagnons dans la prise en main de votre outil pour vous garantir une autonomie totale.
  `,
  socialPosts: [
    {
      platform: "Facebook / LinkedIn (Version Longue)",
      content: "🚀 Donnez un nouvel élan à votre entreprise avec HardSoft Technologies ! Nous concevons votre site web professionnel sur mesure pour booster votre visibilité à Dakar et partout au Sénégal. Pack démarrage à partir de 100 000 FCFA. Qualité, Rapidité et Support local.",
      hashtags: ["#TransformationDigitale", "#Dakar", "#WebDesign", "#HardSoftTech", "#Kebetu"]
    },
    {
      platform: "Instagram / WhatsApp Status (Version Courte)",
      content: "🌐 Votre site web pro livré en 2 semaines ? C'est possible avec HardSoft Technologies ! Contactez-nous au +221 78 146 64 21 pour un devis gratuit.",
      hashtags: ["#Siteweb", "#Senegal", "#Business"]
    }
  ],
  sitemap: [
    "Accueil (Hero, Aperçu Services, CTA)",
    "À Propos (Histoire, Équipe, Valeurs)",
    "Services (Détail des prestations IT)",
    "Réalisations (Portfolio clients)",
    "Contact (Formulaire, Map, Coordonnées)"
  ],
  timeline: [
    {
      week: "Semaine 1: Conception",
      tasks: ["Validation arborescence", "Design & Wireframes", "Collecte des contenus"]
    },
    {
      week: "Semaine 2: Développement",
      tasks: ["Intégration technique", "Tests responsive", "Mise en ligne & Formation"]
    }
  ]
};
