import React, { useEffect, useState } from "react";
import axios from "axios";

const tssurl = "http://localhost:5200/client";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${tssurl}/top3products`);
        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="bg-gray-50 py-8 mx-56">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Trending Products</h2>
          <div className="flex space-x-4">
            {["Designing Tables", "Sofa", "Chair", "Table"].map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-full hover:bg-gray-100"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              // Get the primary image (thumbnail or fallback to variant image)
              const mainImage =
                product.thumbnail_image.url.length > 0
                  ? product.thumbnail_image.url[0]
                  : product.variants?.[0]?.ThumbImg?.[0] || "";

              // Handle discount calculations
              const originalPrice = parseFloat(product.unit_price);
              const discountAmount = parseFloat(product.discount) || 0;
              const finalPrice =
                product.discount_type === "amount"
                  ? originalPrice - discountAmount
                  : product.discount_type === "percentage"
                  ? originalPrice - (originalPrice * discountAmount) / 100
                  : originalPrice;

              return (
                <div key={product._id} className="relative bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-100 p-4">
                    <img
                      src={mainImage || "https://via.placeholder.com/150"}
                      alt={product.product_name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.product_name}</h3>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      ${finalPrice.toFixed(2)}{" "}
                      {discountAmount > 0 && (
                        <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
                      )}
                    </p>
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

export default TrendingProducts;
