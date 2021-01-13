import React from 'react';
import { Box, Button, Text, useTheme } from '../../components';
interface CheckboxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckboxGroup = ({ options, radio }: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const theme = useTheme();
  return (
    <Box flexDirection='row' flexWrap='wrap' marginTop='s'>
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }

                setSelectedValues([...selectedValues]);
              }
            }}
            key={value}
            variant={
              selectedValues.indexOf(value) !== -1 ? 'primary' : 'default'
            }
            label={label}
            style={{
              width: 'auto',
              height: 'auto',
              padding: 16,
              margin: 4,
              marginBottom: theme.spacing.m,

              marginRight: theme.spacing.m,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
