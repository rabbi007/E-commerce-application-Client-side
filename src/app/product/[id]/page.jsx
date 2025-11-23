/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductDetails({ params }) {
  const { id } = use(params);

  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details from backend
  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        const res = await fetch(
          `https://e-commerce-application-server-side.vercel.app/products/${id}`
        );

        if (!res.ok) throw new Error('Failed to fetch product');

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (!product)
    return <div className="p-6 text-red-500 text-center">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">

     

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Large Image */}
        <div>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          {/* Product Title */}
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          {/* Category Badge */}
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full inline-block">
            {product.category}
          </span>

          {/* Full Description */}
          <p className="text-gray-700 mt-4 leading-relaxed">
            <strong>Full Description:</strong> {product.fullDescription}
          </p>

          {/* Meta Information */}
          <div className="mt-6 space-y-2 text-gray-800">
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Date Added:</strong> {product.date}
            </p>
          </div>

           {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 px-10 py-2 mt-20 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        ← Back
      </button>
        </div>

      </div>
    </div>
  );
}
