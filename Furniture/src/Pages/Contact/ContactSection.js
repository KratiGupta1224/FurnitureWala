import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phn, setPhn] = useState("");
  const [message, setMessage] = useState("");

  const authToken = localStorage.getItem("authToken");
  const MID = localStorage.getItem("MID");
  const tssurl = "http://localhost:5200/client"; // Replace with your actual API URL

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      mid: MID,
      email: mail,
      contactNo: phn,
      name: name,
      message: message,
    };

    try {
      await axios.post(`${tssurl}/contacts/contact`, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      toast.success("Message sent successfully!");
      setMail("");
      setName("");
      setPhn("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 font-lexend py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">CONTACT US</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">WRITE US</h2>
                <p className="text-gray-500 mb-4">
                  Jot us a note and we’ll get back to you as quickly as possible.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Name *"
                      className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={phn}
                    onChange={(e) => setPhn(e.target.value)}
                  />
                  <textarea
                    placeholder="What’s on your mind? *"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">STORE INFORMATION</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>📍 <strong>Store 1:</strong> A2/1 Chinab Apartment, Jaipur, Rajasthan</li>
                  <li>📍 <strong>Store 2:</strong> A2/1 Chinab Apartment, Jaipur, Rajasthan</li>
                  <li>📍 <strong>Store 3:</strong> A2/1 Chinab Apartment, Jaipur, Rajasthan</li>
                  <li>⏰ <strong>Open Time:</strong> 7:00 am - 10:00 pm</li>
                  <li>📞 <strong>Phone:</strong> (+91) 9876543210</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-auto md:h-screen rounded-lg shadow overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;
