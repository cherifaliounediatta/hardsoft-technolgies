import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowUpRight, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, BookOpen, Search, Plus, Edit3, GripHorizontal, Sparkles, Tag as TagIcon, ZoomIn, ZoomOut, RotateCcw, ArrowUpDown, Calendar, ExternalLink, Move } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, GalleryItem } from '../types';
import { ViewState } from '../App';

interface ProjectState extends Omit<Project, 'gallery'> {
  gallery: GalleryItem[];
  tags: string[];
}

interface PortfolioProps {
  navigateTo: (view: ViewState) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ navigateTo }) => {
  const [projects, setProjects] = useState<ProjectState[]>(() => {
    return PROJECTS.map(p => {
      let galleryItems: GalleryItem[] = [];
      if (p.gallery && p.gallery.length > 0) {
        galleryItems = p.gallery.map(g => typeof g === 'string' ? { url: g, caption: '' } : g);
      } else if (p.imageUrl) {
        galleryItems = [{ url: p.imageUrl, caption: '' }];
      }
      return { ...p, gallery: galleryItems, tags: p.tags || [] };
    });
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [newTagInput, setNewTagInput] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Sites Web' },
    { id: 'software', label: 'Logiciels & SaaS' }
  ];

  const allTags = useMemo(() => Array.from(new Set(projects.flatMap(p => p.tags))).sort(), [projects]);

  const filteredProjects = useMemo(() => {
    let result = projects.filter(project => {
      let matchesCategory = activeFilter === 'all';
      if (!matchesCategory) {
        const cat = project.category.toLowerCase();
        if (activeFilter === 'web') matchesCategory = cat.includes('web') || cat.includes('site');
        if (activeFilter === 'software') matchesCategory = cat.includes('logiciel') || cat.includes('saas');
      }
      const query = searchQuery.toLowerCase();
      const matchesSearch = project.title.toLowerCase().includes(query) || project.tags.some(t => t.toLowerCase().includes(query));
      const matchesTags = activeTags.length === 0 || activeTags.every(tag => project.tags.includes(tag));
      return matchesCategory && matchesSearch && matchesTags;
    });
    return sortOrder === 'newest' ? [...result].reverse() : result;
  }, [projects, activeFilter, searchQuery, activeTags, sortOrder]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const openLightbox = (projectIndex: number, imageIndex: number = 0) => {
    lastActiveElement.current = document.activeElement as HTMLElement;
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    if (lastActiveElement.current) lastActiveElement.current.focus();
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    // Créer une image fantôme personnalisée si nécessaire
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
        const newGallery = [...p.gallery];
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

  const handleStartSimilarProject = () => {
    const project = filteredProjects[currentProjectIndex];
    localStorage.setItem('quote_prefill_service', project.category.toLowerCase().includes('site') ? 'web' : 'software');
    closeLightbox();
    navigateTo('quote');
  };

  return (
    <section id="portfolio" ref={portfolioRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Portfolio Professionnel</span>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">Nos Réalisations</h2>
            <p className="mt-4 text-xl text-slate-600">Expertise technique et design au service de vos ambitions.</p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProjects.map((project, pIndex) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all">
              <div className="relative h-64 cursor-pointer overflow-hidden" onClick={() => openLightbox((currentPage - 1) * ITEMS_PER_PAGE + pIndex)}>
                <img src={project.imageUrl} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30">Détails du projet</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with enhanced Drag and Drop */}
      {lightboxOpen && filteredProjects[currentProjectIndex] && (
        <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button onClick={closeLightbox} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><X className="w-10 h-10" /></button>
          
          <div className="w-full max-w-5xl px-4 flex flex-col items-center">
            {/* Main Image View */}
            <div className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center mb-12">
               <img 
                 src={filteredProjects[currentProjectIndex].gallery[currentImageIndex].url} 
                 className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
               />
            </div>

            {/* Drag & Drop Reordering Bar */}
            <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                 <h4 className="text-white font-bold flex items-center gap-2">
                   <Move className="w-4 h-4 text-indigo-400" /> 
                   Réorganiser la galerie
                   <span className="text-xs font-normal text-slate-500 ml-2">(Glisser-déposer les miniatures)</span>
                 </h4>
                 <button onClick={handleStartSimilarProject} className="text-xs bg-indigo-600 text-white px-4 py-2 rounded-full font-bold hover:bg-indigo-500 transition-all">Lancer un projet similaire</button>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {filteredProjects[currentProjectIndex].gallery.map((item, idx) => (
                  <div
                    key={idx}
                    draggable
                    onDragStart={(e) => handleDragStart(e, idx)}
                    onDragOver={(e) => handleDragOver(e, idx)}
                    onDrop={(e) => handleDrop(e, idx)}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden cursor-move border-2 transition-all duration-300 group
                      ${idx === currentImageIndex ? 'border-indigo-500 ring-4 ring-indigo-500/20 scale-105' : 'border-white/10 hover:border-white/30'}
                      ${draggedIndex === idx ? 'opacity-20 scale-90' : 'opacity-100'}
                      ${dragOverIndex === idx && draggedIndex !== idx ? 'translate-x-4 scale-110 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.4)]' : ''}
                    `}
                  >
                    <img src={item.url} className="w-full h-full object-cover pointer-events-none" />
                    <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <GripHorizontal className="w-6 h-6 text-white drop-shadow-md" />
                    </div>
                    {idx === currentImageIndex && (
                       <div className="absolute top-1 right-1 bg-indigo-500 rounded-full p-1"><Sparkles className="w-3 h-3 text-white" /></div>
                    )}
                  </div>
                ))}
                
                <label className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl border-2 border-dashed border-white/20 hover:border-indigo-400 hover:bg-white/5 flex flex-col items-center justify-center cursor-pointer transition-all group">
                   <Plus className="w-6 h-6 text-white/40 group-hover:text-indigo-400 group-hover:scale-110 transition-all" />
                   <span className="text-[10px] text-white/40 mt-1 uppercase font-bold group-hover:text-indigo-400">Ajouter</span>
                   <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;