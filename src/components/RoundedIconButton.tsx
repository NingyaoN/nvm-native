import React from 'react';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import RoundedIcon, { RoundedIconProps } from './RoundedIcon';

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <BorderlessButton
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
      {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

RoundedIconButton.defaultProps = {
  ...RoundedIcon.defaultProps,
};
export default RoundedIconButton;
