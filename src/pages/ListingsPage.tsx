import React from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import NavBar from "../components/NavBar";

const ListingsPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Property Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListingsPage; 