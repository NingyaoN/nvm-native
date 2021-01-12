import React, { ReactNode } from 'react';

import { Box, useTheme } from '../../components';

import { Google, WhatsApp, Facebook } from '../../components';

interface SocialLoginProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialLoginProps) => {
  const theme = useTheme();

  const SIZE = theme.borderRadii.l * 2;

  return (
    <Box
      marginHorizontal='s'
      backgroundColor='background'
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
