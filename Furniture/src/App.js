import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ContactSection from "./Pages/Contact/ContactSection"; 
import Checkout from "./Components/Checkout/Checkout";
import Blog from "./Pages/Blog/Blog";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Shipping from "./Components/Shipping/Shipping";
import About from "./Pages/About/About";
import Products from "./Components/Products/Products";
import ProductOverview from "./Components/ProductOverviews/ProductOverview";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductOverview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
