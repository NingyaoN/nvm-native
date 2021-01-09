import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { Button } from '../../components/';
import { Text } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  subtitle: {
    marginBottom: 12,
    color: '#0C0D34',
    textAlign: 'center',
    fontFamily: 'SFProText-Bold',
  },
  description: {
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'SFProText-Regular',
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  x: Animated.SharedValue<number>;
  onPress: () => void;
}

const Subslide = ({
  subtitle,
  description,
  last,
  x,
  onPress,
}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant='title2' style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant='body' style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's Get Started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
