import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};

// const palette = {
//   purpleLight: '#8C6FF7',
//   purplePrimary: '#5A31F4',
//   purpleDark: '#3F22AB',

//   greenLight: '#56DCBA',
//   greenPrimary: '#0ECD9D',
//   greenDark: '#0A906E',

//   black: '#0B0B0B',
//   white: '#F0F2F3',
//   slide: { grey: '#F4F0EF' },
// };

const theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    primaryLight: '#E7F9E7',
    white: 'white',
    danger: '#FF0058',
    secondary: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.7)',
    grey: 'rgba(12, 13, 52, 0.05)',
    button: '#0C0D34',
    darkGrey: '#8A8D90',
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      color: 'white',
      textAlign: 'center',
      lineHeight: 80,
      fontFamily: 'SF-Pro-Display-Bold',
    },
    title1: {
      fontSize: 28,
      color: 'secondary',
      fontFamily: 'SF-Pro-Display-Medium',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      color: 'text',
    },
  },
});

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();
export { theme };
