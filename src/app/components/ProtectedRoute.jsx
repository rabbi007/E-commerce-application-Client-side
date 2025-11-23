'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { ClipLoader } from 'react-spinners';  // Importing the spinner

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      } else {
        setLoading(false);  // Stop loading once authentication is done
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    // Show spinner while loading the authentication status
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color="#007bff" />
      </div>
    );
  }

  // If authenticated, render the protected content
  return <>{children}</>;
}
