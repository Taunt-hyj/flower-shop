import * as React from 'react';
import { AppNavigation } from '@/navigation';
import {
  AuthProvider,
  ToastProvider,
  CartProvider,
  AddressProvider,
} from '@/contexts';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <AddressProvider>
            <AppNavigation />
          </AddressProvider>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}