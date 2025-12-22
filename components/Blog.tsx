
import React, { useState, useMemo } from 'react';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag, Filter } from 'lucide-react';
import { ViewState } from '../App';
import { BlogPost } from '../types';

interface BlogProps {
  posts: BlogPost[];
  navigateTo: (view: ViewState, extra?: string) => void;
}

const Blog: React.FC<BlogProps> = ({ posts, navigateTo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = useMemo(() => {
    return ['Tous', ...Array.from(new Set(posts.map(post => post.category)))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Tous' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, posts]);

  const featuredPost = posts[0];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Actualités & Expertise</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Le Blog HardSoft</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Décryptage technologique, conseils stratégiques et coulisses de nos projets digitaux au Sénégal.
          </p>
        </div>

        {/* Featured Post */}
        {!searchTerm && activeCategory === 'Tous' && featuredPost && (
          <div 
            onClick={() => navigateTo('blog-post', featuredPost.id)}
            className="group relative bg-slate-900 rounded-[2.5rem] overflow-hidden mb-16 cursor-pointer shadow-2xl transition-all hover:shadow-indigo-500/20"
          >
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-full relative overflow-hidden">
                <img src={featuredPost.imageUrl} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" alt={featuredPost.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden lg:block"></div>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">À la une</span>
                  <span className="text-slate-400 text-xs flex items-center gap-2"><Calendar className="w-3 h-3" /> {featuredPost.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors leading-tight">{featuredPost.title}</h2>
                <p className="text-slate-400 text-lg mb-8 line-clamp-3 font-medium">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-3">
                      <img src={featuredPost.authorImage} className="w-10 h-10 rounded-full border border-slate-700" alt={featuredPost.author} />
                      <div>
                        <p className="text-sm font-bold text-white">{featuredPost.author}</p>
                        <p className="text-[10px] text-slate-500 uppercase">{featuredPost.authorRole}</p>
                      </div>
                   </div>
                   <div className="p-3 bg-white/10 rounded-full text-white group-hover:bg-indigo-600 transition-all">
                      <ArrowRight className="w-6 h-6" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search & Categories */}
        <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-12 flex flex-col lg:flex-row items-center gap-6">
           <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Rechercher un article..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full lg:w-auto">
              <Filter className="text-slate-400 mr-2 hidden lg:block" />
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredPosts.length > 0 ? (
             filteredPosts.map((post) => (
               <div 
                key={post.id} 
                onClick={() => navigateTo('blog-post', post.id)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
               >
                 <div className="h-56 relative overflow-hidden">
                    <img src={post.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase rounded-lg shadow-lg">
                        {post.category}
                      </span>
                    </div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                     {post.title}
                   </h3>
                   <p className="text-slate-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                     {post.excerpt}
                   </p>
                   <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <img src={post.authorImage} className="w-8 h-8 rounded-full" alt={post.author} />
                        <span className="text-xs font-bold text-slate-800">{post.author}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                 </div>
               </div>
             ))
           ) : (
             <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900">Aucun article trouvé</h3>
                <p className="text-slate-500">Essayez une autre recherche ou catégorie.</p>
             </div>
           )}
        </div>

        {/* CTA Subscription */}
        <div className="mt-20 bg-indigo-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ne manquez aucun article</h2>
            <p className="text-indigo-100 max-w-xl mx-auto mb-10 text-lg">
              Inscrivez-vous pour recevoir nos derniers conseils techniques et études de cas directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
               <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full px-6 py-4 rounded-2xl bg-white text-slate-900 outline-none focus:ring-4 focus:ring-white/20 transition-all"
               />
               <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl">
                 S'abonner
               </button>
            </div>
            <p className="text-xs text-indigo-200 mt-6 italic">Pas de spam. Désabonnement en un clic.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
