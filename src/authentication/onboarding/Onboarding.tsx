import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
} from 'react-native-reanimated';

import { interpolateColor } from 'react-native-redash';

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from './Slide';
import Subslide from './SubSlide';
import { Dot, useTheme, makeStyles } from '../../components';
import { Theme } from '../../components/Theme';
import SliderImage from './SliderImage';
const { width } = Dimensions.get('window');
import { StackNavigationProps, Routes } from '../../components';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    top: 12,
    height: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfits? Don't worry find the best oufit here",
    picture: {
      src: require('../../images/2.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Playfull',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of ourfit ideas',
    picture: {
      src: require('../../images/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individuals & unique style and look amazing everyday',
    picture: {
      src: require('../../images/3.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the best trends in fashion and explore your personality',
    picture: {
      src: require('../../images/4.png'),
      width: 2513,
      height: 3583,
    },
  },
];

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, 'Onboarding'>) => {
  const styles = useStyles();
  const theme = useTheme();
  const scrollRef = useRef<Animated.ScrollView>(null);
  const scrollOffset = useSharedValue(0);

  const backgroundStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollOffset.value,
      [0, width, width * 2, width * 3],
      ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
    );
    return { backgroundColor };
  });

  const bottomBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollOffset.value,
      [0, width, width * 2, width * 3],
      ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
    );
    return { backgroundColor };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.x;
    },
  });

  const transfromStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -scrollOffset.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, backgroundStyles]}>
        {slides.map(({ picture }, index) => {
          return (
            <SliderImage
              key={index}
              index={index}
              scrollOffset={scrollOffset}
              picture={picture}
            />
          );
        })}
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
          scrollEventThrottle={1}
          ref={scrollRef}>
          {slides.map(({ title }, index) => (
            <Slide label={title} key={index} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[StyleSheet.absoluteFillObject, bottomBackgroundStyle]}
        />

        <View style={[styles.footerContent]}>
          <Animated.View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} scrollOffset={scrollOffset} index={index} />
            ))}
          </Animated.View>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                width: width * slides.length,
              },
              transfromStyle,
            ]}>
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  onPress={() =>
                    last
                      ? navigation.navigate('Welcome')
                      : scrollRef.current!.scrollTo({
                          x: width * (index + 1),
                          animated: true,
                        })
                  }
                  key={index}
                  x={scrollOffset}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
