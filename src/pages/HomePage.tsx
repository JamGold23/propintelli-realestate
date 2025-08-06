import React from "react";
import NavBar from "../components/NavBar";

const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Propintelli Real Estate</h1>
        <p className="text-lg text-gray-600">Homepage: Search and featured listings coming soon.</p>
      </div>
    </>
  );
};

export default HomePage; 