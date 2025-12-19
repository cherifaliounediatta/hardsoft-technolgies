import React from 'react';
import { COMPANY } from '../constants';
import { Facebook, Linkedin, Instagram, Fingerprint, MapPin, Phone, Mail, ArrowRight, Layout } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  navigateTo: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const handlePortfolioClick = () => {
    navigateTo('home');
    setTimeout(() => {
        const element = document.getElementById('portfolio');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900 relative overflow-hidden transition-all duration-500 hover:shadow-[0_-10px_40px_rgba(99,102,241,0.1)] hover:z-10">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-900/40 blur-[100px]"></div>
            <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-violet-900/20 blur-[80px]"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 border-l-2 border-indigo-500 pl-3">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => navigateTo('home')} aria-label="Retourner à la page d'accueil" className="group flex items-center gap-2 hover:text-indigo-400 transition-colors"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Accueil</button></li>
              <li><button onClick={() => navigateTo('templates')} aria-label="Découvrir nos modèles de sites" className="group flex items-center gap-2 hover:text-indigo-400 transition-colors"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Modèles de Sites</button></li>
              <li><a href="#services" aria-label="Consulter nos services et expertises" className="group flex items-center gap-2 hover:text-indigo-400 transition-colors"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Expertises</a></li>
              <li><button onClick={() => navigateTo('quote')} aria-label="Demander un devis personnalisé" className="group flex items-center gap-2 hover:text-indigo-400 transition-colors"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Demander un Devis</button></li>
            </ul>
          </div>

          {/* Column 2: Coordonnées */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 border-l-2 border-indigo-500 pl-3">Coordonnées</h3>
            <div className="space-y-4">
                 <div className="flex items-start gap-3 text-sm group">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-indigo-500/50 transition-colors flex-shrink-0">
                        <MapPin className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="pt-1.5">{COMPANY.address}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm group">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-indigo-500/50 transition-colors flex-shrink-0">
                        <Phone className="w-4 h-4 text-indigo-500" />
                    </div>
                    <a href={`tel:${COMPANY.phone}`} aria-label={`Appeler au ${COMPANY.phone}`} className="hover:text-indigo-400 transition-colors">{COMPANY.phone}</a>
                 </div>
                 <div className="flex items-center gap-3 text-sm group">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-indigo-500/50 transition-colors flex-shrink-0">
                        <Mail className="w-4 h-4 text-indigo-500" />
                    </div>
                    <a href={`mailto:${COMPANY.email}`} aria-label={`Envoyer un e-mail à ${COMPANY.email}`} className="hover:text-indigo-400 transition-colors">{COMPANY.email}</a>
                 </div>
            </div>
          </div>
          
          {/* Column 3: Social & Support */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 border-l-2 border-indigo-500 pl-3">Restons Connectés</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" aria-label="Suivez-nous sur Facebook" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Suivez-nous sur LinkedIn" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Suivez-nous sur Instagram" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-1 rounded-xl">
                <button 
                    onClick={() => navigateTo('support')}
                    aria-label="Accéder au centre de support client"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 text-sm font-medium hover:bg-slate-900 hover:text-indigo-400 transition-all flex items-center justify-center gap-2 border border-slate-800 group"
                >
                    Accès Support Client
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>

          {/* Column 4: Brand & Portfolio (Right) */}
          <div className="lg:text-right flex flex-col items-start lg:items-end">
             <div className="flex items-center gap-3 mb-6 cursor-pointer group" onClick={() => navigateTo('home')} role="button" aria-label="Retour au haut de page">
                <div className="flex flex-col items-start lg:items-end">
                    <div className="font-bold text-2xl leading-none tracking-tight flex items-center">
                        <span className="text-indigo-500">Hard</span>
                        <span className="text-white">Soft</span>
                    </div>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
                        Technologies
                    </span>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-slate-900 rounded-xl border border-slate-800 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
                    <Fingerprint className="w-7 h-7 text-indigo-500" strokeWidth={2} />
                </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 mb-8 max-w-xs lg:ml-auto">
              ESN basée à Dakar. Développement web, logiciels sur mesure et infrastructure IT.
            </p>

            <button 
                onClick={handlePortfolioClick}
                aria-label="Consulter l'ensemble de notre portfolio"
                className="group relative px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold overflow-hidden transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
            >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                <span className="relative flex items-center gap-2">
                   <Layout className="w-4 h-4" />
                   Découvrir le Portfolio
                </span>
            </button>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
            <p>&copy; {new Date().getFullYear()} HardSoft Technologies. Tous droits réservés.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-indigo-400 transition-colors">Mentions Légales</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Politique de Confidentialité</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">CGV</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;