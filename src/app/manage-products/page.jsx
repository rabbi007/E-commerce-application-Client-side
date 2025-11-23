'use client';

import ProtectedRoute from '../components/ProtectedRoute';
import ManageProducts from './ManageProducts';

export default function Page() {
  return (
    <ProtectedRoute>
      <ManageProducts />
    </ProtectedRoute>
  );
}
