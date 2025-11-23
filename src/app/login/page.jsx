"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners"; // Importing the loader component

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful!", { autoClose: 1000 });
      setLoading(false); // Reset loading state after successful login
      router.push("/"); // redirect after login
    } catch (err) {
      toast.error(err.message, { autoClose: 2000 });
      setLoading(false); // Reset loading state on error
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Login Successful!", { autoClose: 1000 });
      router.push("/"); // redirect after Google login
    } catch (err) {
      toast.error(err.message, { autoClose: 2000 });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <ClipLoader size={20} color="white" /> // Display loader when loading is true
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>

        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Login with Google
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}
