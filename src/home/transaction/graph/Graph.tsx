import React, { useLayoutEffect, useRef } from 'react';
import moment from 'moment';
import { Dimensions, View } from 'react-native';
import { Box, useTheme } from '../../../components';
import { Theme } from '../../../components/Theme';
import Underlay, { MARGIN } from './Underlay';
import { lerp } from './linear-interpolation';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
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

const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 305;

const transition = (
  <Transition.Together>
    <Transition.In
      type='slide-bottom'
      durationMs={650}
      interpolation='easeInOut'
    />
  </Transition.Together>
);
const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const theme = useTheme();
  const ref = useRef<TransitioningView>(null);
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const values = data.map((p) => p.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / numberOfMonths;

  //TODO: animate doesn't worrk
  useLayoutEffect(() => {
    ref.current?.animateNextTransition();
  }, []);
  return (
    <Box paddingBottom={MARGIN} marginTop='xl' paddingLeft={MARGIN}>
      <Underlay
        step={step}
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonth={numberOfMonths}
      />
      <Transitioning.View
        style={{ width, height, overflow: 'hidden' }}
        ref={ref}
        transition={transition}>
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );

          return (
            <Box
              key={point.id}
              position='absolute'
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}>
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
            </Box>
          );
        })}
      </Transitioning.View>
    </Box>
  );
};

export default Graph;
