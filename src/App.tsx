import React from 'react';
import SEOHead from './components/common/SEOHead';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import AccommodationsSection from './components/sections/AccommodationsSection';
import DiningSection from './components/sections/DiningSection';
import SpaSection from './components/sections/SpaSection';
import ExperiencesSection from './components/sections/ExperiencesSection';
import ContactSection from './components/sections/ContactSection';
import EventsSection from './components/sections/EventsSection';
import './styles/globals.css';

function App() {
  React.useEffect(() => {
    // Add performance optimizations
    const addResourceHints = () => {
      const head = document.head;
      
      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//images.pexels.com';
      head.appendChild(dnsPrefetch);
      
      // Preconnect to critical domains
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.googleapis.com';
      head.appendChild(preconnect);
    };

    // Add skip link for accessibility
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gold-500 focus:text-black-primary focus:px-4 focus:py-2 focus:outline-none';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    addResourceHints();
    addSkipLink();
  }, []);
  return (
    <div className="min-h-screen bg-black-primary">
      <SEOHead />
      <Header />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />

        {/* Accommodations Section */}
        <AccommodationsSection />

        {/* Dining Section */}
        <DiningSection />

        {/* Spa & Wellness Section */}
        <SpaSection />

        {/* Experiences & Activities Section */}
        <ExperiencesSection />

        {/* Contact & Support Section */}
        <ContactSection />

        {/* Events & Meetings Section */}
        <EventsSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;