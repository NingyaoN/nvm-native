import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OutfitIdeas from './outfit-ideas';
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
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
