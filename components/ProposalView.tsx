import React from 'react';
import { PROPOSAL_CONTENT, BASE_PACK } from '../constants';
import { Download, Copy, CheckCircle } from 'lucide-react';

const ProposalView: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Espace Client
          </span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Proposition Technique & Commerciale</h1>
          <p className="mt-2 text-slate-600">Généré le 11 Décembre 2025 pour HardSoft Technologies</p>
        </div>

        {/* 1. Commercial Text */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            1. Argumentaire Commercial
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 whitespace-pre-line bg-slate-50 p-6 rounded-lg border border-slate-100">
            {PROPOSAL_CONTENT.commercialText}
          </div>
        </div>

        {/* 2. Planning & Roadmap */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">2. Planning de Réalisation (2 Semaines)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROPOSAL_CONTENT.timeline.map((phase, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-5 hover:border-indigo-300 transition-colors">
                <h3 className="font-bold text-lg text-indigo-700 mb-3">{phase.week}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-center text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Sitemap */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">3. Arborescence du Site (Sitemap)</h2>
          <div className="flex flex-wrap gap-3">
            {PROPOSAL_CONTENT.sitemap.map((page, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200">
                {page}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Social Media Kit */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">4. Kit Réseaux Sociaux</h2>
          <div className="grid grid-cols-1 gap-6">
            {PROPOSAL_CONTENT.socialPosts.map((post, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200 relative group">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-400 hover:text-indigo-600" title="Copier">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{post.platform}</h4>
                <p className="text-slate-800 mb-4 font-medium">{post.content}</p>
                <div className="flex flex-wrap gap-2">
                  {post.hashtags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-indigo-600 text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Financial Summary */}
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Estimation Financière</h2>
              <p className="text-slate-400 mt-1">Offre Pack Base (Hors options)</p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <span className="text-4xl font-bold text-indigo-400">{BASE_PACK.price}</span>
              <p className="text-sm text-slate-400">Paiement 50% commande / 50% livraison</p>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-6 flex justify-end">
            <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
              <Download className="w-5 h-5" />
              Télécharger le Devis PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProposalView;