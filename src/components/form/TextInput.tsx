import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import theme, { Box } from '../Theme';
import { Feather as Icon } from '@expo/vector-icons';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection={'row'}
      height={48}
      borderRadius='s'
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
      alignItems='center'>
      <Box padding='s'>
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius='m'
          justifyContent='center'
          alignItems='center'
          backgroundColor={!error ? 'primary' : 'danger'}>
          <Icon name={!error ? 'check' : 'x'} color='white' size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;