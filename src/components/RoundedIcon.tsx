import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Theme } from '../components/Theme';
import { Box, Text } from '../components';
export interface RoundedIconProps {
  name: any;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: string;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.82;
  return (
    <Box
      height={size}
      width={size}
      borderRadius='m'
      justifyContent='center'
      alignItems='center'
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}>
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={size * 0.8} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
