import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Footer from '../components/Footer';
import { Container, Button, Text, Box, TextInput } from '../../components';
import { AuthNavigationProps } from '../../components/Navigation';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),

  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], 'Password does not match')
    .required('Required'),
});

const Signup = ({ navigation }: AuthNavigationProps<'Signup'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: SignupSchema,
    initialValues: { email: '', password: '', passwordConfirmation: '' },
    onSubmit: (values) => navigation.navigate('Home'),
  });

  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title='Already have an Account?'
      action='Sign In Here'
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Text variant='title1' textAlign='center' marginBottom='l'>
        Create Account
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
          returnKeyLabel='next'
          returnKeyType='next'
          onSubmitEditing={() => passwordConfirmation.current?.focus()}
        />
        <Box marginBottom='m' />
        <TextInput
          ref={passwordConfirmation}
          onChangeText={handleChange('passwordConfirmation')}
          onBlur={handleBlur('passwordConfirmation')}
          value={values.passwordConfirmation}
          icon='lock'
          error={errors.passwordConfirmation}
          touched={touched.passwordConfirmation}
          placeholder='Re-enter your password'
          autoCompleteType='password'
          secureTextEntry
          autoCapitalize='none'
          returnKeyLabel='go'
          returnKeyType='go'
          onSubmitEditing={() => handleSubmit()}
        />

        <Box marginTop='m' alignItems='center'>
          <Button variant='primary' onPress={handleSubmit} label='Signup' />
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
