import React from 'react';
import moment from 'moment';
import { Dimensions, View } from 'react-native';
import { Box, useTheme } from '../../../components';
import { Theme } from '../../../components/Theme';
import Underlay, { MARGIN } from './Underlay';
import { lerp } from './linear-interpolation';
import Animated, { multiply, sub, divide } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';
import { useTransition } from 'react-native-redash/lib/module/v1';
export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme['colors'];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 305;

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const isFocused = useIsFocused();
  const transition = useTransition(isFocused, { duration: 650 });
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const values = data.map((p) => p.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / numberOfMonths;

  return (
    <Box paddingBottom={MARGIN} marginTop='xl' paddingLeft={MARGIN}>
      <Underlay
        step={step}
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonth={numberOfMonths}
      />
      <View style={{ width, height, overflow: 'hidden' }}>
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );

          const totalHeight = lerp(0, height, point.value / maxY);
          const currentHeight = multiply(totalHeight, transition);

          const translateY = divide(sub(totalHeight, currentHeight), 2);
          return (
            <AnimatedBox
              key={point.id}
              position='absolute'
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
              style={{ transform: [{ translateY }, { scaleY: transition }] }}>
              <Box
                backgroundColor={point.color}
                position='absolute'
                opacity={0.1}
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius='m'
              />

              <Box
                backgroundColor={point.color}
                position='absolute'
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius='m'
              />
            </AnimatedBox>
          );
        })}
      </View>
    </Box>
  );
};

export default Graph;
