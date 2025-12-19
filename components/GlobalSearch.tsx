
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, User, Briefcase, Command, Globe, ExternalLink } from 'lucide-react';
import { PROJECTS, CASE_STUDIES } from '../constants';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: 'project' | 'client', id: string) => void;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.tags?.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredClients = CASE_STUDIES.filter(c =>
    c.client.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase()) ||
    c.details.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = filteredProjects.length + filteredClients.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Search Panel */}
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative z-10 animate-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-slate-800 flex items-center gap-4">
          <Search className="w-6 h-6 text-slate-500" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Rechercher un client, un projet, une étude de cas..."
            className="flex-grow bg-transparent border-none focus:ring-0 text-white text-lg placeholder:text-slate-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded-lg text-slate-500 text-[10px] font-bold">
            <Command className="w-3 h-3" /> K
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
          {query === '' ? (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm">Tapez quelque chose pour commencer votre recherche...</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['E-commerce', 'SaaS', 'Santé', 'Sénégal Délices'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-full text-xs transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <p>Aucun résultat trouvé pour "{query}"</p>
            </div>
          ) : (
            <div className="space-y-6 p-2">
              {/* Projets Section */}
              {filteredProjects.length > 0 && (
                <div>
                  <h3 className="px-3 text-[10px] uppercase tracking-widest font-bold text-slate-600 mb-2">Projets Réalisés</h3>
                  <div className="space-y-1">
                    {filteredProjects.map(project => (
                      <button
                        key={project.id}
                        onClick={() => {
                            onSelect('project', project.id);
                            onClose();
                        }}
                        className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-indigo-600/10 group transition-colors text-left"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-white font-bold text-sm flex items-center justify-between">
                            {project.title}
                            <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-indigo-400 translate-x-0 group-hover:translate-x-1 transition-all" />
                          </div>
                          <div className="text-slate-500 text-xs mt-0.5">{project.category}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Clients / Case Studies Section */}
              {filteredClients.length > 0 && (
                <div>
                  <h3 className="px-3 text-[10px] uppercase tracking-widest font-bold text-slate-600 mb-2">Clients & Études de Cas</h3>
                  <div className="space-y-1">
                    {filteredClients.map(client => (
                      <a
                        key={client.client}
                        href={client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-green-600/10 group transition-colors text-left"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-white font-bold text-sm flex items-center justify-between">
                            {client.client}
                            <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-green-400 transition-all" />
                          </div>
                          <div className="text-slate-500 text-xs mt-0.5">{client.goal} • {client.category}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
            <div className="flex gap-4 px-3">
                <span className="flex items-center gap-1"><kbd className="bg-slate-800 px-1 rounded">ESC</kbd> Fermer</span>
                <span className="flex items-center gap-1"><kbd className="bg-slate-800 px-1 rounded">↵</kbd> Sélectionner</span>
            </div>
            <div className="px-3">
                {totalResults} résultat{totalResults > 1 ? 's' : ''}
            </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
