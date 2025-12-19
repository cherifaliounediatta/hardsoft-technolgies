import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../constants';

interface ContactErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validateForm = (): boolean => {
    const newErrors: ContactErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message ne peut pas être vide.';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      if (newErrors.name) nameRef.current?.focus();
      else if (newErrors.email) emailRef.current?.focus();
      else if (newErrors.message) messageRef.current?.focus();
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setStatus('submitting');
      
      const subject = encodeURIComponent(`Nouveau Message Contact: ${formData.name}`);
      const body = encodeURIComponent(
        `Bonjour HardSoft Technologies,\n\nVous avez reçu une nouvelle demande via le site web.\n\nIDENTITÉ:\nNom: ${formData.name}\nEmail: ${formData.email}\n\nMESSAGE:\n${formData.message}\n\nCordialement.`
      );
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Envoi direct à contact@hardsoft-technologies.net via la constante COMPANY.email
      window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-900/40 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div>
            <span className="text-indigo-500 font-bold tracking-wider uppercase text-sm mb-2 block">Parlons Business</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Prêt à innover ?</h2>
            <p className="text-slate-300 mb-12 text-lg leading-relaxed font-medium">
              Que vous ayez une idée précise ou juste un concept flou, notre équipe est là pour structurer votre projet et le mener à bien.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-slate-900 border border-slate-800 p-4 rounded-xl group-hover:border-indigo-500/50 transition-colors">
                  <Phone className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Téléphone & WhatsApp</p>
                  <a href={`tel:${COMPANY.phone}`} className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors block hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-slate-900 border border-slate-800 p-4 rounded-xl group-hover:border-indigo-500/50 transition-colors">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Email Officiel</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors block hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-slate-900 border border-slate-800 p-4 rounded-xl group-hover:border-indigo-500/50 transition-colors">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Siège</p>
                  <address className="text-xl font-semibold text-white not-italic">{COMPANY.address}</address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl shadow-black/50">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Envoyer un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:outline-none transition-all placeholder:text-slate-400 ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if (errors.name) setErrors({...errors, name: undefined});
                    }}
                  />
                  {errors.name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Votre Email professionnel <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:outline-none transition-all placeholder:text-slate-400 ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (errors.email) setErrors({...errors, email: undefined});
                    }}
                  />
                  {errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Votre Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:ring-2 focus:outline-none transition-all resize-none placeholder:text-slate-400 ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({...formData, message: e.target.value});
                      if (errors.message) setErrors({...errors, message: undefined});
                    }}
                  ></textarea>
                  {errors.message && (
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-500/50 ${
                  status === 'success'
                    ? 'bg-green-500 hover:bg-green-600 text-white cursor-default'
                    : 'bg-slate-900 hover:bg-slate-800 hover:-translate-y-0.5 text-white'
                }`}
              >
                {status === 'submitting' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /><span>Envoi en cours...</span></>
                ) : status === 'success' ? (
                  <><CheckCircle2 className="w-5 h-5" /><span>Message prêt dans votre mail !</span></>
                ) : (
                  <><span>Envoyer à HardSoft Technologies</span><Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;