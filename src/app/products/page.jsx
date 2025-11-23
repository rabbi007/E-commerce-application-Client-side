/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://e-commerce-application-server-side.vercel.app/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Search + Category Filter (UI Only)
  useEffect(() => {
    let updated = [...products];

    // Search
    if (search.trim() !== '') {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category (UI only)
    if (category !== '') {
      updated = updated.filter((p) => p.category === category);
    }

    setFiltered(updated);
  }, [search, category, products]);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-4">

      {/* Page Title + Short Description */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="text-gray-600 mt-2">
          Explore our latest items. Filter by category or search by product title.
        </p>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 border border-gray-300 rounded px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter (UI Only) */}
        <select
          className="w-full md:w-1/4 border border-gray-300 rounded px-3 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Gadgets">Gadgets</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            {/* Category Badge */}
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              {product.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-2">{product.title}</h3>

            {/* Short Description (ellipsis) */}
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Price + Details Button */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold">${product.price}</span>
              <Link
                href={`/product/${product._id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products match your search or filter.
        </p>
      )}
    </div>
  );
};

export default Products;
