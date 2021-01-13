import React from 'react';
import moment from 'moment';
import { DataPoint } from './graph';
import { Box, Text } from '../../components';

interface TransactionProps {
  transaction: DataPoint;
}

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <Box
      marginTop='l'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'>
      <Box>
        <Box flexDirection='row' alignItems='center' marginBottom='s'>
          <Box
            backgroundColor={transaction.color}
            marginRight='s'
            style={{ width: 10, height: 10, borderRadius: 5 }}
          />
          <Text variant='title3'>{`#${transaction.id}`}</Text>
        </Box>
        <Text color='t1'>
          {`$${transaction.value} -  ${moment(transaction.date).format(
            'DD MMMM, YYYY'
          )}`}
        </Text>
      </Box>
      <Box>
        <Text color='secondary' variant='button'>
          See More
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
