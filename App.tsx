import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { AuthenticationNavigator } from './src/authentication';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * COmponents
 */

import { LoadAssets } from './src/components';
import { theme } from './src/components/Theme';
const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SF-Pro-Display-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
