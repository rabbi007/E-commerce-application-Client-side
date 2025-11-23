'use client';

import ProtectedRoute from '../components/ProtectedRoute';
import AddProduct from './AddProduct';

export default function Page() {
  return (
    <ProtectedRoute>
      <AddProduct />
    </ProtectedRoute>
  );
}
