import * as React from 'react';
import { AppNavigation } from '@/navigation';
import {
  AuthProvider,
  ToastProvider,
  CartProvider,
  AddressProvider,
} from '@/contexts';
import { StatusBar } from 'react-native';
import { colors } from '@/theme';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <ActionSheetProvider>
            <AddressProvider>
              <StatusBar barStyle="dark-content" backgroundColor={colors.lighterGray} />
              <AppNavigation />
            </AddressProvider>
          </ActionSheetProvider>
        </CartProvider>
      </AuthProvider>
    </ToastProvider >
  );
}