/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling mobile menu
  const dropdownRef = useRef(null); // Ref for dropdown menu
  const menuRef = useRef(null); // Ref for mobile menu

  // Detect clicks outside the dropdown or menu to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
        setIsMenuOpen(false); // Close the mobile menu if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-20 w-20 rounded-full object-contain"
            />
          </div>
          <div>
            <Link href="/" className="text-2xl font-bold">
              Click-&-Buy
            </Link>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links (Desktop) */}
        <div
          className={`flex items-center gap-6 lg:flex ${isMenuOpen ? "flex-col absolute top-16 left-0 w-full bg-orange-800 p-4" : "hidden"}`}
          ref={menuRef}
        >
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">All Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>

            {/* Right Side Authentication */}
            {!user ? (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 text-sm"
                >
                  <span>{user.email}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
                    ref={dropdownRef}
                  >
                    <ul className="p-2">
                      <li>
                        <Link
                          href="/add-product"
                          className="block px-4 py-2 text-sm"
                          onClick={() => setIsDropdownOpen(false)} // Close dropdown after clicking Add Product
                        >
                          Add Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/manage-products"
                          className="block px-4 py-2 text-sm"
                          onClick={() => setIsDropdownOpen(false)} // Close dropdown after clicking Manage Products
                        >
                          Manage Products
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleLogout();
                            setIsDropdownOpen(false); // Close dropdown and log out
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
