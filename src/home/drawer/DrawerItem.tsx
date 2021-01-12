import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Theme } from '../../components/Theme';
import { useTheme, RoundedIcon, Box, Text, HomeRoutes } from '../../components';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export interface DrawerItemProps {
  icon: string;
  label: string;
  color: keyof Theme['colors'];
  screen: keyof HomeRoutes;
}
const DrawerItem = ({ icon, label, color, screen }: DrawerItemProps) => {
  const { navigate } = useNavigation<
    DrawerNavigationProp<HomeRoutes, 'OutfitIdeas'>
  >();

  const theme = useTheme();
  return (
    <RectButton
      onPress={() => navigate(screen)}
      style={{ borderRadius: theme.borderRadii.m }}>
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
