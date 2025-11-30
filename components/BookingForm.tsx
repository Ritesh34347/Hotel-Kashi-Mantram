import React, { useState } from 'react';
import { Room } from '../types';

interface BookingFormProps {
  room: Room;
}

const BookingForm: React.FC<BookingFormProps> = ({ room }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
        // Simple validation logic
        const start = new Date(formData.checkIn);
        const end = new Date(formData.checkOut);
        
        if (start >= end) {
            alert("Check-out date must be after check-in date.");
            setStatus('idle');
            return;
        }

        if (formData.guests > (room.capacity.adults + room.capacity.children)) {
             alert(`Maximum capacity for this room is ${room.capacity.adults + room.capacity.children} guests.`);
             setStatus('idle');
             return;
        }

        console.log("Booking Payload:", { ...formData, roomId: room.id });
        setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-green-800 text-xl font-bold mb-2">Request Sent!</h3>
        <p className="text-green-600 mb-4">Thank you, {formData.name}. We have received your booking request for the {room.title}. Our team will contact you shortly to confirm availability.</p>
        <button onClick={() => setStatus('idle')} className="text-sm underline text-green-700">Book another room</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-6 sticky top-24">
      <div className="mb-6 pb-6 border-b border-stone-100">
        <h3 className="font-serif text-xl font-bold text-stone-800">Book your stay</h3>
        <p className="text-sm text-stone-500 mt-1">Best rates guaranteed direct booking.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Full Name</label>
          <input 
            required type="text" name="name" 
            value={formData.name} onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Check In</label>
            <input 
              required type="date" name="checkIn" 
              value={formData.checkIn} onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-saffron-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Check Out</label>
            <input 
              required type="date" name="checkOut" 
              value={formData.checkOut} onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-saffron-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                 <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Guests</label>
                 <input 
                    required type="number" min="1" max={room.capacity.adults + room.capacity.children} name="guests"
                    value={formData.guests} onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-saffron-500 outline-none"
                 />
            </div>
            <div>
                 <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Phone</label>
                 <input 
                    required type="tel" name="phone"
                    value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-saffron-500 outline-none"
                    placeholder="+91..."
                 />
            </div>
        </div>
        
        <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase mb-1">Email Address</label>
            <input 
            required type="email" name="email"
            value={formData.email} onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-saffron-500 outline-none"
            placeholder="john@example.com"
            />
        </div>

        <div className="pt-4">
            <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-stone-600">Total (Excl. Tax)</span>
                <span className="font-bold text-lg">₹{room.price} <span className="text-xs font-normal text-stone-400">/ night</span></span>
            </div>
            <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-3 px-6 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-lg shadow-lg shadow-saffron-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Processing...' : 'Confirm Request'}
            </button>
            <p className="text-xs text-center text-stone-400 mt-3">No payment required today.</p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
