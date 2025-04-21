import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import ProductOverview from '../ProductOverviews/ProductOverview';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const tssurl = "http://localhost:5200/client"; 


  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${tssurl}/productcat/products`);
        const filteredData = response?.data?.filter(item => item.draft === "false");
        setProducts(filteredData);
      } catch (error) {
        console.error("Error fetching product data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [tssurl]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <><Navbar/>
       <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id} className="group">

              {/* Use the first image from the variants */}
              <img
                src={product.variants[0]?.ThumbImg[0] || "default-image-url"} // fallback to a default image if no thumbnail is available
                alt={product.product_name}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.product_name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.unit_price}</p>
             
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
 
  );
};

export default Products;
