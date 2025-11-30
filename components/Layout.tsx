import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Flower2 } from 'lucide-react';
import { HOTEL_NAME } from '../constants';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Location', path: '/location' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admin', path: '/admin' }, // Visible for demo purposes
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-cream-50 bg-pattern-lotus">
      {/* Top Bar - Spiritual Maroon */}
      <div className="bg-maroon-900 text-maroon-50 text-xs py-2 px-4 border-b border-maroon-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 opacity-90 hover:opacity-100"><Phone size={14} /> +91 98765 43210</span>
            <span className="hidden sm:flex items-center gap-1 opacity-90 hover:opacity-100"><MapPin size={14} /> Godowlia, Varanasi</span>
          </div>
          <Link to="/rooms" className="hover:text-gold-400 transition-colors font-medium tracking-wide">
            JAI SHREE KASHI VISHWANATH
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                <div className="w-10 h-10 bg-maroon-50 rounded-full flex items-center justify-center text-maroon-800 group-hover:bg-maroon-100 transition-colors">
                  <Flower2 size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                    <span className="font-serif text-2xl font-bold text-maroon-900 leading-none">{HOTEL_NAME}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-bold mt-1">Divinity & Comfort</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'text-maroon-800 bg-maroon-50' 
                      : 'text-stone-600 hover:text-maroon-700 hover:bg-cream-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/rooms"
                className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-saffron-600 to-maroon-700 text-white font-medium hover:from-saffron-700 hover:to-maroon-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book Your Stay
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-maroon-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'text-maroon-800 bg-maroon-50'
                      : 'text-stone-600 hover:text-maroon-800 hover:bg-cream-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/rooms"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 rounded-lg bg-maroon-800 text-white font-medium"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-850 text-stone-300 pt-16 pb-8 border-t-4 border-maroon-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
                 <Flower2 size={24} className="text-maroon-500" />
                 <h3 className="text-white font-serif text-xl font-bold">{HOTEL_NAME}</h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-stone-400">
              Experience the spiritual heart of India. 
              Located steps away from the holy Ghats and Vishwanath Temple, we offer a sanctuary of peace in the oldest living city on Earth.
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4 border-b border-stone-700 inline-block pb-2">Timings</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Check-in:</span> <span className="text-gold-500">12:00 PM</span></li>
              <li className="flex justify-between"><span>Check-out:</span> <span className="text-gold-500">11:00 AM</span></li>
              <li className="flex justify-between"><span>Main Gate:</span> <span className="text-gold-500">6:00 AM - 11:00 PM</span></li>
              <li className="flex justify-between"><span>Kitchen:</span> <span className="text-gold-500">7:00 AM - 10:30 PM</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4 border-b border-stone-700 inline-block pb-2">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-maroon-500" size={16} />
                <span>D 36/260, August Kunda, Godowlia, Varanasi - 221001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-maroon-500" size={16} />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-xs text-center text-stone-500">
          © {new Date().getFullYear()} {HOTEL_NAME}. Om Namah Shivaya.
        </div>
      </footer>
    </div>
  );
};

export default Layout;