/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners"; // Importing the spinner


export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  const loadProducts = async () => {
    try {
      const res = await fetch(
        "https://e-commerce-application-server-side.vercel.app/products"
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Delete Product
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://e-commerce-application-server-side.vercel.app/products/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error("Failed to delete product");

      toast.success("Product deleted");
      loadProducts(); // Refresh list
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  if (loading)
    return (
      <div className="p-6 text-center">
        <div className="flex justify-center items-center h-screen">
          <ClipLoader size={50} color="#007bff" />
        </div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Manage Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4">{product.title}</h3>

            {/* Category */}
            <p className="text-sm text-blue-600 mt-1">{product.category}</p>

            {/* Price & Stock */}
            <div className="mt-2 text-gray-600 text-sm">
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Date:</strong> {product.date}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <Link
                href={`/product/${product._id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                View
              </Link>

              <button
                onClick={() => deleteProduct(product._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
