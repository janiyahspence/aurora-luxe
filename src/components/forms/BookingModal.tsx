import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Bed, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Phone,
  Mail,
  User,
  IndianRupee,
  ArrowRight,
  ArrowLeft,
  Star
} from 'lucide-react';
import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
  preselectedExperience?: string;
}

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  children: number;
  rooms: number;
  roomType: string;
  specialRequests: string;
  // Guest Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  // Payment Information
  paymentMethod: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedRoom,
  preselectedExperience 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [availableRooms, setAvailableRooms] = useState<any[]>([]);
  
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    children: 0,
    rooms: 1,
    roomType: preselectedRoom || '',
    specialRequests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'India',
    paymentMethod: 'card'
  });

  const roomTypes = [
    { id: 'deluxe-ocean', name: 'Deluxe Ocean Suite', price: 25000, available: 8 },
    { id: 'royal-villa', name: 'Royal Beach Villa', price: 45000, available: 3 },
    { id: 'garden-suite', name: 'Garden Paradise Suite', price: 18000, available: 12 },
    { id: 'presidential', name: 'Presidential Penthouse', price: 75000, available: 1 }
  ];

  const countries = ['India', 'United States', 'United Kingdom', 'Australia', 'Canada', 'Germany', 'France', 'Japan'];

  const handleInputChange = (field: keyof BookingData, value: string | number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const checkAvailability = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAvailableRooms(roomTypes.filter(room => room.available > 0));
    setAvailabilityChecked(true);
    setIsLoading(false);
  };

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === bookingData.roomType);
    if (!selectedRoom) return 0;
    const nights = calculateNights();
    const roomTotal = selectedRoom.price * nights * bookingData.rooms;
    const taxes = roomTotal * 0.18; // 18% GST
    return roomTotal + taxes;
  };

  const nextStep = () => {
    if (currentStep === 1 && !availabilityChecked) {
      checkAvailability();
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
    setCurrentStep(5); // Success step
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black-primary/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-black-secondary border border-gold-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black-secondary border-b border-gold-500/20 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Reserve Your <span className="text-gold-500">Luxury Stay</span>
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step 
                      ? 'bg-gold-500 text-black-primary' 
                      : 'bg-white/10 text-white/60'
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-8 h-0.5 ${
                      currentStep > step ? 'bg-gold-500' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gold-500 transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Dates & Guests */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Select Your Dates & Guests
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Check-in Date */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Adults
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num} className="bg-black-secondary">
                          {num} Adult{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Children */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Children (0-12 years)
                    </label>
                    <select
                      value={bookingData.children}
                      onChange={(e) => handleInputChange('children', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    >
                      {[0, 1, 2, 3, 4].map(num => (
                        <option key={num} value={num} className="bg-black-secondary">
                          {num} {num === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rooms */}
                  <div className="md:col-span-2">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <Bed className="w-4 h-4 inline mr-2" />
                      Number of Rooms
                    </label>
                    <select
                      value={bookingData.rooms}
                      onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num} className="bg-black-secondary">
                          {num} Room{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Stay Summary */}
                {bookingData.checkIn && bookingData.checkOut && (
                  <div className="bg-gold-500/10 border border-gold-500/30 p-4 mt-6">
                    <div className="flex justify-between items-center text-white">
                      <span>Stay Duration:</span>
                      <span className="font-semibold">{calculateNights()} nights</span>
                    </div>
                    <div className="flex justify-between items-center text-white mt-2">
                      <span>Total Guests:</span>
                      <span className="font-semibold">{bookingData.guests + bookingData.children} guests</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Room Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Choose Your Suite
                </h3>

                {isLoading ? (
                  <div className="text-center py-12">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <p className="text-white">Checking availability...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {availableRooms.map((room) => (
                      <div
                        key={room.id}
                        className={`luxury-card cursor-pointer transition-all duration-300 ${
                          bookingData.roomType === room.id 
                            ? 'border-gold-500 bg-gold-500/10' 
                            : 'hover:border-gold-500/50'
                        }`}
                        onClick={() => handleInputChange('roomType', room.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                bookingData.roomType === room.id 
                                  ? 'border-gold-500 bg-gold-500' 
                                  : 'border-white/30'
                              }`}>
                                {bookingData.roomType === room.id && (
                                  <CheckCircle className="w-3 h-3 text-black-primary" />
                                )}
                              </div>
                              <h4 className="font-display text-lg font-semibold text-white">
                                {room.name}
                              </h4>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-grey-light mb-2">
                              <span className="flex items-center space-x-1">
                                <Bed className="w-4 h-4" />
                                <span>Luxury Suite</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>Up to 4 guests</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>{room.available} available</span>
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-gold-500 text-xl font-bold flex items-center">
                              <IndianRupee className="w-4 h-4" />
                              {room.price.toLocaleString()}
                            </div>
                            <div className="text-white/60 text-sm">per night</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Special Requests */}
                <div className="mt-6">
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Anniversary celebration, dietary requirements, accessibility needs, etc."
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-grey-medium focus:border-gold-500 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Guest Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Guest Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91-98765-43210"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-grey-medium focus:border-gold-500 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Country */}
                  <div className="md:col-span-2">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Country *
                    </label>
                    <select
                      value={bookingData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-gold-500 focus:outline-none transition-colors duration-300"
                    >
                      {countries.map(country => (
                        <option key={country} value={country} className="bg-black-secondary">
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment & Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Payment & Confirmation
                </h3>

                {/* Booking Summary */}
                <div className="bg-black-primary/50 p-6 mb-6">
                  <h4 className="font-semibold text-white mb-4">Booking Summary</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-grey-light">Guest:</span>
                      <span className="text-white">{bookingData.firstName} {bookingData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey-light">Dates:</span>
                      <span className="text-white">{bookingData.checkIn} to {bookingData.checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey-light">Duration:</span>
                      <span className="text-white">{calculateNights()} nights</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey-light">Guests:</span>
                      <span className="text-white">{bookingData.guests} adults, {bookingData.children} children</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey-light">Room:</span>
                      <span className="text-white">
                        {roomTypes.find(r => r.id === bookingData.roomType)?.name}
                      </span>
                    </div>
                    <div className="border-t border-white/20 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-grey-light">Room Total:</span>
                        <span className="text-white">
                          ₹{(roomTypes.find(r => r.id === bookingData.roomType)?.price || 0) * calculateNights() * bookingData.rooms}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-grey-light">Taxes & Fees (18% GST):</span>
                        <span className="text-white">
                          ₹{Math.round(((roomTypes.find(r => r.id === bookingData.roomType)?.price || 0) * calculateNights() * bookingData.rooms) * 0.18)}
                        </span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg pt-2 border-t border-white/20 mt-2">
                        <span className="text-gold-500">Total Amount:</span>
                        <span className="text-gold-500">₹{calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-4">
                    <CreditCard className="w-4 h-4 inline mr-2" />
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: 'card', name: 'Credit/Debit Card', desc: 'Visa, Mastercard, Amex accepted' },
                      { id: 'upi', name: 'UPI Payment', desc: 'Pay using UPI apps like GPay, PhonePe' },
                      { id: 'netbanking', name: 'Net Banking', desc: 'All major Indian banks supported' },
                      { id: 'wallet', name: 'Digital Wallet', desc: 'Paytm, Amazon Pay, etc.' }
                    ].map((method) => (
                      <div
                        key={method.id}
                        className={`luxury-card cursor-pointer transition-all duration-300 ${
                          bookingData.paymentMethod === method.id 
                            ? 'border-gold-500 bg-gold-500/10' 
                            : 'hover:border-gold-500/50'
                        }`}
                        onClick={() => handleInputChange('paymentMethod', method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            bookingData.paymentMethod === method.id 
                              ? 'border-gold-500 bg-gold-500' 
                              : 'border-white/30'
                          }`}>
                            {bookingData.paymentMethod === method.id && (
                              <CheckCircle className="w-3 h-3 text-black-primary" />
                            )}
                          </div>
                          <div>
                            <div className="text-white font-medium">{method.name}</div>
                            <div className="text-grey-light text-sm">{method.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-gold-500/10 border border-gold-500/30 p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-white">
                      <p className="font-semibold mb-2">Booking Terms:</p>
                      <ul className="space-y-1 text-grey-light">
                        <li>• Free cancellation up to 48 hours before check-in</li>
                        <li>• 50% advance payment required to confirm booking</li>
                        <li>• Check-in: 3:00 PM | Check-out: 12:00 PM</li>
                        <li>• Valid ID proof required at check-in</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Success */}
          {currentStep === 5 && (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                Booking Confirmed!
              </h3>
              <p className="text-grey-light mb-6 max-w-md mx-auto">
                Thank you for choosing Aurora Luxe. Your reservation has been confirmed and 
                a confirmation email has been sent to {bookingData.email}.
              </p>
              <div className="bg-gold-500/10 border border-gold-500/30 p-6 max-w-md mx-auto mb-6">
                <div className="text-gold-500 font-semibold mb-2">Booking Reference</div>
                <div className="text-white text-xl font-mono">AL-{Date.now().toString().slice(-6)}</div>
              </div>
              <div className="space-y-3">
                <Button variant="gold" className="w-full max-w-xs">
                  Download Confirmation
                </Button>
                <Button variant="outline-gold" className="w-full max-w-xs" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {currentStep < 5 && (
          <div className="sticky bottom-0 bg-black-secondary border-t border-gold-500/20 p-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {currentStep > 1 && (
                <Button variant="ghost" icon={ArrowLeft} onClick={prevStep}>
                  Previous
                </Button>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              {calculateTotal() > 0 && currentStep > 1 && (
                <div className="text-right">
                  <div className="text-grey-light text-sm">Total Amount</div>
                  <div className="text-gold-500 text-xl font-bold">
                    ₹{calculateTotal().toLocaleString()}
                  </div>
                </div>
              )}
              
              <Button 
                variant="gold" 
                icon={currentStep === 4 ? undefined : ArrowRight}
                iconPosition="right"
                onClick={currentStep === 4 ? handleSubmit : nextStep}
                disabled={
                  (currentStep === 1 && (!bookingData.checkIn || !bookingData.checkOut)) ||
                  (currentStep === 2 && !bookingData.roomType) ||
                  (currentStep === 3 && (!bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.phone))
                }
                loading={isLoading}
              >
                {currentStep === 1 && !availabilityChecked ? 'Check Availability' :
                 currentStep === 4 ? 'Confirm Booking' : 'Continue'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;