import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [detailsOpen, setDetailsOpen] = useState(null);

  const toggleSection = (section) => {
    setDetailsOpen(detailsOpen === section ? null : section);
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="border rounded-lg p-4">
        <img
          src="/asset/4set2.jpg"
          alt="4 Piece Dineroom Set"
          className="w-full h-auto rounded-lg"
        />
        <div className="flex mt-2 space-x-2">
          {["/asset/4set1.jpg", "/asset/4set3.jpg", "/asset/4set4.jpg"].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Thumbnail"
              className="w-16 h-16 border rounded-md cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">4 Piece Dineroom Set - Sandstone</h2>
        <p className="text-green-600 font-medium">In Stock</p>
        <p className="text-xl font-bold text-gray-800">
          ₹9000.00 <span className="line-through text-gray-500 ml-2">₹12000.00</span>
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <FaMinus className="text-gray-600" />
            </button>
            <span className="mx-3 text-lg">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>
              <FaPlus className="text-gray-600" />
            </button>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center" onClick={() => navigate("/shipping")}>
            <BsCartPlus className="mr-2" /> Add to Cart
          </button>
          <button className="border px-5 py-2 rounded-lg">Buy Now</button>
        </div>
        <div className="flex mt-4 space-x-4 text-gray-600">
          <button className="flex items-center">
            <FiHeart className="mr-1" /> Add to Wishlist
          </button>
          <button className="flex items-center">
            <FiShare2 className="mr-1" /> Share
          </button>
        </div>
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Quick Overview</h3>
          <p className="text-gray-700 text-sm">
            Experience comfort and elegance with our premium dineroom set, designed for modern homes.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">Secured and trusted checkout with:</p>
          <div className="flex space-x-4 mt-2">
            <img src="/asset/Visa.png" alt="Visa" className="w-36" />
          </div>
        </div>
        {["Details", "Reviews", "Estimate Shipping Cost", "Warranty Terms"].map((section, index) => (
          <div className="mt-6" key={index}>
            <button
              className="w-full flex justify-between items-center p-3 bg-gray-200 rounded-lg"
              onClick={() => toggleSection(section)}
            >
              <span className="text-lg font-semibold">{section}</span>
              <IoIosArrowDown className={`transform ${detailsOpen === section ? "rotate-180" : ""}`} />
            </button>
            {detailsOpen === section && (
              <div className="p-4 bg-gray-50 border rounded-lg mt-2">
                <p className="text-gray-700 text-sm">
                  Information about {section} goes here.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
