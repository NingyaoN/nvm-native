import React from 'react';
import { Dimensions, Image } from 'react-native';

import { Box, Text, RoundedIconButton } from '../../components';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import { theme } from '../../components/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
    label: 'Outfit Ideas1',
    screen: 'OutfitIdeas2',
    color: 'darkGrey',
  },
  {
    icon: 'feather',
    label: 'Logout',
    screen: 'Logout',
    color: 'danger',
  },
];

const Drawer = () => {
  // const insets = useSafeAreaInsets();
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
          backgroundColor='secondary'
          flexDirection='row'
          paddingTop='l'
          justifyContent='space-between'
          paddingHorizontal='m'
          style={{ paddingTop: 30 /* insets.top */ }}>
          <RoundedIconButton
            name='x'
            size={24}
            color='white'
            backgroundColor='secondary'
            onPress={() => true}
          />
          <Text color='white'>MY PROFILE</Text>
          <RoundedIconButton
            name='shopping-bag'
            size={24}
            color='white'
            backgroundColor='secondary'
            onPress={() => true}
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
            top={-theme.spacing.xl}
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

          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
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
            position: 'absolute',
            left: 0,
            right: 0,
            top: -height * (1 - 0.61),
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
