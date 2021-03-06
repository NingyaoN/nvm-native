import 'intl';
import 'intl/locale-data/jsonp/en';

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * navigators
 */
import { AuthenticationNavigator } from './src/authentication';
import HomeNavigator from './src/home';
import { AppRoutes } from './src/components';
import { LoadAssets } from './src/components';
import { ThemeProvider } from './src/components/Theme';

//fonts
const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SF-Pro-Display-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider>
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
