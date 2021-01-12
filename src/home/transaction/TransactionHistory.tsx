import React from 'react';
import { Box, Text, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Graph, { DataPoint } from './graph';
const data: DataPoint[] = [
  {
    date: new Date('2020-06-13').getTime(),
    value: 0,
    color: 'primary',
  },
  {
    date: new Date('2020-03-12').getTime(),
    value: 410,
    color: 'violet',
  },
  {
    date: new Date('2020-01-01').getTime(),
    value: 120,
    color: 'danger',
  },
  {
    date: new Date('2019-01-13').getTime(),
    value: 300,
    color: 'orange',
  },
];
const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<'TransactionHistory'>) => {
  return (
    <Box flex={1} backgroundColor='white'>
      <Header
        left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
        right={{ icon: 'share', onPress: () => true }}
        title='Transaction History'
      />

      <Box padding='m'>
        <Box
          flexDirection='row'
          justifyContent='space-between'
          alignItems='flex-end'>
          <Box>
            <Text color='secondary' opacity={0.3} variant='header'>
              TOTAL SPENT
            </Text>
            <Text variant='title1'>$1235.69</Text>
          </Box>
          <Box backgroundColor='primaryLight' borderRadius='m' padding='s'>
            <Text color='primary'> All Time</Text>
          </Box>
        </Box>
        <Graph data={data} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
