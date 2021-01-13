import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme, Text } from './Theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    color: '#0C0D34',
    textAlign: 'center',
  },
});

interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent';
  label?: string;
  onPress: () => void;
  style?: RectButtonProperties['style'];
}

const Button = ({ variant, label, onPress, style }: ButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.t2;
  const color =
    variant === 'primary' ? theme.colors.background : theme.colors.secondary;
  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}>
      <Text variant='button' style={[{ color }]}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
