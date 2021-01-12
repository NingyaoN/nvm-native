import React from 'react';
import { View, Dimensions } from 'react-native';
import {
  Transition,
  TransitioningView,
  Transitioning,
} from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme, Text, Header, Box } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Footer from './Footer';
import Outfit from './Outfit';
import TopCurve from './TopCurve';
const defaultOutfits = [
  {
    id: 0,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 1,
    color: '#BEECC4',
    aspectRatio: 120 / 145,
    selected: false,
  },

  {
    id: 2,
    color: '#D5C3BB',
    aspectRatio: 210 / 145,
    selected: false,
  },

  {
    id: 3,
    color: '#D5C3BB',
    aspectRatio: 160 / 145,
    selected: false,
  },
  {
    id: 4,
    color: 'red',
    aspectRatio: 160 / 145,
    selected: false,
  },

  {
    id: 5,
    color: 'black',
    aspectRatio: 200 / 145,
    selected: false,
  },

  {
    id: 6,
    color: 'blue',
    aspectRatio: 160 / 145,
    selected: false,
  },

  {
    id: 7,
    color: 'purple',
    aspectRatio: 200 / 145,
    selected: false,
  },
];

const { width: wWidth } = Dimensions.get('window');

const Favourite = ({ navigation }: HomeNavigationProps<'FavouriteOutfits'>) => {
  const transition = (
    <Transition.Together>
      <Transition.Out type='fade' />
      <Transition.In type='fade' />
    </Transition.Together>
  );
  const [outfits, setOutfits] = React.useState(defaultOutfits);
  const list = React.useRef<TransitioningView>(null);
  const [footerHeight, setFooterHeight] = React.useState(0);
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  return (
    <Box flex={1} backgroundColor='background'>
      <Header
        title='Favourite Outfits'
        left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />

      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}>
          <Transitioning.View ref={list} transition={transition}>
            <Box flexDirection='row'>
              <Box marginRight='s'>
                {outfits
                  .filter((_, i) => i % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter((_, i) => i % 2 === 0)
                  .map((outfit) => (
                    <Outfit width={width} key={outfit.id} outfit={outfit} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
        <TopCurve footerHeight={footerHeight} />
        <Box
          position='absolute'
          bottom={0}
          left={0}
          right={0}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}>
          <Footer
            label='Add To Favourites'
            onPress={() => {
              list.current?.animateNextTransition();
              setOutfits(outfits.filter((outfit) => !outfit.selected));
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Favourite;
