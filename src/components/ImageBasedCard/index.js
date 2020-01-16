import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';

import {imageCardStyles, imageTextStyles} from './styled';

type Props = {
  title?: string,
  source: object,
  marginTop: number,
  onPress?: () => {},
  subtitle?: string,
};

export const ImageBasedCard = (props: Props) => {
  const {title, source, marginTop, onPress, subtitle} = props;
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={
        imageCardStyles({
          marginTop,
        }).touchablecontainer
      }>
      <ImageBackground
        source={source}
        borderRadius={10}
        style={imageTextStyles.backgroundcontainer}>
        <Text style={imageTextStyles.titleStyle} numberOfLines={3}>
          {title}
        </Text>
        {!!subtitle && (
          <Text numberOfLines={1} style={imageTextStyles.subtitleStyle}>
            {subtitle}
          </Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

ImageBasedCard.defaultProps = {
  onPress: () => {},
  title: '',
  subtitle: '',
};
