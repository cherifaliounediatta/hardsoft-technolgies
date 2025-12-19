import React, { useState, useMemo } from 'react';
import { Check, X as XIcon, Star, Info, Calculator, Plus, Minus } from 'lucide-react';
import { BASE_PACK } from '../constants';
import { ViewState } from '../App';
import PackDetailsModal from './PackDetailsModal';

interface PricingProps {
  navigateTo: (view: ViewState) => void;
}

const EXTRA_OPTIONS = [
  { id: 'seo', name: 'Optimisation SEO avancée', price: 50000 },
  { id: 'ecom', name: 'Module E-commerce / Paiement', price: 75000 },
  { id: 'maint', name: 'Maintenance Mensuelle (6 mois)', price: 120000 },
  { id: 'content', name: 'Rédaction de contenu (5 pages)', price: 40000 }
];

const Pricing: React.FC<PricingProps> = ({ navigateTo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const totalPrice = useMemo(() => {
    const base = 100000;
    const extras = EXTRA_OPTIONS
      .filter(opt => selectedOptions.includes(opt.id))
      .reduce((sum, opt) => sum + opt.price, 0);
    return base + extras;
  }, [selectedOptions]);

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Tarification transparente</span>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl mt-2 mb-4">Investissement Intelligent</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Configurez votre solution idéale et obtenez une estimation immédiate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Customizer Panel */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
             <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-indigo-600" />
                <h3 className="text-2xl font-bold text-slate-900">Personnaliser mon pack</h3>
             </div>
             
             <div className="space-y-4">
                {EXTRA_OPTIONS.map(opt => (
                  <div 
                    key={opt.id} 
                    onClick={() => toggleOption(opt.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedOptions.includes(opt.id) 
                        ? 'border-indigo-600 bg-white shadow-md' 
                        : 'border-slate-200 bg-slate-100/50 grayscale hover:grayscale-0'
                    }`}
                  >
                     <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${selectedOptions.includes(opt.id) ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                           {selectedOptions.includes(opt.id) ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                        <div>
                           <p className="font-bold text-slate-800">{opt.name}</p>
                           <p className="text-xs text-indigo-600 font-bold">+{opt.price.toLocaleString()} FCFA</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>

             <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white">
                <p className="text-sm opacity-60 uppercase font-bold tracking-widest mb-1">Estimation Totale</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-bold">{totalPrice.toLocaleString()}</span>
                   <span className="text-lg opacity-80">FCFA</span>
                </div>
                <p className="text-xs mt-4 text-indigo-400 font-medium italic">* Devis officiel à confirmer après étude de vos besoins.</p>
             </div>
          </div>

          {/* Result Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col h-full">
              <div className="p-10 bg-slate-900 text-center text-white relative">
                 <div className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg">Offre Tout-Inclus</div>
                 <h3 className="text-3xl font-bold mb-2">{BASE_PACK.name}</h3>
                 <p className="text-indigo-300 text-sm">Le socle de votre réussite digitale</p>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <ul className="space-y-4 mb-10 flex-grow">
                  {BASE_PACK.features.slice(0, 7).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="ml-3 text-sm text-slate-700 font-medium">{feature}</p>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-indigo-600 font-bold cursor-pointer hover:underline text-sm" onClick={() => setIsModalOpen(true)}>
                     <Info className="h-4 w-4" /> Voir les 15+ avantages inclus
                  </li>
                </ul>
                
                <button
                  onClick={() => navigateTo('quote')}
                  className="w-full py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Démarrer avec ce pack <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PackDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onOrder={() => navigateTo('quote')}
      />
    </section>
  );
};

export default Pricing;