import React from 'react';
import { ROOMS } from '../constants';
import RoomCard from '../components/RoomCard';

const RoomList = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Rooms</h1>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg">
                Comfortable, clean, and culturally inspired. Find the perfect space for your stay in Varanasi.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map(room => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RoomList;
