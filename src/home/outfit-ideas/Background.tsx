import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Box } from '../../components';
import { useTheme, palette } from '../../components';

interface BackgrounProps {}

export const assets = [require('../../images/orange-announce.jpg')] as const; //add more patterns here

const Background = () => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} style={{ backgroundColor: palette.lightBlue }}>
        <Box
          flex={1}
          backgroundColor='background'
          borderBottomRightRadius='xl'
        />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor='background' />
        <Box flex={1} backgroundColor='secondary' />
        {/* <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        /> */}
      </Box>
      <Box flex={1 / 3} style={{ backgroundColor: palette.lightBlue }}>
        <Box flex={1} backgroundColor='secondary' borderTopLeftRadius='xl' />
      </Box>
    </View>
  );
};

export default Background;
