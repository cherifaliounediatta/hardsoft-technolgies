import React from 'react';

const TOOLS = [
  {
    name: "n8n",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/N8n-logo.png", // PNG is stable for n8n, SVG rare
    type: "Automation"
  },
  {
    name: "WordPress",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    type: "CMS"
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Shopify_logo_2018.svg",
    type: "E-commerce"
  },
  {
    name: "Flutter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    type: "Mobile App"
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    type: "Frontend"
  },
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    type: "Paiement"
  },
  {
    name: "Firebase",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    type: "Backend"
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    type: "Backend"
  },
  {
    name: "Tailwind",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    type: "Design"
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    type: "Language"
  }
];

const SECTORS = [
  {
    id: 1,
    title: "Entreprises & PME",
    sub: "Gestion & Croissance",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    title: "Restauration",
    sub: "Digitalisation Point de Vente",
    image: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    title: "Santé & Pharmacie",
    sub: "Solutions Médicales",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    title: "E-commerce",
    sub: "Boutiques en Ligne",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    title: "Associations",
    sub: "Engagement Communautaire",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    title: "BTP & Immobilier",
    sub: "Suivi de Chantiers",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 7,
    title: "Logistique",
    sub: "Tracking & Flottes",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 8,
    title: "Éducation",
    sub: "E-learning & Gestion",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=500"
  }
];

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>
      
      {/* --- PART 1: TOOLS & TECH --- */}
      <div className="relative z-10 mb-20 border-b border-slate-900 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-4">
                Stack Technique
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
                Puissance <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Low-Code</span> & Développement Custom
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
                Nous combinons la rapidité des outils modernes avec la robustesse du code sur-mesure pour des solutions pérennes.
            </p>
        </div>

        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee-slow flex gap-8 items-center whitespace-nowrap py-4 px-4">
                {[...TOOLS, ...TOOLS, ...TOOLS].map((tool, idx) => (
                    <div key={`${tool.name}-${idx}`} className="flex flex-col items-center gap-3 group/item min-w-[100px]">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 flex items-center justify-center p-5 transition-all duration-300 group-hover/item:border-indigo-500/30 group-hover/item:bg-white group-hover/item:shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover/item:-translate-y-1">
                            <img 
                                src={tool.logo} 
                                alt={tool.name} 
                                className="w-full h-full object-contain filter grayscale opacity-50 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500"
                            />
                        </div>
                        <span className="text-xs font-mono text-slate-500 group-hover/item:text-indigo-400 transition-colors">{tool.name}</span>
                    </div>
                ))}
            </div>
             {/* Gradient Fade for Marquee edges */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>


      {/* --- PART 2: SECTORS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <span className="text-indigo-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block animate-pulse">
          Secteurs d'activité
        </span>
        <h2 className="text-3xl font-bold text-white mb-4">
          Des solutions adaptées à <span className="text-indigo-400">votre métier</span>
        </h2>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Que vous soyez commerçant, médecin, chef d'entreprise ou responsable associatif, nous avons l'outil qu'il vous faut.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-6 items-center whitespace-nowrap py-4">
          {/* First set of images */}
          {SECTORS.map((sector) => (
            <SectorCard key={`s1-${sector.id}`} sector={sector} />
          ))}
          {/* Duplicate set for seamless scrolling */}
          {SECTORS.map((sector) => (
            <SectorCard key={`s2-${sector.id}`} sector={sector} />
          ))}
          {/* Triplicate set for wide screens safety */}
          {SECTORS.map((sector) => (
            <SectorCard key={`s3-${sector.id}`} sector={sector} />
          ))}
        </div>
        
        {/* Gradient Fade for Marquee edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
        .animate-marquee-slow:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const SectorCard: React.FC<{ sector: typeof SECTORS[0] }> = ({ sector }) => (
  <div className="relative w-72 h-96 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform duration-500 border border-slate-800 hover:border-indigo-500/50">
    <img 
      src={sector.image} 
      alt={sector.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[30%] group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
    
    <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <div className="h-1 w-12 bg-indigo-500 rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
      <h3 className="text-xl font-bold text-white mb-1 shadow-black drop-shadow-md">{sector.title}</h3>
      <p className="text-indigo-200 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">{sector.sub}</p>
    </div>
  </div>
);

export default TechStack;