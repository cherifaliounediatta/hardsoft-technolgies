
import React, { useState, useMemo } from 'react';
import { Search, Globe, Filter, ExternalLink, ArrowRight, ShieldCheck, Users, Briefcase, Layout } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

const ClientSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = useMemo(() => {
    const cats = ['Tous', ...Array.from(new Set(CASE_STUDIES.map(c => c.category)))];
    return cats;
  }, []);

  const filteredClients = useMemo(() => {
    return CASE_STUDIES.filter(client => {
      const matchesSearch = 
        client.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.goal.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = activeCategory === 'Tous' || client.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Confiance & Expertise</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Annuaire des Clients</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez les entreprises et institutions qui font confiance à HardSoft Technologies pour leurs projets digitaux.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            
            {/* Search Input */}
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un client, un secteur, un projet..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
              <Filter className="text-slate-400 w-5 h-5 flex-shrink-0 hidden lg:block mr-2" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClients.length > 0 ? (
            filteredClients.map((client, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {client.category === 'Santé' ? <ShieldCheck className="w-6 h-6" /> : 
                     client.category === 'E-commerce' ? <Layout className="w-6 h-6" /> :
                     client.category === 'Institutionnel' ? <Users className="w-6 h-6" /> :
                     <Briefcase className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                    {client.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {client.client}
                </h3>
                <p className="text-indigo-600 text-sm font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {client.goal}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {client.details}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <a 
                    href={client.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    Voir le site <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-all" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Aucun résultat trouvé</h3>
              <p className="text-slate-500">Essayez d'ajuster vos filtres ou votre terme de recherche.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('Tous'); }}
                className="mt-6 text-indigo-600 font-bold hover:underline"
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Rejoignez nos clients satisfaits</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10">
              Chaque client est unique. Nous apportons une réponse technologique précise à vos enjeux de croissance et de visibilité.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-xl transition-all">
                Démarrer mon projet
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-sm transition-all">
                Nos Services
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClientSearch;
