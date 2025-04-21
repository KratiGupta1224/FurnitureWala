import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const blogs = [
    {
      id: 1,
      title: "Top 10 Modern Furniture Trends in 2025",
      description:
        "Discover the latest furniture designs that are taking over homes and offices in 2025.",
      image:
        "/asset/Furnitureblog1.jpg",
      author: "Emily Brown",
      date: "Feb 2, 2025",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Sofa for Your Home",
      description:
        "A complete guide to selecting the right sofa that fits your space, style, and comfort.",
      image:
        "/asset/Furnitureblog2.jpg",
      author: "Michael Johnson",
      date: "Jan 30, 2025",
    },
    {
      id: 3,
      title: "Sustainable Furniture: A Step Towards Eco-Friendly Living",
      description:
        "Learn about sustainable furniture materials and why they are a great choice for the environment.",
      image:
        "/asset/Furnitureblog3.jpg",
      author: "Sophia Carter",
      date: "Jan 25, 2025",
    },
  ];
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
        <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
     
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Blogs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

   
    </div>
    </>
  );
};

export default Blog;
