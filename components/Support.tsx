import React, { useState } from 'react';
import { LifeBuoy, MessageSquare, AlertCircle, Phone, HelpCircle, Activity, ChevronDown, ChevronUp, Clock, Mail } from 'lucide-react';
import { COMPANY } from '../constants';

const FAQ_ITEMS = [
  {
    question: "Quels sont les délais d'intervention ?",
    answer: "Pour les pannes critiques (Site inaccessible, blocage des ventes), nous intervenons sous 4 heures maximum, 7j/7. Pour les demandes de maintenance standard ou d'évolution, le délai de prise en charge est de 24h ouvrées avec une résolution selon la complexité."
  },
  {
    question: "La maintenance est-elle incluse dans la création du site ?",
    answer: "Oui, une garantie de maintenance corrective est incluse pendant 3 mois après la livraison pour corriger tout bug éventuel. Ensuite, nous proposons des contrats de maintenance annuels (TMA) pour assurer les mises à jour de sécurité, les sauvegardes et les petites évolutions."
  },
  {
    question: "Comment suivre l'état de ma demande ?",
    answer: "Chaque demande envoyée par email génère un ticket unique. Vous recevrez des notifications automatiques par email à chaque étape : Prise en compte, En cours de traitement, et Résolu. Vous pouvez répondre directement à ces emails pour ajouter des détails."
  },
  {
    question: "Proposez-vous des formations pour gérer mon site ?",
    answer: "Absolument. Lors de la livraison, nous formons vos équipes à l'utilisation du back-office (administration) pour que vous soyez autonomes sur la modification des textes, images et produits. Des guides PDF ou vidéo peuvent aussi être fournis sur demande."
  },
  {
    question: "Que faire si mon site a été piraté ?",
    answer: "Contactez immédiatement le support d'urgence (Panne Critique). Nous isolerons le site pour limiter les dégâts, nettoierons les fichiers infectés et restaurerons une sauvegarde saine. Nous analyserons ensuite la faille pour sécuriser la plateforme."
  }
];

const Support: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-slate-900 -z-0"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold uppercase tracking-wide mb-8 backdrop-blur-sm animate-fade-in">
            <Activity className="w-3 h-3 animate-pulse" />
            Systèmes Opérationnels
          </div>
          
          <h1 className="text-4xl font-bold sm:text-5xl mb-6">Centre de Support</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Une équipe dédiée pour assurer la performance et la disponibilité de vos outils digitaux. Choisissez le canal adapté à votre urgence.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          
          {/* Card 1: Ticket Standard */}
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <MessageSquare className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ticket Standard</h3>
            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
              Pour les demandes d'évolution, corrections mineures, questions d'utilisation ou configuration.
            </p>
            
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
                <Clock className="w-4 h-4" /> Réponse sous 24h
            </div>

            <a 
              href={`mailto:${COMPANY.email}?subject=Support Ticket: [Votre Sujet]`} 
              className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Ouvrir un ticket
            </a>
          </div>

          {/* Card 2: Urgence (Highlighted) */}
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-red-100 border border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-300 group flex flex-col relative overflow-hidden ring-4 ring-red-50">
            <div className="absolute top-4 right-4 animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </div>
            
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <AlertCircle className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Panne Critique</h3>
            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
              Site inaccessible, erreur serveur 500, blocage des ventes ou faille de sécurité majeure.
            </p>

            <div className="flex items-center gap-2 text-xs text-red-500 mb-6 font-bold bg-red-50 w-fit px-2 py-1 rounded">
                <Clock className="w-4 h-4" /> Intervention &lt; 4h (7j/7)
            </div>

            <a 
              href={`tel:${COMPANY.phone}`} 
              className="w-full py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 shadow-lg hover:shadow-red-500/30 transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Appeler l'urgence
            </a>
          </div>

          {/* Card 3: Chat Direct */}
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-green-200 hover:shadow-2xl transition-all duration-300 group flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <MessageSquare className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Chat Direct</h3>
            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
              Une question rapide ? Échangez en direct avec un technicien disponible sur WhatsApp.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
                <Clock className="w-4 h-4" /> Réponse immédiate
            </div>

            <a 
              href={`https://wa.me/${COMPANY.phone.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noreferrer" 
              className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-bold hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Démarrer le chat
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Questions Fréquentes</h2>
          </div>
          
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    openFaqIndex === index 
                    ? 'border-indigo-200 shadow-md ring-1 ring-indigo-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className={`font-bold text-lg ${openFaqIndex === index ? 'text-indigo-900' : 'text-slate-700'}`}>
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${openFaqIndex === index ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400'}`}>
                      {openFaqIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                    className={`px-5 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaqIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                >
                  <div className="pt-2 border-t border-slate-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Help */}
        <div className="mt-20 text-center border-t border-slate-200 pt-10">
            <p className="text-slate-500 mb-2">Vous ne trouvez pas la réponse ?</p>
            <a 
                href={`mailto:${COMPANY.email}`} 
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
            >
                <Mail className="w-4 h-4" />
                {COMPANY.email}
            </a>
        </div>

      </div>
    </section>
  );
};

export default Support;