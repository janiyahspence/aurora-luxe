import React, { useState } from 'react';
import { Calendar, Users, Search, MapPin } from 'lucide-react';
import Button from '../common/Button';

interface QuickBookingWidgetProps {
  onOpenFullBooking: () => void;
  className?: string;
}

const QuickBookingWidget: React.FC<QuickBookingWidgetProps> = ({ 
  onOpenFullBooking, 
  className = '' 
}) => {
  const [quickBooking, setQuickBooking] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleQuickSearch = () => {
    onOpenFullBooking();
  };

  return (
    <div className={`bg-black-secondary/95 backdrop-blur-md border border-gold-500/30 p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="w-5 h-5 text-gold-500" />
        <h3 className="font-display text-lg font-semibold text-white">
          Quick Booking
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Check-in */}
        <div>
          <label className="block text-white/80 text-xs font-medium mb-1">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gold-500" />
            <input
              type="date"
              value={quickBooking.checkIn}
              onChange={(e) => setQuickBooking(prev => ({ ...prev, checkIn: e.target.value }))}
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 text-white text-sm focus:border-gold-500 focus:outline-none transition-colors duration-300"
            />
          </div>
        </div>

        {/* Check-out */}
        <div>
          <label className="block text-white/80 text-xs font-medium mb-1">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gold-500" />
            <input
              type="date"
              value={quickBooking.checkOut}
              onChange={(e) => setQuickBooking(prev => ({ ...prev, checkOut: e.target.value }))}
              min={quickBooking.checkIn || new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 text-white text-sm focus:border-gold-500 focus:outline-none transition-colors duration-300"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-white/80 text-xs font-medium mb-1">Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gold-500" />
            <select
              value={quickBooking.guests}
              onChange={(e) => setQuickBooking(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
              className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 text-white text-sm focus:border-gold-500 focus:outline-none transition-colors duration-300 appearance-none"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num} className="bg-black-secondary">
                  {num} Guest{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Button 
        variant="gold" 
        icon={Search}
        onClick={handleQuickSearch}
        className="w-full"
        size="sm"
      >
        Check Availability
      </Button>
    </div>
  );
};

export default QuickBookingWidget;