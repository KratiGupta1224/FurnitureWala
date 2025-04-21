import React from "react";

const Realdesigncomponents = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-4 lg:px-20">
      {/* Left Section */}
      <div className="relative w-full lg:w-1/2 bg-purple-500 text-white rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/50 rounded-lg"></div>
        <div className="relative p-10 flex flex-col justify-between h-full">
          <div>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium mb-4">
              Get It Now
            </button>
            <h3 className="text-2xl font-bold mb-2">Enhance Your Home</h3>
            <p className="text-sm">
              With unique designs that bring out the best in your space.
            </p>
          </div>
          <div className="absolute bottom-4 left-4">
            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center relative rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x400" // Replace with your actual image URL
          alt="Modern Furniture"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute top-4 right-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
            Feel the magic of <br />
            <span className="font-bold">Real Design</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Realdesigncomponents;
