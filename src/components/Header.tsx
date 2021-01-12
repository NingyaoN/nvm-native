import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';
import { Box, Text } from './Theme';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };

  right: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
  title: string;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'lightGrey';
  console.log('color', dark, color);
  return (
    <Box
      flexDirection='row'
      style={{ marginTop: insets.top }}
      alignItems='center'
      justifyContent='space-between'
      paddingHorizontal='m'>
      <RoundedIconButton
        name={left.icon}
        size={44}
        onPress={left.onPress}
        iconRatio={0.4}
        {...{ color, backgroundColor }}
      />
      <Text variant='header' {...{ color }}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={44}
        iconRatio={0.4}
        onPress={right.onPress}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};
export default Header;
