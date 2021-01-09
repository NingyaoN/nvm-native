import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
  StackNavigationProps,
  Routes,
  Box,
  Text,
  Container,
  Button,
  CloseButton,
} from '../../components';

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  return (
    <Container
      footer={
        <Box flexDirection='row' justifyContent='center'>
          <CloseButton onPress={() => navigation.navigate('Login')} />
        </Box>
      }>
      <Box flex={1} justifyContent='center' alignItems='center'>
        <Box
          backgroundColor='primaryLight'
          justifyContent='center'
          alignItems='center'
          style={{
            height: SIZE,
            width: SIZE,
            borderRadius: SIZE,
          }}>
          <Text color='primary' textAlign='center'>
            <Icon name='check' size={32} />
          </Text>
        </Box>
        <Text variant='title1' textAlign='center' marginBottom='l'>
          Password Successfully changed.
        </Text>

        <Text textAlign='center' marginBottom='l'>
          Use your credentials to login
        </Text>

        <Box marginTop='m' alignItems='center'>
          <Button
            variant='primary'
            onPress={() => navigation.navigate('Login')}
            label='Login'
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
