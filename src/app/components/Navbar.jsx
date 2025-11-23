'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-orange-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Click-&-Buy
        </Link>

        <ul className="flex items-center gap-6">

          <li><Link href="/products">Products</Link></li>
          <li><Link href="/add-product">Add Product</Link></li>
          <li><Link href="/manage-products">Manage Products</Link></li>

          {/* Right Side Authentication */}
          {!user ? (
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li>
            </>
          ) : (
            <li className="flex items-center gap-3">

              <span className="text-sm opacity-80">
                {user.email}
              </span>

              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded bg-red-500 hover:bg-red-600"
              >
                Logout
              </button>

            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
