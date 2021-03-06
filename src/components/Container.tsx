import React, { ReactNode } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, useTheme } from './Theme';

const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children?: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2 | 3;
}

export const assets = [
  require('./assets/patterns/1.jpg'),
  require('./assets/patterns/1.jpg'),
  require('./assets/patterns/1.jpg'),
  require('./assets/patterns/1.jpg'),
] as const; //add more patterns here

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const asset = assets[pattern];
  return (
    // set scrollEnabled to false when scrollview pushes up.
    <KeyboardAwareScrollView scrollEnabled={true}>
      <Box
        height={
          wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
        }
        backgroundColor='secondary'>
        <Box backgroundColor='background'>
          <Box
            borderBottomLeftRadius='xl'
            overflow='hidden'
            height={height * 0.61}>
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow='hidden'>
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius='xl'
            // borderTopRightRadius='xl'
            backgroundColor='background'
            flex={1}
            padding='xl'
            justifyContent='center'>
            {children}
          </Box>
        </Box>
        <Box backgroundColor='secondary' paddingTop='m'>
          {footer}

          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
