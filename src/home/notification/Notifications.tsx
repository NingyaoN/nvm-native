import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Box, Header, ContentFooter } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Notification from './Notification';
const Notifications = ({
  navigation,
}: HomeNavigationProps<'Notifications'>) => {
  return (
    <ContentFooter>
      <Box backgroundColor='background'>
        <Header
          title='Notification Settings'
          left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        />
        <Box padding='m'>
          <Notification
            title='Outfit Ideas'
            description='Receive daily notifications'
          />
          <Notification
            title='Discounts & Sales'
            description='Buy the stuff you love for less'
          />
          <Notification
            title='Stock Notifications'
            description='If the product you come back in.'
          />
          <Notification title='New Stuff' description='Hear it first. ' />
        </Box>
      </Box>
    </ContentFooter>
  );
};

export default Notifications;
