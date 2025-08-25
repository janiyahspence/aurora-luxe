import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Calendar, Users, MapPin } from 'lucide-react';
import Button from '../common/Button';
import BookingModal from '../forms/BookingModal';
import QuickBookingWidget from '../forms/QuickBookingWidget';

const HeroSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {isVideoLoaded ? (
          <div className="relative w-full h-full">
            {/* Using a high-quality hotel video from Pexels */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            >
              <source
                src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              />
              {/* Fallback image if video fails */}
              <img
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                alt="Aurora Luxe Resort"
                className="w-full h-full object-cover"
              />
            </video>
            
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black-primary/40 via-black-primary/60 to-black-primary/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black-primary/50 via-transparent to-black-primary/50"></div>
          </div>
        ) : (
          // Loading state with elegant image
          <div className="w-full h-full bg-black-primary flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Aurora Luxe Resort"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black-primary/60 via-black-primary/70 to-black-primary/90"></div>
          </div>
        )}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gold-400 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-gold-500 rounded-full animate-float opacity-70" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-300 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center container-luxury">
        <div className="max-w-5xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-gold-500/30 px-6 py-2 rounded-full mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Welcome to Luxury</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-hero text-white mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="block">Experience</span>
            <span className="text-gold-500 block">Aurora Luxe</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mt-4 opacity-90">
              Where Dreams Meet Reality
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-luxury max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Discover unparalleled luxury at India's most prestigious 5-star resort. Nestled in the heart of Goa, 
            Aurora Luxe offers an extraordinary escape where every moment becomes a cherished memory.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button
              variant="gold"
              size="lg"
              icon={Calendar}
              onClick={() => setShowBookingModal(true)}
              className="text-lg px-10 py-4"
            >
              Reserve Your Stay
            </Button>
            <Button
              variant="glass"
              size="lg"
              icon={Play}
              className="text-lg px-10 py-4"
            >
              Virtual Tour
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-display font-bold text-gold-500 mb-2">5★</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Luxury Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-display font-bold text-gold-500 mb-2">150+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Premium Suites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-display font-bold text-gold-500 mb-2">24/7</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Concierge Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-gold-500 transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Quick Booking Widget - Desktop */}
      <div className="absolute bottom-8 right-8 z-20 hidden xl:block">
        <QuickBookingWidget onOpenFullBooking={() => setShowBookingModal(true)} />
      </div>

      {/* Quick Booking FAB - Mobile */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <button
          onClick={() => setShowBookingModal(true)}
          className="bg-gold-500/90 backdrop-blur-md text-black-primary p-4 rounded-full hover:bg-gold-500 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <Calendar className="w-6 h-6" />
        </button>
      </div>

      {/* Full Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
    </section>
  );
};

export default HeroSection;