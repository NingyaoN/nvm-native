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
import KeyboardAvoidingComponent from './KeyboardAvoidingView';
const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const styles = StyleSheet.create({});
interface ContainerProps {
  children?: ReactNode;
  footer: ReactNode;
}

export const assets = [require('./assets/patterns/1.jpg')];

const Container = ({ children, footer }: ContainerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    // set scrollEnabled to false when scrollview pushes up.
    <KeyboardAwareScrollView scrollEnabled={true}>
      <Box
        height={
          wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
        }
        backgroundColor='secondary'>
        <Box backgroundColor='white'>
          <Box
            borderBottomLeftRadius='xl'
            overflow='hidden'
            height={height * 0.61}>
            <Image
              source={assets[0]}
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
            source={assets[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius='xl'
            borderTopLeftRadius={0}
            // borderTopRightRadius='xl'
            backgroundColor='white'
            flex={1}>
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
