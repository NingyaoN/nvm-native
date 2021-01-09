import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Footer from '../components/Footer';
import {
  Container,
  StackNavigationProps,
  Routes,
  Checkbox,
  Button,
  Text,
  Box,
  TextInput,
} from '../../components';
import { BorderlessButton } from 'react-native-gesture-handler';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: SignInSchema,
    initialValues: { email: '', password: '', rememberMe: false },
    onSubmit: (values) => console.log(values),
  });

  const password = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title='Don"t have an account?'
      action='Sign Up Here'
      onPress={() => navigation.navigate('Signup')}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding='xl'>
        <Text variant='title1' textAlign='center' marginBottom='l'>
          Welcome Back
        </Text>

        <Text textAlign='center' marginBottom='l'>
          Use your credentials to login
        </Text>

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
              autoCompleteType='email'
              returnKeyLabel='next'
              returnKeyType='next'
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>

          <TextInput
            ref={password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            icon='lock'
            error={errors.password}
            touched={touched.password}
            placeholder='Enter your password'
            autoCompleteType='password'
            secureTextEntry
            autoCapitalize='none'
            returnKeyLabel='go'
            returnKeyType='go'
            onSubmitEditing={() => handleSubmit()}
          />

          <Box
            flexDirection='row'
            justifyContent='space-between'
            marginVertical='s'>
            <Checkbox
              label='Remember me'
              checked={values.rememberMe}
              onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
            />
            <BorderlessButton
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text variant='button' color='primary'>
                Forgot password
              </Text>
            </BorderlessButton>
          </Box>
          <Box marginTop='m' alignItems='center'>
            <Button
              variant='primary'
              onPress={handleSubmit}
              label='Log in to your account'
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
