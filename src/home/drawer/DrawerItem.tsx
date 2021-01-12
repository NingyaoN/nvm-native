import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Theme } from '../../components/Theme';
import { useTheme, RoundedIcon, Box, Text, HomeRoutes } from '../../components';
import { RectButton } from 'react-native-gesture-handler';

interface BaseDrawerItem {
  icon: string;
  color: keyof Theme['colors'];
  label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, label, color, ...props }: DrawerItemProps) => {
  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, 'OutfitIdeas'>
  >();

  const theme = useTheme();
  return (
    <RectButton
      onPress={() =>
        'screen' in props
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }
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
