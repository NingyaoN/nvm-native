import { addListener } from 'expo-updates';
import React from 'react';
import { View } from 'react-native';
import {
  BorderlessButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Button, Text, useTheme } from '../../components';
interface CheckboxGroupProps {
  options: { value: string }[];
  valueIsColor?: boolean;
}

const RoundedCheckboxGroup = ({
  options,
  valueIsColor,
}: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const theme = useTheme();
  return (
    <Box flexDirection='row' flexWrap='wrap' marginTop='s'>
      {options.map(({ value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        const backgroundColor = isSelected
          ? theme.colors.primary
          : theme.colors.t2;
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(value);
              }

              setSelectedValues([...selectedValues]);
            }}
            key={value}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: theme.spacing.m,
                marginRight: theme.spacing.m,
                borderWidth: isSelected ? 1 : 0,
                borderColor: theme.colors.t2,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: valueIsColor ? value : backgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {!valueIsColor && (
                  <Text
                    textAlign='center'
                    variant='header'
                    color={isSelected ? 'background' : 'secondary'}>
                    {value.toUpperCase()}
                  </Text>
                )}

                {valueIsColor && isSelected && (
                  <Icon color='white' name='check' size={16} />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </Box>
  );
};

export default RoundedCheckboxGroup;
