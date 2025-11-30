export enum RoomCategory {
  STANDARD = "Standard / Executive Rooms",
  PREMIUM = "Premium Rooms",
  SUPER_PREMIUM = "Super Premium Rooms",
  FAMILY_SUITE = "Family Suite",
  FAMILY_STUDIO = "Family Studio (Terrace View)"
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface RoomImage {
  url: string;
  alt: string;
  caption: string;
  category: RoomCategory;
}

export interface Room {
  id: string;
  slug: string;
  title: string;
  category: RoomCategory;
  shortDescription: string;
  fullDescription: string;
  price: number;
  capacity: {
    adults: number;
    children: number;
  };
  bedConfiguration: string;
  amenities: string[];
  thumbnail: string;
  features: string[];
}

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomSlug: string;
}

export interface ImageAnalysisResult {
  category: RoomCategory;
  confidence: number;
  altText: string;
  caption: string;
}
