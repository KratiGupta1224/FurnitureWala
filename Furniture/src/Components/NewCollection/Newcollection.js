import React from "react";

const Newcollection = () => {
  
  return (
    <div className="bg-gray-50 py-8 mx-56">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">

  <h2 className="text-2xl font-bold text-gray-800">
  New Collection
  </h2>

  <div className="flex space-x-4">
    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-full hover:bg-gray-100">
      Designing Tables
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-full hover:bg-gray-100">
      Sofa
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-full hover:bg-gray-100">
      Chair
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-full hover:bg-gray-100">
      Table
    </button>
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
        
            <div className="bg-blue-100 p-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Product"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute top-4 right-4 space-y-2">
              <button className="bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.659 11.318a4 4 0 10-5.659-5.659m5.659 5.659l-4.829 4.83a4 4 0 11-5.659-5.659l4.83-4.83"
                  />
                </svg>
              </button>
              <button className="bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M4 7h16M4 11h16M4 15h16M4 19h16"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Modular Sofa
              </h3>
              <p className="text-sm text-gray-500 mt-1">₹187.00</p>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Product"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-4 right-4 space-y-2">
              <button className="bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.659 11.318a4 4 0 10-5.659-5.659m5.659 5.659l-4.829 4.83a4 4 0 11-5.659-5.659l4.83-4.83"
                  />
                </svg>
              </button>
              <button className="bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M4 7h16M4 11h16M4 15h16M4 19h16"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                5 Piece Dine Set - Sandstone
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                <span className="line-through">₹121.00</span> ₹99.00
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Product"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-4 right-4 space-y-2">
              <button className="bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.659 11.318a4 4 0 10-5.659-5.659m5.659 5.659l-4.829 4.83a4 4 0 11-5.659-5.659l4.83-4.83"
                  />
                </svg>
              </button>
              <button className="bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M4 7h16M4 11h16M4 15h16M4 19h16"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Modular Sofa
              </h3>
              <p className="text-sm text-gray-500 mt-1">₹109.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcollection;
