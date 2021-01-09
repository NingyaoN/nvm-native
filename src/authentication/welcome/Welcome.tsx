import React from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  Box,
  Text,
  Button,
  useTheme,
  AuthNavigationProps,
} from '../../components';

const welcome = require('../../images/welcome.png');

const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor={'white'}>
      <Box
        flex={1}
        borderBottomRightRadius={'xl'}
        backgroundColor={'grey'}
        alignItems={'flex-end'}
        justifyContent={'center'}>
        <Image
          source={welcome}
          style={{
            flex: 1,
            height: 400,
            width: 200,
            borderBottomRightRadius: 75,
          }}
          resizeMode='cover'
        />
      </Box>
      <Box flex={1} backgroundColor={'grey'}>
        <Box
          flex={1}
          backgroundColor={'white'}
          borderTopLeftRadius={'xl'}
          justifyContent='space-evenly'
          alignItems='center'
          padding={'xl'}>
          <Text variant='title2'>Let's get started</Text>
          <Text variant='body' textAlign='center'>
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant='primary'
            label='Have an account? Login'
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            onPress={() => navigation.navigate('Signup')}
            variant='default'
            label="Join us, It's Free"
          />
          <BorderlessButton
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text variant='button'>Forgot Password?</Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
