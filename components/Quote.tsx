
import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, ArrowLeft, Loader2, AlertCircle, Globe, ShoppingCart, Smartphone, Database, Wrench, MessageSquare, Briefcase, Zap, ShieldCheck, Clock, Sparkles, Bot, Trash2 } from 'lucide-react';
import { COMPANY, SERVICES as ALL_SERVICES } from '../constants';
import { GoogleGenAI } from "@google/genai";

interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  description: string;
}

const SERVICES = [
  { id: 'web', label: 'Site Vitrine', icon: <Globe className="w-5 h-5" /> },
  { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="w-5 h-5" /> },
  { id: 'app', label: 'App Mobile', icon: <Smartphone className="w-5 h-5" /> },
  { id: 'software', label: 'Logiciel / SaaS', icon: <Database className="w-5 h-5" /> },
  { id: 'maintenance', label: 'Maintenance', icon: <Wrench className="w-5 h-5" /> },
  { id: 'other', label: 'Autre / Conseil', icon: <MessageSquare className="w-5 h-5" /> },
];

const Quote: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '', company: '', email: '', phone: '', serviceType: '', budget: '', description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isAiMode, setIsAiMode] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const handleAiConsult = async () => {
    if (!aiMessage.trim()) return;
    
    const newUserMsg = { role: 'user' as const, text: aiMessage };
    setChatHistory(prev => [...prev, newUserMsg]);
    setAiMessage('');
    setIsAiThinking(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...chatHistory, newUserMsg].map(msg => ({ 
            role: msg.role === 'model' ? 'model' : 'user', 
            parts: [{ text: msg.text }] 
        })),
        config: {
          systemInstruction: "Tu es un consultant expert IT senior chez HardSoft Technologies à Dakar. Aide le client à définir son projet. Suggère des stacks technologiques (React, Node.js, Flutter). Sois professionnel et concis.",
          temperature: 0.7,
        }
      });

      const modelText = response.text || "Erreur technique.";
      setChatHistory(prev => [...prev, { role: 'model', text: modelText }]);
      
      if (modelText.toLowerCase().includes('site')) setFormData(f => ({...f, serviceType: 'web'}));
      if (modelText.toLowerCase().includes('mobile')) setFormData(f => ({...f, serviceType: 'app'}));

    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'model', text: "Erreur technique." }]);
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(r => setTimeout(r, 1000));
    
    // Envoi à l'adresse officielle contact@hardsoft-technologies.net
    const subject = encodeURIComponent(`Demande de Devis - ${formData.serviceType}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEntreprise: ${formData.company}\nEmail: ${formData.email}\nDescription: ${formData.description}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    
    setStatus('success');
  };

  return (
    <section className="py-32 bg-slate-50 min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-slate-900 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Votre Devis sur Mesure</h1>
          <p className="text-xl opacity-80">Remplissez le formulaire pour recevoir une proposition de HardSoft.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row min-h-[700px] overflow-hidden">
          <div className={`lg:w-2/5 transition-all duration-500 ${isAiMode ? 'bg-indigo-950 text-white' : 'bg-slate-900 text-slate-300'} p-8 flex flex-col`}>
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Bot className={`w-6 h-6 ${isAiMode ? 'text-indigo-400' : 'text-slate-500'}`} />
                  Assistant IA
                </h3>
                <button onClick={() => setIsAiMode(!isAiMode)} className="px-4 py-1.5 rounded-full text-xs font-bold transition-all bg-indigo-600 text-white">
                  {isAiMode ? 'Activé' : 'Aide IA'}
                </button>
             </div>

             {isAiMode ? (
               <div className="flex flex-col h-full">
                  <div className="flex-grow overflow-y-auto space-y-4 mb-6 max-h-[450px] pr-2">
                     {chatHistory.length === 0 && <p className="text-sm">Bonjour ! Décrivez-moi votre projet.</p>}
                     {chatHistory.map((msg, idx) => (
                       <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-slate-800'}`}>
                             {msg.text}
                          </div>
                       </div>
                     ))}
                     {isAiThinking && <div className="animate-pulse">IA réfléchit...</div>}
                  </div>
                  <div className="flex gap-2">
                     <input type="text" value={aiMessage} onChange={(e) => setAiMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleAiConsult()} placeholder="Posez votre question..." className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm" />
                     <button onClick={handleAiConsult} className="p-3 bg-indigo-600 rounded-xl"><Send className="w-5 h-5" /></button>
                  </div>
               </div>
             ) : (
               <div className="space-y-6">
                  <p className="leading-relaxed">Utilisez l'assistant pour définir votre stack technologique.</p>
                  <div className="p-4 bg-slate-800/50 rounded-xl flex items-center gap-4">
                     <Sparkles className="w-8 h-8 text-indigo-400" />
                     <span className="text-sm font-medium">Expertise en développement web et mobile.</span>
                  </div>
               </div>
             )}
          </div>

          <div className="lg:w-3/5 p-10">
             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Nom complet</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border rounded-xl" required />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email professionnel</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border rounded-xl" required />
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-sm font-bold text-slate-700">Service souhaité</label>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {SERVICES.map(s => (
                        <button type="button" key={s.id} onClick={() => setFormData({...formData, serviceType: s.id})} className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all ${formData.serviceType === s.id ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100'}`}>
                           {s.icon}<span className="text-xs font-bold">{s.label}</span>
                        </button>
                      ))}
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700">Description détaillée</label>
                   <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border rounded-xl h-32 resize-none" placeholder="Détails du projet..."></textarea>
                </div>

                <button type="submit" disabled={status === 'submitting'} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                   {status === 'submitting' ? <Loader2 className="animate-spin" /> : <><Send className="w-5 h-5" /> Envoyer à contact@hardsoft-technologies.net</>}
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
