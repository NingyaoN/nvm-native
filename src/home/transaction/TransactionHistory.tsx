import React from 'react';
import { Dimensions, Image, StyleSheet, PixelRatio } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, Text, Header, makeStyles } from '../../components';
import { Theme } from '../../components/Theme';
import { HomeNavigationProps } from '../../components/Navigation';
import Graph, { TopCurve, DataPoint } from './graph';
import Transaction from './Transaction';

const footerHeight = Dimensions.get('window').width / 3.5;

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },

  scrollView: {
    paddingBottom: footerHeight,
  },
}));
const startDate = new Date('2019-09-01').getTime();
const numberOfMonths = 7;

const data: DataPoint[] = [
  {
    date: new Date('2019-09-01').getTime(),
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

  {
    date: new Date('2020-03-13').getTime(),
    value: 300,
    color: 'secondary',
    id: 535213,
  },

  {
    date: new Date('2019-11-13').getTime(),
    value: 300,
    color: 'orange',
    id: 5521342,
  },

  {
    date: new Date('2019-10-13').getTime(),
    value: 300,
    color: 'orange',
    id: 551213,
  },
];

const aspectRatio = 3;

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<'TransactionHistory'>) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor='background'>
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
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {data.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>

      <TopCurve {...{ footerHeight }} />
      <Box
        position='absolute'
        left={0}
        right={0}
        bottom={0}
        height={footerHeight}>
        <Image
          style={styles.footer}
          source={require('../../components/assets/patterns/1.jpg')}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
