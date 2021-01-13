import React, { Children } from 'react';
import { Dimensions, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, { multiply } from 'react-native-reanimated';
import { useTransition, mix } from 'react-native-redash/lib/module/v1';
import { Box, Text, useTheme } from '../../components';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  children: React.ReactNode;
}

const { width } = Dimensions.get('window');

const Tabs = ({ tabs, children }: TabsProps) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const selectedTab = tabs[index];
  const transition = useTransition(index);
  const translateX = mix(transition, width * 0.25, width * 0.75);

  return (
    <Box flex={1}>
      <Box flexDirection='row'>
        {tabs.map((tab, index) => (
          <RectButton
            key={index}
            style={{ flex: 1 }}
            onPress={() => setIndex(index)}>
            <Box padding='m' style={{ paddingBottom: theme.spacing.m + 10 }}>
              <Text variant='title3' textAlign='center'>
                {tab.label}
              </Text>
            </Box>
          </RectButton>
        ))}

        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: -5,
            backgroundColor: theme.colors.primary,
            width: 10,
            height: 10,
            borderRadius: 5,
            transform: [{ translateX }],
          }}
        />
      </Box>

      <Animated.View
        style={{
          flex: 1,
          width: width * tabs.length,
          flexDirection: 'row',
          transform: [{ translateX: multiply(-width, transition) }],
        }}>
        {Children.map(children, (child, i) => (
          <Box flex={1} key={i} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

export default Tabs;
