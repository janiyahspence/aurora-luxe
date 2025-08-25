import React, { useState } from 'react';
import { 
  Bed, 
  Users, 
  Wifi, 
  Car, 
  Coffee, 
  Waves, 
  Mountain, 
  Star,
  ArrowRight,
  Bath,
  Tv,
  Wind,
  Shield,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import Button from '../common/Button';
import BookingModal from '../forms/BookingModal';

interface Room {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  size: string;
  occupancy: number;
  view: string;
  images: string[];
  amenities: string[];
  features: string[];
  description: string;
  popular?: boolean;
}

const AccommodationsSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState<string>('');

  const rooms: Room[] = [
    {
      id: 'deluxe-ocean',
      name: 'Deluxe Ocean Suite',
      category: 'Premium Suite',
      price: 25000,
      originalPrice: 30000,
      size: '650 sq ft',
      occupancy: 2,
      view: 'Ocean View',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: ['King Bed', 'Ocean Balcony', 'Marble Bathroom', 'Mini Bar', 'WiFi', 'AC'],
      features: ['24/7 Room Service', 'Daily Housekeeping', 'Concierge Service', 'Airport Transfer'],
      description: 'Experience luxury with panoramic ocean views from your private balcony. This elegantly appointed suite features contemporary furnishings and premium amenities.',
      popular: true
    },
    {
      id: 'royal-villa',
      name: 'Royal Beach Villa',
      category: 'Luxury Villa',
      price: 45000,
      size: '1200 sq ft',
      occupancy: 4,
      view: 'Private Beach',
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: ['Private Pool', 'Beach Access', 'Butler Service', 'Jacuzzi', 'Kitchen', 'Terrace'],
      features: ['Personal Chef Available', 'Private Beach Area', 'Spa Treatments', 'Water Sports'],
      description: 'Ultimate luxury with your own private beach villa featuring a personal pool, direct beach access, and dedicated butler service for an unforgettable stay.'
    },
    {
      id: 'garden-suite',
      name: 'Garden Paradise Suite',
      category: 'Garden Suite',
      price: 18000,
      originalPrice: 22000,
      size: '500 sq ft',
      occupancy: 2,
      view: 'Tropical Garden',
      images: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: ['Queen Bed', 'Garden Patio', 'Rain Shower', 'Coffee Machine', 'Safe', 'Minibar'],
      features: ['Garden Views', 'Peaceful Setting', 'Spa Access', 'Yoga Classes'],
      description: 'Immerse yourself in tranquility with lush tropical garden views. Perfect for couples seeking a peaceful retreat surrounded by nature.'
    },
    {
      id: 'presidential',
      name: 'Presidential Penthouse',
      category: 'Presidential Suite',
      price: 75000,
      size: '2000 sq ft',
      occupancy: 6,
      view: '360° Panoramic',
      images: [
        'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      amenities: ['Master Suite', 'Private Elevator', 'Rooftop Terrace', 'Wine Cellar', 'Home Theater', 'Gym'],
      features: ['Personal Butler', 'Private Chef', 'Helicopter Transfer', 'Exclusive Access'],
      description: 'The pinnacle of luxury living with panoramic views, private rooftop terrace, and exclusive amenities. Perfect for VIPs and special celebrations.'
    }
  ];

  const amenityIcons: { [key: string]: React.ComponentType<any> } = {
    'King Bed': Bed,
    'Queen Bed': Bed,
    'Master Suite': Bed,
    'Ocean Balcony': Waves,
    'Garden Patio': Mountain,
    'Rooftop Terrace': Mountain,
    'Marble Bathroom': Bath,
    'Rain Shower': Bath,
    'Mini Bar': Coffee,
    'Minibar': Coffee,
    'WiFi': Wifi,
    'AC': Wind,
    'Safe': Shield,
    'Private Pool': Waves,
    'Jacuzzi': Bath,
    'Home Theater': Tv,
    'Private Elevator': ArrowRight,
    'Wine Cellar': Coffee
  };

  const openRoomModal = (room: Room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  const closeRoomModal = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === selectedRoom.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRoom.images.length - 1 : prev - 1
      );
    }
  };

  const openBookingWithRoom = (roomId: string) => {
    setPreselectedRoom(roomId);
    setShowBookingModal(true);
  };

  return (
    <section id="accommodations" className="section-padding bg-black-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 border border-gold-500 rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 border border-gold-500 -rotate-12"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-6 py-3 rounded-full mb-8">
            <Bed className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Luxury Accommodations</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            Exquisite <span className="text-gold-500">Suites & Villas</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-luxury max-w-3xl mx-auto">
            Discover our collection of meticulously designed accommodations, each offering unparalleled comfort, 
            stunning views, and world-class amenities. From intimate suites to expansive villas, 
            every space is crafted for the discerning traveler.
          </p>
        </div>

        {/* Room Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Rooms', 'Premium Suite', 'Luxury Villa', 'Garden Suite', 'Presidential Suite'].map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/5 border border-white/20 text-white hover:border-gold-500 hover:text-gold-500 transition-all duration-300 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="luxury-card group cursor-pointer relative overflow-hidden"
              onClick={() => openRoomModal(room)}
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute top-4 left-4 z-20 bg-gold-500 text-black-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Room Image */}
              <div className="relative h-64 mb-6 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 to-transparent"></div>
                
                {/* View More Overlay */}
                <div className="absolute inset-0 bg-black-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gold-500 text-lg font-semibold mb-2">View Details</div>
                    <div className="text-white/80 text-sm">Click to explore</div>
                  </div>
                </div>
              </div>

              {/* Room Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-1">
                      {room.category}
                    </div>
                    <h3 className="heading-card text-white group-hover:text-gold-500 transition-colors duration-300">
                      {room.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    {room.originalPrice && (
                      <div className="text-grey-medium text-sm line-through">₹{room.originalPrice.toLocaleString()}</div>
                    )}
                    <div className="text-gold-500 text-xl font-bold">₹{room.price.toLocaleString()}</div>
                    <div className="text-white/60 text-xs">per night</div>
                  </div>
                </div>

                {/* Room Features */}
                <div className="flex items-center space-x-6 text-sm text-grey-light">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{room.occupancy} Guests</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mountain className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Waves className="w-4 h-4" />
                    <span>{room.view}</span>
                  </div>
                </div>

                {/* Amenities Preview */}
                <div className="flex flex-wrap gap-2">
                  {room.amenities.slice(0, 4).map((amenity) => {
                    const IconComponent = amenityIcons[amenity] || Star;
                    return (
                      <div key={amenity} className="flex items-center space-x-1 bg-white/5 px-2 py-1 text-xs text-white/80">
                        <IconComponent className="w-3 h-3" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                  {room.amenities.length > 4 && (
                    <div className="bg-gold-500/20 text-gold-500 px-2 py-1 text-xs">
                      +{room.amenities.length - 4} more
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-grey-light text-sm leading-relaxed line-clamp-2">
                  {room.description}
                </p>

                {/* CTA */}
                <div className="flex space-x-3 pt-2">
                  <Button 
                    variant="gold" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => openBookingWithRoom(room.id)}
                  >
                    Book Now
                  </Button>
                  <Button variant="outline-gold" size="sm" icon={ArrowRight}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-black-secondary/80 backdrop-blur-md border border-gold-500/20 p-8 inline-block">
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              Can't Find Your Perfect Suite?
            </h3>
            <p className="text-grey-light mb-6 max-w-md">
              Our concierge team can help you find the ideal accommodation for your specific needs and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" icon={Users}>
                Speak to Concierge
              </Button>
              <Button variant="outline-gold">
                View All Rooms
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm" onClick={closeRoomModal}></div>
          
          <div className="relative bg-black-secondary border border-gold-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeRoomModal}
              className="absolute top-4 right-4 z-30 text-white hover:text-gold-500 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedRoom.images[currentImageIndex]}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 to-transparent"></div>
              
              {/* Image Navigation */}
              {selectedRoom.images.length > 1 && (
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
                    {selectedRoom.images.map((_, index) => (
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

            {/* Room Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-2">
                      {selectedRoom.category}
                    </div>
                    <h3 className="heading-card text-white mb-4">{selectedRoom.name}</h3>
                    <p className="text-grey-light leading-relaxed">{selectedRoom.description}</p>
                  </div>

                  {/* Room Specs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 text-center">
                      <Users className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                      <div className="text-white font-semibold">{selectedRoom.occupancy} Guests</div>
                      <div className="text-grey-light text-sm">Maximum Occupancy</div>
                    </div>
                    <div className="bg-white/5 p-4 text-center">
                      <Mountain className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                      <div className="text-white font-semibold">{selectedRoom.size}</div>
                      <div className="text-grey-light text-sm">Suite Size</div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Room Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRoom.amenities.map((amenity) => {
                        const IconComponent = amenityIcons[amenity] || Star;
                        return (
                          <div key={amenity} className="flex items-center space-x-2 text-grey-light">
                            <IconComponent className="w-4 h-4 text-gold-500" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Pricing */}
                  <div className="bg-gold-500/10 border border-gold-500/30 p-6">
                    <div className="text-center mb-4">
                      {selectedRoom.originalPrice && (
                        <div className="text-grey-medium text-lg line-through mb-1">
                          ₹{selectedRoom.originalPrice.toLocaleString()}
                        </div>
                      )}
                      <div className="text-gold-500 text-3xl font-bold">
                        ₹{selectedRoom.price.toLocaleString()}
                      </div>
                      <div className="text-white/80">per night</div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        variant="gold" 
                        className="w-full"
                        onClick={() => openBookingWithRoom(selectedRoom.id)}
                      >
                        Book This Suite
                      </Button>
                      <Button 
                        variant="outline-gold" 
                        className="w-full"
                        onClick={() => openBookingWithRoom(selectedRoom.id)}
                      >
                        Check Availability
                      </Button>
                    </div>
                  </div>

                  {/* Special Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Special Features</h4>
                    <div className="space-y-2">
                      {selectedRoom.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-grey-light">
                          <Star className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-black-primary/50 p-4">
                    <h4 className="text-white font-semibold mb-2">Need Assistance?</h4>
                    <p className="text-grey-light text-sm mb-3">
                      Our concierge team is available 24/7 to help with your reservation.
                    </p>
                    <div className="text-gold-500 font-semibold">+91-98765-43210</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        preselectedRoom={preselectedRoom}
      />
    </section>
  );
};

export default AccommodationsSection;