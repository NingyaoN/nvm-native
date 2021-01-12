import React from 'react';
import { View, Dimensions } from 'react-native';
import {
  BorderlessButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useTheme, BorderlessTap, Box, RoundedIcon } from '../../components';

const { width } = Dimensions.get('window');

interface OutfitProps {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;
  };
  width: number;
}
const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = React.useState(false);
  const height = width * outfit.aspectRatio;
  return (
    <BorderlessTap
      onPress={() => {
        setSelected((p) => !p);
        outfit.selected = !outfit.selected;
      }}>
      <Box
        borderRadius='m'
        marginBottom='s'
        alignItems='flex-end'
        padding='m'
        style={{ backgroundColor: outfit.color, width, height }}>
        {selected && (
          <RoundedIcon
            color='background'
            size={24}
            name='check'
            backgroundColor='primary'
          />
        )}
      </Box>
    </BorderlessTap>
  );
};

export default Outfit;
