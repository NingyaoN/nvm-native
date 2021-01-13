import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Box, Text } from '../../components';
import CheckboxGroup from './CheckboxGroup';
import RoundedCheckboxGroup from './RoundedCheckbox';
const outfitType = [
  { value: 'men', label: 'For men' },
  { value: 'women', label: 'For women' },
  { value: 'both', label: 'For both' },
];

const sizes = [
  { value: 's' },
  { value: 'm' },
  { value: 'l' },
  { value: 'xl' },
  { value: 'xxl' },
];

const colors = [
  { value: '#0C0D34' },
  { value: '#ff0058' },
  { value: '#50B9DE' },
  { value: '#00D994' },
  { value: '#FE5E33' },
];

const prefferedBrands = [
  { value: 'addidas', label: 'Addidas' },
  { value: 'puma', label: 'Puma' },
  { value: 'converse', label: 'Converse' },
  { value: 'jordan', label: 'Jordan' },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box>
        <Text variant='body'>What type of outfit you usually wear ?</Text>
        <CheckboxGroup options={outfitType} radio />
        <Text variant='body'>What is your clothing size? </Text>
        <RoundedCheckboxGroup options={sizes} />
        <Text variant='body'>My Preffered clothing colors</Text>
        <RoundedCheckboxGroup options={colors} valueIsColor />
        <Text variant='body'>My Preferred Brands</Text>
        <CheckboxGroup options={prefferedBrands} />
      </Box>
    </ScrollView>
  );
};

export default Configuration;
