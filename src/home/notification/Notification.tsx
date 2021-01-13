import React from 'react';
import { View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { Box, Text, useTheme } from '../../components';

interface NotificationProps {
  title: string;
  description: string;
}
const Notification = ({ title, description }: NotificationProps) => {
  const [toggled, setToggled] = React.useState(false);
  const theme = useTheme();

  return (
    <Box flexDirection='row' marginBottom='m'>
      <Box flex={1} justifyContent='center'>
        <Text variant='title3'>{title}</Text>
        <Text variant='body'>{description}</Text>
      </Box>
      <Box paddingVertical='m'>
        <Switch
          value={toggled}
          onValueChange={() => setToggled((prev) => !prev)}
          trackColor={{
            true: theme.colors.primary,
            false: theme.colors.t2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Notification;
