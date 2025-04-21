import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Shipping = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">📍 SHIPPING ADDRESS</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email Address*" className="input-field" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="input-field" />
                <input type="text" placeholder="Last Name" className="input-field" />
              </div>
              <input type="text" placeholder="Street Address*" className="input-field" />
              <div className="grid grid-cols-2 gap-4">
                <select className="input-field">
                  <option>Please Select a Region</option>
                </select>
                <input type="text" placeholder="City" className="input-field" />
              </div>
              <input type="text" placeholder="Zip/Postal Code" className="input-field" />
              <input type="text" placeholder="Phone Number" className="input-field" />
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">💳 PAYMENT METHOD</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Net Banking</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Credit Card/Debit Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>UPI</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Cash On Delivery</span>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">🛒 ORDER SUMMARY</h2>
          <div className="mb-4">
            <p>Cart Subtotal: ₹347.00</p>
            <p>Shipping: Not Yet Calculated</p>
            <p className="font-semibold">Order Total: ₹347.00</p>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <span>Wooden Wall Board</span>
              <span>₹347.00</span>
            </div>
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Enter Discount Code" className="input-field" />
            <button className="mt-2 w-full bg-gray-700 text-white py-2 rounded">APPLY DISCOUNT</button>
          </div>
          <textarea placeholder="Your Note" className="input-field h-24"></textarea>
          <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded text-lg">PLACE ORDER</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Shipping;
