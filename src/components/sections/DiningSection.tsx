import React, { useState } from 'react';
import { 
  ChefHat, 
  Wine, 
  Coffee, 
  Star, 
  Clock, 
  Users, 
  MapPin, 
  Phone,
  Calendar,
  Award,
  Utensils,
  GlassWater,
  Leaf,
  Heart,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Button from '../common/Button';

interface Restaurant {
  id: string;
  name: string;
  category: string;
  cuisine: string;
  description: string;
  chef: string;
  chefTitle: string;
  rating: number;
  priceRange: string;
  hours: string;
  capacity: number;
  location: string;
  images: string[];
  specialties: string[];
  features: string[];
  awards: string[];
  signature: string;
  ambiance: string;
  dressCode: string;
  reservationRequired: boolean;
  popular?: boolean;
}

const DiningSection: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const restaurants: Restaurant[] = [
    {
      id: 'saffron-palace',
      name: 'Saffron Palace',
      category: 'Fine Dining',
      cuisine: 'Contemporary Indian',
      description: 'Experience the royal flavors of India reimagined with contemporary techniques. Our signature restaurant celebrates the rich culinary heritage of Indian cuisine with a modern twist.',
      chef: 'Chef Rajesh Sharma',
      chefTitle: 'Executive Chef & Culinary Director',
      rating: 5,
      priceRange: '₹3,500 - ₹8,000',
      hours: '7:00 PM - 11:30 PM',
      capacity: 60,
      location: 'Ground Floor, Main Building',
      images: [
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      specialties: ['Tandoori Lobster', 'Saffron Risotto', 'Lamb Rogan Josh', 'Kulfi Soufflé'],
      features: ['Private Dining Rooms', 'Wine Pairing', 'Chef\'s Table', 'Live Cooking'],
      awards: ['Michelin Recommended 2024', 'Best Indian Restaurant - Goa'],
      signature: 'Royal Thali Experience - A 12-course journey through India',
      ambiance: 'Elegant with traditional Indian décor and modern luxury',
      dressCode: 'Smart Casual to Formal',
      reservationRequired: true,
      popular: true
    },
    {
      id: 'azure-terrace',
      name: 'Azure Terrace',
      category: 'Rooftop Dining',
      cuisine: 'Mediterranean',
      description: 'Dine under the stars with panoramic ocean views. Azure Terrace offers fresh Mediterranean cuisine with the finest ingredients and breathtaking sunset views.',
      chef: 'Chef Maria Gonzalez',
      chefTitle: 'Head Chef - Mediterranean Cuisine',
      rating: 5,
      priceRange: '₹2,800 - ₹6,500',
      hours: '6:30 PM - 12:00 AM',
      capacity: 80,
      location: 'Rooftop, 8th Floor',
      images: [
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      specialties: ['Grilled Octopus', 'Seafood Paella', 'Lamb Souvlaki', 'Baklava Tart'],
      features: ['Ocean Views', 'Sunset Dining', 'Live Music', 'Outdoor Seating'],
      awards: ['Best Rooftop Restaurant 2024', 'Romantic Dining Award'],
      signature: 'Mediterranean Seafood Platter with ocean-to-table freshness',
      ambiance: 'Romantic rooftop setting with ocean breeze and city lights',
      dressCode: 'Resort Elegant',
      reservationRequired: true
    },
    {
      id: 'golden-dragon',
      name: 'Golden Dragon',
      category: 'Asian Fusion',
      cuisine: 'Pan-Asian',
      description: 'Embark on a culinary journey across Asia with our expertly crafted dishes that blend traditional techniques with innovative presentations.',
      chef: 'Chef Kenji Tanaka',
      chefTitle: 'Master Chef - Asian Cuisine',
      rating: 5,
      priceRange: '₹2,200 - ₹5,500',
      hours: '12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM',
      capacity: 70,
      location: '2nd Floor, East Wing',
      images: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      specialties: ['Peking Duck', 'Miso Black Cod', 'Thai Green Curry', 'Matcha Cheesecake'],
      features: ['Teppanyaki Counter', 'Sushi Bar', 'Private Tatami Rooms', 'Tea Ceremony'],
      awards: ['Best Asian Restaurant - India 2024'],
      signature: 'Chef\'s Omakase - 10-course tasting menu',
      ambiance: 'Zen-inspired with traditional Asian elements',
      dressCode: 'Smart Casual',
      reservationRequired: false
    },
    {
      id: 'coral-cafe',
      name: 'Coral Café',
      category: 'Casual Dining',
      cuisine: 'International',
      description: 'A relaxed all-day dining experience featuring international favorites, fresh salads, artisanal sandwiches, and the finest coffee selections.',
      chef: 'Chef Isabella Romano',
      chefTitle: 'Café Manager & Pastry Chef',
      rating: 4,
      priceRange: '₹800 - ₹2,500',
      hours: '6:00 AM - 11:00 PM',
      capacity: 120,
      location: 'Lobby Level, Pool Side',
      images: [
        'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      specialties: ['Avocado Toast', 'Gourmet Burgers', 'Fresh Smoothies', 'Artisan Pastries'],
      features: ['Pool Views', 'Outdoor Seating', 'Kids Menu', 'Healthy Options'],
      awards: ['Best Café Experience 2024'],
      signature: 'Aurora Breakfast Platter with local Goan specialties',
      ambiance: 'Casual and vibrant with pool and garden views',
      dressCode: 'Casual Resort Wear',
      reservationRequired: false
    },
    {
      id: 'whiskey-lounge',
      name: 'The Whiskey Lounge',
      category: 'Bar & Lounge',
      cuisine: 'Bar Bites',
      description: 'An intimate whiskey bar featuring the world\'s finest spirits, craft cocktails, and premium cigars in a sophisticated gentleman\'s club atmosphere.',
      chef: 'Master Bartender James Mitchell',
      chefTitle: 'Head Mixologist',
      rating: 5,
      priceRange: '₹1,200 - ₹4,000',
      hours: '5:00 PM - 2:00 AM',
      capacity: 40,
      location: '3rd Floor, West Wing',
      images: [
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      specialties: ['Aged Whiskeys', 'Craft Cocktails', 'Premium Cigars', 'Artisan Cheese'],
      features: ['Cigar Humidor', 'Live Jazz', 'Private Booths', 'Whiskey Tastings'],
      awards: ['Best Bar Experience - Luxury Hotels 2024'],
      signature: 'Aurora Old Fashioned with house-infused bourbon',
      ambiance: 'Dark, sophisticated with leather and mahogany',
      dressCode: 'Smart Casual to Formal',
      reservationRequired: false
    }
  ];

  const categories = ['All', 'Fine Dining', 'Rooftop Dining', 'Asian Fusion', 'Casual Dining', 'Bar & Lounge'];

  const filteredRestaurants = selectedCategory === 'All' 
    ? restaurants 
    : restaurants.filter(restaurant => restaurant.category === selectedCategory);

  const openRestaurantModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentImageIndex(0);
  };

  const closeRestaurantModal = () => {
    setSelectedRestaurant(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRestaurant) {
      setCurrentImageIndex((prev) => 
        prev === selectedRestaurant.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRestaurant) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRestaurant.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="dining" className="section-padding bg-black-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-16 w-32 h-32 border border-gold-500 rotate-45"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-gold-500 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-gold-500 rotate-12"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-6 py-3 rounded-full mb-8">
            <ChefHat className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Culinary Excellence</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            Exquisite <span className="text-gold-500">Dining Experiences</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-luxury max-w-3xl mx-auto">
            Embark on a culinary journey that celebrates the finest flavors from around the world. 
            Our award-winning restaurants offer everything from authentic Indian cuisine to contemporary international dishes, 
            all crafted by world-renowned chefs using the freshest ingredients.
          </p>
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

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="luxury-card group cursor-pointer relative overflow-hidden"
              onClick={() => openRestaurantModal(restaurant)}
            >
              {/* Popular Badge */}
              {restaurant.popular && (
                <div className="absolute top-4 left-4 z-20 bg-gold-500 text-black-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Chef's Choice
                </div>
              )}

              {/* Restaurant Image */}
              <div className="relative h-64 mb-6 overflow-hidden">
                <img
                  src={restaurant.images[0]}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black-primary/80 backdrop-blur-md px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-gold-500 fill-current" />
                  <span className="text-white font-semibold">{restaurant.rating}</span>
                </div>

                {/* View More Overlay */}
                <div className="absolute inset-0 bg-black-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <ChefHat className="w-12 h-12 text-gold-500 mx-auto mb-3" />
                    <div className="text-gold-500 text-lg font-semibold mb-2">Explore Menu</div>
                    <div className="text-white/80 text-sm">Click for details</div>
                  </div>
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-1">
                      {restaurant.category}
                    </div>
                    <h3 className="heading-card text-white group-hover:text-gold-500 transition-colors duration-300 mb-2">
                      {restaurant.name}
                    </h3>
                    <div className="text-grey-light text-sm mb-2">{restaurant.cuisine}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold-500 text-lg font-bold">{restaurant.priceRange}</div>
                    <div className="text-white/60 text-xs">per person</div>
                  </div>
                </div>

                {/* Restaurant Features */}
                <div className="flex items-center space-x-6 text-sm text-grey-light">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.hours.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{restaurant.capacity} seats</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.location.split(',')[0]}</span>
                  </div>
                </div>

                {/* Chef Info */}
                <div className="bg-white/5 p-3">
                  <div className="text-white font-medium text-sm">{restaurant.chef}</div>
                  <div className="text-gold-500 text-xs">{restaurant.chefTitle}</div>
                </div>

                {/* Specialties Preview */}
                <div className="flex flex-wrap gap-2">
                  {restaurant.specialties.slice(0, 3).map((specialty) => (
                    <div key={specialty} className="bg-gold-500/10 text-gold-500 px-2 py-1 text-xs">
                      {specialty}
                    </div>
                  ))}
                  {restaurant.specialties.length > 3 && (
                    <div className="bg-white/5 text-white/80 px-2 py-1 text-xs">
                      +{restaurant.specialties.length - 3} more
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-grey-light text-sm leading-relaxed line-clamp-2">
                  {restaurant.description}
                </p>

                {/* CTA */}
                <div className="flex space-x-3 pt-2">
                  <Button variant="gold" size="sm" className="flex-1">
                    {restaurant.reservationRequired ? 'Reserve Table' : 'View Menu'}
                  </Button>
                  <Button variant="outline-gold" size="sm" icon={ArrowRight}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culinary Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center luxury-card">
            <Award className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Award-Winning Chefs</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Our culinary team includes Michelin-starred chefs and internationally acclaimed culinary artists.
            </p>
          </div>
          
          <div className="text-center luxury-card">
            <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Farm-to-Table</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Fresh, locally-sourced ingredients from our partner farms and sustainable fishing practices.
            </p>
          </div>
          
          <div className="text-center luxury-card">
            <Wine className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Curated Wine Selection</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Over 500 premium wines from renowned vineyards worldwide, expertly paired with our dishes.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-black-primary/80 backdrop-blur-md border border-gold-500/20 p-8 inline-block">
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              Ready for a <span className="text-gold-500">Culinary Adventure?</span>
            </h3>
            <p className="text-grey-light mb-6 max-w-md">
              Let our concierge team help you plan the perfect dining experience during your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" icon={Calendar}>
                Make Reservations
              </Button>
              <Button variant="outline-gold" icon={Phone}>
                Call Concierge
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm" onClick={closeRestaurantModal}></div>
          
          <div className="relative bg-black-secondary border border-gold-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeRestaurantModal}
              className="absolute top-4 right-4 z-30 text-white hover:text-gold-500 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedRestaurant.images[currentImageIndex]}
                alt={selectedRestaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 to-transparent"></div>
              
              {/* Image Navigation */}
              {selectedRestaurant.images.length > 1 && (
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
                    {selectedRestaurant.images.map((_, index) => (
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

            {/* Restaurant Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-2">
                      {selectedRestaurant.category} • {selectedRestaurant.cuisine}
                    </div>
                    <h3 className="heading-card text-white mb-4">{selectedRestaurant.name}</h3>
                    <p className="text-grey-light leading-relaxed mb-4">{selectedRestaurant.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(selectedRestaurant.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                        ))}
                      </div>
                      <span className="text-white font-semibold">{selectedRestaurant.rating}/5</span>
                    </div>
                  </div>

                  {/* Chef Info */}
                  <div className="bg-white/5 p-4">
                    <h4 className="text-white font-semibold mb-2">Meet the Chef</h4>
                    <div className="text-gold-500 font-medium">{selectedRestaurant.chef}</div>
                    <div className="text-grey-light text-sm">{selectedRestaurant.chefTitle}</div>
                  </div>

                  {/* Signature Dish */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Signature Experience</h4>
                    <p className="text-gold-500 italic">{selectedRestaurant.signature}</p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Chef's Specialties</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRestaurant.specialties.map((specialty) => (
                        <div key={specialty} className="flex items-center space-x-2 text-grey-light">
                          <Utensils className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Reservation Info */}
                  <div className="bg-gold-500/10 border border-gold-500/30 p-6">
                    <div className="text-center mb-4">
                      <div className="text-gold-500 text-2xl font-bold mb-1">
                        {selectedRestaurant.priceRange}
                      </div>
                      <div className="text-white/80 text-sm">per person</div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Hours:</span>
                        <span className="text-white">{selectedRestaurant.hours}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Capacity:</span>
                        <span className="text-white">{selectedRestaurant.capacity} guests</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Dress Code:</span>
                        <span className="text-white">{selectedRestaurant.dressCode}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Reservations:</span>
                        <span className="text-white">
                          {selectedRestaurant.reservationRequired ? 'Required' : 'Walk-ins Welcome'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full">
                        {selectedRestaurant.reservationRequired ? 'Make Reservation' : 'View Menu'}
                      </Button>
                      <Button variant="outline-gold" className="w-full">
                        Call Restaurant
                      </Button>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Restaurant Features</h4>
                    <div className="space-y-2">
                      {selectedRestaurant.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-grey-light">
                          <Heart className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Awards & Recognition</h4>
                    <div className="space-y-2">
                      {selectedRestaurant.awards.map((award, index) => (
                        <div key={index} className="flex items-center space-x-2 text-grey-light">
                          <Award className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-black-primary/50 p-4">
                    <h4 className="text-white font-semibold mb-2">Location & Contact</h4>
                    <p className="text-grey-light text-sm mb-2">{selectedRestaurant.location}</p>
                    <p className="text-grey-light text-sm mb-3">{selectedRestaurant.ambiance}</p>
                    <div className="text-gold-500 font-semibold">+91-98765-43210</div>
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

export default DiningSection;