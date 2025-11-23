'use client';

import ProtectedRoute from '../../components/ProtectedRoute';
import ProductDetails from './ProductDetails';

export default function Page({ params }) {
  return (
    <ProtectedRoute>
      <ProductDetails params={params}/>
    </ProtectedRoute>
  );
}
