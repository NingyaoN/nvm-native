import React, { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { Box, useTheme } from '../Theme';
import { Feather as Icon } from '@expo/vector-icons';
import RoundedIcon from '../RoundedIcon';

interface TextInputProps extends RNTextInputProps {
  icon: any;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
    const color = theme.colors[reColor];
    const SIZE = theme.borderRadii.m * 2.5;

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
          <RoundedIcon
            name={!error ? 'check' : 'x'}
            size={SIZE}
            color='background'
            backgroundColor={!error ? 'primary' : 'danger'}
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
