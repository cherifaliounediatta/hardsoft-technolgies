import React from 'react';
import { ViewState } from '../App';
import { 
  Building2, ShoppingCart, Stethoscope, GraduationCap, Utensils, HardHat, 
  CheckCircle2, ArrowRight, Server, Shield, Wrench, Code
} from 'lucide-react';

interface ServicesPageProps {
  navigateTo: (view: ViewState) => void;
}

const SECTORS = [
  {
    id: 'retail',
    title: "Commerce & Distribution",
    icon: <ShoppingCart className="w-8 h-8" />,
    description: "Des solutions pour fluidifier vos ventes, gérer vos stocks en temps réel et fidéliser vos clients.",
    features: [
      "Logiciels de caisse (POS) tactiles & intuitifs",
      "Gestion de stock multi-boutiques centralisée",
      "Sites E-commerce connectés au magasin physique",
      "Solutions de fidélité et cartes cadeaux"
    ],
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    id: 'health',
    title: "Santé & Médical",
    icon: <Stethoscope className="w-8 h-8" />,
    description: "Digitalisez votre cabinet ou clinique pour vous concentrer sur l'essentiel : vos patients.",
    features: [
      "Logiciels de gestion de cabinet médical",
      "Plateformes de prise de rendez-vous en ligne",
      "Dossiers patients informatisés et sécurisés",
      "Affichage dynamique pour salles d'attente"
    ],
    color: "bg-green-50 text-green-600 border-green-100"
  },
  {
    id: 'construction',
    title: "BTP & Immobilier",
    icon: <HardHat className="w-8 h-8" />,
    description: "Outils de suivi et de présentation pour constructeurs, architectes et agences immobilières.",
    features: [
      "Sites vitrines immobiliers avec recherche avancée",
      "Visites virtuelles 360° des biens",
      "Logiciels de suivi de chantier et devis",
      "Infrastructure réseau pour bureaux de vente"
    ],
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    id: 'education',
    title: "Éducation & Formation",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Modernisez l'apprentissage et la gestion administrative de votre établissement.",
    features: [
      "Plateformes E-learning (LMS) personnalisées",
      "Portails parents/élèves pour le suivi scolaire",
      "Gestion des inscriptions et paiements en ligne",
      "Salles informatiques et Wifi campus"
    ],
    color: "bg-yellow-50 text-yellow-600 border-yellow-100"
  },
  {
    id: 'restaurant',
    title: "Restauration & Hôtellerie",
    icon: <Utensils className="w-8 h-8" />,
    description: "Optimisez le service et l'expérience client, de la commande à l'encaissement.",
    features: [
      "Menus QR Code et Commande à table",
      "Systèmes de Click & Collect",
      "Gestion des réservations et plans de salle",
      "Wifi Invité sécurisé et performant"
    ],
    color: "bg-red-50 text-red-600 border-red-100"
  },
  {
    id: 'corporate',
    title: "Entreprises & PME",
    icon: <Building2 className="w-8 h-8" />,
    description: "Le socle technologique pour la productivité et la croissance de votre entreprise.",
    features: [
      "ERP et CRM sur mesure",
      "Développement d'applications métiers",
      "Sites institutionnels et Intranets",
      "Sécurité des données et sauvegardes"
    ],
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  }
];

const TRANSVERSAL_SERVICES = [
  {
    title: "Développement Web & Logiciels",
    icon: <Code className="w-6 h-6 text-white" />,
    items: [
      "Sites Internet (Vitrine & E-commerce)",
      "Applications Mobiles Natives & Hybrides",
      "Logiciels de Gestion (ERP/CRM) Custom",
      "Développement d'API & Micro-services"
    ]
  },
  {
    title: "Infrastructure Physique",
    icon: <Server className="w-6 h-6 text-white" />,
    items: [
      "Câblage informatique & Baies de brassage",
      "Installation de serveurs locaux",
      "Solutions d'énergie solaire & Onduleurs",
      "Climatisation de salles techniques"
    ]
  },
  {
    title: "Sécurité & Réseaux",
    icon: <Shield className="w-6 h-6 text-white" />,
    items: [
      "Vidéosurveillance IP haute définition",
      "Contrôle d'accès et biométrie",
      "Firewalls et sécurisation réseau",
      "Interconnexion de sites distants (VPN)"
    ]
  },
  {
    title: "Maintenance & Matériel",
    icon: <Wrench className="w-6 h-6 text-white" />,
    items: [
      "Vente Matériel Informatique & POS",
      "Maintenance Préventive & Curative",
      "Infogérance & Support Helpdesk",
      "Gestion de Parc & Licences"
    ]
  }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* Hero Section */}
      <div className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-4 block">Notre Expertise</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Experts en <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Sites Internet & Logiciels</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Chez HardSoft Technologies, nous excellons dans le développement de solutions numériques sur mesure. 
            Nous vous accompagnons de la conception de votre site web à l'intégration complète de votre infrastructure IT.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
        
        {/* Section 1: Services par Secteur */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Solutions par Secteur d'Activité</h2>
            <p className="text-slate-500 mt-2">Choisissez votre domaine pour découvrir nos offres dédiées.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector) => (
              <div 
                key={sector.id} 
                className={`rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white group ${sector.color.replace('bg-', 'hover:bg-').split(' ')[0]}/10`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${sector.color} group-hover:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{sector.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {sector.description}
                </p>
                <ul className="space-y-3">
                  {sector.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${sector.color.split(' ')[1]}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button 
                    onClick={() => navigateTo('quote')}
                    className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all text-slate-900 group-hover:text-indigo-600"
                  >
                    Demander un devis <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Services Transversaux (Le Hard & Le Soft) */}
        <div className="mb-20">
            <div className="text-center mb-12">
                <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs mb-2 block">Le Guichet Unique</span>
                <h2 className="text-3xl font-bold text-slate-900">Expertise Technique Globale</h2>
                <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
                    Au-delà des solutions métiers, nous assurons la fondation technique de votre entreprise. 
                    De la ligne de code à l'installation physique.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TRANSVERSAL_SERVICES.map((service, idx) => (
                    <div key={idx} className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row gap-6 hover:bg-slate-800 transition-colors border border-slate-800">
                        <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-900/50">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                {service.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à moderniser votre activité ?</h2>
                <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
                    Que vous ayez besoin d'un nouveau logiciel, d'un site web performant ou d'une infrastructure réseau, notre équipe est prête à intervenir.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => navigateTo('quote')}
                        className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-slate-100 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Parler de mon projet
                    </button>
                    <button 
                        onClick={() => navigateTo('portfolio')}
                        className="px-8 py-4 bg-indigo-700/50 border border-white/20 text-white font-bold rounded-full hover:bg-indigo-700 transition-all w-full sm:w-auto"
                    >
                        Voir nos réalisations
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;