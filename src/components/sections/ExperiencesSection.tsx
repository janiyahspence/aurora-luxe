import React, { useState } from 'react';
import { 
  Compass, 
  Camera, 
  Waves, 
  Mountain, 
  Sunset, 
  Music, 
  Utensils,
  Car,
  Plane,
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  Phone,
  Heart,
  Award,
  Anchor,
  TreePine,
  Building,
  Palette,
  Wine,
  Fish,
  Bike,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  IndianRupee,
  Timer,
  User
} from 'lucide-react';
import Button from '../common/Button';

interface Experience {
  id: string;
  name: string;
  category: string;
  type: string;
  description: string;
  duration: string;
  price: number;
  groupSize: string;
  difficulty: string;
  includes: string[];
  highlights: string[];
  images: string[];
  location: string;
  bestTime: string;
  guide: string;
  transportation: string;
  popular?: boolean;
  exclusive?: boolean;
}

const ExperiencesSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const experiences: Experience[] = [
    {
      id: 'sunset-cruise',
      name: 'Luxury Sunset Cruise',
      category: 'Water Adventures',
      type: 'Boat Experience',
      description: 'Sail into the golden hour aboard our private yacht with champagne service, gourmet canapés, and breathtaking views of the Goan coastline. Watch dolphins play in the waves as the sun sets over the Arabian Sea.',
      duration: '3 hours',
      price: 8500,
      groupSize: '2-12 guests',
      difficulty: 'Easy',
      includes: ['Private Yacht', 'Champagne Service', 'Gourmet Canapés', 'Professional Crew', 'Safety Equipment'],
      highlights: ['Dolphin Spotting', 'Sunset Views', 'Coastal Photography', 'Luxury Service', 'Romantic Setting'],
      images: [
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Candolim Beach Marina',
      bestTime: 'Evening (5:00 PM - 8:00 PM)',
      guide: 'Certified Marine Guide',
      transportation: 'Hotel Transfer Included',
      popular: true,
      exclusive: true
    },
    {
      id: 'spice-plantation',
      name: 'Heritage Spice Plantation Tour',
      category: 'Cultural Experiences',
      type: 'Cultural Tour',
      description: 'Discover the aromatic world of Goan spices on this immersive plantation tour. Learn about traditional farming methods, enjoy a traditional Goan lunch, and take home authentic spices.',
      duration: '6 hours',
      price: 4500,
      groupSize: '4-20 guests',
      difficulty: 'Easy',
      includes: ['Plantation Tour', 'Traditional Lunch', 'Spice Tasting', 'Cultural Performance', 'Spice Shopping'],
      highlights: ['Organic Farming', 'Traditional Cooking', 'Cultural Dance', 'Spice Garden Walk', 'Local Interaction'],
      images: [
        'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Ponda Spice Plantations',
      bestTime: 'Morning (9:00 AM - 3:00 PM)',
      guide: 'Local Cultural Expert',
      transportation: 'AC Vehicle with Driver',
      popular: true
    },
    {
      id: 'old-goa-heritage',
      name: 'Old Goa Heritage Walk',
      category: 'Cultural Experiences',
      type: 'Historical Tour',
      description: 'Step back in time through the UNESCO World Heritage sites of Old Goa. Explore magnificent churches, learn about Portuguese colonial history, and discover hidden architectural gems.',
      duration: '4 hours',
      price: 3200,
      groupSize: '2-15 guests',
      difficulty: 'Easy',
      includes: ['Expert Guide', 'Church Visits', 'Historical Commentary', 'Photography Stops', 'Refreshments'],
      highlights: ['UNESCO Sites', 'Basilica of Bom Jesus', 'Se Cathedral', 'Portuguese Architecture', 'Religious Art'],
      images: [
        'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134188/pexels-photo-1134188.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Old Goa',
      bestTime: 'Morning (9:00 AM - 1:00 PM)',
      guide: 'Licensed Heritage Guide',
      transportation: 'Walking Tour with Transfer'
    },
    {
      id: 'water-sports',
      name: 'Adventure Water Sports Package',
      category: 'Water Adventures',
      type: 'Adventure Sports',
      description: 'Get your adrenaline pumping with our comprehensive water sports package. From jet skiing to parasailing, experience the thrill of Goa\'s pristine waters with professional instructors.',
      duration: '4 hours',
      price: 6800,
      groupSize: '1-8 guests',
      difficulty: 'Moderate',
      includes: ['Jet Skiing', 'Parasailing', 'Banana Boat Ride', 'Safety Gear', 'Professional Instructors'],
      highlights: ['Aerial Views', 'Speed Thrills', 'Beach Fun', 'Safety Training', 'Photo Opportunities'],
      images: [
        'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Calangute Beach',
      bestTime: 'Morning (10:00 AM - 2:00 PM)',
      guide: 'Certified Water Sports Instructor',
      transportation: 'Beach Transfer Included'
    },
    {
      id: 'backwater-kayaking',
      name: 'Mangrove Backwater Kayaking',
      category: 'Nature & Wildlife',
      type: 'Eco Adventure',
      description: 'Paddle through serene mangrove forests and discover Goa\'s hidden backwaters. Spot exotic birds, learn about marine ecosystems, and enjoy the tranquility of nature.',
      duration: '3 hours',
      price: 3800,
      groupSize: '2-10 guests',
      difficulty: 'Easy to Moderate',
      includes: ['Kayak Equipment', 'Safety Briefing', 'Nature Guide', 'Bird Watching', 'Refreshments'],
      highlights: ['Mangrove Exploration', 'Bird Watching', 'Eco Education', 'Peaceful Waters', 'Photography'],
      images: [
        'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Chapora River',
      bestTime: 'Early Morning (7:00 AM - 10:00 AM)',
      guide: 'Eco Tourism Specialist',
      transportation: 'Hotel Pickup Available'
    },
    {
      id: 'cooking-class',
      name: 'Authentic Goan Cooking Class',
      category: 'Culinary Experiences',
      type: 'Cooking Workshop',
      description: 'Learn the secrets of authentic Goan cuisine from local chefs. Shop for fresh ingredients at the market, cook traditional dishes, and enjoy your creations with wine pairing.',
      duration: '5 hours',
      price: 5200,
      groupSize: '4-12 guests',
      difficulty: 'Easy',
      includes: ['Market Visit', 'Cooking Instruction', 'Recipe Cards', 'Lunch with Wine', 'Apron & Certificate'],
      highlights: ['Local Market Tour', 'Traditional Recipes', 'Hands-on Cooking', 'Wine Pairing', 'Cultural Stories'],
      images: [
        'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Traditional Goan Home',
      bestTime: 'Morning (9:00 AM - 2:00 PM)',
      guide: 'Local Chef & Host Family',
      transportation: 'Pickup & Drop Included',
      popular: true
    },
    {
      id: 'dudhsagar-falls',
      name: 'Dudhsagar Falls Adventure',
      category: 'Nature & Wildlife',
      type: 'Nature Excursion',
      description: 'Journey to India\'s second-highest waterfall through lush Western Ghats. Enjoy a thrilling jeep safari, trek through spice plantations, and witness the majestic four-tiered falls.',
      duration: '8 hours',
      price: 7500,
      groupSize: '4-16 guests',
      difficulty: 'Moderate',
      includes: ['Jeep Safari', 'Trekking Guide', 'Entry Permits', 'Packed Lunch', 'Photography Stops'],
      highlights: ['Waterfall Views', 'Jungle Safari', 'Spice Plantations', 'Wildlife Spotting', 'Adventure Trekking'],
      images: [
        'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Bhagwan Mahavir Wildlife Sanctuary',
      bestTime: 'Full Day (8:00 AM - 6:00 PM)',
      guide: 'Adventure & Nature Guide',
      transportation: '4WD Jeep Safari',
      exclusive: true
    },
    {
      id: 'feni-distillery',
      name: 'Feni Distillery & Tasting Tour',
      category: 'Culinary Experiences',
      type: 'Beverage Tour',
      description: 'Discover Goa\'s signature spirit at a traditional feni distillery. Learn about the cashew and palm fermentation process, enjoy guided tastings, and understand this unique Goan tradition.',
      duration: '3 hours',
      price: 2800,
      groupSize: '6-20 guests',
      difficulty: 'Easy',
      includes: ['Distillery Tour', 'Feni Tasting', 'Traditional Snacks', 'Cultural Stories', 'Souvenir Bottle'],
      highlights: ['Traditional Process', 'Multiple Tastings', 'Local Culture', 'Artisan Craft', 'Unique Experience'],
      images: [
        'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Traditional Feni Distillery',
      bestTime: 'Afternoon (2:00 PM - 5:00 PM)',
      guide: 'Local Distillery Expert',
      transportation: 'Hotel Transfer Available'
    }
  ];

  const categories = ['All', 'Water Adventures', 'Cultural Experiences', 'Nature & Wildlife', 'Culinary Experiences'];

  const filteredExperiences = selectedCategory === 'All' 
    ? experiences 
    : experiences.filter(experience => experience.category === selectedCategory);

  const openExperienceModal = (experience: Experience) => {
    setSelectedExperience(experience);
    setCurrentImageIndex(0);
  };

  const closeExperienceModal = () => {
    setSelectedExperience(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex((prev) => 
        prev === selectedExperience.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedExperience.images.length - 1 : prev - 1
      );
    }
  };

  const difficultyColors = {
    'Easy': 'text-green-500',
    'Easy to Moderate': 'text-yellow-500',
    'Moderate': 'text-orange-500',
    'Challenging': 'text-red-500'
  };

  return (
    <section id="experiences" className="section-padding bg-black-secondary relative overflow-hidden">
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
            <Compass className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Curated Experiences</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            Unforgettable <span className="text-gold-500">Goan Adventures</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-luxury max-w-3xl mx-auto">
            Discover the magic of Goa through our carefully curated experiences. From sunset cruises and cultural tours 
            to adventure sports and culinary journeys, each experience is designed to create lasting memories and 
            showcase the authentic beauty of this tropical paradise.
          </p>
        </div>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center luxury-card">
            <Compass className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">25+</div>
            <div className="text-white font-medium text-sm">Unique Experiences</div>
          </div>
          <div className="text-center luxury-card">
            <Users className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">Expert</div>
            <div className="text-white font-medium text-sm">Local Guides</div>
          </div>
          <div className="text-center luxury-card">
            <Award className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">Premium</div>
            <div className="text-white font-medium text-sm">Service Quality</div>
          </div>
          <div className="text-center luxury-card">
            <Heart className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">24/7</div>
            <div className="text-white font-medium text-sm">Concierge Support</div>
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

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="luxury-card group cursor-pointer relative overflow-hidden"
              onClick={() => openExperienceModal(experience)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
                {experience.exclusive && (
                  <div className="bg-gold-500 text-black-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Exclusive
                  </div>
                )}
                {experience.popular && (
                  <div className="bg-black-primary/80 text-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Popular
                  </div>
                )}
              </div>

              {/* Experience Image */}
              <div className="relative h-48 mb-6 overflow-hidden">
                <img
                  src={experience.images[0]}
                  alt={experience.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 to-transparent"></div>
                
                {/* Duration & Difficulty */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
                  <div className="bg-black-primary/80 backdrop-blur-md px-3 py-1 flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span className="text-white text-sm font-medium">{experience.duration}</span>
                  </div>
                  <div className="bg-black-primary/80 backdrop-blur-md px-3 py-1">
                    <span className={`text-sm font-medium ${difficultyColors[experience.difficulty as keyof typeof difficultyColors]}`}>
                      {experience.difficulty}
                    </span>
                  </div>
                </div>

                {/* View More Overlay */}
                <div className="absolute inset-0 bg-black-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Compass className="w-12 h-12 text-gold-500 mx-auto mb-3" />
                    <div className="text-gold-500 text-lg font-semibold mb-2">Explore Experience</div>
                    <div className="text-white/80 text-sm">Click for details</div>
                  </div>
                </div>
              </div>

              {/* Experience Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-1">
                      {experience.category}
                    </div>
                    <h3 className="heading-card text-white group-hover:text-gold-500 transition-colors duration-300 mb-2">
                      {experience.name}
                    </h3>
                    <div className="text-grey-light text-sm mb-2">{experience.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold-500 text-xl font-bold flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {experience.price.toLocaleString()}
                    </div>
                    <div className="text-white/60 text-xs">per person</div>
                  </div>
                </div>

                {/* Experience Features */}
                <div className="flex items-center space-x-4 text-sm text-grey-light">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{experience.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Timer className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Highlights Preview */}
                <div className="flex flex-wrap gap-2">
                  {experience.highlights.slice(0, 3).map((highlight) => (
                    <div key={highlight} className="bg-gold-500/10 text-gold-500 px-2 py-1 text-xs">
                      {highlight}
                    </div>
                  ))}
                  {experience.highlights.length > 3 && (
                    <div className="bg-white/5 text-white/80 px-2 py-1 text-xs">
                      +{experience.highlights.length - 3} more
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-grey-light text-sm leading-relaxed line-clamp-2">
                  {experience.description}
                </p>

                {/* CTA */}
                <div className="flex space-x-3 pt-2">
                  <Button variant="gold" size="sm" className="flex-1">
                    Book Experience
                  </Button>
                  <Button variant="outline-gold" size="sm" icon={ArrowRight}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Categories Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center luxury-card group">
            <Waves className="w-12 h-12 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Water Adventures</h3>
            <p className="text-grey-light text-sm leading-relaxed mb-4">
              Sunset cruises, water sports, and marine adventures in the pristine Arabian Sea.
            </p>
            <div className="text-gold-500 text-sm font-medium">5 Experiences</div>
          </div>
          
          <div className="text-center luxury-card group">
            <Building className="w-12 h-12 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Cultural Heritage</h3>
            <p className="text-grey-light text-sm leading-relaxed mb-4">
              UNESCO sites, Portuguese architecture, and authentic Goan traditions.
            </p>
            <div className="text-gold-500 text-sm font-medium">4 Experiences</div>
          </div>
          
          <div className="text-center luxury-card group">
            <TreePine className="w-12 h-12 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Nature & Wildlife</h3>
            <p className="text-grey-light text-sm leading-relaxed mb-4">
              Waterfalls, mangroves, spice plantations, and eco-adventures.
            </p>
            <div className="text-gold-500 text-sm font-medium">3 Experiences</div>
          </div>
          
          <div className="text-center luxury-card group">
            <Utensils className="w-12 h-12 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Culinary Journeys</h3>
            <p className="text-grey-light text-sm leading-relaxed mb-4">
              Cooking classes, feni tastings, and authentic Goan food experiences.
            </p>
            <div className="text-gold-500 text-sm font-medium">3 Experiences</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-black-primary/80 backdrop-blur-md border border-gold-500/20 p-8 inline-block">
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              Ready for Your <span className="text-gold-500">Goan Adventure?</span>
            </h3>
            <p className="text-grey-light mb-6 max-w-md">
              Our experience concierge will help you create the perfect itinerary based on your interests and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" icon={Calendar}>
                Plan My Experience
              </Button>
              <Button variant="outline-gold" icon={Phone}>
                Call Concierge
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm" onClick={closeExperienceModal}></div>
          
          <div className="relative bg-black-secondary border border-gold-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeExperienceModal}
              className="absolute top-4 right-4 z-30 text-white hover:text-gold-500 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedExperience.images[currentImageIndex]}
                alt={selectedExperience.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 to-transparent"></div>
              
              {/* Image Navigation */}
              {selectedExperience.images.length > 1 && (
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
                    {selectedExperience.images.map((_, index) => (
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

            {/* Experience Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-2">
                      {selectedExperience.category} • {selectedExperience.type}
                    </div>
                    <h3 className="heading-card text-white mb-4">{selectedExperience.name}</h3>
                    <p className="text-grey-light leading-relaxed mb-4">{selectedExperience.description}</p>
                    
                    {/* Experience Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 p-3 text-center">
                        <Clock className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">{selectedExperience.duration}</div>
                        <div className="text-grey-light text-xs">Duration</div>
                      </div>
                      <div className="bg-white/5 p-3 text-center">
                        <Users className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                        <div className="text-white font-semibold text-sm">{selectedExperience.groupSize}</div>
                        <div className="text-grey-light text-xs">Group Size</div>
                      </div>
                    </div>
                  </div>

                  {/* Guide Info */}
                  <div className="bg-white/5 p-4">
                    <h4 className="text-white font-semibold mb-2">Your Guide</h4>
                    <div className="text-gold-500 font-medium">{selectedExperience.guide}</div>
                    <div className="text-grey-light text-sm">Expert in {selectedExperience.category}</div>
                  </div>

                  {/* Location & Timing */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Experience Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-grey-light">Location:</span>
                        <span className="text-white">{selectedExperience.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-grey-light">Best Time:</span>
                        <span className="text-white">{selectedExperience.bestTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-grey-light">Difficulty:</span>
                        <span className={`font-medium ${difficultyColors[selectedExperience.difficulty as keyof typeof difficultyColors]}`}>
                          {selectedExperience.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-grey-light">Transportation:</span>
                        <span className="text-white">{selectedExperience.transportation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Experience Highlights</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedExperience.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center space-x-2 text-grey-light">
                          <Star className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Booking Info */}
                  <div className="bg-gold-500/10 border border-gold-500/30 p-6">
                    <div className="text-center mb-4">
                      <div className="text-gold-500 text-3xl font-bold mb-1 flex items-center justify-center">
                        <IndianRupee className="w-6 h-6" />
                        {selectedExperience.price.toLocaleString()}
                      </div>
                      <div className="text-white/80 text-sm">per person</div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Duration:</span>
                        <span className="text-white">{selectedExperience.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Group Size:</span>
                        <span className="text-white">{selectedExperience.groupSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Guide:</span>
                        <span className="text-white">{selectedExperience.guide.split(' ')[0]}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full">
                        Book Experience
                      </Button>
                      <Button variant="outline-gold" className="w-full">
                        Customize Tour
                      </Button>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">What's Included</h4>
                    <div className="space-y-2">
                      {selectedExperience.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-grey-light">
                          <Heart className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-black-primary/50 p-4">
                    <h4 className="text-white font-semibold mb-2">Experience Concierge</h4>
                    <p className="text-grey-light text-sm mb-3">
                      Available 24/7 for bookings, customizations, and special requests.
                    </p>
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

export default ExperiencesSection;