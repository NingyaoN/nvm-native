import React from 'react';
import { View, Dimensions } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Header, useTheme, Text, Box } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import { theme } from '../../components/Theme';
import Tabs from './Tabs';
import Configuration from './Configuration';
import PersonalInfo from './PersonalInfo';

interface EditProfileProps {}
const { width } = Dimensions.get('window');

const tabs = [
  {
    id: 'configuration',
    label: 'Configuration',
  },
  {
    id: 'personalInfo',
    label: 'Personal Info',
  },
];

const EditProfile = ({ navigation }: HomeNavigationProps<'EditProfile'>) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor='background'>
      <Box flex={0.25} backgroundColor='background'>
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius='xl'
          backgroundColor='secondary'>
          <Header
            title='Edit Profile'
            left={{
              icon: 'arrow-left',
              onPress: () => navigation.goBack(),
            }}
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position='absolute'
          left={width / 2 - 50}
          top={-50}
          backgroundColor='primary'
          height={100}
          width={100}
          style={{ borderRadius: 50 }}
        />
        <Box marginVertical='m' style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant='title1' textAlign='center'>
            John Doe
          </Text>
          <Text variant='body' textAlign='center'>
            john@doe.com
          </Text>
        </Box>
      </Box>
      <Tabs tabs={tabs}>
        <Configuration />
        <PersonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;
