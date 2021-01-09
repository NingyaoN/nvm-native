import React from 'react';
import { Linking } from 'react-native';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  StackNavigationProps,
  Routes,
  TextInput,
  Text,
  Button,
  Container,
} from '../../components';
import Footer from '../components/Footer';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, 'ForgotPassword'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: { email: '' },
    onSubmit: (values) => console.log(values),
  });

  const footer = (
    <Footer
      title='Don"t work ?'
      action='Try another way'
      onPress={() => Linking.openURL('mailto:help@support.com')}
    />
  );

  return (
    <Container {...{ footer }}>
      <Box padding='xl'>
        <Text variant='title1' textAlign='center' marginBottom='s'>
          Reset Password
        </Text>

        <Text textAlign='center' marginBottom='l'>
          Enter your email below.
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
              returnKeyLabel='go'
              returnKeyType='go'
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>

          <Box marginTop='m' alignItems='center'>
            <Button
              variant='primary'
              onPress={handleSubmit}
              label='Reset Password'
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
