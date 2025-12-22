
import React, { useEffect, useState, useMemo } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Twitter, Tag, User, BookOpen, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';
import { BlogPost } from '../types';

interface BlogPostViewProps {
  posts: BlogPost[];
  postId: string | null;
  navigateTo: (view: ViewState) => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ posts, postId, navigateTo }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (postId) {
      const found = posts.find(p => p.id === postId);
      setPost(found || null);
    }
  }, [postId, posts]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sameAuthorPosts = useMemo(() => {
    if (!post) return [];
    return posts
      .filter(p => p.author === post.author && p.id !== post.id)
      .slice(0, 3);
  }, [post, posts]);

  if (!post) return (
    <div className="min-h-screen pt-40 text-center">
      <h2 className="text-2xl font-bold">Article introuvable</h2>
      <button onClick={() => navigateTo('blog')} className="mt-4 text-indigo-600 font-bold">Retour au blog</button>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-[110] bg-slate-100">
         <div className="h-full bg-indigo-600 transition-all duration-100" style={{ width: `${readingProgress}%` }}></div>
      </div>

      {/* Header Image Section */}
      <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
         <img src={post.imageUrl} className="w-full h-full object-cover" alt={post.title} />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
         <div className="absolute bottom-12 left-0 w-full">
            <div className="max-w-4xl mx-auto px-6">
                <button 
                  onClick={() => navigateTo('blog')}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4" /> Retour au blog
                </button>
                <div className="flex items-center gap-3 mb-6">
                   <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">{post.category}</span>
                   <span className="text-white/60 text-xs flex items-center gap-2 font-medium"><Calendar className="w-4 h-4" /> {post.date}</span>
                   <span className="text-white/60 text-xs flex items-center gap-2 font-medium"><Clock className="w-4 h-4" /> {post.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4">
                  <img src={post.authorImage} className="w-12 h-12 rounded-full border-2 border-indigo-500/50" alt={post.author} />
                  <div>
                    <p className="text-white font-bold">{post.author}</p>
                    <p className="text-indigo-400 text-xs uppercase font-bold tracking-wider">{post.authorRole}</p>
                  </div>
                </div>
            </div>
         </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
         <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Share Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
               <div className="sticky top-40 flex flex-col gap-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-2">Partage</span>
                  <button className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-400 hover:text-white transition-all shadow-sm">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-700 hover:text-white transition-all shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                    <Share2 className="w-5 h-5" />
                  </button>
               </div>
            </div>

            {/* Article Body */}
            <article className="lg:col-span-11 prose prose-lg prose-slate max-w-none">
               <p className="text-2xl text-slate-600 font-medium italic mb-12 border-l-4 border-indigo-500 pl-6 bg-slate-50 py-4 rounded-r-xl">
                 {post.excerpt}
               </p>
               
               <div className="whitespace-pre-line text-slate-800 leading-relaxed font-inter">
                  {post.content}
               </div>

               <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase mr-2"><Tag className="w-4 h-4" /> Tags:</span>
                  {post.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
               </div>

               {/* Author Box */}
               <div className="mt-20 p-8 bg-slate-50 rounded-3xl flex flex-col md:flex-row gap-8 items-center border border-slate-100">
                  <img src={post.authorImage} className="w-24 h-24 rounded-full shadow-lg border-4 border-white" alt={post.author} />
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Publié par {post.author}</h4>
                    <p className="text-slate-600 text-sm mb-4">Expert passionné par les enjeux de la transformation digitale et l'innovation technologique au Sénégal.</p>
                    <div className="flex justify-center md:justify-start gap-4">
                       <a href="#" className="text-indigo-600 font-bold text-sm hover:underline">Voir tous ses articles</a>
                       <a href="#" className="text-slate-400 font-bold text-sm hover:text-indigo-600 transition-colors">LinkedIn</a>
                    </div>
                  </div>
               </div>
            </article>

         </div>
      </div>

      {/* Recommended Section */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-12 flex items-center gap-3">
               <BookOpen className="w-6 h-6 text-indigo-600" /> Articles recommandés
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {posts.filter(p => p.id !== post.id).slice(0, 3).map(recPost => (
                 <div 
                   key={recPost.id}
                   onClick={() => navigateTo('blog-post', recPost.id)}
                   className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer group"
                 >
                    <img src={recPost.imageUrl} className="h-40 w-full object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition-all" alt={recPost.title} />
                    <span className="text-[10px] font-bold text-indigo-600 uppercase mb-2 block">{recPost.category}</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">{recPost.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{recPost.excerpt}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Same Author Section */}
      {sameAuthorPosts.length > 0 && (
        <div className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                 <User className="w-6 h-6 text-indigo-600" /> À lire aussi (par {post.author})
              </h3>
              <button 
                onClick={() => navigateTo('blog')}
                className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                Voir tout le blog <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sameAuthorPosts.map((authorPost) => (
                <div 
                  key={authorPost.id}
                  onClick={() => navigateTo('blog-post', authorPost.id)}
                  className="relative group p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">
                      {authorPost.category}
                    </span>
                    <span className="text-slate-400 text-[10px] font-medium">{authorPost.date}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight line-clamp-2">
                    {authorPost.title}
                  </h4>
                  
                  <p className="text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed">
                    {authorPost.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mt-auto group-hover:gap-3 transition-all">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostView;
