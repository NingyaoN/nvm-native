import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#2CB9B0',
    width: 8,
    borderRadius: 4,
    marginRight: 4,
  },
});
interface DotProps {
  index: number;
  scrollOffset: Animated.SharedValue<number>;
}

const Dot = ({ index, scrollOffset }: DotProps) => {
  const opacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value / width,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    return { opacity };
  });

  const scaleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollOffset.value / width,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );
    return { transform: [{ scale }] };
  });
  return <Animated.View style={[styles.dot, opacityStyle, scaleStyle]} />;
};

export default Dot;
