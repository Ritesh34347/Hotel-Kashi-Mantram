import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Check } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.thumbnail} 
          alt={room.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-saffron-700 uppercase tracking-wide">
          {room.category.split(' ')[0]}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-saffron-700 transition-colors">
            {room.title}
          </h3>
        </div>
        
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">
          {room.shortDescription}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-xs font-medium text-stone-600">
          <div className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded">
            <Users size={14} />
            <span>Up to {room.capacity.adults} Adults, {room.capacity.children} Child</span>
          </div>
        </div>

        <div className="space-y-1 mb-6 flex-grow">
          {room.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-stone-600">
              <Check size={14} className="text-saffron-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <div>
            <span className="text-xs text-stone-400 uppercase">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-stone-800">₹{room.price}</span>
              <span className="text-sm text-stone-500">/ night</span>
            </div>
          </div>
          <Link 
            to={`/rooms/${room.slug}`}
            className="px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-saffron-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
