
import React from 'react';
import { Target, ArrowRight, ShieldCheck, Database, ShoppingBag, Linkedin, Twitter, Lightbulb, Trophy, TrendingUp, CheckCircle2, Globe, Heart, Music, ExternalLink } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

const CORE_VALUES = [
  {
    title: "Innovation",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Nous repoussons sans cesse les limites de la technologie pour concevoir des solutions créatives, intelligentes et adaptées aux enjeux modernes.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  },
  {
    title: "Fiabilité",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "La qualité et la sécurité sont au cœur de nos priorités. Chaque projet est conçu pour garantir robustesse, stabilité et confiance.",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    title: "Excellence",
    icon: <Trophy className="w-6 h-6" />,
    description: "Nous visons l'excellence à toutes les étapes — de la conception au support client — pour offrir une expérience irréprochable et durable.",
    color: "bg-amber-50 text-amber-600 border-amber-100"
  },
  {
    title: "Impact",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Nos solutions ont pour objectif de générer une valeur concrète et un impact positif sur les performances et la croissance des entreprises.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  }
];

const CERTIFICATIONS = [
  "AWS Certified",
  "Google Ads",
  "Microsoft Certified",
  "ISO 27001 Certified"
];

const TEAM_MEMBERS = [
  {
    name: "Cherif Alioune Diatta",
    role: "Fondateur & CEO",
    bio: "Visionnaire passionné, il pilote la stratégie de HardSoft depuis 2017 avec une ambition : connecter l'Afrique par la technologie.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Aïssatou Ndiaye",
    role: "Directrice Technique (CTO)",
    bio: "Experte en architecture Cloud et cybersécurité, ancienne ingénieure chez Atos.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Moussa Fall",
    role: "Lead Développeur",
    bio: "Spécialiste Fullstack et Mobile (Flutter), passionné par l'UX et la performance.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Aminata Sow",
    role: "Responsable Marketing",
    bio: "Stratège digitale focalisée sur la croissance des PME et l'identité de marque.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: HISTORY & MISSION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: History */}
          <div>
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">À Propos de nous</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Notre Histoire
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-4">
                Fondée par <span className="font-bold text-slate-900">Cherif Alioune Diatta</span>, Hardsoft Technologies est une entreprise spécialisée dans le développement de solutions technologiques innovantes et sur mesure.
              </p>
              <p className="mb-4">
                Depuis <span className="font-bold text-indigo-600">avril 2017</span>, nous accompagnons les entreprises, institutions et organisations dans leur transformation numérique, en leur proposant des outils performants, sécurisés et parfaitement adaptés à leurs besoins.
              </p>
              <p>
                Notre ambition est de créer des technologies qui dépassent les attentes, stimulent la croissance et améliorent l’efficacité de nos partenaires à travers le monde.
              </p>
            </div>

            {/* Certifications Badge Bar */}
            <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Expertise & Certifications</p>
                <div className="flex flex-wrap gap-3">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {cert}
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Right: Vision & Mission Cards */}
          <div className="space-y-6">
             <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all"></div>
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Target className="w-6 h-6 text-indigo-400" /> Notre Vision
                 </h3>
                 <p className="text-slate-300 leading-relaxed">
                   Être un leader mondial de l’innovation digitale, en aidant les entreprises de tous horizons à prospérer à l’ère numérique grâce à des solutions technologiques fiables, performantes et avant-gardistes.
                 </p>
             </div>

             <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:border-indigo-300 transition-colors">
                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-indigo-600" /> Notre Mission
                 </h3>
                 <p className="text-slate-600 leading-relaxed">
                   Simplifier la transformation digitale des entreprises grâce à des outils hautement performants, faciles à intégrer et conçus pour favoriser une croissance durable.
                 </p>
                 <p className="text-slate-600 mt-4 font-medium">
                   Nous mettons la technologie au service de l’humain pour créer un avenir plus intelligent et connecté.
                 </p>
             </div>
          </div>
        </div>

        {/* --- PART 2: VALUES GRID --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">Nos Valeurs Fondamentales</h3>
            <p className="text-slate-500 mt-2">Les principes qui guident notre travail et définissent notre engagement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((item, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${item.color.replace('text-', 'border-').split(' ')[2]} bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 3: TEAM --- */}
        <div className="mb-24 relative">
           {/* Decorative background element */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-slate-50/50 -skew-y-3 -z-10 rounded-[3rem]"></div>

           <div className="text-center mb-12">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs mb-2 block">L'Humain avant tout</span>
            <h3 className="text-3xl font-bold text-slate-900">Notre Équipe Dirigeante</h3>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
              Des experts passionnés qui allient savoir-faire technique et connaissance du marché local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] mb-4 shadow-md border border-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                     <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-indigo-600 rounded-full backdrop-blur-sm transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-blue-500 rounded-full backdrop-blur-sm transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                     </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                  <p className="text-indigo-600 text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed px-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 4: CASE STUDIES --- */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
           
           <div className="relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
               <div>
                 <h3 className="text-3xl font-bold mb-2">Nos Réalisations Clés</h3>
                 <h4 className="text-xl font-bold text-indigo-400 mb-3">Vos solutions innovantes, résultats prouvés</h4>
                 <p className="text-slate-400 max-w-2xl">
                   Explorez notre portfolio et découvrez comment Hardsoft Technologies transforme des idées ambitieuses en réalité grâce à une technologie de pointe.
                 </p>
               </div>
               <a href="#portfolio" className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                 Voir tout le portfolio <ArrowRight className="w-4 h-4" />
               </a>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {CASE_STUDIES.map((study, idx) => (
                 <a 
                   key={idx} 
                   href={study.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col h-full"
                 >
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-indigo-400">
                        <Globe className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider opacity-80">{study.goal}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                   </div>
                   
                   <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{study.client}</h4>
                   <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                     {study.details}
                   </p>
                 </a>
               ))}
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;
