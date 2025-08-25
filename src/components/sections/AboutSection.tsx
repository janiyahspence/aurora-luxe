import React from 'react';
import { Award, Star, Users, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const awards = [
    {
      icon: Award,
      title: "World Luxury Hotel Awards",
      year: "2024",
      category: "Best Luxury Resort - India"
    },
    {
      icon: Star,
      title: "Forbes Travel Guide",
      year: "2024",
      category: "Five-Star Rating"
    },
    {
      icon: Users,
      title: "TripAdvisor Travelers' Choice",
      year: "2024",
      category: "Top 1% Hotels Worldwide"
    }
  ];

  const highlights = [
    {
      number: "150+",
      label: "Luxury Suites & Villas",
      description: "Each uniquely designed with panoramic views"
    },
    {
      number: "5",
      label: "World-Class Restaurants",
      description: "From authentic Indian to international cuisine"
    },
    {
      number: "3000+",
      label: "Sq.ft Spa Sanctuary",
      description: "Ancient Ayurvedic treatments & modern wellness"
    },
    {
      number: "24/7",
      label: "Personal Concierge",
      description: "Dedicated service for every guest"
    }
  ];

  return (
    <section id="about" className="section-padding bg-black-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gold-500 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold-500 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold-500 -rotate-12"></div>
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full mb-6">
                <Clock className="w-4 h-4 text-gold-500" />
                <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Since 2018</span>
              </div>
              
              <h2 className="heading-section text-white mb-6">
                A Legacy of <span className="text-gold-500">Unmatched Luxury</span>
              </h2>
              
              <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-luxury leading-relaxed">
                Nestled along the pristine shores of North Goa, Aurora Luxe stands as a testament to 
                architectural brilliance and hospitality excellence. Our resort seamlessly blends 
                contemporary luxury with traditional Indian heritage, creating an atmosphere of 
                unparalleled sophistication.
              </p>
              
              <p className="text-luxury leading-relaxed">
                Every detail has been meticulously crafted to exceed the expectations of the most 
                discerning travelers. From our award-winning spa treatments rooted in ancient Ayurvedic 
                traditions to our Michelin-starred dining experiences, Aurora Luxe redefines luxury hospitality.
              </p>
            </div>

            {/* Awards */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white mb-4">Recognition & Awards</h3>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors duration-300">
                    <award.icon className="w-6 h-6 text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">{award.title}</div>
                      <div className="text-gold-500 text-sm">{award.category} • {award.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 to-transparent z-10"></div>
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Aurora Luxe Resort Exterior"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="text-white font-display text-lg font-semibold">Resort Exterior</div>
                <div className="text-gold-500 text-sm">Architectural Excellence</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="luxury-card text-center group hover:bg-gold-500/5">
                  <div className="text-3xl font-display font-bold text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {highlight.number}
                  </div>
                  <div className="text-white font-semibold mb-2">{highlight.label}</div>
                  <div className="text-grey-light text-sm leading-relaxed">{highlight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-black-primary/50 backdrop-blur-md border border-gold-500/20 px-8 py-6 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-gold-500 mb-1">₹25,000+</div>
              <div className="text-white/80 text-sm">Starting from per night</div>
            </div>
            <div className="w-px h-12 bg-gold-500/30"></div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-gold-500 mb-1">365</div>
              <div className="text-white/80 text-sm">Days of luxury</div>
            </div>
            <div className="w-px h-12 bg-gold-500/30"></div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-gold-500 mb-1">∞</div>
              <div className="text-white/80 text-sm">Unforgettable memories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;