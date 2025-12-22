
import React, { useState } from 'react';
import { ViewState } from '../App';
import { COMPANY } from '../constants';
import { 
  ShoppingCart, Utensils, Briefcase, Stethoscope, GraduationCap, Camera, 
  ArrowRight, Check, Layout, Smartphone, Home, Dumbbell, Scale, Plane, 
  Calendar, Scissors, Wrench, Car, Heart, BedDouble, Shirt, Coffee, Pizza, 
  Building2, Leaf, Music, Truck, Gamepad2, Laptop, MessageCircle
} from 'lucide-react';

interface TemplatesGalleryProps {
  navigateTo: (view: ViewState) => void;
}

const Ruler = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>
  </svg>
);

const TEMPLATES = [
  // --- ENTREPRISE (5 Modèles) ---
  {
    id: 'corp-1',
    title: "Tech Startup",
    category: "Entreprise",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Interface sombre et futuriste pour les startups technologiques.",
    features: ["SaaS Dashboard", "Pricing Grid", "Dark Mode"],
    image: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'corp-2',
    title: "Finance Consult",
    category: "Entreprise",
    icon: <Building2 className="w-5 h-5" />,
    description: "Sérieux et épuré pour cabinets de conseil et finance.",
    features: ["Rapports PDF", "Expertise Team", "Blog Analyse"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'corp-3',
    title: "Green Energy",
    category: "Entreprise",
    icon: <Leaf className="w-5 h-5" />,
    description: "Design écologique pour entreprises RSE et énergies renouvelables.",
    features: ["Calculateur Impact", "Projets Verts", "Certifications"],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'corp-4',
    title: "Logistique Pro",
    category: "Entreprise",
    icon: <Truck className="w-5 h-5" />,
    description: "Robuste et dynamique pour transporteurs et logistique.",
    features: ["Tracking Colis", "Flotte Véhicules", "Demande Devis"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'corp-5',
    title: "Creative Agency",
    category: "Entreprise",
    icon: <Laptop className="w-5 h-5" />,
    description: "Coloré et audacieux pour agences de marketing et design.",
    features: ["Showreel Vidéo", "Awards", "Clients Logos"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },

  // --- E-COMMERCE (5 Modèles) ---
  {
    id: 'ecom-1',
    title: "MegaMarket",
    category: "E-commerce",
    icon: <ShoppingCart className="w-5 h-5" />,
    description: "Boutique généraliste type Amazon pour gros catalogues.",
    features: ["Filtres Avancés", "Promo Flash", "Multi-catégories"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'ecom-2',
    title: "Tech Store",
    category: "E-commerce",
    icon: <Smartphone className="w-5 h-5" />,
    description: "Minimaliste tech pour vente de gadgets et téléphones.",
    features: ["Comparateur", "Zoom 4K", "Specs Techniques"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'ecom-3',
    title: "Cosmetic Shop",
    category: "E-commerce",
    icon: <Heart className="w-5 h-5" />,
    description: "Douceur et élégance pour produits de beauté et soins.",
    features: ["Quiz Peau", "Avis Clients", "Instagram Feed"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'ecom-4',
    title: "Furniture Deco",
    category: "E-commerce",
    icon: <Home className="w-5 h-5" />,
    description: "Design scandinave pour meubles et décoration intérieure.",
    features: ["Réalité Augmentée", "Lookbook", "Livraison"],
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'ecom-5',
    title: "Jewelry Lux",
    category: "E-commerce",
    icon: <Layout className="w-5 h-5" />,
    description: "Noir et or pour bijouterie et montres de luxe.",
    features: ["Macro Photos", "Certificats", "Conciergerie"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },

  // --- RESTAURATION (5 Modèles) ---
  {
    id: 'rest-1',
    title: "Gastro Chef",
    category: "Restauration",
    icon: <Utensils className="w-5 h-5" />,
    description: "Élégance pour restaurants gastronomiques.",
    features: ["Menu Dégustation", "Réa. Table", "Chef Bio"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'rest-2',
    title: "Burger Kingpin",
    category: "Restauration",
    icon: <Utensils className="w-5 h-5" />,
    description: "Style urbain et gras pour fast-food et burger joints.",
    features: ["Click & Collect", "Custom Burger", "Offres Étudiants"],
    image: "https://images.unsplash.com/photo-1586190848861-99c9574548e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'rest-3',
    title: "Sushi Zen",
    category: "Restauration",
    icon: <Utensils className="w-5 h-5" />,
    description: "Minimaliste japonais pour sushis et cuisine asiatique.",
    features: ["Carte Visuelle", "Livraison", "Histoire"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'rest-4',
    title: "Urban Coffee",
    category: "Restauration",
    icon: <Coffee className="w-5 h-5" />,
    description: "Chaleureux et hipster pour cafés et salons de thé.",
    features: ["Menu Boissons", "Wifi Info", "Ambiance"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'rest-5',
    title: "Pizzeria Napoli",
    category: "Restauration",
    icon: <Pizza className="w-5 h-5" />,
    description: "Traditionnel et convivial pour pizzerias.",
    features: ["Choix Pâte", "Livraison Express", "Fidélité"],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800"
  },

  // --- IMMOBILIER (5 Modèles) ---
  {
    id: 'real-1',
    title: "Immo Luxe",
    category: "Immobilier",
    icon: <Home className="w-5 h-5" />,
    description: "Pour agences vendant des biens d'exception.",
    features: ["Visite 360°", "Filtres Quartier", "Contact Agent"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'real-2',
    title: "Architecture Studio",
    category: "Immobilier",
    icon: <Ruler className="w-5 h-5" />,
    description: "Artistique pour architectes et décorateurs.",
    features: ["Portfolio Avant/Après", "Esquisses", "Prix"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'real-3',
    title: "Coworking Space",
    category: "Immobilier",
    icon: <Building2 className="w-5 h-5" />,
    description: "Moderne pour bureaux partagés et centres d'affaires.",
    features: ["Réservation Bureau", "Services", "Events"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'real-4',
    title: "Residencial Promo",
    category: "Immobilier",
    icon: <Building2 className="w-5 h-5" />,
    description: "Pour promoteurs immobiliers lançant un programme neuf.",
    features: ["Plans 3D", "Calendrier", "Financement"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'real-5',
    title: "BnB Manager",
    category: "Immobilier",
    icon: <BedDouble className="w-5 h-5" />,
    description: "Gestion de location courte durée et conciergerie.",
    features: ["Calendrier Dispo", "Avis", "Guide Local"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },

  // --- SANTÉ (5 Modèles) ---
  {
    id: 'health-1',
    title: "Clinique Care",
    category: "Santé",
    icon: <Stethoscope className="w-5 h-5" />,
    description: "Propre et rassurant pour cliniques généralistes.",
    features: ["Prise RDV", "Staff Médical", "Urgences"],
    image: "https://images.unsplash.com/photo-1613919113166-737594959cc0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'health-2',
    title: "Dental White",
    category: "Santé",
    icon: <Stethoscope className="w-5 h-5" />,
    description: "Lumineux pour dentistes et orthodontistes.",
    features: ["Avant/Après", "Soins Douleur", "Tarifs"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf4722e12?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'health-3',
    title: "Pharma Drive",
    category: "Santé",
    icon: <Heart className="w-5 h-5" />,
    description: "Pratique pour pharmacies avec vente en ligne.",
    features: ["Scan Ordonnance", "Click&Collect", "Conseils"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'health-4',
    title: "Psycho Therapy",
    category: "Santé",
    icon: <Heart className="w-5 h-5" />,
    description: "Apaisant pour psychologues et coachs de vie.",
    features: ["Blog Bien-être", "Consultation Vidéo", "Podcast"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'health-5',
    title: "Nutrition Bio",
    category: "Santé",
    icon: <Leaf className="w-5 h-5" />,
    description: "Frais pour nutritionnistes et diététiciens.",
    features: ["Calculateur IMC", "Recettes", "Suivi"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
  },

  // --- SPORT (5 Modèles) ---
  {
    id: 'sport-1',
    title: "Iron Gym",
    category: "Sport & Fitness",
    icon: <Dumbbell className="w-5 h-5" />,
    description: "Hardcore et motivant pour salles de musculation.",
    features: ["Planning", "Coachs", "Inscription"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'sport-2',
    title: "Yoga Flow",
    category: "Sport & Fitness",
    icon: <Heart className="w-5 h-5" />,
    description: "Zen et spirituel pour studios de yoga/pilates.",
    features: ["Réservation Tapis", "Retraites", "Boutique"],
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'sport-3',
    title: "Tennis Club",
    category: "Sport & Fitness",
    icon: <Dumbbell className="w-5 h-5" />,
    description: "Prestigieux pour clubs de tennis ou golf.",
    features: ["Réservation Court", "Tournois", "Club House"],
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'sport-4',
    title: "Crossfit Box",
    category: "Sport & Fitness",
    icon: <Dumbbell className="w-5 h-5" />,
    description: "Brut et communautaire pour le Crossfit.",
    features: ["WOD du jour", "Leaderboard", "Events"],
    image: "https://images.unsplash.com/photo-1517963879466-e9b5ce805564?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'sport-5',
    title: "Personal Trainer",
    category: "Sport & Fitness",
    icon: <Dumbbell className="w-5 h-5" />,
    description: "Centré sur l'individu pour coachs sportifs.",
    features: ["Transfo Avant/Après", "Programmes", "App"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
  },

   // --- BEAUTÉ (5 Modèles) ---
  {
    id: 'beauty-1',
    title: "Hair Salon",
    category: "Beauté",
    icon: <Scissors className="w-5 h-5" />,
    description: "Chic pour coiffeurs et barbiers.",
    features: ["Booking", "Lookbook Coupe", "Produits"],
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'beauty-2',
    title: "Spa Relax",
    category: "Beauté",
    icon: <Heart className="w-5 h-5" />,
    description: "Atmosphère détente pour spas et massages.",
    features: ["Carte Soins", "Bons Cadeaux", "Ambiance"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'beauty-3',
    title: "Nail Art Studio",
    category: "Beauté",
    icon: <Heart className="w-5 h-5" />,
    description: "Coloré et fun pour ongleries.",
    features: ["Galerie Art", "Tarifs", "Instagram"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'beauty-4',
    title: "Tattoo Ink",
    category: "Beauté",
    icon: <Scissors className="w-5 h-5" />,
    description: "Dark et artistique pour tatoueurs.",
    features: ["Portfolio Artistes", "FAQ Soins", "Booking"],
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'beauty-5',
    title: "Makeup Pro",
    category: "Beauté",
    icon: <Camera className="w-5 h-5" />,
    description: "Glamour pour maquilleuses événementielles.",
    features: ["Mariages", "Tutos Vidéo", "Contact"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
  },

  // --- ÉDUCATION (5 Modèles) ---
  {
    id: 'edu-1',
    title: "University Portal",
    category: "Éducation",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Institutionnel pour universités et grandes écoles.",
    features: ["Admission", "Campus Vie", "Recherche"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'edu-2',
    title: "E-Learning Hub",
    category: "Éducation",
    icon: <Laptop className="w-5 h-5" />,
    description: "Moderne pour plateformes de cours en ligne.",
    features: ["Lecteur Vidéo", "Quiz", "Certificats"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'edu-3',
    title: "Kindergarten",
    category: "Éducation",
    icon: <Heart className="w-5 h-5" />,
    description: "Ludique et coloré pour crèches et maternelles.",
    features: ["Activités", "Menu Cantine", "Photos Parents"],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'edu-4',
    title: "Language School",
    category: "Éducation",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "International pour centres de langues.",
    features: ["Test Niveau", "Séjours", "Tarifs"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'edu-5',
    title: "Music Academy",
    category: "Éducation",
    icon: <Music className="w-5 h-5" />,
    description: "Artistique pour conservatoires et profs de musique.",
    features: ["Auditions", "Profs", "Concerts"],
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&q=80&w=800"
  },
  
  // --- AUTRES (Sélection Variée) ---
  {
    id: 'auto-1',
    title: "Auto Dealer",
    category: "Automobile",
    icon: <Car className="w-5 h-5" />,
    description: "Concessionnaire auto multi-marques.",
    features: ["Stock", "Financement", "Essai"],
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'auto-2',
    title: "Car Wash",
    category: "Automobile",
    icon: <Car className="w-5 h-5" />,
    description: "Station de lavage et detailing.",
    features: ["Forfaits", "Réservation", "Avant/Après"],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'auto-3',
    title: "Mechanic Pro",
    category: "Automobile",
    icon: <Wrench className="w-5 h-5" />,
    description: "Garage mécanique de confiance.",
    features: ["Devis", "Dépannage", "Expertise"],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'artisan-1',
    title: "Plumber Hero",
    category: "Artisanat",
    icon: <Wrench className="w-5 h-5" />,
    description: "Plombier urgence et rénovation.",
    features: ["Intervention 24/7", "Tarifs", "Avis"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'artisan-2',
    title: "Electric Master",
    category: "Artisanat",
    icon: <Wrench className="w-5 h-5" />,
    description: "Électricien bâtiment et domotique.",
    features: ["Devis Gratuit", "Sécurité", "Réalisations"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'law-1',
    title: "Law Firm",
    category: "Juridique",
    icon: <Scale className="w-5 h-5" />,
    description: "Cabinet d'avocats international.",
    features: ["Équipe", "Domaines Droit", "Blog"],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'law-2',
    title: "Notary Public",
    category: "Juridique",
    icon: <Scale className="w-5 h-5" />,
    description: "Étude notariale classique.",
    features: ["Immobilier", "Famille", "RDV en ligne"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'travel-1',
    title: "Travel Agency",
    category: "Tourisme",
    icon: <Plane className="w-5 h-5" />,
    description: "Agence de voyage évasion.",
    features: ["Destinations", "Promo", "Blog"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'hotel-1',
    title: "Luxury Hotel",
    category: "Hôtellerie",
    icon: <BedDouble className="w-5 h-5" />,
    description: "Hôtel 5 étoiles avec services.",
    features: ["Suites", "Restaurant", "Conciergerie"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'event-1',
    title: "Wedding Planner",
    category: "Événementiel",
    icon: <Heart className="w-5 h-5" />,
    description: "Romantique pour organisation de mariages.",
    features: ["Portfolio", "Témoignages", "Formules"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'event-2',
    title: "Conference Pro",
    category: "Événementiel",
    icon: <Calendar className="w-5 h-5" />,
    description: "Corporate pour séminaires et congrès.",
    features: ["Programme", "Speakers", "Billetterie"],
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'port-1',
    title: "Photo Portfolio",
    category: "Portfolio",
    icon: <Camera className="w-5 h-5" />,
    description: "Photographe freelance.",
    features: ["Galerie Fullscreen", "Prints", "Contact"],
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'port-2',
    title: "Dev Portfolio",
    category: "Portfolio",
    icon: <Laptop className="w-5 h-5" />,
    description: "Développeur freelance / CV.",
    features: ["Stack Tech", "Github", "Projets"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  }
];

const CATEGORIES = ["Tous", "Entreprise", "E-commerce", "Restauration", "Immobilier", "Santé", "Sport & Fitness", "Beauté", "Éducation", "Automobile", "Artisanat", "Juridique", "Événementiel", "Tourisme", "Portfolio"];

const TemplatesGallery: React.FC<TemplatesGalleryProps> = ({ navigateTo }) => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredTemplates = activeCategory === "Tous" 
    ? TEMPLATES 
    : TEMPLATES.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* Header Section */}
      <div className="bg-slate-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-sm font-medium mb-6">
            <Layout className="w-4 h-4" />
            Catalogue : +50 Modèles
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Modèles de Sites <span className="text-indigo-400">Prêts à l'Emploi</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            Explorez notre vaste bibliothèque de structures optimisées. Choisissez un modèle comme point de départ, et nous le personnaliserons à 100% pour votre marque.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-6xl mx-auto">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-lg transform scale-105' 
                  : 'bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
              
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold shadow-lg">
                    {template.icon}
                    {template.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg flex items-center gap-1">
                        <Smartphone className="w-3 h-3" /> Mobile Ready
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {template.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {template.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {template.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500 font-medium">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-indigo-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={() => navigateTo('quote')}
                    className="group/btn relative w-full py-3 rounded-xl bg-slate-900 text-white font-bold overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Commander ce modèle
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <a
                    href={`https://wa.me/${COMPANY.phone.replace(/[^0-9]/g, '')}?text=Bonjour, je suis intéressé par le modèle : ${template.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-green-50 text-green-700 font-bold hover:bg-green-100 border border-green-200 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Discuter sur WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous ne trouvez pas votre bonheur ?</h2>
                <p className="text-lg md:text-xl text-indigo-50 mb-10 max-w-2xl mx-auto">
                    Ces modèles ne sont que des exemples. Nous pouvons créer une architecture 100% sur mesure adaptée à vos besoins spécifiques.
                </p>
                <button 
                    onClick={() => navigateTo('quote')}
                    className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:bg-slate-100 transition-all transform hover:-translate-y-1"
                >
                    Demander un design sur mesure
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TemplatesGallery;
