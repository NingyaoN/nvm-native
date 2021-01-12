import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Dimensions, Image } from 'react-native';
import { Box, Text, Header } from '../../components';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import { useTheme } from '../../components';
const { width } = Dimensions.get('window');
const aspectRatio = 750 / 1125;

export const DRAWER_WIDTH = width * 0.8;
const height = DRAWER_WIDTH * aspectRatio;

export const assets = [
  require('../../components/assets/patterns/1.jpg'),
] as const; //add more patterns here

const items: DrawerItemProps[] = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },

  {
    icon: 'heart',
    label: 'Favourite Outfits',
    screen: 'FavouriteOutfits',
    color: 'orange',
  },
  {
    icon: 'clock',
    label: 'Transaction Story',
    screen: 'TransactionHistory',
    color: 'darkGrey',
  },
  {
    icon: 'feather',
    label: 'Logout',
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Authentication' }],
        })
      ),
    color: 'danger',
  },
];

function Drawer() {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor='white'>
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius='xl'
          backgroundColor='secondary'>
          <Header
            title='menu'
            left={{
              icon: 'x',
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: 'shopping-bag', onPress: () => true }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor='secondary' />
        <Box flex={1} backgroundColor='primary' />
        <Image
          source={assets[0]}
          style={{
            position: 'absolute',
            bottom: -height * 0.61,
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height,
          }}
        />

        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor='white'
          borderTopLeftRadius='xl'
          borderBottomRightRadius='xl'
          justifyContent='center'
          padding='xl'>
          <Box
            // top={-theme.spacing.xl}
            alignSelf='center'
            backgroundColor='primary'
            height={100}
            width={100}
            style={{ borderRadius: 50 }}
          />

          <Box marginVertical='m'>
            <Text variant='title1' textAlign='center'>
              John Doe
            </Text>
            <Text variant='body' textAlign='center'>
              john@doe.com
            </Text>
          </Box>

          {items.map((item, id) => (
            <DrawerItem key={id} {...item} />
          ))}
        </Box>
      </Box>

      <Box
        backgroundColor='white'
        overflow='hidden'
        height={height * 0.61}
        width={DRAWER_WIDTH}>
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
}

export default Drawer;
