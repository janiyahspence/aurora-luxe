import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Headphones,
  Car,
  Plane,
  Shield,
  Award,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
  Globe,
  Navigation,
  Heart,
  Star
} from 'lucide-react';
import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const inquiryTypes = [
    { id: 'general', name: 'General Inquiry', icon: MessageCircle },
    { id: 'reservation', name: 'Reservations', icon: Calendar },
    { id: 'spa', name: 'Spa & Wellness', icon: Heart },
    { id: 'dining', name: 'Dining Reservations', icon: Users },
    { id: 'events', name: 'Events & Meetings', icon: Award },
    { id: 'concierge', name: 'Concierge Services', icon: Headphones }
  ];

  const conciergeServices = [
    {
      id: 'transportation',
      name: 'Transportation Services',
      icon: Car,
      description: 'Airport transfers, local transportation, luxury car rentals',
      available: '24/7',
      contact: '+91-98765-43210'
    },
    {
      id: 'experiences',
      name: 'Experience Planning',
      icon: Navigation,
      description: 'Local tours, cultural experiences, adventure activities',
      available: '6:00 AM - 10:00 PM',
      contact: '+91-98765-43211'
    },
    {
      id: 'dining',
      name: 'Dining Reservations',
      icon: Users,
      description: 'Restaurant bookings, private dining, special occasions',
      available: '24/7',
      contact: '+91-98765-43212'
    },
    {
      id: 'spa',
      name: 'Spa & Wellness',
      icon: Heart,
      description: 'Treatment bookings, wellness consultations, programs',
      available: '7:00 AM - 9:00 PM',
      contact: '+91-98765-43213'
    },
    {
      id: 'events',
      name: 'Events & Celebrations',
      icon: Award,
      description: 'Wedding planning, corporate events, special celebrations',
      available: '9:00 AM - 6:00 PM',
      contact: '+91-98765-43214'
    },
    {
      id: 'emergency',
      name: 'Emergency Support',
      icon: Shield,
      description: 'Medical assistance, security, urgent support',
      available: '24/7',
      contact: '+91-98765-43200'
    }
  ];

  const contactInfo = [
    {
      type: 'address',
      icon: MapPin,
      title: 'Resort Address',
      details: [
        'Aurora Luxe Resort & Spa',
        'Candolim Beach Road',
        'North Goa, Goa 403515',
        'India'
      ]
    },
    {
      type: 'phone',
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Reservations: +91-98765-43210',
        'Concierge: +91-98765-43211',
        'Spa: +91-98765-43213',
        'Emergency: +91-98765-43200'
      ]
    },
    {
      type: 'email',
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'reservations@auroraluxe.com',
        'concierge@auroraluxe.com',
        'spa@auroraluxe.com',
        'events@auroraluxe.com'
      ]
    },
    {
      type: 'hours',
      icon: Clock,
      title: 'Operating Hours',
      details: [
        'Front Desk: 24/7',
        'Concierge: 24/7',
        'Spa: 7:00 AM - 9:00 PM',
        'Restaurants: 6:00 AM - 12:00 AM'
      ]
    }
  ];

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const openServiceModal = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-black-secondary">
        <div className="container-luxury">
          <div className="text-center py-16">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-grey-light mb-6 max-w-md mx-auto">
              Thank you for contacting Aurora Luxe. Our team will respond to your inquiry within 24 hours.
            </p>
            <Button 
              variant="gold" 
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-black-secondary relative overflow-hidden">
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
            <Headphones className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Contact & Support</span>
          </div>
          
          <h2 className="heading-section text-white mb-6">
            Get in <span className="text-gold-500">Touch</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-luxury max-w-3xl mx-auto">
            Our dedicated team is here to assist you 24/7. Whether you need help with reservations, 
            planning experiences, or have special requests, we're committed to making your stay extraordinary.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Type of Inquiry
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleInputChange('inquiryType', type.id)}
                        className={`flex items-center space-x-2 p-3 border transition-all duration-300 text-sm ${
                          formData.inquiryType === type.id
                            ? 'bg-gold-500/10 border-gold-500 text-gold-500'
                            : 'bg-white/5 border-white/20 text-white hover:border-gold-500/50'
                        }`}
                      >
                        <type.icon className="w-4 h-4" />
                        <span>{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91-98765-43210"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-grey-medium focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gold"
                  icon={Send}
                  loading={isSubmitting}
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="bg-black-primary/50 p-6">
              <h4 className="font-display text-lg font-semibold text-white mb-4">
                Need Immediate Assistance?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <div>
                    <div className="text-white font-medium">24/7 Concierge</div>
                    <div className="text-gold-500">+91-98765-43211</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-gold-500" />
                  <div>
                    <div className="text-white font-medium">Live Chat</div>
                    <div className="text-grey-light text-sm">Available on our website</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-gold-500" />
                  <div>
                    <div className="text-white font-medium">Emergency</div>
                    <div className="text-red-400">+91-98765-43200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="luxury-card">
                    <div className="flex items-start space-x-4">
                      <info.icon className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="text-grey-light text-sm">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="luxury-card">
              <h4 className="text-white font-semibold mb-4">Our Location</h4>
              <div className="relative h-64 bg-black-primary/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-3" />
                  <div className="text-white font-medium mb-2">Aurora Luxe Resort</div>
                  <div className="text-grey-light text-sm">Candolim Beach, North Goa</div>
                  <Button variant="outline-gold" size="sm" className="mt-4">
                    View on Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Concierge Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-semibold text-white mb-4">
              Concierge <span className="text-gold-500">Services</span>
            </h3>
            <p className="text-luxury max-w-2xl mx-auto">
              Our dedicated concierge team is available to assist with all aspects of your stay, 
              from transportation and dining to experiences and special requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conciergeServices.map((service) => (
              <div
                key={service.id}
                className="luxury-card group cursor-pointer"
                onClick={() => openServiceModal(service.id)}
              >
                <div className="text-center">
                  <service.icon className="w-12 h-12 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300">
                    {service.name}
                  </h4>
                  <p className="text-grey-light text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-gold-500" />
                      <span className="text-white">{service.available}</span>
                    </div>
                    <div className="text-gold-500 font-semibold">{service.contact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Information */}
        <div className="bg-red-500/10 border border-red-500/30 p-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <h4 className="font-display text-xl font-semibold text-white">Emergency Information</h4>
          </div>
          <p className="text-grey-light mb-4">
            For medical emergencies, security concerns, or urgent assistance, contact our 24/7 emergency line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-red-400 text-xl font-bold">Emergency: +91-98765-43200</div>
            <div className="text-grey-light">|</div>
            <div className="text-white">Local Emergency Services: 108</div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm" onClick={closeServiceModal}></div>
          
          <div className="relative bg-black-secondary border border-gold-500/30 max-w-md w-full p-8">
            <button
              onClick={closeServiceModal}
              className="absolute top-4 right-4 text-white hover:text-gold-500 transition-colors duration-300"
            >
              ×
            </button>
            
            {(() => {
              const service = conciergeServices.find(s => s.id === selectedService);
              if (!service) return null;
              
              return (
                <div className="text-center">
                  <service.icon className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-grey-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-gold-500" />
                      <span className="text-white">{service.available}</span>
                    </div>
                    <div className="text-gold-500 text-lg font-semibold">{service.contact}</div>
                  </div>
                  <Button variant="gold" className="w-full">
                    Call Now
                  </Button>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;