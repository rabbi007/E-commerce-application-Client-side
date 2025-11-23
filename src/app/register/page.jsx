'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'; // Importing the loader component

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when registration starts

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Registration Successful! Please login to continue.', { autoClose: 2000 }); // Success toast
      setLoading(false); // Reset loading state after successful registration

      // Clear form data after registration
      setEmail('');
      setPassword('');

      router.push('/'); // Redirect to home page
    } catch (err) {
      toast.error('Error: ' + err.message, { autoClose: 4000 }); // Error toast
      setLoading(false); // Reset loading state on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-yellow-500 to-red-500">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Register</h1>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <ClipLoader size={20} color="white" /> // Display loader when loading is true
            ) : (
              'Register'
            )}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
}
