import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

import { Text } from '../../components';
const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  title: {
    fontSize: 80,
    color: 'white',
    textAlign: 'center',
    lineHeight: 80,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});

interface SlideProps {
  label: string;
  right: boolean;
}
const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 60 : width / 2 - 330 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant='hero'>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
