
import React, { useState } from 'react';
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

// Define the available views
export type ViewState = 'home' | 'proposal' | 'quote' | 'support' | 'templates' | 'services' | 'clients';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
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
      case 'home':
      default:
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <TechStack />
            <About />
            <Services />
            <Partners />
            <Portfolio navigateTo={navigateTo} />
            <Pricing navigateTo={navigateTo} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentView={currentView} navigateTo={navigateTo} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Only show standard footer if not in proposal view */}
      {currentView !== 'proposal' && <Footer navigateTo={navigateTo} />}
      <WhatsAppButton />
      {currentView !== 'proposal' && <BackToTop />}
    </div>
  );
};

export default App;
