import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * navigators
 */
import { AuthenticationNavigator } from './src/authentication';
import HomeNavigator from './src/home';

import { LoadAssets } from './src/components';
import { theme } from './src/components/Theme';

//fonts
const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SF-Pro-Display-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

type AppStackRoutes = {
  Authentication: undefined;
  Home: undefined;
};
const AppStack = createStackNavigator<AppStackRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode='none'>
            <AppStack.Screen
              name='Authentication'
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name='Home' component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
