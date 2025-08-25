import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Heart, 
  Building, 
  Star, 
  Award,
  Camera,
  Music,
  Utensils,
  Flower,
  Crown,
  Briefcase,
  Presentation,
  Coffee,
  Wifi,
  Car,
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  IndianRupee,
  CheckCircle,
  Sparkles,
  Gift,
  Mic,
  Video,
  Shield,
  Headphones
} from 'lucide-react';
import Button from '../common/Button';

interface EventVenue {
  id: string;
  name: string;
  category: string;
  type: string;
  description: string;
  capacity: {
    theater: number;
    banquet: number;
    cocktail: number;
    classroom?: number;
  };
  size: string;
  location: string;
  features: string[];
  amenities: string[];
  images: string[];
  pricing: {
    halfDay: number;
    fullDay: number;
    wedding: number;
  };
  popular?: boolean;
  premium?: boolean;
}

interface EventPackage {
  id: string;
  name: string;
  category: string;
  description: string;
  includes: string[];
  pricing: number;
  duration: string;
  guestCount: string;
  image: string;
}

const EventsSection: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<EventVenue | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const eventVenues: EventVenue[] = [
    {
      id: 'grand-ballroom',
      name: 'Grand Aurora Ballroom',
      category: 'Wedding Venues',
      type: 'Luxury Ballroom',
      description: 'Our magnificent Grand Ballroom is the epitome of elegance, featuring crystal chandeliers, marble floors, and panoramic ocean views. Perfect for grand weddings and prestigious corporate events.',
      capacity: {
        theater: 500,
        banquet: 300,
        cocktail: 600,
        classroom: 200
      },
      size: '5000 sq ft',
      location: 'Main Building, Ground Floor',
      features: ['Crystal Chandeliers', 'Ocean Views', 'Private Entrance', 'Bridal Suite', 'Dance Floor', 'Stage Area'],
      amenities: ['Audio/Visual Equipment', 'Wireless Microphones', 'LED Lighting', 'Climate Control', 'Valet Parking', 'Dedicated Coordinator'],
      images: [
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444443/pexels-photo-1444443.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444444/pexels-photo-1444444.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      pricing: {
        halfDay: 150000,
        fullDay: 250000,
        wedding: 500000
      },
      popular: true,
      premium: true
    },
    {
      id: 'beach-pavilion',
      name: 'Sunset Beach Pavilion',
      category: 'Wedding Venues',
      type: 'Beach Venue',
      description: 'Exchange vows with the Arabian Sea as your backdrop in our romantic beach pavilion. Features white draping, tropical flowers, and stunning sunset views for unforgettable beach weddings.',
      capacity: {
        theater: 200,
        banquet: 150,
        cocktail: 250
      },
      size: '3000 sq ft',
      location: 'Private Beach Area',
      features: ['Beach Setting', 'Sunset Views', 'White Pavilion', 'Tropical Landscaping', 'Sand Aisle', 'Ocean Breeze'],
      amenities: ['Weather Protection', 'Sound System', 'Floral Arrangements', 'Beach Seating', 'Photography Areas', 'Cocktail Stations'],
      images: [
        'https://images.pexels.com/photos/1444445/pexels-photo-1444445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444446/pexels-photo-1444446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444447/pexels-photo-1444447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      pricing: {
        halfDay: 100000,
        fullDay: 180000,
        wedding: 350000
      },
      popular: true
    },
    {
      id: 'boardroom-executive',
      name: 'Executive Boardroom',
      category: 'Corporate Venues',
      type: 'Meeting Room',
      description: 'Sophisticated boardroom designed for high-level corporate meetings and presentations. Features state-of-the-art technology, premium furnishings, and complete privacy for executive discussions.',
      capacity: {
        theater: 50,
        banquet: 30,
        cocktail: 40,
        classroom: 24
      },
      size: '800 sq ft',
      location: 'Business Center, 2nd Floor',
      features: ['Executive Seating', 'Video Conferencing', 'Smart Board', 'Private Entrance', 'Pantry Access', 'City Views'],
      amenities: ['High-Speed WiFi', '4K Displays', 'Conference Phone', 'Presentation Tools', 'Coffee Service', 'Secretary Support'],
      images: [
        'https://images.pexels.com/photos/1444448/pexels-photo-1444448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444449/pexels-photo-1444449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444450/pexels-photo-1444450.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      pricing: {
        halfDay: 25000,
        fullDay: 45000,
        wedding: 0
      }
    },
    {
      id: 'conference-hall',
      name: 'Aurora Conference Hall',
      category: 'Corporate Venues',
      type: 'Conference Center',
      description: 'Versatile conference hall perfect for seminars, product launches, and corporate gatherings. Features flexible seating arrangements and cutting-edge presentation technology.',
      capacity: {
        theater: 300,
        banquet: 200,
        cocktail: 350,
        classroom: 150
      },
      size: '3500 sq ft',
      location: 'Conference Wing, Ground Floor',
      features: ['Flexible Layout', 'Stage Platform', 'Multiple Screens', 'Breakout Areas', 'Registration Desk', 'Exhibition Space'],
      amenities: ['Professional Lighting', 'Sound System', 'Live Streaming', 'Translation Services', 'Business Lounge', 'Catering Kitchen'],
      images: [
        'https://images.pexels.com/photos/1444451/pexels-photo-1444451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444452/pexels-photo-1444452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444453/pexels-photo-1444453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      pricing: {
        halfDay: 75000,
        fullDay: 125000,
        wedding: 0
      }
    },
    {
      id: 'garden-terrace',
      name: 'Royal Garden Terrace',
      category: 'Special Events',
      type: 'Garden Venue',
      description: 'Enchanting garden terrace surrounded by tropical landscaping and twinkling lights. Ideal for intimate celebrations, cocktail parties, and outdoor receptions.',
      capacity: {
        theater: 150,
        banquet: 100,
        cocktail: 200
      },
      size: '2500 sq ft',
      location: 'Garden Level, West Wing',
      features: ['Tropical Gardens', 'Fairy Lights', 'Water Features', 'Gazebo', 'Natural Shade', 'Flower Arrangements'],
      amenities: ['Outdoor Kitchen', 'Bar Setup', 'Lounge Areas', 'Dance Floor', 'Photography Spots', 'Weather Backup'],
      images: [
        'https://images.pexels.com/photos/1444454/pexels-photo-1444454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444455/pexels-photo-1444455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1444456/pexels-photo-1444456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      pricing: {
        halfDay: 60000,
        fullDay: 100000,
        wedding: 200000
      }
    },
    {
      id: 'rooftop-sky',
      name: 'Sky Lounge Rooftop',
      category: 'Special Events',
      type: 'Rooftop Venue',
      description: 'Spectacular rooftop venue with 360-degree views of the ocean and city skyline. Perfect for cocktail parties, product launches, and exclusive celebrations under the stars.',
      capacity: {
        theater: 100,
        banquet: 80,
        cocktail: 150
      },
      size: '2000 sq ft',
      location: 'Rooftop, 8th Floor',
      features: ['Panoramic Views', 'Open Sky', 'City Lights', 'Sunset Views', 'Modern Design', 'Instagram-worthy'],
      amenities: ['Premium Bar', 'DJ Setup', 'Lounge Furniture', 'Heating/Cooling', 'Elevator Access', 'VIP Areas'],
      images: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      pricing: {
        halfDay: 80000,
        fullDay: 140000,
        wedding: 250000
      },
      premium: true
    }
  ];

  const eventPackages: EventPackage[] = [
    {
      id: 'royal-wedding',
      name: 'Royal Wedding Package',
      category: 'Wedding Packages',
      description: 'Complete luxury wedding package with venue, catering, decoration, photography, and coordination services.',
      includes: ['Grand Ballroom Venue', 'Bridal Suite', '3-Course Dinner', 'Floral Decoration', 'Photography', 'Wedding Coordinator', 'Honeymoon Suite'],
      pricing: 750000,
      duration: '2 Days',
      guestCount: '200-300 guests',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'beach-wedding',
      name: 'Sunset Beach Wedding',
      category: 'Wedding Packages',
      description: 'Romantic beach wedding package with sunset ceremony, tropical decoration, and oceanfront reception.',
      includes: ['Beach Pavilion', 'Sunset Ceremony', 'Tropical Flowers', 'Beach Reception', 'Live Music', 'Photography', 'Couple Spa Treatment'],
      pricing: 450000,
      duration: '1 Day',
      guestCount: '100-150 guests',
      image: 'https://images.pexels.com/photos/1444445/pexels-photo-1444445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'corporate-conference',
      name: 'Corporate Conference Package',
      category: 'Corporate Packages',
      description: 'Professional conference package with venue, technology, catering, and business support services.',
      includes: ['Conference Hall', 'AV Equipment', 'Business Lunch', 'Coffee Breaks', 'WiFi Access', 'Registration Desk', 'Accommodation Rates'],
      pricing: 150000,
      duration: '1 Day',
      guestCount: '100-300 attendees',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'executive-retreat',
      name: 'Executive Retreat Package',
      category: 'Corporate Packages',
      description: 'Exclusive executive retreat with boardroom, team activities, luxury accommodation, and fine dining.',
      includes: ['Executive Boardroom', 'Team Building', 'Luxury Suites', 'Fine Dining', 'Spa Access', 'Golf Arrangements', 'Transportation'],
      pricing: 200000,
      duration: '2 Days',
      guestCount: '20-50 executives',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const categories = ['All', 'Wedding Venues', 'Corporate Venues', 'Special Events'];

  const filteredVenues = selectedCategory === 'All' 
    ? eventVenues 
    : eventVenues.filter(venue => venue.category === selectedCategory);

  const openVenueModal = (venue: EventVenue) => {
    setSelectedVenue(venue);
    setCurrentImageIndex(0);
  };

  const closeVenueModal = () => {
    setSelectedVenue(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedVenue) {
      setCurrentImageIndex((prev) => 
        prev === selectedVenue.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedVenue) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedVenue.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="events" className="section-padding bg-black-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-16 w-40 h-40 border border-gold-500 rotate-45"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 border border-gold-500 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-gold-500 rotate-12"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-6 py-3 rounded-full mb-8">
            <Calendar className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Events & Celebrations</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            Unforgettable <span className="text-gold-500">Events & Meetings</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-luxury max-w-3xl mx-auto">
            Create extraordinary memories with our world-class event venues and comprehensive planning services. 
            From intimate weddings to grand corporate gatherings, every detail is meticulously crafted to exceed expectations.
          </p>
        </div>

        {/* Event Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center luxury-card">
            <Heart className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">500+</div>
            <div className="text-white font-medium text-sm">Weddings Hosted</div>
          </div>
          <div className="text-center luxury-card">
            <Building className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">6</div>
            <div className="text-white font-medium text-sm">Event Venues</div>
          </div>
          <div className="text-center luxury-card">
            <Users className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">600</div>
            <div className="text-white font-medium text-sm">Max Capacity</div>
          </div>
          <div className="text-center luxury-card">
            <Award className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">24/7</div>
            <div className="text-white font-medium text-sm">Event Support</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 border transition-all duration-300 text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-gold-500 text-black-primary border-gold-500'
                  : 'bg-white/5 border-white/20 text-white hover:border-gold-500 hover:text-gold-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVenues.map((venue, index) => (
            <div
              key={venue.id}
              className="luxury-card group cursor-pointer relative overflow-hidden"
              onClick={() => openVenueModal(venue)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
                {venue.premium && (
                  <div className="bg-gold-500 text-black-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Premium
                  </div>
                )}
                {venue.popular && (
                  <div className="bg-black-primary/80 text-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Popular
                  </div>
                )}
              </div>

              {/* Venue Image */}
              <div className="relative h-48 mb-6 overflow-hidden">
                <img
                  src={venue.images[0]}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 to-transparent"></div>
                
                {/* Capacity Badge */}
                <div className="absolute bottom-4 right-4 bg-black-primary/80 backdrop-blur-md px-3 py-1 flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gold-500" />
                  <span className="text-white text-sm font-medium">{venue.capacity.banquet} guests</span>
                </div>

                {/* View More Overlay */}
                <div className="absolute inset-0 bg-black-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-gold-500 mx-auto mb-3" />
                    <div className="text-gold-500 text-lg font-semibold mb-2">Explore Venue</div>
                    <div className="text-white/80 text-sm">Click for details</div>
                  </div>
                </div>
              </div>

              {/* Venue Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-1">
                      {venue.category}
                    </div>
                    <h3 className="heading-card text-white group-hover:text-gold-500 transition-colors duration-300 mb-2">
                      {venue.name}
                    </h3>
                    <div className="text-grey-light text-sm mb-2">{venue.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold-500 text-lg font-bold flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {venue.pricing.fullDay.toLocaleString()}
                    </div>
                    <div className="text-white/60 text-xs">full day</div>
                  </div>
                </div>

                {/* Venue Features */}
                <div className="flex items-center space-x-4 text-sm text-grey-light">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{venue.capacity.banquet}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{venue.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span>{venue.location.split(',')[0]}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2">
                  {venue.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="bg-gold-500/10 text-gold-500 px-2 py-1 text-xs">
                      {feature}
                    </div>
                  ))}
                  {venue.features.length > 3 && (
                    <div className="bg-white/5 text-white/80 px-2 py-1 text-xs">
                      +{venue.features.length - 3} more
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-grey-light text-sm leading-relaxed line-clamp-2">
                  {venue.description}
                </p>

                {/* CTA */}
                <div className="flex space-x-3 pt-2">
                  <Button variant="gold" size="sm" className="flex-1">
                    Book Venue
                  </Button>
                  <Button variant="outline-gold" size="sm" icon={ArrowRight}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-semibold text-white mb-4">
              Event <span className="text-gold-500">Packages</span>
            </h3>
            <p className="text-luxury max-w-2xl mx-auto">
              Comprehensive event packages designed to make your special occasion effortless and extraordinary. 
              Each package includes venue, catering, decoration, and professional coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventPackages.map((pkg) => (
              <div key={pkg.id} className="luxury-card group">
                <div className="flex space-x-6">
                  <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-1">
                          {pkg.category}
                        </div>
                        <h4 className="heading-card text-white group-hover:text-gold-500 transition-colors duration-300">
                          {pkg.name}
                        </h4>
                      </div>
                      <div className="text-right">
                        <div className="text-gold-500 text-xl font-bold flex items-center">
                          <IndianRupee className="w-4 h-4" />
                          {pkg.pricing.toLocaleString()}
                        </div>
                        <div className="text-white/60 text-xs">{pkg.duration}</div>
                      </div>
                    </div>

                    <p className="text-grey-light text-sm leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-grey-light">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.guestCount}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-2 text-sm">Package Includes:</h5>
                      <div className="grid grid-cols-2 gap-1">
                        {pkg.includes.slice(0, 4).map((item, index) => (
                          <div key={index} className="flex items-center space-x-1 text-grey-light text-xs">
                            <CheckCircle className="w-3 h-3 text-gold-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      {pkg.includes.length > 4 && (
                        <div className="text-gold-500 text-xs mt-1">+{pkg.includes.length - 4} more inclusions</div>
                      )}
                    </div>

                    <Button variant="outline-gold" size="sm" className="w-full">
                      View Package Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center luxury-card">
            <Camera className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Photography & Videography</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Professional photographers and videographers to capture every precious moment of your special day.
            </p>
          </div>
          
          <div className="text-center luxury-card">
            <Flower className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Floral & Decoration</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Exquisite floral arrangements and custom decorations to transform your venue into a magical setting.
            </p>
          </div>
          
          <div className="text-center luxury-card">
            <Music className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Entertainment & Music</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Live bands, DJs, traditional performers, and sound systems for unforgettable entertainment experiences.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-black-secondary/80 backdrop-blur-md border border-gold-500/20 p-8 inline-block">
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              Ready to Plan Your <span className="text-gold-500">Perfect Event?</span>
            </h3>
            <p className="text-grey-light mb-6 max-w-md">
              Our dedicated event planning team will work with you to create an unforgettable experience tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" icon={Calendar}>
                Schedule Consultation
              </Button>
              <Button variant="outline-gold" icon={Phone}>
                Call Event Planner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Detail Modal */}
      {selectedVenue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm" onClick={closeVenueModal}></div>
          
          <div className="relative bg-black-secondary border border-gold-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeVenueModal}
              className="absolute top-4 right-4 z-30 text-white hover:text-gold-500 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedVenue.images[currentImageIndex]}
                alt={selectedVenue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 to-transparent"></div>
              
              {/* Image Navigation */}
              {selectedVenue.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-500 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-500 transition-colors duration-300"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedVenue.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentImageIndex ? 'bg-gold-500' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Venue Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-2">
                      {selectedVenue.category} • {selectedVenue.type}
                    </div>
                    <h3 className="heading-card text-white mb-4">{selectedVenue.name}</h3>
                    <p className="text-grey-light leading-relaxed mb-4">{selectedVenue.description}</p>
                    
                    {/* Venue Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 p-3 text-center">
                        <Users className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">{selectedVenue.capacity.banquet}</div>
                        <div className="text-grey-light text-xs">Banquet Style</div>
                      </div>
                      <div className="bg-white/5 p-3 text-center">
                        <Building className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">{selectedVenue.size}</div>
                        <div className="text-grey-light text-xs">Total Area</div>
                      </div>
                    </div>
                  </div>

                  {/* Capacity Details */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Seating Arrangements</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-grey-light">Theater:</span>
                        <span className="text-white">{selectedVenue.capacity.theater} guests</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-grey-light">Banquet:</span>
                        <span className="text-white">{selectedVenue.capacity.banquet} guests</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-grey-light">Cocktail:</span>
                        <span className="text-white">{selectedVenue.capacity.cocktail} guests</span>
                      </div>
                      {selectedVenue.capacity.classroom && (
                        <div className="flex justify-between">
                          <span className="text-grey-light">Classroom:</span>
                          <span className="text-white">{selectedVenue.capacity.classroom} guests</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Venue Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedVenue.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2 text-grey-light">
                          <Star className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Pricing */}
                  <div className="bg-gold-500/10 border border-gold-500/30 p-6">
                    <h4 className="text-white font-semibold mb-4">Venue Pricing</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-grey-light">Half Day (4 hours):</span>
                        <span className="text-gold-500 font-bold flex items-center">
                          <IndianRupee className="w-4 h-4" />
                          {selectedVenue.pricing.halfDay.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-grey-light">Full Day (8 hours):</span>
                        <span className="text-gold-500 font-bold flex items-center">
                          <IndianRupee className="w-4 h-4" />
                          {selectedVenue.pricing.fullDay.toLocaleString()}
                        </span>
                      </div>
                      {selectedVenue.pricing.wedding > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-grey-light">Wedding Package:</span>
                          <span className="text-gold-500 font-bold flex items-center">
                            <IndianRupee className="w-4 h-4" />
                            {selectedVenue.pricing.wedding.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      <Button variant="gold" className="w-full">
                        Book This Venue
                      </Button>
                      <Button variant="outline-gold" className="w-full">
                        Request Quote
                      </Button>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Included Amenities</h4>
                    <div className="space-y-2">
                      {selectedVenue.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2 text-grey-light">
                          <CheckCircle className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location & Contact */}
                  <div className="bg-black-primary/50 p-4">
                    <h4 className="text-white font-semibold mb-2">Location & Contact</h4>
                    <p className="text-grey-light text-sm mb-3">{selectedVenue.location}</p>
                    <div className="space-y-2">
                      <div className="text-gold-500 font-semibold">Event Planning: +91-98765-43214</div>
                      <div className="text-grey-light text-sm">events@auroraluxe.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;