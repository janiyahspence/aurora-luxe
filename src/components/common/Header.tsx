import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react';
import BookingModal from '../forms/BookingModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Accommodations', href: '#accommodations' },
    { name: 'Dining', href: '#dining' },
    { name: 'Spa & Wellness', href: '#spa' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black-secondary text-white py-2 px-4 text-sm hidden lg:block">
        <div className="container-luxury flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gold-500" />
              <span>+91-98765-43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>Goa, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gold-500" />
              <select className="bg-transparent text-white border-none outline-none cursor-pointer">
                <option value="en" className="bg-black-secondary">English</option>
                <option value="hi" className="bg-black-secondary">हिंदी</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black-primary/95 backdrop-blur-md shadow-lg border-b border-gold/20'
            : 'bg-transparent'
        }`}
        style={{ marginTop: isScrolled ? '0' : '40px' }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('#home')}
                className="text-2xl lg:text-3xl font-display font-bold hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 rounded"
              >
                <span className="text-gold-500">Aurora</span>
                <span className="text-white ml-2">Luxe</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-gold-500 transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button 
                className="btn-gold hidden lg:block"
                onClick={() => setShowBookingModal(true)}
              >
                Book Now
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-gold-500 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-black-primary/98 backdrop-blur-md border-b border-gold/20 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container-luxury py-6">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-gold-500 transition-colors duration-300 font-medium text-left py-2 border-b border-grey-dark/30 last:border-b-0"
                >
                  {item.name}
                </button>
              ))}
              <button 
                className="btn-gold mt-4 w-full"
                onClick={() => setShowBookingModal(true)}
              >
                Book Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
    </>
  );
};

export default Header;