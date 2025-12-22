
import React, { useState } from 'react';
import { Fingerprint, Lock, User, ArrowLeft, ShieldAlert, Loader2 } from 'lucide-react';
import { ViewState } from '../App';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  navigateTo: (view: ViewState) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, navigateTo }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (username === 'cherif diatta' && password === '@@One1one@@') {
      onLoginSuccess();
    } else {
      setError('Identifiants invalides. Veuillez réessayer.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour au site
        </button>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-6">
              <Fingerprint className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Espace Admin</h1>
            <p className="text-slate-400">Administration sécurisée HardSoft Technologies</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Utilisateur</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nom d'utilisateur"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>S'authentifier</span>
                  <Lock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} HardSoft Technologies • Système de Gestion Sécurisé
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
