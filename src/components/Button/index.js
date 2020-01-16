import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {buttonStyles} from './styled';

type Props = {
  text: string,
  primary?: boolean,
  secondary?: boolean,
  small?: boolean,
  disabled?: boolean,
  fullWidth?: boolean,
  outlined?: boolean,
  onPress: () => void,
};

export const Button = (props: Props) => {
  const {
    text,
    primary,
    secondary,
    small,
    disabled,
    onPress,
    fullWidth,
    outlined,
  } = props;
  return (
    <TouchableOpacity
      style={
        buttonStyles({fullWidth, primary, secondary, small, disabled, outlined})
          .buttonStyle
      }
      onPress={onPress}>
      <Text style={buttonStyles.buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
