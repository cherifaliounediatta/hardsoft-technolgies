import React from 'react';
import { X, Globe, Server, ShieldCheck, Mail, Users, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

interface PackDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrder: () => void;
}

const PackDetailsModal: React.FC<PackDetailsModalProps> = ({ isOpen, onClose, onOrder }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Détails du Pack Site Web</h3>
            <p className="text-sm text-slate-500">Tout ce qui est inclus dans votre offre à 100 000 FCFA</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* Section 1: Domaines & Hébergement */}
          <div className="bg-indigo-50/50 rounded-xl p-6 border border-indigo-100">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Noms de Domaine & Extensions</h4>
             </div>
             <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Votre identité numérique est offerte la première année. Nous gérons toute la configuration technique DNS.
             </p>
             <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> <span className="font-semibold">Inclus :</span> .com, .net, .org</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> <span className="font-semibold">Extensions Locales :</span> .sn (Sénégal), .fr</li>
                </ul>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" /> <span className="font-semibold text-indigo-600">Sur Devis :</span> .io, .ai (Tech/IA)</li>
                    <li className="text-xs text-slate-500 mt-1 italic pl-6">Renouvellement annuel géré par nos soins ou transférable.</li>
                </ul>
             </div>
          </div>

          {/* Section 2: Infrastructure & Sécurité */}
          <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Server className="w-5 h-5 text-slate-500" />
                    Hébergement Pro
                </div>
                <p className="text-sm text-slate-600">
                    Hébergement haute performance sur serveurs Litespeed. 
                    <br/><span className="font-semibold text-green-600">1 an offert</span>, puis renouvelable.
                </p>
             </div>
             <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheck className="w-5 h-5 text-slate-500" />
                    Sécurité SSL
                </div>
                <p className="text-sm text-slate-600">
                    Certificats SSL (cadenas vert https) <span className="font-semibold">illimités et automatiques</span> pour sécuriser les données de vos visiteurs.
                </p>
             </div>
          </div>

          <div className="h-px bg-slate-100 w-full"></div>

          {/* Section 3: Professionalisme */}
          <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Mail className="w-5 h-5 text-slate-500" />
                    Emails Professionnels
                </div>
                <p className="text-sm text-slate-600">
                    Créez une image crédible avec des adresses type <span className="font-mono bg-slate-100 px-1 rounded text-xs">contact@votre-entreprise.com</span>.
                    Configuration sur vos téléphones incluse.
                </p>
             </div>
             <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Users className="w-5 h-5 text-slate-500" />
                    Formation Équipes
                </div>
                <p className="text-sm text-slate-600">
                    Nous ne vous laissons pas seul. Une session de formation (Visio ou Présentiel) pour apprendre à modifier vos textes et images.
                </p>
             </div>
          </div>

          {/* Section 4: UI/UX */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
             <div className="flex items-center gap-3 mb-3">
                <Palette className="w-5 h-5 text-indigo-500" />
                <h4 className="font-bold text-slate-900">Design UI/UX Premium</h4>
             </div>
             <p className="text-sm text-slate-600 mb-0">
                Pas de copier-coller sans âme. Nous adaptons nos modèles professionnels à votre charte graphique (Logo, couleurs, polices) pour une expérience utilisateur fluide sur mobile et ordinateur.
             </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4 justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
          >
            Fermer
          </button>
          <button 
            onClick={() => { onClose(); onOrder(); }}
            className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
          >
            Commander maintenant <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default PackDetailsModal;