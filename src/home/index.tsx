import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OutfitIdeas from './outfit-ideas';
import FavouriteOutfits from './favourite';
import TransactionHistory from './transaction';
import EditProfile from './profile';
import Notifications from './notification';
import Cart from './cart';
import { HomeRoutes } from '../components';

import DrawerContent, { DRAWER_WIDTH } from './drawer';

const Drawer = createDrawerNavigator<HomeRoutes>();
const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      drawerStyle={{
        width: DRAWER_WIDTH,
      }}>
      <Drawer.Screen name='OutfitIdeas' component={OutfitIdeas} />
      <Drawer.Screen name='FavouriteOutfits' component={FavouriteOutfits} />
      <Drawer.Screen name='TransactionHistory' component={TransactionHistory} />
      <Drawer.Screen name='EditProfile' component={EditProfile} />
      <Drawer.Screen name='Notifications' component={Notifications} />
      <Drawer.Screen name='Cart' component={Cart} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
