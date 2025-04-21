import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [brandLogo, setBrandLogo] = useState("");
  const tssurl = "http://localhost:5200/client"; 
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${tssurl}/header`);
        if (response.data?.header) {
          const parsedHeader = JSON.parse(response.data.header.header); // Parse the JSON string
          if (parsedHeader?.length > 0) {
            setCategories(parsedHeader[0].nav_link || []);
          }
        }

        if (response.data?.header?.brand_logo?.url) {
          setBrandLogo(response.data.header.brand_logo.url);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle category selection to navigate to FurnitureRecommendations page
  const handleCategorySelect = (event) => {
    const categoryLink = event.target.value;
    console.log(categoryLink);
    
    if (categoryLink) {
      navigate('/products');
    }
  };

  return (
    <header className="bg-[#9999FF]">
      <div className="bg-[#E7E1F8] text-black text-center py-2 text-[14px]">
        Offer of the day: Orders over ₹5000 get free shipping. Buy 2 Get 1 Free.
      </div>

      <div className="container mx-3 flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          {brandLogo && (
            <img src={brandLogo} alt="Brand Logo" className="h-10" />
          )}
          <div className="ml-8">
            <h1 className="text-3xl font-bold text-black">THE FURNITURE WALA</h1>
            <p className="text-sm text-center text-gray-200">
              Quality you can trust, style you'll love
            </p>
          </div>  
        </div>

        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md px-4 py-2">
          <select
            className="bg-[#9999FF] text-white ml-1 rounded-full font-medium px-2 py-2 outline-none"
            onChange={(e)=>handleCategorySelect(e)} // Attach the handleCategorySelect function
          >
            <option value="">Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category.link}>{category.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-gray-700 outline-none w-64"
          />
          <button className="bg-indigo-900 p-2 rounded-full mr-1">
            <svg
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm4.39-4.39l4.2 4.2"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-8 mr-14">
          <a href="#" className="text-white hover:text-gray-200 transition-colors flex flex-col items-center">
            <CiHeart />
            <span className="text-sm">Wish List</span>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors flex flex-col items-center">
            <FaShoppingCart />
            <span className="text-sm">Your Cart</span>
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors flex flex-col items-center">
            <MdAccountCircle />
            <span className="text-sm">Your Account</span>
          </a>
        </div>
      </div>

      <div className="bg-[#8D8DF4]">
        <div className="container flex ml-40 space-x-6 px-8">
          <select  onChange={(e)=>handleCategorySelect(e)}  className="bg-white text-gray-400 ml-1 py-2 px-16 outline-1">
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category.link}>{category.name}</option>
            ))}
          </select>
          <Link to="/" className="text-sm py-2 hover:underline">HOME</Link>
          <Link to="/about" className="text-sm py-2 hover:underline">ABOUT US</Link>
          <Link to="/contact" className="text-sm py-2 hover:underline">CONTACT US</Link>
          <Link to="/blog" className="text-sm py-2 hover:underline">BLOG</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
