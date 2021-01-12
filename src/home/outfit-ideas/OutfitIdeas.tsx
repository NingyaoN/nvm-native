import React, { useState } from 'react';
import { useTransition } from 'react-native-redash/lib/module/v1';

import { interpolateNode, sub } from 'react-native-reanimated';
import { Box, Text, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Background from './Background';
import Categories from './Categories';
import Card from './Card';

const cards = [
  {
    index: 3,
    source: require('../../images/pink-cup.jpg'),
  },
  {
    index: 2,
    source: require('../../images/blue.jpg'),
  },
  {
    index: 1,
    source: require('../../images/heavy-smoke.jpg'),
  },
  {
    index: 0,
    source: require('../../images/light-clound.jpg'),
  },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<'OutfitIdeas'>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  return (
    <Box flex={1} backgroundColor='background'>
      <Header
        title='Outfit Ideas'
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />

      <Categories />
      <Box flex={1}>
        <Background />
        {/* {cards.map(
          ({ index }) =>
            index >= currentIndex && (
              <Card
                key={index}
                position={interpolateNode(index, {
                  inputRange: [aIndex, cards.length - 1],
                  outputRange: [0, 1],
                })}
                onSwipe={() => setCurrentIndex((prev) => prev + 1)}
              />
            )
        )} */}
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                source={source}
                step={step}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
