import React, { useEffect, useState } from "react";
import axios from "axios";

const FurnitureOffers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const tssurl = "http://localhost:5200/client"; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${tssurl}/productcat/products`);
        const filteredData = response.data.filter(item => item.draft === "false");
        setProducts(filteredData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 py-8 mx-56">
      <div className="container mx-auto px-4">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="flex space-x-6 overflow-x-auto">
            {products.map((product, index) => {
              // Get the first available image source
              const imageUrl =
                product.SEOArea?.images1 ||
                product.variants?.[0]?.ThumbImg?.[0] ||
                "https://via.placeholder.com/300"; // Fallback image if none available

              return (
                <div
                  key={index}
                  className="relative bg-cover bg-center rounded-xl shadow-lg w-80 h-56 overflow-hidden"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                    {product.product_name}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FurnitureOffers;
