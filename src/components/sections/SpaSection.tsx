import React, { useState } from 'react';
import { 
  Flower2, 
  Leaf, 
  Heart, 
  Clock, 
  Users, 
  Star, 
  Award,
  Calendar,
  Phone,
  MapPin,
  Waves,
  Sun,
  Moon,
  Wind,
  Droplets,
  Sparkles,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  User,
  Timer,
  IndianRupee
} from 'lucide-react';
import Button from '../common/Button';

interface Treatment {
  id: string;
  name: string;
  category: string;
  type: string;
  description: string;
  duration: string;
  price: number;
  therapist: string;
  benefits: string[];
  includes: string[];
  images: string[];
  origin: string;
  bestFor: string[];
  ritual: string;
  popular?: boolean;
  signature?: boolean;
}

interface WellnessProgram {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  includes: string[];
  schedule: string[];
  image: string;
}

const SpaSection: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const treatments: Treatment[] = [
    {
      id: 'abhyanga-royal',
      name: 'Abhyanga Royal Ritual',
      category: 'Ayurvedic Treatments',
      type: 'Full Body Massage',
      description: 'Ancient Ayurvedic full-body massage using warm herbal oils, customized to your dosha. This traditional treatment promotes deep relaxation, improves circulation, and balances the mind-body connection.',
      duration: '90 minutes',
      price: 8500,
      therapist: 'Master Ayurvedic Therapist',
      benefits: ['Deep Relaxation', 'Improved Circulation', 'Stress Relief', 'Muscle Tension Release', 'Skin Nourishment'],
      includes: ['Dosha Consultation', 'Herbal Oil Selection', 'Steam Therapy', 'Herbal Tea', 'Take-home Oil Sample'],
      images: [
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/6663334/pexels-photo-6663334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      origin: 'Ancient India - 5000 years old',
      bestFor: ['Stress Relief', 'Muscle Tension', 'Dry Skin', 'Poor Circulation'],
      ritual: 'Begin with dosha assessment, followed by warm oil application using traditional strokes',
      popular: true,
      signature: true
    },
    {
      id: 'shirodhara-bliss',
      name: 'Shirodhara Bliss',
      category: 'Ayurvedic Treatments',
      type: 'Head & Scalp Treatment',
      description: 'Meditative treatment where warm herbal oil is poured in a continuous stream over the forehead, inducing deep relaxation and mental clarity. Perfect for stress, anxiety, and insomnia.',
      duration: '75 minutes',
      price: 7200,
      therapist: 'Certified Shirodhara Specialist',
      benefits: ['Mental Clarity', 'Deep Relaxation', 'Stress Reduction', 'Better Sleep', 'Hair Nourishment'],
      includes: ['Scalp Massage', 'Herbal Oil Therapy', 'Meditation Guidance', 'Relaxation Time', 'Hair Wash'],
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      origin: 'Kerala, India - Traditional Panchakarma',
      bestFor: ['Anxiety', 'Insomnia', 'Mental Fatigue', 'Hair Problems'],
      ritual: 'Gentle scalp massage followed by continuous warm oil pouring for 30 minutes',
      popular: true
    },
    {
      id: 'himalayan-stone',
      name: 'Himalayan Hot Stone Therapy',
      category: 'Signature Treatments',
      type: 'Hot Stone Massage',
      description: 'Therapeutic massage using heated Himalayan salt stones to release tension, improve circulation, and detoxify the body. The mineral-rich stones provide additional healing benefits.',
      duration: '80 minutes',
      price: 6800,
      therapist: 'Stone Therapy Specialist',
      benefits: ['Muscle Relaxation', 'Improved Circulation', 'Detoxification', 'Mineral Absorption', 'Pain Relief'],
      includes: ['Stone Preparation', 'Full Body Massage', 'Aromatherapy', 'Cooling Treatment', 'Mineral Water'],
      images: [
        'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/6663334/pexels-photo-6663334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      origin: 'Himalayan Region - Ancient Healing',
      bestFor: ['Muscle Pain', 'Poor Circulation', 'Stress', 'Toxin Buildup'],
      ritual: 'Heated stones placed on chakra points, followed by massage with warm stones',
      signature: true
    },
    {
      id: 'couples-retreat',
      name: 'Couples Harmony Retreat',
      category: 'Couples Treatments',
      type: 'Couples Massage',
      description: 'Romantic couples treatment in our private suite with synchronized massages, champagne, and rose petals. Perfect for anniversaries, honeymoons, or special celebrations.',
      duration: '120 minutes',
      price: 15000,
      therapist: 'Dual Certified Therapists',
      benefits: ['Bonding Experience', 'Shared Relaxation', 'Romantic Atmosphere', 'Stress Relief', 'Quality Time'],
      includes: ['Private Suite', 'Champagne Service', 'Rose Petal Decoration', 'Chocolate Treats', 'Photo Session'],
      images: [
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/6663334/pexels-photo-6663334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      origin: 'Aurora Luxe Signature Experience',
      bestFor: ['Couples', 'Anniversaries', 'Honeymoons', 'Special Occasions'],
      ritual: 'Welcome ceremony, synchronized treatments, and celebration toast',
      popular: true
    },
    {
      id: 'detox-wrap',
      name: 'Seaweed Detox Wrap',
      category: 'Body Treatments',
      type: 'Body Wrap',
      description: 'Purifying full-body wrap using nutrient-rich seaweed to detoxify, firm, and nourish the skin. Includes exfoliation and moisturizing treatment for silky smooth skin.',
      duration: '90 minutes',
      price: 5500,
      therapist: 'Body Treatment Specialist',
      benefits: ['Detoxification', 'Skin Firming', 'Cellulite Reduction', 'Hydration', 'Mineral Absorption'],
      includes: ['Body Exfoliation', 'Seaweed Application', 'Wrap Therapy', 'Moisturizing Treatment', 'Relaxation Time'],
      images: [
        'https://images.pexels.com/photos/6663334/pexels-photo-6663334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      origin: 'Marine Therapy - French Thalassotherapy',
      bestFor: ['Cellulite', 'Dry Skin', 'Toxin Buildup', 'Skin Firming'],
      ritual: 'Dry brushing, seaweed application, thermal wrap, and nourishing finish'
    },
    {
      id: 'facial-gold',
      name: '24K Gold Radiance Facial',
      category: 'Facial Treatments',
      type: 'Luxury Facial',
      description: 'Ultimate anti-aging facial using 24K gold leaf and premium serums to rejuvenate, lift, and illuminate the skin. Includes LED light therapy and collagen mask.',
      duration: '75 minutes',
      price: 9500,
      therapist: 'Master Aesthetician',
      benefits: ['Anti-Aging', 'Skin Brightening', 'Collagen Boost', 'Fine Line Reduction', 'Luxury Experience'],
      includes: ['Deep Cleansing', 'Gold Leaf Application', 'LED Light Therapy', 'Collagen Mask', 'Serum Treatment'],
      images: [
        'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/6663334/pexels-photo-6663334.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      origin: 'Ancient Egypt - Cleopatra\'s Secret',
      bestFor: ['Aging Skin', 'Dullness', 'Fine Lines', 'Special Events'],
      ritual: 'Multi-step cleansing, gold application, technology treatment, and luxury finish',
      signature: true
    }
  ];

  const wellnessPrograms: WellnessProgram[] = [
    {
      id: 'detox-retreat',
      name: '7-Day Ayurvedic Detox Retreat',
      duration: '7 Days',
      price: 45000,
      description: 'Complete Panchakarma detoxification program with daily treatments, yoga, meditation, and Ayurvedic meals.',
      includes: ['Daily Treatments', 'Yoga Classes', 'Meditation Sessions', 'Ayurvedic Meals', 'Doctor Consultations'],
      schedule: ['Morning Yoga', 'Treatment Session', 'Healthy Lunch', 'Meditation', 'Evening Relaxation'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'stress-relief',
      name: '3-Day Stress Relief Program',
      duration: '3 Days',
      price: 18000,
      description: 'Intensive stress relief program combining massage therapy, mindfulness, and relaxation techniques.',
      includes: ['Daily Massages', 'Mindfulness Training', 'Relaxation Therapy', 'Healthy Meals', 'Take-home Kit'],
      schedule: ['Morning Meditation', 'Massage Therapy', 'Mindfulness Session', 'Relaxation Time', 'Evening Yoga'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'beauty-wellness',
      name: '5-Day Beauty & Wellness Journey',
      duration: '5 Days',
      price: 32000,
      description: 'Comprehensive beauty and wellness program focusing on skin rejuvenation, body treatments, and inner wellness.',
      includes: ['Facial Treatments', 'Body Wraps', 'Nutrition Counseling', 'Fitness Sessions', 'Beauty Products'],
      schedule: ['Morning Workout', 'Facial Treatment', 'Healthy Lunch', 'Body Treatment', 'Wellness Consultation'],
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const categories = ['All', 'Ayurvedic Treatments', 'Signature Treatments', 'Couples Treatments', 'Body Treatments', 'Facial Treatments'];

  const filteredTreatments = selectedCategory === 'All' 
    ? treatments 
    : treatments.filter(treatment => treatment.category === selectedCategory);

  const openTreatmentModal = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setCurrentImageIndex(0);
  };

  const closeTreatmentModal = () => {
    setSelectedTreatment(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedTreatment) {
      setCurrentImageIndex((prev) => 
        prev === selectedTreatment.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedTreatment) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedTreatment.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="spa" className="section-padding bg-black-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-16 w-40 h-40 border border-gold-500 rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 border border-gold-500 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-gold-500 rotate-12"></div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-6 py-3 rounded-full mb-8">
            <Flower2 className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Wellness Sanctuary</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            Spa & <span className="text-gold-500">Wellness Haven</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-luxury max-w-3xl mx-auto">
            Discover ancient healing traditions and modern wellness techniques in our 3000 sq.ft sanctuary. 
            From authentic Ayurvedic treatments to signature therapies, every experience is designed to restore 
            balance, rejuvenate your spirit, and nurture your well-being.
          </p>
        </div>

        {/* Spa Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center luxury-card">
            <Leaf className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">5000+</div>
            <div className="text-white font-medium text-sm">Years of Ayurveda</div>
          </div>
          <div className="text-center luxury-card">
            <Users className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">15+</div>
            <div className="text-white font-medium text-sm">Expert Therapists</div>
          </div>
          <div className="text-center luxury-card">
            <Sparkles className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">50+</div>
            <div className="text-white font-medium text-sm">Signature Treatments</div>
          </div>
          <div className="text-center luxury-card">
            <Award className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <div className="text-2xl font-display font-bold text-gold-500 mb-1">24/7</div>
            <div className="text-white font-medium text-sm">Wellness Support</div>
          </div>
        </div>

        {/* Treatment Categories */}
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

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTreatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className="luxury-card group cursor-pointer relative overflow-hidden"
              onClick={() => openTreatmentModal(treatment)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
                {treatment.signature && (
                  <div className="bg-gold-500 text-black-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Signature
                  </div>
                )}
                {treatment.popular && (
                  <div className="bg-black-primary/80 text-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Popular
                  </div>
                )}
              </div>

              {/* Treatment Image */}
              <div className="relative h-48 mb-6 overflow-hidden">
                <img
                  src={treatment.images[0]}
                  alt={treatment.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 to-transparent"></div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black-primary/80 backdrop-blur-md px-3 py-1 flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span className="text-white text-sm font-medium">{treatment.duration}</span>
                </div>

                {/* View More Overlay */}
                <div className="absolute inset-0 bg-black-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Flower2 className="w-12 h-12 text-gold-500 mx-auto mb-3" />
                    <div className="text-gold-500 text-lg font-semibold mb-2">Explore Treatment</div>
                    <div className="text-white/80 text-sm">Click for details</div>
                  </div>
                </div>
              </div>

              {/* Treatment Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-1">
                      {treatment.category}
                    </div>
                    <h3 className="heading-card text-white group-hover:text-gold-500 transition-colors duration-300 mb-2">
                      {treatment.name}
                    </h3>
                    <div className="text-grey-light text-sm mb-2">{treatment.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold-500 text-xl font-bold flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {treatment.price.toLocaleString()}
                    </div>
                    <div className="text-white/60 text-xs">{treatment.duration}</div>
                  </div>
                </div>

                {/* Treatment Features */}
                <div className="flex items-center space-x-4 text-sm text-grey-light">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{treatment.therapist.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Timer className="w-4 h-4" />
                    <span>{treatment.duration}</span>
                  </div>
                </div>

                {/* Benefits Preview */}
                <div className="flex flex-wrap gap-2">
                  {treatment.benefits.slice(0, 3).map((benefit) => (
                    <div key={benefit} className="bg-gold-500/10 text-gold-500 px-2 py-1 text-xs">
                      {benefit}
                    </div>
                  ))}
                  {treatment.benefits.length > 3 && (
                    <div className="bg-white/5 text-white/80 px-2 py-1 text-xs">
                      +{treatment.benefits.length - 3} more
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-grey-light text-sm leading-relaxed line-clamp-2">
                  {treatment.description}
                </p>

                {/* CTA */}
                <div className="flex space-x-3 pt-2">
                  <Button variant="gold" size="sm" className="flex-1">
                    Book Treatment
                  </Button>
                  <Button variant="outline-gold" size="sm" icon={ArrowRight}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wellness Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-semibold text-white mb-4">
              Wellness <span className="text-gold-500">Programs</span>
            </h3>
            <p className="text-luxury max-w-2xl mx-auto">
              Immersive wellness journeys designed to transform your mind, body, and spirit through 
              comprehensive programs combining ancient wisdom with modern techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wellnessPrograms.map((program) => (
              <div key={program.id} className="luxury-card group">
                <div className="relative h-48 mb-6 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-gold-500 font-semibold">{program.duration}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="heading-card text-white group-hover:text-gold-500 transition-colors duration-300">
                      {program.name}
                    </h4>
                    <div className="text-right">
                      <div className="text-gold-500 text-lg font-bold flex items-center">
                        <IndianRupee className="w-4 h-4" />
                        {program.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <p className="text-grey-light text-sm leading-relaxed">
                    {program.description}
                  </p>

                  <div>
                    <h5 className="text-white font-semibold mb-2 text-sm">Program Includes:</h5>
                    <div className="space-y-1">
                      {program.includes.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-grey-light text-xs">
                          <Heart className="w-3 h-3 text-gold-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline-gold" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spa Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center luxury-card">
            <Sun className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Ancient Wisdom</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              5000-year-old Ayurvedic traditions combined with modern wellness techniques for holistic healing.
            </p>
          </div>
          
          <div className="text-center luxury-card">
            <Droplets className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Natural Elements</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Pure herbal oils, organic ingredients, and natural healing elements sourced from across India.
            </p>
          </div>
          
          <div className="text-center luxury-card">
            <Wind className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-white mb-3">Mindful Practice</h3>
            <p className="text-grey-light text-sm leading-relaxed">
              Meditation, yoga, and mindfulness practices integrated into every treatment for complete wellness.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-black-secondary/80 backdrop-blur-md border border-gold-500/20 p-8 inline-block">
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              Begin Your <span className="text-gold-500">Wellness Journey</span>
            </h3>
            <p className="text-grey-light mb-6 max-w-md">
              Our wellness consultants will help you choose the perfect treatments and programs for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" icon={Calendar}>
                Book Consultation
              </Button>
              <Button variant="outline-gold" icon={Phone}>
                Call Spa Concierge
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Detail Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm" onClick={closeTreatmentModal}></div>
          
          <div className="relative bg-black-secondary border border-gold-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeTreatmentModal}
              className="absolute top-4 right-4 z-30 text-white hover:text-gold-500 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedTreatment.images[currentImageIndex]}
                alt={selectedTreatment.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 to-transparent"></div>
              
              {/* Image Navigation */}
              {selectedTreatment.images.length > 1 && (
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
                    {selectedTreatment.images.map((_, index) => (
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

            {/* Treatment Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-2">
                      {selectedTreatment.category} • {selectedTreatment.type}
                    </div>
                    <h3 className="heading-card text-white mb-4">{selectedTreatment.name}</h3>
                    <p className="text-grey-light leading-relaxed mb-4">{selectedTreatment.description}</p>
                    
                    {/* Origin */}
                    <div className="bg-gold-500/10 border border-gold-500/30 p-4 mb-4">
                      <div className="text-gold-500 font-semibold mb-1">Ancient Origins</div>
                      <div className="text-white text-sm">{selectedTreatment.origin}</div>
                    </div>
                  </div>

                  {/* Therapist Info */}
                  <div className="bg-white/5 p-4">
                    <h4 className="text-white font-semibold mb-2">Your Therapist</h4>
                    <div className="text-gold-500 font-medium">{selectedTreatment.therapist}</div>
                    <div className="text-grey-light text-sm">Certified in {selectedTreatment.category}</div>
                  </div>

                  {/* Ritual Description */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Treatment Ritual</h4>
                    <p className="text-gold-500 italic text-sm">{selectedTreatment.ritual}</p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Treatment Benefits</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedTreatment.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2 text-grey-light">
                          <Heart className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{benefit}</span>
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
                        {selectedTreatment.price.toLocaleString()}
                      </div>
                      <div className="text-white/80 text-sm">{selectedTreatment.duration}</div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Duration:</span>
                        <span className="text-white">{selectedTreatment.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Therapist:</span>
                        <span className="text-white">{selectedTreatment.therapist.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-grey-light">Best For:</span>
                        <span className="text-white">{selectedTreatment.bestFor[0]}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full">
                        Book Treatment
                      </Button>
                      <Button variant="outline-gold" className="w-full">
                        Spa Consultation
                      </Button>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Treatment Includes</h4>
                    <div className="space-y-2">
                      {selectedTreatment.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-grey-light">
                          <Sparkles className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Recommended For</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTreatment.bestFor.map((condition) => (
                        <div key={condition} className="bg-gold-500/20 text-gold-500 px-3 py-1 text-xs">
                          {condition}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-black-primary/50 p-4">
                    <h4 className="text-white font-semibold mb-2">Spa Concierge</h4>
                    <p className="text-grey-light text-sm mb-3">
                      Available 24/7 for bookings and wellness consultations.
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

export default SpaSection;