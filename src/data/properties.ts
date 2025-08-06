export interface Property {
  id: number;
  title: string;
  price: number;
  price_per_square_meter: number;
  sqm: number;
  rooms: number;
  parking: boolean;
  agency: string;
  province: string;
  sub_area_1: string;
  sub_area_2: string;
  sub_area_3: string;
  location: string;
  second_location: string;
  coordinates: { X: number; Y: number };
  date: string;
  last_update: string;
  idealista_id: string;
  url: string;
  description: string;
  full_description: string;
  features: string[];
  additional_fields: { [key: string]: any };
  images: string[];
  topic_name: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Spacious 3BR Apartment in City Center",
    price: 350000,
    price_per_square_meter: 5000,
    sqm: 70,
    rooms: 3,
    parking: true,
    agency: "ABC Realty",
    province: "ProvinceName",
    sub_area_1: "CityName",
    sub_area_2: "Neighborhood",
    sub_area_3: "District",
    location: "CityName, Neighborhood",
    second_location: "Central Park",
    coordinates: { X: 40.4168, Y: -3.7038 },
    date: "2025-07-01",
    last_update: "2025-07-20",
    idealista_id: "XYZ123",
    url: "https://original-listing-url",
    description: "Bright apartment with balcony, near central park.",
    full_description: "This is a full detailed description of the property, including ...",
    features: ["Balcony", "Air conditioning", "Pool"],
    additional_fields: { bathrooms: 2, floor: 5 },
    images: [
      "https://via.placeholder.com/400x300?text=Main+Image",
      "https://via.placeholder.com/400x300?text=Kitchen",
      "https://via.placeholder.com/400x300?text=Bedroom"
    ],
    topic_name: "For Sale"
  },
  {
    id: 2,
    title: "Modern Loft with City Views",
    price: 450000,
    price_per_square_meter: 6000,
    sqm: 75,
    rooms: 2,
    parking: false,
    agency: "XYZ Estates",
    province: "ProvinceName",
    sub_area_1: "CityName",
    sub_area_2: "Downtown",
    sub_area_3: "Block A",
    location: "CityName, Downtown",
    second_location: "Riverwalk",
    coordinates: { X: 40.4170, Y: -3.7040 },
    date: "2025-07-10",
    last_update: "2025-07-21",
    idealista_id: "XYZ124",
    url: "https://original-listing-url-2",
    description: "Loft apartment with modern amenities and great views.",
    full_description: "A modern loft with open plan living, city views, and ...",
    features: ["City view", "Elevator"],
    additional_fields: { bathrooms: 1, floor: 10 },
    images: [
      "https://via.placeholder.com/400x300?text=Loft+Main",
      "https://via.placeholder.com/400x300?text=Living+Area"
    ],
    topic_name: "For Sale"
  }
]; 