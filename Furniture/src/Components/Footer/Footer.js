import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 border-t border-gray-300">
      <div className="container mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">

  <div className='ml-24'>
    <h2 className="text-lg font-semibold text-indigo-900">Build custom furniture</h2>
    <h1 className="text-2xl font-bold text-indigo-900">Craft Own Furniture</h1>
  </div>


  <div className='mr-56'>
    <h3 className="text-lg font-semibold text-indigo-900 mb-2">Newsletter</h3>
    <p className="text-sm text-gray-600 mb-4">
      Subscribe to receive our offers and enjoy 10% discount on your first order.
    </p>

    <div className="flex items-center  rounded-lg overflow-hidden">
    <HiOutlineMail className='w-10 h-10'/>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full px-8 py-2 text-sm text-gray-700 outline-none"
      />
      <button className="bg-indigo-900 rounded-full text-white px-6 py-2">Subscribe</button>
    </div>
  </div>
</div>


      
        <div className="grid grid-cols-1 md:grid-cols-4 ml-24 items-center gap-4">
                
          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">Orders & Returns</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Track your Order</li>
              <li>Order History</li>
              <li>Return & Exchange</li>
              <li>Product Recalls</li>
              <li>Customer Stories</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">Support and Services</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Contact Us</li>
              <li>Customer Service</li>
              <li>Our Stores</li>
              <li>Talk to Expert</li>
              <li>Partner Program</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">FAQs</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Returns Policy</li>
              <li>Warranty Terms</li>
              <li>Feedback</li>
              <li>Tax Exempt Program</li>
              <li>Store Pickup</li>
            </ul>
          </div>
          <div>
            <div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">Instagram</h3>
  <div className="grid grid-cols-3 gap-none ">
   
    <img
      src="your-image-url-1.jpg"
      alt="Instagram 1"
      className="w-10 h-10 object-cover rounded-lg"
    />
    <img
      src="your-image-url-2.jpg"
      alt="Instagram 2"
      className="w-10 h-10 object-cover rounded-lg"
    />
    <img
      src="your-image-url-3.jpg"
      alt="Instagram 3"
      className="w-10 h-10 object-cover rounded-lg"
    />
  
    <img
      src="your-image-url-6.jpg"
      alt="Instagram 6"
      className="w-10 h-10 object-cover rounded-lg"
    />
    <img
      src="your-image-url-7.jpg"
      alt="Instagram 7"
      className="w-10 h-10 object-cover rounded-lg"
    />
    <img
      src="your-image-url-8.jpg"
      alt="Instagram 8"
      className="w-10 h-10 object-cover rounded-lg"
    />
  </div>
            </div>
 
</div>

     
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mt-20">
        <div className="text-center text-sm ml-24 text-gray-600">
            ©2024 The Furniture Wala. All rights reserved.
          </div> 
     <div className="flex justify-center space-x-4">
            <a href="#" className="text-indigo-900 hover:text-indigo-600 text-sm border border-bl rounded-full px-4 py-2">
              Facebook
            </a>
            <a href="#" className="text-indigo-900 hover:text-indigo-600 text-sm border rounded-full px-4 py-2">
              Instagram
            </a>
            <a href="#" className="text-indigo-900 hover:text-indigo-600 text-sm border rounded-full px-4 py-2">
              Twitter
            </a>
            <a href="#" className="text-indigo-900 hover:text-indigo-600 text-sm border rounded-full px-4 py-2">
              LinkedIn
            </a>
          </div>

         

          <div className="flex justify-center items-center mr-48 space-x-2">
            <div className="bg-green-500 text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.93 9.58a8.12 8.12 0 00-.21-1.48A8.003 8.003 0 1012 20.93a8.12 8.12 0 001.48-.21l2.54 1.25a1 1 0 001.18-.21l1.2-1.2a1 1 0 00.21-1.18l-1.25-2.54z"
                />
              </svg>
            </div>
            <span className="text-sm text-indigo-900 font-medium">+91-9876543210</span>
          </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
