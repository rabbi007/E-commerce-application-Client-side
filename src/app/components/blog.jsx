'use client';

import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Latest Electronics Trends",
    description:
      "Explore the newest electronic gadgets and innovations in the tech world. Stay updated with the latest TVs, smartphones, and more!",
    img: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Must-Have Gadgets for 2025",
    description:
      "From wearables to smart home devices, discover the must-have gadgets for 2025 that will enhance your daily life.",
    img: "https://plus.unsplash.com/premium_photo-1665203485797-6fe4e8755beb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Gadgets",
  },
  {
    id: 3,
    title: "Accessories You Need Right Now",
    description:
      "Check out the best accessories to enhance your gadgets and devices. From phone cases to headphones, we’ve got you covered.",
    img: "https://images.unsplash.com/photo-1731909888065-0c5a117b0af7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessories",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-50 py-5">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Tech Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold btn"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
