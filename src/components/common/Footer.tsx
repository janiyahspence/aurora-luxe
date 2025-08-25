import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Award,
  Star
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Accommodations', href: '#accommodations' },
    { name: 'Dining', href: '#dining' },
    { name: 'Spa & Wellness', href: '#spa' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Events & Meetings', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const services = [
    'Concierge Services',
    'Airport Transfer',
    'Room Service',
    'Laundry & Dry Cleaning',
    'Business Center',
    'Fitness Center',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black-secondary border-t border-gold/20">
      {/* Newsletter Section */}
      <div className="bg-black-tertiary py-16">
        <div className="container-luxury text-center">
          <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
            Stay Connected with <span className="text-gold-500">Aurora Luxe</span>
          </h3>
          <p className="text-grey-light text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, luxury experiences, and insider updates from Aurora Luxe.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder-grey-medium focus:outline-none focus:border-gold-500 transition-colors duration-300"
            />
            <button className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Hotel Info */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-display font-bold mb-6">
                <span className="text-gold-500">Aurora</span>
                <span className="text-white ml-2">Luxe</span>
              </div>
              <p className="text-grey-light mb-6 leading-relaxed">
                Experience unparalleled luxury at Aurora Luxe, where every moment is crafted to perfection. 
                Your gateway to extraordinary hospitality in the heart of India.
              </p>
              
              {/* Awards */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-grey-medium">5-Star Luxury Resort</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-grey-light">
                <Award className="w-4 h-4 text-gold-500" />
                <span>World Luxury Hotel Awards 2024</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-xl font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-grey-light hover:text-gold-500 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-xl font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-grey-light">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-xl font-semibold text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-grey-light">
                    <p>Aurora Luxe Resort</p>
                    <p>Candolim Beach Road</p>
                    <p>North Goa, Goa 403515</p>
                    <p>India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <div className="text-grey-light">
                    <p>+91-98765-43210</p>
                    <p>+91-98765-43211</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <div className="text-grey-light">
                    <p>reservations@auroraluxe.com</p>
                    <p>concierge@auroraluxe.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="font-semibold text-white mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-grey-light hover:text-gold-500 transition-colors duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-grey-light hover:text-gold-500 transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-grey-light hover:text-gold-500 transition-colors duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-grey-light hover:text-gold-500 transition-colors duration-300">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 py-6">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-grey-medium text-sm">
              © 2024 Aurora Luxe Resort. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-grey-medium hover:text-gold-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-grey-medium hover:text-gold-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-grey-medium hover:text-gold-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;