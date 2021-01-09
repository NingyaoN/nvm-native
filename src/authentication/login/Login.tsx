import React from 'react';
import { Container } from '../../components';
import SocialLogin from '../components/SocialLogin';
import { Button, Text, Box } from '../../components';

interface LoginProps {}

const Login = () => {
  const footer = (
    <>
      <SocialLogin />

      <Box alignItems='center'>
        <Button onPress={() => alert('Signup')} variant='transparent'>
          <Box flexDirection='row' justifyContent='center' flex={1}>
            <Text variant='button' color='white'>
              Don't have an Account?
            </Text>
            <Text marginLeft='s' variant='button' color='primary'>
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return <Container {...{ footer }}></Container>;
};

export default Login;
