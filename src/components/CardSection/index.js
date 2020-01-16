import React from 'react';
import { View } from "react-native";

import { cardStyles } from './styled';

type Props = {
  fullBleed: boolean,
  hairlineBorder: boolean
};

export const CardSection = (props: Props) => {
  const { fullBleed, hairlineBorder } = props;
  return (
    <View
      {...props}
      style={cardStyles({ fullBleed, hairlineBorder }).cardStyle}
    />
  );
};
