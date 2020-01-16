import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from "react-native";

import { scrollCardStyles } from './styled';

type Props = {
  title?: string,
  source: object,
  marginTop: number,
  onPress?: () => {},
  subtitle?: string
};

export const ScrollCards = (props: Props) => {
  const { title, source, onPress, subtitle } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={scrollCardStyles.touchablecontainer}
    >
      <ImageBackground
        source={source}
        borderRadius={10}
        style={scrollCardStyles.backgroundcontainer}
      >
        <Text style={scrollCardStyles.titleStyle} numberOfLines={3}>
          {title}
        </Text>
        {!!subtitle && (
          <Text numberOfLines={1} style={scrollCardStyles.subtitleStyle}>
            {subtitle}
          </Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};
