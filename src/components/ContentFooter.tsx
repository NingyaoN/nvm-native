import React, { ReactNode } from 'react';
import { Dimensions, Image, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from './Theme';
interface ContentFooterProps {
  children: ReactNode;
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width,
    height: (width * 24) / 32,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
});
const viewBox = {
  width: 375,
  height: 100,
};
const height = (100 * width) / viewBox.width;
const d = 'M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100';

const ContentFooter = ({ children }: ContentFooterProps) => {
  const theme = useTheme();
  return (
    <>
      <View style={styles.background}>
        <Image source={require('../images/blue.jpg')} style={styles.image} />

        <Image source={require('../images/blue.jpg')} style={styles.image} />
        <Image source={require('../images/blue.jpg')} style={styles.image} />
      </View>
      {children}
      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(' ')}>
        <Path fill={theme.colors.background} d={d}></Path>
      </Svg>
    </>
  );
};

export default ContentFooter;
