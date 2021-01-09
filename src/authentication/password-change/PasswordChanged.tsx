import React from 'react';
import {
  Box,
  Text,
  Container,
  Button,
  RoundedIconButton,
  RoundedIcon,
  AuthNavigationProps,
} from '../../components';

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<'PasswordChanged'>) => {
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
      <Box alignItems='center'>
        <RoundedIcon
          name='check'
          size={SIZE}
          backgroundColor='primaryLight'
          color='primary'
        />
      </Box>

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
    </Container>
  );
};

export default PasswordChanged;
