import React from 'react';

const PARTNERS = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Odoo_logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg' },
  { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
];

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Écosystème</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Nos Partenaires Technologiques</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                Nous collaborons avec les leaders mondiaux de l'industrie pour déployer des infrastructures fiables et performantes chez nos clients.
            </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {PARTNERS.map((partner) => (
            <div 
              key={partner.name} 
              className="w-full h-24 flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-8 w-auto max-w-full filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;