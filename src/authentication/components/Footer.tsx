import React from 'react';
import { View } from 'react-native';
import {
  BorderlessButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Button, Box, Text } from '../../components';
import SocialLogin from './SocialLogin';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <Box alignItems='center' marginBottom='m'>
      <SocialLogin />
      <BorderlessButton {...{ onPress }} style={{ marginTop: 10 }}>
        <Text variant='button' color='background'>
          <Text variant='button' color='background'>
            {`${title}  `}
          </Text>
          <Text marginLeft='s' variant='button' color='primary'>
            {action}
          </Text>
        </Text>
      </BorderlessButton>
    </Box>
  );
};

export default Footer;
