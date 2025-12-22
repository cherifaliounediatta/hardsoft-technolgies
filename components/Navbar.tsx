
import React, { useState, useEffect } from 'react';
import { Menu, X, LifeBuoy, FileText, Fingerprint, Layout, ArrowRight, Home, Briefcase, Layers, Users, Search, BookOpen, Phone, Facebook, Linkedin, Instagram, Mail, Globe, Sparkles } from 'lucide-react';
import { ViewState } from '../App';
import GlobalSearch from './GlobalSearch';
import { COMPANY } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  navigateTo: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

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

  const MobileNavLink = ({ 
    label, 
    icon: Icon, 
    isActive, 
    onClick, 
    index,
    subLabel
  }: { 
    label: string; 
    icon: React.ElementType; 
    isActive: boolean; 
    onClick: () => void;
    index: number;
    subLabel?: string;
  }) => (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 transform ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      } ${
        isActive 
          ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-500/20' 
          : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className={`p-2.5 rounded-xl flex-shrink-0 ${isActive ? 'bg-white/20' : 'bg-slate-800 border border-white/5'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-lg font-bold tracking-tight">{label}</span>
        {subLabel && <span className={`text-[10px] uppercase tracking-widest font-bold ${isActive ? 'text-white/60' : 'text-slate-500'}`}>{subLabel}</span>}
      </div>
      <ArrowRight className={`ml-auto w-5 h-5 transition-transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
    </button>
  );

  return (
    <>
      {/* Desktop & Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 py-4 pointer-events-none">
        <nav 
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 rounded-2xl border flex items-center justify-between h-16 px-4 md:px-6 shadow-2xl ${
            scrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl border-slate-800/60' 
            : 'bg-slate-950/50 backdrop-blur-md border-transparent'
          }`}
          aria-label="Navigation principale"
        >
          {/* Logo Area */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick('home', '#home')}
            role="button"
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
          
          {/* Desktop Navigation (Hidden on Mobile) */}
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
              label="Blog" 
              icon={BookOpen}
              isActive={currentView === 'blog' || currentView === 'blog-post'} 
              onClick={() => handleNavClick('blog')} 
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
          </div>

          {/* Desktop CTA (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2 group"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
          
          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={`relative p-2.5 rounded-xl transition-all duration-500 group pointer-events-auto ${
                isOpen 
                ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/40 rotate-180' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              {isOpen && (
                <div className="absolute -inset-1 bg-white/20 rounded-xl blur-sm animate-pulse"></div>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Fullscreen Mobile Drawer (Isolated from main nav constraints) */}
      <div 
        className={`lg:hidden fixed inset-0 z-[90] transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Deep Glass Backdrop */}
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl" onClick={() => setIsOpen(false)}></div>
        
        {/* Dynamic Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        {/* Drawer Content */}
        <div className={`relative h-full flex flex-col pt-28 px-6 pb-12 transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-12'}`}>
          
          {/* Mobile Header / Quick Search */}
          <div className={`mb-8 transition-all duration-700 delay-100 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center justify-between mb-4">
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Menu Principal</span>
               <div className="flex items-center gap-2 px-2 py-1 bg-indigo-500/10 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">Support Online</span>
               </div>
            </div>
            <button 
              onClick={() => { setIsOpen(false); setIsSearchOpen(true); }}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all text-left"
            >
              <Search className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-medium">Rechercher un service...</span>
            </button>
          </div>

          {/* Navigation Links with Staggered Cascade */}
          <div className="space-y-3 flex-grow overflow-y-auto no-scrollbar py-2">
            <MobileNavLink 
              index={0}
              label="Accueil" 
              icon={Home} 
              isActive={currentView === 'home'} 
              onClick={() => handleNavClick('home', '#home')} 
              subLabel="Retour au hub"
            />
            <MobileNavLink 
              index={1}
              label="Blog & IA" 
              icon={BookOpen} 
              isActive={currentView === 'blog'} 
              onClick={() => handleNavClick('blog')} 
              subLabel="Veille tech"
            />
            <MobileNavLink 
              index={2}
              label="Réalisations" 
              icon={Users} 
              isActive={currentView === 'clients'} 
              onClick={() => handleNavClick('clients')} 
              subLabel="Nos clients"
            />
            <MobileNavLink 
              index={3}
              label="Expertises" 
              icon={Layers} 
              isActive={currentView === 'services'} 
              onClick={() => handleNavClick('services')} 
              subLabel="Nos solutions"
            />
            <MobileNavLink 
              index={4}
              label="Modèles Web" 
              icon={Layout} 
              isActive={currentView === 'templates'} 
              onClick={() => handleNavClick('templates')} 
              subLabel="Offre Express"
            />
            <MobileNavLink 
              index={5}
              label="Support" 
              icon={LifeBuoy} 
              isActive={currentView === 'support'} 
              onClick={() => handleNavClick('support')} 
              subLabel="Assistance 24/7"
            />
          </div>

          {/* Bottom Actions Area */}
          <div className={`mt-8 pt-8 border-t border-white/10 space-y-8 transition-all duration-700 delay-400 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Main CTAs Grid */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleNavClick('proposal')}
                className="flex flex-col items-center justify-center p-5 rounded-3xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center mb-2 group-hover:bg-indigo-600/20 transition-colors">
                  <Briefcase className="w-5 h-5 group-hover:text-indigo-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Espace Client</span>
              </button>
              <button 
                onClick={() => handleNavClick('quote')}
                className="flex flex-col items-center justify-center p-5 rounded-3xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/30 transition-all hover:bg-indigo-500"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center mb-2">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Devis Gratuit</span>
              </button>
            </div>

            {/* Quick Contacts & Social */}
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
                  <Phone className="w-6 h-6 text-indigo-500" /> {COMPANY.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                {[Facebook, Linkedin, Instagram, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col items-center gap-1 opacity-40">
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-bold">HardSoft Technologies</p>
                <p className="text-[9px] text-slate-600 font-medium">Excellence Digitale • Dakar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global Search Component */}
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelect={(type, id) => {
          if (type === 'project') handleNavClick('home', '#portfolio');
          else if (type === 'client') handleNavClick('clients');
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;
