import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding';
import Welcome from './welcome';
import Login from './login';
import { Routes } from '../components';

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode='none'>
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
      <AuthenticationStack.Screen name='Login' component={Login} />
    </AuthenticationStack.Navigator>
  );
};

export { AuthenticationNavigator };
