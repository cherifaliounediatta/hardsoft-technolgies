
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProposalView from './components/ProposalView';
import Quote from './components/Quote';
import Support from './components/Support';
import TechStack from './components/TechStack';
import TemplatesGallery from './components/TemplatesGallery';
import BackToTop from './components/BackToTop';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Partners from './components/Partners';
import ClientSearch from './components/ClientSearch';
import Blog from './components/Blog';
import BlogPostView from './components/BlogPostView';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { BLOG_POSTS, PROJECTS } from './constants';
import { BlogPost, Project } from './types';

export type ViewState = 'home' | 'proposal' | 'quote' | 'support' | 'templates' | 'services' | 'clients' | 'blog' | 'blog-post' | 'admin-login' | 'admin-dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  
  // Data State managed by Admin
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    const authStatus = localStorage.getItem('hs_admin_auth');
    if (authStatus === 'true') {
      setIsAdminAuthenticated(true);
    }
  }, []);

  const navigateTo = (view: ViewState, extra?: string) => {
    if ((view === 'admin-dashboard') && !isAdminAuthenticated) {
      setCurrentView('admin-login');
    } else {
      setCurrentView(view);
    }
    
    if (view === 'blog-post' && extra) {
      setSelectedPostId(extra);
    }
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    localStorage.setItem('hs_admin_auth', 'true');
    setCurrentView('admin-dashboard');
  };

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('hs_admin_auth');
    setCurrentView('home');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'proposal':
        return <ProposalView />;
      case 'quote':
        return <Quote />;
      case 'support':
        return <Support />;
      case 'templates':
        return <TemplatesGallery navigateTo={navigateTo} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} />;
      case 'clients':
        return <ClientSearch />;
      case 'blog':
        return <Blog posts={blogPosts} navigateTo={navigateTo} />;
      case 'blog-post':
        return <BlogPostView posts={blogPosts} postId={selectedPostId} navigateTo={navigateTo} />;
      case 'admin-login':
        return <AdminLogin onLoginSuccess={handleLoginSuccess} navigateTo={navigateTo} />;
      case 'admin-dashboard':
        return (
          <AdminDashboard 
            blogPosts={blogPosts} 
            setBlogPosts={setBlogPosts}
            projects={projects}
            setProjects={setProjects}
            onLogout={handleLogout} 
          />
        );
      case 'home':
      default:
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <TechStack />
            <About />
            <Services />
            <Partners />
            <Portfolio projects={projects} setProjects={setProjects} navigateTo={navigateTo} />
            <Pricing navigateTo={navigateTo} />
            <Contact />
          </>
        );
    }
  };

  const isAdminView = currentView.startsWith('admin-');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {!isAdminView && <Navbar currentView={currentView} navigateTo={navigateTo} />}
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {!isAdminView && currentView !== 'proposal' && <Footer navigateTo={navigateTo} />}
      {!isAdminView && <WhatsAppButton />}
      {!isAdminView && currentView !== 'proposal' && <BackToTop />}
    </div>
  );
};

export default App;
