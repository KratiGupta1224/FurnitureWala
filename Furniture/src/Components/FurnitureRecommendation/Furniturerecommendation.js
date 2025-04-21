import React from "react";

const FurnitureRecommendations = () => {
  return (
    <div className="bg-gray-100 p-6">
      {/* Recommended Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="path/to/image1.jpg"
              alt="Modular Sofa 1"
              className="rounded-md mb-4"
            />
            <h3 className="text-lg font-medium">Modular Sofa</h3>
            <p className="text-gray-700 mt-2">₹187.00</p>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 relative">
            <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
              18% OFF
            </div>
            <img
              src="path/to/image2.jpg"
              alt="Modular Sofa 2"
              className="rounded-md mb-4"
            />
            <h3 className="text-lg font-medium">Modular Sofa</h3>
            <p className="text-gray-500 line-through">₹121.00</p>
            <p className="text-gray-700 mt-2">₹99.00</p>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="path/to/image3.jpg"
              alt="Modular Sofa 3"
              className="rounded-md mb-4"
            />
            <h3 className="text-lg font-medium">Modular Sofa</h3>
            <p className="text-gray-700 mt-2">₹109.00</p>
          </div>
        </div>
      </section>

      {/* Crafters of Origin Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Crafters of Origin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative">
            <img
              src="path/to/image4.jpg"
              alt="Crafted Bed"
              className="rounded-md"
            />
            <div className="absolute bottom-2 left-2 bg-white px-4 py-2 rounded shadow">
              <h3 className="text-lg font-bold">We craft with care</h3>
              <p className="text-sm text-gray-500">Building Better Life</p>
              <button className="mt-2 text-blue-600">Explore Now</button>
            </div>
          </div>
          {/* Card 2 */}
          <div>
            <img
              src="path/to/image5.jpg"
              alt="Living Room Set"
              className="rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">Plans to Have Grown Wood</h3>
            <button className="mt-2 text-blue-600">Explore Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurnitureRecommendations;
