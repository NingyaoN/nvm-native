import React from 'react';
import {
  StackNavigationProps,
  Routes,
  Box,
  Text,
  Container,
  Button,
  RoundedIconButton,
  RoundedIcon,
} from '../../components';

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection='row' justifyContent='center'>
          <RoundedIconButton
            name='x'
            size={60}
            onPress={() => navigation.pop()}
            color='secondary'
            backgroundColor='white'
          />
        </Box>
      }>
      <Box flex={1} justifyContent='center' alignItems='center' padding='xl'>
        <RoundedIcon
          name='check'
          size={SIZE}
          backgroundColor='primaryLight'
          color='primary'
        />

        <Text variant='title1' textAlign='center' marginVertical='l'>
          Password Successfully changed.
        </Text>

        <Text variant='body' textAlign='center' marginBottom='l'>
          Close to go back to Login
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
