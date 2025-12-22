
import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Briefcase, Layers, Settings, LogOut, 
  Search, Plus, Edit3, Trash2, Eye, ExternalLink, TrendingUp, 
  Users, CheckCircle2, AlertCircle, FileText, ChevronRight, X, Save
} from 'lucide-react';
import { AdminSection, BlogPost, Project } from '../types';

interface AdminDashboardProps {
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ blogPosts, setBlogPosts, projects, setProjects, onLogout }) => {
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [modalType, setModalType] = useState<'blog' | 'project'>('blog');

  const NavItem = ({ section, label, icon: Icon }: { section: AdminSection, label: string, icon: any }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
        activeSection === section 
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
          : 'text-slate-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  // --- CRUD Logic ---
  const handleDeletePost = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setBlogPosts(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const openEditModal = (type: 'blog' | 'project', item: any = null) => {
    setModalType(type);
    setEditingItem(item || (type === 'blog' ? {
      id: `blog-${Date.now()}`,
      title: '',
      excerpt: '',
      content: '',
      author: 'Cherif Alioune Diatta',
      authorRole: 'CEO @ HardSoft',
      authorImage: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&q=80&w=200',
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
      category: 'Technologie',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      readTime: '5 min',
      tags: []
    } : {
      id: `proj-${Date.now()}`,
      title: '',
      category: 'Web Design',
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
      tags: []
    }));
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalType === 'blog') {
      setBlogPosts(prev => {
        const exists = prev.find(p => p.id === editingItem.id);
        if (exists) return prev.map(p => p.id === editingItem.id ? editingItem : p);
        return [editingItem, ...prev];
      });
    } else {
      setProjects(prev => {
        const exists = prev.find(p => p.id === editingItem.id);
        if (exists) return prev.map(p => p.id === editingItem.id ? editingItem : p);
        return [editingItem, ...prev];
      });
    }
    setIsModalOpen(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Projets Active', value: projects.length, icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                { label: 'Articles Blog', value: blogPosts.length, icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
                { label: 'Services', value: 4, icon: Layers, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                { label: 'Vues Mensuelles', value: '1.2k', icon: TrendingUp, color: 'text-violet-500', bg: 'bg-violet-500/10' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-slate-900">Articles Récents</h3>
                    <button onClick={() => setActiveSection('blog')} className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:underline">
                      Tout voir <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-4">
                           <img src={post.imageUrl} className="w-12 h-12 rounded-xl object-cover" alt="" />
                           <div>
                              <p className="font-bold text-slate-900 text-sm line-clamp-1">{post.title}</p>
                              <p className="text-xs text-slate-500">{post.date} • {post.category}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <button onClick={() => openEditModal('blog', post)} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Edit3 className="w-4 h-4" /></button>
                           <button onClick={() => handleDeletePost(post.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
                  <h3 className="text-xl font-bold mb-6">Status Serveurs</h3>
                  <div className="space-y-6">
                     {[
                       { name: 'Site Web Principal', status: 'Online', color: 'text-emerald-400' },
                       { name: 'API Services', status: 'Online', color: 'text-emerald-400' },
                       { name: 'Serveur Mail', status: 'Online', color: 'text-emerald-400' },
                       { name: 'Backup Cloud', status: 'Idle', color: 'text-slate-400' },
                     ].map((srv, i) => (
                       <div key={i} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-400">{srv.name}</span>
                          <span className={`text-xs font-bold uppercase tracking-widest ${srv.color}`}>{srv.status}</span>
                       </div>
                     ))}
                  </div>
                  <button className="w-full mt-10 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm font-bold hover:bg-white/20 transition-all">
                    Vérifier l'infrastructure
                  </button>
               </div>
            </div>
          </div>
        );
      case 'blog':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <h2 className="text-3xl font-bold text-slate-900">Gestion du Blog</h2>
               <button onClick={() => openEditModal('blog')} className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 flex items-center gap-2 hover:bg-indigo-500 transition-all">
                  <Plus className="w-5 h-5" /> Nouvel Article
               </button>
            </div>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
               <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" placeholder="Rechercher un article..." className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-indigo-500/20" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{blogPosts.length} Articles</span>
                  </div>
               </div>
               <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Article</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Catégorie</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-4">
                              <img src={post.imageUrl} className="w-10 h-10 rounded-lg object-cover" alt="" />
                              <span className="font-bold text-slate-800 text-sm line-clamp-1">{post.title}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-lg">{post.category}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{post.date}</td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <button onClick={() => openEditModal('blog', post)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-lg transition-all shadow-sm"><Edit3 className="w-4 h-4" /></button>
                              <button onClick={() => handleDeletePost(post.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-white rounded-lg transition-all shadow-sm"><Trash2 className="w-4 h-4" /></button>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <h2 className="text-3xl font-bold text-slate-900">Gestion du Portfolio</h2>
               <button onClick={() => openEditModal('project')} className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 flex items-center gap-2 hover:bg-indigo-500 transition-all">
                  <Plus className="w-5 h-5" /> Ajouter un Projet
               </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden group shadow-sm hover:shadow-xl transition-all">
                   <div className="relative h-40">
                      <img src={project.imageUrl} className="w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                         <button onClick={() => openEditModal('project', project)} className="p-2 bg-white rounded-lg text-slate-900 hover:bg-indigo-600 hover:text-white transition-all"><Edit3 className="w-5 h-5" /></button>
                         <button onClick={() => handleDeleteProject(project.id)} className="p-2 bg-white rounded-lg text-red-600 hover:bg-red-600 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                      </div>
                   </div>
                   <div className="p-6">
                      <p className="text-[10px] font-bold text-indigo-600 uppercase mb-2">{project.category}</p>
                      <h4 className="font-bold text-slate-900 mb-4">{project.title}</h4>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                         <span className="text-xs text-slate-400">{project.tags?.length || 0} tags</span>
                         <div className="flex items-center gap-2">
                           {project.liveUrl && <ExternalLink className="w-3 h-3 text-slate-300" />}
                         </div>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center">
             <AlertCircle className="w-12 h-12 text-slate-300 mb-4" />
             <h3 className="text-xl font-bold text-slate-900">Module en développement</h3>
             <p className="text-slate-500">Cette section de l'administration sera disponible prochainement.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Sidebar Admin */}
      <aside className="w-full md:w-72 bg-slate-950 text-white flex flex-col relative z-20">
        <div className="p-8">
           <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                 <Settings className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Admin</span>
                <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold">HardSoft Tech</span>
              </div>
           </div>

           <nav className="space-y-2">
              <NavItem section="overview" label="Vue d'ensemble" icon={LayoutDashboard} />
              <NavItem section="blog" label="Blog" icon={BookOpen} />
              <NavItem section="projects" label="Portfolio" icon={Briefcase} />
              <NavItem section="services" label="Services" icon={Layers} />
              <div className="h-px bg-white/5 my-6"></div>
              <NavItem section="settings" label="Paramètres" icon={Settings} />
           </nav>
        </div>

        <div className="mt-auto p-8">
           <div className="bg-white/5 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                    <Users className="w-5 h-5 text-indigo-400" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-sm font-bold truncate">Cherif Diatta</span>
                    <span className="text-[10px] text-slate-500">Propriétaire</span>
                 </div>
              </div>
           </div>

           <button 
             onClick={onLogout}
             className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 text-red-400 text-sm font-bold hover:bg-red-500 hover:text-white transition-all group"
           >
              <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Déconnexion
           </button>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-grow p-6 md:p-10 lg:p-12 overflow-y-auto max-h-screen custom-scrollbar">
         
         <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
               <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-1">
                 {activeSection === 'overview' ? 'Command Center' : 
                  activeSection === 'blog' ? 'Journal de Bord' : 
                  activeSection === 'projects' ? 'Atelier Créatif' : 'Gestion'}
               </h2>
               <h1 className="text-3xl font-bold text-slate-900">
                 {activeSection === 'overview' ? 'Bienvenue, Cherif' : 
                  activeSection === 'blog' ? 'Gestion des Articles' : 
                  activeSection === 'projects' ? 'Gestion Portfolio' : 
                  activeSection === 'services' ? 'Gestion Services' : 'Paramètres'}
               </h1>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-grow md:flex-grow-0 md:min-w-[300px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Recherche rapide..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  />
               </div>
               <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 transition-all relative">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                  <Users className="w-5 h-5" />
               </button>
            </div>
         </header>

         {renderSection()}

         <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
            Panneau d'Administration • HardSoft Technologies v2.5.0
         </footer>
      </main>

      {/* Modal d'édition générique */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar p-10 relative animate-in zoom-in-95 duration-200">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              {editingItem?.id ? 'Modifier' : 'Ajouter'} {modalType === 'blog' ? 'un article' : 'un projet'}
            </h2>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Titre</label>
                  <input 
                    type="text" 
                    value={editingItem.title}
                    onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Catégorie</label>
                  <input 
                    type="text" 
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">URL de l'image</label>
                <input 
                  type="text" 
                  value={editingItem.imageUrl}
                  onChange={(e) => setEditingItem({...editingItem, imageUrl: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {modalType === 'blog' ? (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Résumé</label>
                    <textarea 
                      value={editingItem.excerpt}
                      onChange={(e) => setEditingItem({...editingItem, excerpt: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 h-24"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Contenu de l'article</label>
                    <textarea 
                      value={editingItem.content}
                      onChange={(e) => setEditingItem({...editingItem, content: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 h-48"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Description</label>
                  <textarea 
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 h-32"
                  />
                </div>
              )}

              <div className="flex justify-end gap-4 pt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50">Annuler</button>
                <button type="submit" className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 flex items-center gap-2">
                  <Save className="w-5 h-5" /> Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
