import React from 'react';
import { ViewState } from '../App';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  navigateTo: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section id="home" className="relative bg-slate-950 text-white min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-indigo-500/20 opacity-40 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] rounded-full bg-violet-600/10 opacity-30 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Disponible pour de nouveaux projets
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] drop-shadow-sm">
              Transformez votre vision en <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Réalité Digitale</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-medium">
              HardSoft Technologies conçoit des solutions web et logicielles d'excellence pour propulser les entreprises sénégalaises vers le futur. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              
              {/* Primary CTA - Advanced Gradient & Shine */}
              <button
                onClick={() => navigateTo('quote')}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-center shadow-[0_0_0_3px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span className="tracking-wide">Démarrer un projet</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              
              {/* Secondary CTA - Advanced Glassmorphism */}
              <button
                onClick={() => navigateTo('services')}
                className="group relative px-8 py-4 rounded-full bg-slate-900/40 border border-slate-700/50 text-white font-medium text-center backdrop-blur-md transition-all duration-300 hover:bg-slate-800/60 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] overflow-hidden"
              >
                 <span className="relative z-10 flex items-center justify-center gap-2">
                    Découvrir nos services
                    <Sparkles className="w-4 h-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100" />
                 </span>
              </button>

            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-800/50 pt-8 w-full">
               <div>
                  <p className="text-3xl font-bold text-white">50+</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Projets</p>
               </div>
               <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Satisfaction</p>
               </div>
               <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Support</p>
               </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center perspective-1000 mt-12 lg:mt-0">
             {/* Glow effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
             
             <div className="relative w-full aspect-square max-w-lg lg:max-w-none transform lg:rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out group">
                {/* Decorative border behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl transform translate-x-4 translate-y-4 opacity-50 border border-slate-700 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Développement informatique et solutions digitales"
                    className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Card Element on Image */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 flex items-center gap-4 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                     <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                     </div>
                     <div>
                        <p className="text-sm font-bold text-white">Performance Optimale</p>
                        <p className="text-xs text-slate-300">Monitoring temps réel actif</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;