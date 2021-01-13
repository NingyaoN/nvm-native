import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import RoundedIconButton from './RoundedIconButton';
import { Box, Text } from './Theme';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };

  right?: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
  title: string;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'background' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 't3';
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
        align={backgroundColor === undefined ? 'flex-start' : 'center'}
        {...{ color, backgroundColor }}
      />
      <Text variant='header' {...{ color }}>
        {title.toUpperCase()}
      </Text>

      {right ? (
        <RoundedIconButton
          name={right.icon}
          size={44}
          iconRatio={0.4}
          align={backgroundColor === undefined ? 'flex-end' : 'center'}
          onPress={right.onPress}
          {...{ color, backgroundColor }}
        />
      ) : (
        <View style={{ width: 44 }} />
      )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};
export default Header;
