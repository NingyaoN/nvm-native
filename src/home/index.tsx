import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OutfitIdeas from './outfit-ideas';

const Drawer = createDrawerNavigator();
const HomeNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='OutfitIdeas' component={OutfitIdeas} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
