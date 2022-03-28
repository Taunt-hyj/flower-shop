import * as React from 'react';
import { AppNavigation } from '@/navigation';
import {
  AuthProvider,
  ToastProvider,
} from '@/contexts';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </ToastProvider>
  );
}