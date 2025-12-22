
import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Maximize2, X, ChevronLeft, ChevronRight, GripHorizontal, Sparkles, Move, MessageSquare, ExternalLink } from 'lucide-react';
import { Project, GalleryItem } from '../types';
import { ViewState } from '../App';

interface PortfolioProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  navigateTo: (view: ViewState) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ projects, setProjects, navigateTo }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6; 

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (activeFilter === 'all') return true;
      const cat = project.category.toLowerCase();
      if (activeFilter === 'web') return cat.includes('web') || cat.includes('site');
      if (activeFilter === 'software') return cat.includes('logiciel') || cat.includes('saas');
      return true;
    });
  }, [projects, activeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const openLightbox = (projectIndex: number, imageIndex: number = 0) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const currentProject = filteredProjects[currentProjectIndex];
    setProjects(prev => prev.map(p => {
      if (p.id === currentProject.id) {
        // Fallback gallery items
        const galleryItems = p.gallery || [{ url: p.imageUrl, caption: '' }];
        const newGallery = [...galleryItems];
        const [movedItem] = newGallery.splice(draggedIndex, 1);
        newGallery.splice(dropIndex, 0, movedItem);
        return { ...p, gallery: newGallery };
      }
      return p;
    }));

    if (currentImageIndex === draggedIndex) setCurrentImageIndex(dropIndex);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Portfolio Professionnel</span>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl tracking-tight">Nos Réalisations</h2>
            <p className="mt-4 text-xl text-slate-600">Expertise technique et design au service de vos ambitions.</p>
          </div>
          
          <div className="flex bg-slate-100 p-1 rounded-xl">
             {['all', 'web', 'software'].map(filter => (
               <button 
                key={filter} 
                onClick={() => { setActiveFilter(filter); setCurrentPage(1); }}
                className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === filter ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
               >
                 {filter === 'all' ? 'Tous' : filter === 'web' ? 'Web' : 'Logiciels'}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {currentProjects.map((project, pIndex) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 cursor-pointer overflow-hidden" onClick={() => openLightbox((currentPage - 1) * ITEMS_PER_PAGE + pIndex)}>
                <img src={project.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     <Maximize2 className="w-4 h-4" /> Détails du projet
                   </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(project.tags || []).slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-tight">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="flex items-center justify-center p-2 bg-slate-900/5 border border-slate-200 rounded-2xl">
              <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} className={`p-2 rounded-xl ${currentPage === 1 ? 'text-slate-300' : 'text-slate-600 hover:bg-white'}`}><ChevronLeft /></button>
              <div className="flex px-2 gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button key={page} onClick={() => setCurrentPage(page)} className={`w-10 h-10 rounded-xl text-sm font-bold ${currentPage === page ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-white'}`}>{page}</button>
                ))}
              </div>
              <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} className={`p-2 rounded-xl ${currentPage === totalPages ? 'text-slate-300' : 'text-slate-600 hover:bg-white'}`}><ChevronRight /></button>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="mt-24 text-center bg-slate-900 rounded-[2.5rem] p-10 md:p-16 border border-slate-800 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Inspiré par nos réalisations ?</h3>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Votre projet mérite une expertise à la hauteur de vos ambitions. Discutons de la manière dont nous pouvons transformer vos idées en succès numérique concret.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button onClick={scrollToContact} className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <span>Démarrer un projet</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button onClick={() => navigateTo('quote')} className="w-full sm:w-auto px-10 py-5 bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-2xl hover:bg-slate-700 transition-all flex items-center justify-center gap-3">
                <MessageSquare className="w-5 h-5" />
                <span>Demander un devis</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && filteredProjects[currentProjectIndex] && (
        <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button onClick={closeLightbox} className="absolute top-8 right-8 text-white/50 hover:text-white"><X className="w-10 h-10" /></button>
          
          <div className="w-full max-w-5xl px-4 flex flex-col items-center">
            <div className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center mb-12">
               {/* Gallery fallback */}
               {(() => {
                 const currentProject = filteredProjects[currentProjectIndex];
                 const gallery = currentProject.gallery || [{ url: currentProject.imageUrl, caption: '' }];
                 const imgItem = gallery[currentImageIndex] || gallery[0];
                 const url = typeof imgItem === 'string' ? imgItem : (imgItem as any).url;
                 return <img src={url} className="max-h-full max-w-full object-contain rounded-xl shadow-2xl" alt="" />;
               })()}
            </div>

            <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 overflow-hidden">
              <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                {(() => {
                  const currentProject = filteredProjects[currentProjectIndex];
                  const gallery = currentProject.gallery || [{ url: currentProject.imageUrl, caption: '' }];
                  return gallery.map((item: any, idx) => {
                    const url = typeof item === 'string' ? item : item.url;
                    return (
                      <div
                        key={idx}
                        draggable
                        onDragStart={(e) => handleDragStart(e, idx)}
                        onDragOver={(e) => handleDragOver(e, idx)}
                        onDrop={(e) => handleDrop(e, idx)}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden cursor-move border-2 transition-all duration-300 ${idx === currentImageIndex ? 'border-indigo-500 ring-4 ring-indigo-500/20 scale-105' : 'border-white/10 hover:border-white/30'} ${draggedIndex === idx ? 'opacity-20' : ''}`}
                      >
                        <img src={url} className="w-full h-full object-cover pointer-events-none" alt="" />
                        <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <GripHorizontal className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
