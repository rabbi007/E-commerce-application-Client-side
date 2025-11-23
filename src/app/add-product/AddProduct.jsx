'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';  // Import the spinner
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    price: '',
    stock: '',
    imageUrl: '',
    category: '',
    date: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Auto-set date
  useEffect(() => {
    setFormData((prev) => ({ ...prev, date: new Date().toLocaleString() }));
  }, []);

  // Handle inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        'https://e-commerce-application-server-side.vercel.app/products',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error('Failed to add product');

      await res.json();

      toast.success('Product added successfully!', {
        autoClose: 1500,
      });

      // Reset form after success
      setFormData({
        title: '',
        shortDescription: '',
        fullDescription: '',
        price: '',
        stock: '',
        imageUrl: '',
        category: '',
        date: new Date().toLocaleString(),
      });

      // Delay redirect so toast appears
      setTimeout(() => {
        router.push('/products');
      }, 1600);
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-gray-50'>
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-semibold">Short Description</label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="block mb-1 font-semibold">Full Description</label>
          <textarea
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Price + Stock */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-semibold">Date & Time</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button with Spinner */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? (
            <ClipLoader size={25} color="#ffffff" loading={loading} />
          ) : (
            'Add Product'
          )}
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
    </div>
  );
};

export default AddProduct;
