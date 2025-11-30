import React from 'react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';
import RoomCard from '../components/RoomCard';
import { ArrowRight, Star, MapPin, Coffee, Wifi, ShieldCheck, Flame, Flower2, Sunrise } from 'lucide-react';

const Home = () => {
  const featuredRooms = ROOMS.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Iconic Varanasi Boats Image */}
          <img 
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop" 
            alt="Varanasi Ghats at Sunrise" 
            className="w-full h-full object-cover animate-fade-in-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/30 via-black/20 to-stone-900/80"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 text-gold-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-white/20">
            <Flame size={14} className="text-gold-400" />
            The Eternal City
            <Flame size={14} className="text-gold-400" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-none drop-shadow-2xl">
            Awaken Your Soul <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-saffron-400">In Kashi</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Find sanctuary at <span className="font-semibold text-gold-200">Hotel Kashi Mantram</span>. <br className="hidden md:block" />
            A divine retreat steps away from the holy Ghats and Vishwanath Temple.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/rooms" 
              className="px-10 py-4 bg-saffron-600 hover:bg-saffron-700 text-white rounded-full font-serif font-bold text-lg transition-all shadow-lg hover:shadow-saffron-500/50 border-2 border-transparent"
            >
              Book Your Sanctuary
            </Link>
            <Link 
              to="/location" 
              className="px-10 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 rounded-full font-serif font-bold text-lg transition-all backdrop-blur-sm"
            >
              Explore the Ghats
            </Link>
          </div>
        </div>
      </section>

      {/* Spiritual Introduction Section */}
      <section className="py-24 px-4 bg-cream-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-100 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
             <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold-400/30 rounded-2xl z-0"></div>
             {/* Iconic Varanasi Image - Ghats Architecture */}
             <img 
                src="https://images.unsplash.com/photo-1588936611358-1f4f5a8904e5?q=80&w=800&auto=format&fit=crop" 
                alt="Ancient Ghats of Varanasi" 
                className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover"
             />
             <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border-t-4 border-maroon-600 hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="text-maroon-600" size={24} />
                    <span className="font-serif font-bold text-maroon-900">The Eternal City</span>
                </div>
                <p className="text-sm text-stone-600 italic">"Kashi is where the material meets the spiritual."</p>
             </div>
          </div>
          
          <div>
            <span className="text-saffron-600 font-bold tracking-wider text-sm uppercase mb-2 block">Discover Kashi</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-6 leading-tight">
              The Oldest Living City on <span className="text-saffron-600">Earth</span>
            </h2>
            <p className="text-stone-700 mb-6 leading-relaxed text-lg">
              Varanasi, or Kashi, is not merely a destination; it is an awakening. As the eternal abode of Lord Shiva, it has stood as a beacon of spirituality for over three millennia. From the sacred chiming of temple bells to the mesmerizing evening Ganga Aarti, the city pulses with a divine energy found nowhere else.
            </p>
            <p className="text-stone-700 mb-10 leading-relaxed text-lg">
              Hotel Kashi Mantram is nestled in the heart of this ancient tapestry. We offer you a serene sanctuary just moments from the divine chaos of Godowlia Chowk and the purifying waters of the Ganges, allowing you to immerse yourself in history while resting in modern comfort.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white shadow-md rounded-full text-maroon-600 border border-maroon-100"><MapPin size={24}/></div>
                    <div>
                        <h4 className="font-bold text-maroon-900 font-serif text-lg">Prime Location</h4>
                        <p className="text-sm text-stone-600">Walk to Vishwanath Temple</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white shadow-md rounded-full text-maroon-600 border border-maroon-100"><Sunrise size={24}/></div>
                    <div>
                        <h4 className="font-bold text-maroon-900 font-serif text-lg">Ghat Proximity</h4>
                        <p className="text-sm text-stone-600">Minutes from the Ganges</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white shadow-md rounded-full text-maroon-600 border border-maroon-100"><Coffee size={24}/></div>
                    <div>
                        <h4 className="font-bold text-maroon-900 font-serif text-lg">Sattvic Kitchen</h4>
                        <p className="text-sm text-stone-600">Pure Veg & Hygienic</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white shadow-md rounded-full text-maroon-600 border border-maroon-100"><ShieldCheck size={24}/></div>
                    <div>
                        <h4 className="font-bold text-maroon-900 font-serif text-lg">Secure Stay</h4>
                        <p className="text-sm text-stone-600">24/7 Gate & Safety</p>
                    </div>
                </div>
            </div>

            <Link to="/rooms" className="inline-flex items-center gap-2 text-maroon-700 font-bold hover:gap-4 transition-all border-b-2 border-maroon-200 hover:border-maroon-600 pb-1">
              Explore Our Rooms <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms with Spiritual Context */}
      <section className="py-24 px-4 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-3 block">Rest & Reflect</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">Your Private Sanctuary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-saffron-400 to-maroon-600 mx-auto rounded-full mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                Choose from our 5 distinct categories, each designed to provide a peaceful haven for solo pilgrims, couples, and large families alike.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/rooms" className="inline-block px-10 py-3 rounded-full border border-stone-300 text-stone-600 hover:border-maroon-600 hover:text-maroon-800 font-serif font-medium transition-all">
              View All Accommodations
            </Link>
          </div>
        </div>
      </section>
      
      {/* Visual Divider / Mantra Section */}
      <section className="py-20 bg-maroon-900 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
              <Flower2 size={48} className="mx-auto text-gold-500 mb-6 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-serif text-gold-100 italic leading-relaxed">
                  "Kashi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together."
              </h2>
              <p className="text-maroon-200 mt-6 font-serif">— Mark Twain</p>
          </div>
      </section>
    </div>
  );
};

export default Home;