import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ROOMS, COMMON_AMENITIES } from '../constants';
import BookingForm from '../components/BookingForm';
import { CheckCircle2, ChevronLeft } from 'lucide-react';

const RoomDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const room = ROOMS.find(r => r.slug === slug);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  // Combine room specific amenities with some commons for display
  const allAmenities = Array.from(new Set([...room.amenities, ...COMMON_AMENITIES.map(a => a.label)])).slice(0, 8);

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* Header Image */}
      <div className="relative h-[60vh] bg-stone-900">
         <img src={room.thumbnail} alt={room.title} className="w-full h-full object-cover opacity-80" />
         <div className="absolute top-0 left-0 p-6">
            <Link to="/rooms" className="inline-flex items-center text-white bg-black/30 hover:bg-black/50 backdrop-blur px-4 py-2 rounded-full transition-all">
                <ChevronLeft size={20} className="mr-1" /> Back to Rooms
            </Link>
         </div>
         <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-stone-900/90 to-transparent">
            <div className="max-w-7xl mx-auto">
                <span className="text-saffron-400 font-bold tracking-wider uppercase text-sm mb-2 block">{room.category}</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{room.title}</h1>
                <p className="text-xl text-stone-200">{room.shortDescription}</p>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
            
            <section>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">Room Overview</h2>
                <p className="text-stone-600 leading-relaxed text-lg mb-6">{room.fullDescription}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                        <span className="block text-xs text-stone-400 uppercase font-bold mb-1">Capacity</span>
                        <span className="font-semibold text-stone-800">{room.capacity.adults} Adults, {room.capacity.children} Child</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                        <span className="block text-xs text-stone-400 uppercase font-bold mb-1">Bed Type</span>
                        <span className="font-semibold text-stone-800">{room.bedConfiguration}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                        <span className="block text-xs text-stone-400 uppercase font-bold mb-1">Size</span>
                        <span className="font-semibold text-stone-800">Spacious</span>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-y-4 gap-x-8">
                    {allAmenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-saffron-500 flex-shrink-0" />
                            <span className="text-stone-700">{amenity}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mock Gallery Grid for the room */}
            <section>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <img src={`https://picsum.photos/seed/${room.id}1/400/300`} className="rounded-xl w-full h-40 object-cover hover:opacity-90 transition-opacity" alt="Gallery 1" />
                    <img src={`https://picsum.photos/seed/${room.id}2/400/300`} className="rounded-xl w-full h-40 object-cover hover:opacity-90 transition-opacity" alt="Gallery 2" />
                    <img src={`https://picsum.photos/seed/${room.id}3/400/300`} className="rounded-xl w-full h-40 object-cover hover:opacity-90 transition-opacity" alt="Gallery 3" />
                </div>
            </section>

        </div>

        {/* Right Column: Booking */}
        <div className="relative">
            <BookingForm room={room} />
        </div>

      </div>
    </div>
  );
};

export default RoomDetail;
