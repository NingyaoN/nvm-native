import React, { ReactNode } from 'react';
import Svg, { Path, G } from 'react-native-svg';

import { Text, View } from 'react-native';
import { Box } from '../../components';
import { theme } from '../../components';

import { Google, WhatsApp, Facebook } from '../../components';

interface SocialLoginProps {
  children: ReactNode;
}

const SIZE = theme.borderRadii.l * 2;

const SocialIcon = ({ children }: SocialLoginProps) => {
  return (
    <Box
      marginHorizontal='s'
      backgroundColor='white'
      width={SIZE}
      height={SIZE}
      borderRadius='l'
      justifyContent='center'
      alignItems='center'>
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection='row' justifyContent='center'>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <WhatsApp />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
