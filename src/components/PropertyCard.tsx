import React from "react";
import { Property } from "../data/properties";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold truncate" title={property.title}>{property.title}</h2>
          <span className="text-indigo-600 font-bold text-xl">
            ${property.price.toLocaleString()}
          </span>
        </div>
        <div className="text-gray-500 text-sm mb-2">{property.location}</div>
        <div className="flex flex-wrap gap-2 text-sm text-gray-700 mb-2">
          <span>{property.sqm} sqm</span>
          <span>• {property.rooms} rooms</span>
          {property.additional_fields.bathrooms && (
            <span>• {property.additional_fields.bathrooms} bath</span>
          )}
          {property.parking && <span>• Parking</span>}
        </div>
        <div className="text-gray-400 text-xs">{property.agency}</div>
      </div>
    </div>
  );
};

export default PropertyCard; 