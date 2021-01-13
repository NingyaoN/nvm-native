import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Text, Box, useTheme } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import CartContainer from './CartContainer';
import Item from './Item';

const { width } = Dimensions.get('window');
const aspectRatio = width / 375;
const height = 100 * aspectRatio;
const d = 'M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z ';

const Cart = ({ navigation }: HomeNavigationProps<'Cart'>) => {
  const theme = useTheme();

  return (
    <CartContainer>
      <Box>
        <Box backgroundColor='primary'>
          <Header
            dark
            title='Cart'
            left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
          />
        </Box>
        <View style={{ height: height / 2 }} />
        <Box
          style={{
            position: 'absolute',
            bottom: -height / 2,
            left: 0,
            right: 0,

            height,
          }}>
          <Svg viewBox='0 0 375 100' style={StyleSheet.absoluteFill}>
            <Path d={d} fill={theme.colors.primary} />
          </Svg>
          <Text variant='title2' textAlign='center' color='background'>
            3 Items Added
          </Text>
        </Box>
      </Box>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          borderBottomRightRadius: theme.borderRadii.xl,
          borderBottomLeftRadius: theme.borderRadii.xl,
        }}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </CartContainer>
  );
};

export default Cart;
