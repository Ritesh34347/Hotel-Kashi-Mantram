import { Room, RoomCategory } from './types';
import { Wifi, Tv, Coffee, Wind, Lock, Sun, MapPin } from 'lucide-react';

export const HOTEL_NAME = "Hotel Kashi Mantram";
export const HOTEL_LOCATION = "Varanasi, India";

export const CONTACT_INFO = {
  address: "D 36/260, August Kunda, Godowlia, Varanasi - 221001",
  phone: "+91 98765 43210",
  email: "bookings@kashimantram.com",
  timings: {
    kitchen: "7:00 AM - 10:30 PM",
    gate: "6:00 AM - 11:00 PM"
  }
};

export const COMMON_AMENITIES = [
  { icon: 'Wifi', label: "High-Speed Wi-Fi" },
  { icon: 'Wind', label: "Air Conditioning" },
  { icon: 'Tv', label: "Flat Screen TV" },
  { icon: 'Coffee', label: "Sattvic Room Service" },
  { icon: 'Sun', label: "Daily Housekeeping" },
  { icon: 'Lock', label: "24/7 Security" },
];

export const ROOMS: Room[] = [
  {
    id: "1",
    slug: "standard-executive",
    category: RoomCategory.STANDARD,
    title: "Standard / Executive Room",
    shortDescription: "A peaceful retreat for pilgrims, offering essential comforts near the holy Ghats.",
    fullDescription: "Our Standard Executive rooms are designed for the devoted traveler. Simple yet elegant, these rooms offer a sanctuary of calm after a day of darshan. Features a plush queen-sized bed, a quiet workstation for reflection, and a modern compact bathroom with 24-hour hot water for your morning rituals.",
    price: 2500,
    capacity: { adults: 2, children: 1 },
    bedConfiguration: "1 Queen Bed",
    amenities: ["AC", "Wi-Fi", "TV", "Kettle", "Hot Water", "Prayer Mat"],
    thumbnail: "https://images.unsplash.com/photo-1617637856417-66914f177395?q=80&w=800&auto=format&fit=crop", // Hotel interior warm
    features: ["Budget Friendly", "Compact & Peaceful"]
  },
  {
    id: "2",
    slug: "premium",
    category: RoomCategory.PREMIUM,
    title: "Premium Room",
    shortDescription: "Spacious interiors with warm saffron accents for a relaxing spiritual journey.",
    fullDescription: "Step up to our Premium Rooms, where heritage meets comfort. Featuring elegant interiors with soft saffron accents and traditional art, these rooms provide a sitting area for meditation or reading, larger wardrobe space, and premium bedding to ensure a restful sleep.",
    price: 3500,
    capacity: { adults: 2, children: 2 },
    bedConfiguration: "1 King Bed",
    amenities: ["AC", "Wi-Fi", "TV", "Mini Fridge", "Wardrobe", "Sitting Area"],
    thumbnail: "https://images.unsplash.com/photo-1590490360182-c87295ec426c?q=80&w=800&auto=format&fit=crop", // Premium room
    features: ["Extra Space", "Sitting Area"]
  },
  {
    id: "3",
    slug: "super-premium",
    category: RoomCategory.SUPER_PREMIUM,
    title: "Super Premium Room",
    shortDescription: "Our finest rooms for couples featuring luxury fittings and divine comfort.",
    fullDescription: "Experience the pinnacle of comfort in our Super Premium Rooms. Meticulously designed with heritage-inspired decor and warm golden lighting, offering superior soundproofing for silence, a luxury mattress, and a spacious modern bathroom with rain shower.",
    price: 4500,
    capacity: { adults: 2, children: 1 },
    bedConfiguration: "1 King Bed + Daybed",
    amenities: ["AC", "Wi-Fi", "Smart TV", "Mini Bar", "Luxury Toiletries", "Rain Shower"],
    thumbnail: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=800&auto=format&fit=crop", // Luxury room
    features: ["Luxury Fittings", "Rain Shower"]
  },
  {
    id: "4",
    slug: "family-suite",
    category: RoomCategory.FAMILY_SUITE,
    title: "Family Suite",
    shortDescription: "Two interconnected spaces designed for large families on a pilgrimage.",
    fullDescription: "Keep the family together in our spacious Family Suite. This unit features interconnected sleeping areas, ensuring privacy while maintaining the closeness of a shared spiritual journey. Equipped with multiple beds and ample storage.",
    price: 6000,
    capacity: { adults: 4, children: 2 },
    bedConfiguration: "2 Queen Beds",
    amenities: ["AC", "Wi-Fi", "2 TVs", "Large Wardrobe", "Dining Table", "2 Bathrooms"],
    thumbnail: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop", // Family room
    features: ["Interconnected", "2 Bathrooms"]
  },
  {
    id: "5",
    slug: "family-studio",
    category: RoomCategory.FAMILY_STUDIO,
    title: "Family Studio (Terrace View)",
    shortDescription: "Panoramic views of the sacred city skyline with a private terrace.",
    fullDescription: "Our crown jewel, the Family Studio offers a private terrace with breathtaking views of the Varanasi skyline and temple shikharas. Enjoy your morning tea watching the sunrise over the eternal city. The studio layout is open and airy, featuring a kitchenette and premium lounge area.",
    price: 7500,
    capacity: { adults: 5, children: 2 },
    bedConfiguration: "2 King Beds + Sofa Bed",
    amenities: ["AC", "Wi-Fi", "Private Terrace", "Kitchenette", "Lounge Area", "Panoramic View"],
    thumbnail: "https://images.unsplash.com/photo-1571597438372-540dd352bf41?q=80&w=800&auto=format&fit=crop", // Terrace/View/Diya
    features: ["Private Terrace", "Kitchenette"]
  }
];

export const MOCK_GALLERY_IMAGES = [
    { url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop", alt: "Ghats at Sunrise", caption: "The holy Ganges at sunrise", category: RoomCategory.STANDARD },
    { url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop", alt: "Ganga Aarti", caption: "Evening Aarti ceremony", category: RoomCategory.PREMIUM },
    { url: "https://images.unsplash.com/photo-1592639296346-6014b2c93848?q=80&w=800&auto=format&fit=crop", alt: "Temple View", caption: "View of the ancient temples", category: RoomCategory.FAMILY_STUDIO },
    { url: "https://images.unsplash.com/photo-1598556804153-294b008d3f18?q=80&w=800&auto=format&fit=crop", alt: "Hotel Interior", caption: "Peaceful interiors", category: RoomCategory.FAMILY_SUITE },
];