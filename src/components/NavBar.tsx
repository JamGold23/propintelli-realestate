import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-700">Propintelli</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/listings" className="text-gray-700 hover:text-indigo-600">Listings</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 