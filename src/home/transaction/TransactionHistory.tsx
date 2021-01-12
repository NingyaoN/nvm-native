import React from 'react';
import { View } from 'react-native';
import { Box, Text, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<'TransactionHistory'>) => {
  return (
    <Box>
      <Header
        left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
        title='Transaction History'
      />
    </Box>
  );
};

export default TransactionHistory;
