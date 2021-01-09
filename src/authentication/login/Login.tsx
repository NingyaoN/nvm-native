import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container } from '../../components';
import SocialLogin from '../components/SocialLogin';
import {
  Checkbox,
  Button,
  Text,
  Box,
  TextInput,
  KeyboardAvoidingComponent,
} from '../../components';

interface LoginProps {}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

const Login = () => {
  const handleSubmit = () => {
    console.log('fsdf');
  };
  const footer = (
    <Box alignItems='center'>
      <SocialLogin />

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
  );
  return (
    <Container {...{ footer }}>
      <Box padding='xl'>
        <Text variant='title1' textAlign='center' marginBottom='l'>
          Welcome Back
        </Text>

        <Text textAlign='center' marginBottom='l'>
          Use your credentials to login
        </Text>

        <Formik
          validationSchema={SignInSchema}
          initialValues={{ email: '', password: '', rememberMe: false }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom='m'>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  icon='mail'
                  placeholder='Enter your email'
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                icon='lock'
                error={errors.password}
                touched={touched.password}
                placeholder='Enter your password'
              />

              <Box flexDirection='row' justifyContent='space-between'>
                <Checkbox
                  label='Remember me'
                  checked={values.rememberMe}
                  onChange={() =>
                    setFieldValue('rememberMe', !values.rememberMe)
                  }
                />
                <Button variant='transparent' onPress={() => true}>
                  <Text>Forgot password</Text>
                </Button>
              </Box>
              <Box marginTop='m' alignItems='center'>
                <Button
                  variant='primary'
                  onPress={handleSubmit}
                  label='Log in to your account'
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
