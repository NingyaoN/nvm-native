import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Text, TextInput } from '../../components';
import CheckboxGroup from './CheckboxGroup';
import RoundedCheckboxGroup from './RoundedCheckbox';
import { HomeNavigationProps } from '../../components/Navigation';

const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
];
const PersonalInfoSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

const PersonalInfo = ({ navigation }: HomeNavigationProps<'EditProfile'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: PersonalInfoSchema,
    initialValues: { name: '', password: '', address: '', gender: '' },
    onSubmit: () => true,
  });
  return (
    <ScrollView>
      <Box padding='m'>
        <Text variant='body' marginBottom='m'>
          Account Information
        </Text>
        <Box marginVertical='m'>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            icon='user'
            placeholder='Enter your email'
            error={errors.name}
            touched={touched.name}
            autoCompleteType='name'
            returnKeyLabel='next'
            returnKeyType='next'
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <Box marginBottom='m'>
          <TextInput
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
          />
        </Box>
        <Box marginBottom='m'>
          <TextInput
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            icon='map-pin'
            error={errors.address}
            touched={touched.address}
            placeholder='Enter your address'
            autoCompleteType='street-address'
            secureTextEntry
            autoCapitalize='none'
            returnKeyLabel='go'
            returnKeyType='go'
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <CheckboxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
