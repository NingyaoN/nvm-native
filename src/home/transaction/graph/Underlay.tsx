import React from 'react';
import moment from 'moment';
import { StyleSheet } from 'react-native';
import { Text, Box, useTheme } from '../../../components';
import { lerp } from './linear-interpolation';
interface UnderlayProps {
  minY: number;
  maxY: number;
  step: number;
  startDate: number;

  numberOfMonth: number;
}

export const MARGIN = 'xl';
const ROW_HEIGHT = 16;
const formatter = Intl.DateTimeFormat('en', { month: 'short' });

const Underlay = ({
  minY,
  maxY,
  step,
  startDate,
  numberOfMonth,
}: UnderlayProps) => {
  const theme = useTheme();
  const minDate = moment(startDate);
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent='space-between'>
        {[1, 0.66, 0.33, 0].map((t) => (
          <Box
            key={t}
            flexDirection='row'
            alignItems='center'
            height={ROW_HEIGHT}
            style={{
              top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
            }}>
            <Box width={theme.spacing[MARGIN]} paddingRight='s'>
              <Text textAlign='right'>{Math.round(lerp(minY, maxY, t))}</Text>
            </Box>
            <Box flex={1} height={1} backgroundColor='grey'></Box>
          </Box>
        ))}
      </Box>
      <Box
        marginLeft={MARGIN}
        height={theme.spacing[MARGIN]}
        flexDirection='row'
        alignItems='center'>
        {new Array(numberOfMonth)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, 'month'))
          .map((date, index) => (
            <Box width={step}>
              <Text key={index} textAlign='center'>
                {date.format('MMM')}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
