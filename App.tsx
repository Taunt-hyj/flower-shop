import * as React from 'react';
import { AppNavigation } from '@/navigation';
import {
  AuthProvider,
  ToastProvider,
  CartProvider,
} from '@/contexts';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <AppNavigation />
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}