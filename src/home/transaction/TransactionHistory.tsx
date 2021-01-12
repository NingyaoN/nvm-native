import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, Text, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Graph, { DataPoint } from './graph';
import Transaction from './Transaction';

const startDate = new Date('2019-09-01').getTime();
const numberOfMonths = 7;

const data: DataPoint[] = [
  {
    date: new Date('2019-10-01').getTime(),
    value: 410,
    color: 'violet',
    id: 1545,
  },
  {
    date: new Date('2019-12-01').getTime(),
    value: 120,
    color: 'danger',
    id: 124645,
  },
  {
    date: new Date('2020-02-13').getTime(),
    value: 300,
    color: 'orange',
    id: 55213,
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

      <Box padding='m' flex={1}>
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
        <Graph
          data={data}
          startDate={startDate}
          numberOfMonths={numberOfMonths}
        />
        <ScrollView>
          {data.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
