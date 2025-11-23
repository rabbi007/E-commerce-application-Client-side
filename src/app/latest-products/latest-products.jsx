/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ClipLoader } from "react-spinners"; // Importing the spinner

const LatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const res = await fetch(
          "https://e-commerce-application-server-side.vercel.app/latest"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch latest products");
        }
        const data = await res.json();
        setLatestProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center p-4">
        {" "}
        <div className="flex justify-center items-center h-screen">
          <ClipLoader size={50} color="#007bff" />
        </div>
      </div>
    );
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Products</h1>

      {/* Latest Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {latestProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {product.shortDescription}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold">${product.price}</span>
              <Link
                href={`/product/${product._id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        {/* Back Button */}
        <Link href="/products">
          <button className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
            All Products →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
