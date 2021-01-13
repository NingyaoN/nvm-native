import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import {
  createTheme,
  createText,
  createBox,
  ThemeProvider as RestyleThemeProvider,
  useTheme as useReTheme,
} from '@shopify/restyle';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};

export const palette = {
  white: 'white',
  darkGrey: '#8A8D90',
  orange: 'orange',
  pink: '#FF87A2',
  yellow: '#FFC641',
  violet: '#442CB9',
  lightBlue: '#BFEAF5',
  deepYellow: '#f77f00',
  grey: 'rgba(12, 13, 52, 0.05)',
  lightGrey: '#FAFAFA',
};

const theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    primaryLight: '#E7F9E7',
    danger: '#FF0058',
    background: palette.white,
    secondary: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.7)',
    button: '#0C0D34',
    graph1: palette.deepYellow,
    graph2: palette.violet,

    //drawer
    d1: palette.orange,
    d2: palette.pink,
    d3: palette.violet,
    d4: palette.yellow,

    //transaction
    t1: palette.darkGrey,
    t2: palette.grey,
    t3: palette.lightGrey,
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
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      color: 'background',
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
    title3: {
      fontSize: 16,
      lineHeight: 30,
      color: 'secondary',
      fontFamily: 'SFProText-Semibold',
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

    header: {
      fontSize: 12,
      fontFamily: 'SFProText-Semibold',
      lineHeight: 24,
      color: 'secondary',
    },
  },
});

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <RestyleThemeProvider {...{ theme }}>{children}</RestyleThemeProvider>
);
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();
export { theme };
