import React from 'react';
import { Theme } from '../../components/Theme';
import { RoundedIcon, Box, Text } from '../../components';
import { RectButton } from 'react-native-gesture-handler';

export interface DrawerItemProps {
  icon: string;
  label: string;
  color: keyof Theme['colors'];
  screen: string;
}
const DrawerItem = ({ icon, label, color, screen }: DrawerItemProps) => {
  return (
    <RectButton>
      <Box flexDirection='row' alignItems='center' padding='s' borderRadius='m'>
        <RoundedIcon
          name={icon}
          size={36}
          backgroundColor={color}
          color='white'
        />
        <Text variant='button' color='secondary' marginLeft='m'>
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
