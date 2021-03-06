import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text, theme, Theme } from './Theme';
export interface RoundedIconProps {
  name: any;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor?: keyof Theme['colors'];
  iconRatio: number;
  align: 'center' | 'flex-start' | 'flex-end';
}

const RoundedIcon = ({
  name,
  size,
  color,
  iconRatio,
  backgroundColor,
  align,
}: RoundedIconProps) => {
  const iconSize = iconRatio * size;
  return (
    <Box
      height={size}
      width={size}
      borderRadius='m'
      justifyContent='center'
      alignItems={align}
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}>
      <Text style={{ width: iconSize, height: iconSize }} color={color}>
        <Icon size={iconSize} color={theme.colors[color]} name={name} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
  align: 'center',
};
export default RoundedIcon;
