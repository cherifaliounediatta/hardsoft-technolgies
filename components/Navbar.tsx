
import React, { useState, useEffect } from 'react';
import { Menu, X, LifeBuoy, FileText, Fingerprint, Layout, ArrowRight, Home, Briefcase, Layers, Image, Info, Users, Search } from 'lucide-react';
import { ViewState } from '../App';
import GlobalSearch from './GlobalSearch';

interface NavbarProps {
  currentView: ViewState;
  navigateTo: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      if (currentView !== 'home') {
        setActiveSection('');
        return;
      }
      
      const sections = ['home', 'about', 'services', 'portfolio'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavClick = (view: ViewState, hash?: string) => {
    setIsOpen(false);
    if (view === 'home' && hash) {
      if (currentView === 'home') {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigateTo('home');
        setTimeout(() => {
           document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigateTo(view);
    }
  };

  const handleSearchSelect = (type: 'project' | 'client', id: string) => {
    if (type === 'project') {
        handleNavClick('home', '#portfolio');
    } else if (type === 'client') {
        handleNavClick('clients');
    }
  };

  const NavItem = ({ 
    label, 
    isActive, 
    onClick, 
    icon: Icon 
  }: { 
    label: string; 
    isActive: boolean; 
    onClick: () => void;
    icon?: React.ElementType;
  }) => (
    <button 
      onClick={onClick} 
      className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 group overflow-hidden ${
        isActive 
          ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/5' 
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-indigo-400'} transition-colors`} />}
      <span className="relative z-10">{label}</span>
      {isActive && (
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
      )}
    </button>
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 py-4 pointer-events-none">
        <nav 
          className="pointer-events-auto w-full max-w-6xl bg-slate-950/85 backdrop-blur-xl border border-slate-800/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300"
          aria-label="Navigation principale"
        >
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo Area */}
              <div 
                className="flex items-center gap-3 cursor-pointer group" 
                onClick={() => handleNavClick('home', '#home')}
                role="button"
                tabIndex={0}
              >
                <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl border border-slate-700 shadow-inner group-hover:border-indigo-500/50 transition-all duration-500">
                   <Fingerprint className="w-6 h-6 text-indigo-500 group-hover:text-indigo-400 transition-colors" strokeWidth={2} />
                   <div className="absolute inset-0 bg-indigo-500/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="flex flex-col">
                  <div className="font-bold text-lg leading-none tracking-tight flex items-center font-inter">
                    <span className="text-white">Hard</span>
                    <span className="text-indigo-500">Soft</span>
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 group-hover:text-indigo-300 transition-colors font-medium">
                    Technologies
                  </span>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1 p-1 bg-slate-900/50 rounded-xl border border-slate-800/50">
                <NavItem 
                  label="Accueil" 
                  icon={Home}
                  isActive={currentView === 'home' && activeSection === 'home'} 
                  onClick={() => handleNavClick('home', '#home')} 
                />
                <NavItem 
                  label="Clients" 
                  icon={Users}
                  isActive={currentView === 'clients'} 
                  onClick={() => handleNavClick('clients')} 
                />
                <NavItem 
                  label="Services" 
                  icon={Layers}
                  isActive={currentView === 'services'} 
                  onClick={() => handleNavClick('services')} 
                />
                <NavItem 
                  label="Modèles" 
                  icon={Layout}
                  isActive={currentView === 'templates'} 
                  onClick={() => handleNavClick('templates')} 
                />
                <NavItem 
                  label="Réalisations" 
                  icon={Image}
                  isActive={currentView === 'home' && activeSection === 'portfolio'} 
                  onClick={() => handleNavClick('home', '#portfolio')} 
                />
              </div>

              {/* CTA Actions */}
              <div className="hidden md:flex items-center gap-2 lg:gap-3">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Rechercher"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2 group"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold hidden xl:inline">Rechercher</span>
                </button>

                <button
                  onClick={() => handleNavClick(currentView === 'proposal' ? 'home' : 'proposal')}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                    currentView === 'proposal' ? 'text-white bg-slate-800' : 'text-slate-500 hover:text-indigo-400'
                  }`}
                >
                  {currentView === 'proposal' ? 'Retour' : 'Espace Client'}
                </button>

                <button
                  onClick={() => handleNavClick('quote')}
                  className="relative group overflow-hidden pl-4 pr-5 py-2.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_100%] animate-[shimmer_3s_infinite] group-hover:animate-none group-hover:bg-indigo-500"></div>
                  <div className="relative flex items-center gap-2">
                     <FileText className="w-4 h-4" />
                     <span>Devis</span>
                  </div>
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-xl text-slate-400"
                  aria-label="Recherche mobile"
                >
                  <Search className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                  aria-label="Menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`lg:hidden absolute top-full left-0 right-0 mt-2 p-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}
          >
            <div className="bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
               <div className="p-4 space-y-2">
                  <button onClick={() => handleNavClick('home', '#home')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${currentView === 'home' && activeSection === 'home' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                      <Home className="w-5 h-5" /> Accueil
                  </button>
                  <button onClick={() => handleNavClick('clients')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${currentView === 'clients' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                      <Users className="w-5 h-5" /> Annuaire Clients
                  </button>
                  <button onClick={() => handleNavClick('services')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${currentView === 'services' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                      <Layers className="w-5 h-5" /> Services & Expertises
                  </button>
                  <button onClick={() => handleNavClick('templates')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${currentView === 'templates' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                      <Layout className="w-5 h-5" /> Catalogue Modèles
                  </button>
                  <button onClick={() => handleNavClick('home', '#portfolio')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${currentView === 'home' && activeSection === 'portfolio' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                      <Image className="w-5 h-5" /> Nos Réalisations
                  </button>
                  <button onClick={() => handleNavClick('support')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${currentView === 'support' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                      <LifeBuoy className="w-5 h-5" /> Support Client
                  </button>
               </div>
               
               <div className="p-4 bg-slate-950/50 border-t border-slate-800 grid grid-cols-2 gap-3">
                   <button onClick={() => handleNavClick(currentView === 'proposal' ? 'home' : 'proposal')} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                      <Briefcase className="w-5 h-5 mb-1" />
                      <span className="text-xs font-medium">Espace Client</span>
                   </button>
                   <button onClick={() => handleNavClick('quote')} className="flex flex-col items-center justify-center p-3 rounded-xl bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-colors">
                      <FileText className="w-5 h-5 mb-1" />
                      <span className="text-xs font-bold">Devis Gratuit</span>
                   </button>
               </div>
            </div>
          </div>
        </nav>
      </div>
      
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelect={handleSearchSelect}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
