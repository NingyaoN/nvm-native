import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding';
import Welcome from './welcome';
import Login from './login';
import Signup from './signup';
import ForgotPassword from './forgot-password';
import PasswordChanged from './password-change';
import { Routes } from '../components';

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode='none'>
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
      <AuthenticationStack.Screen name='Login' component={Login} />
      <AuthenticationStack.Screen name='Signup' component={Signup} />
      <AuthenticationStack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
      />

      <AuthenticationStack.Screen
        name='PasswordChanged'
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};

export { AuthenticationNavigator };
