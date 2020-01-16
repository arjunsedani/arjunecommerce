import React from 'react';
import {Text, TouchableOpacity, ImageBackground, View} from 'react-native';

import {imageCardStyles, imageTextStyles} from './styled';
import { Spacing } from '../Spacing';

type Props = {
  title?: string,
  source: object,
  marginTop: number,
  onPress?: () => {},
  subtitle?: string,
};

export const HalfImageCard = (props: Props) => {
  const {title, source, marginTop, onPress, subtitle} = props;
  return (
    <View
      {...props}
      onPress={onPress}
      style={
        imageCardStyles({
          marginTop,
        }).touchablecontainer
      }>
      <ImageBackground
        source={source}
        style={imageTextStyles.backgroundcontainer}
      />
      <Text style={imageTextStyles.titleStyle} numberOfLines={3}>
        {title}
      </Text>
      {!!subtitle && (
        <Text numberOfLines={1} style={imageTextStyles.subtitleStyle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

HalfImageCard.defaultProps = {
  onPress: () => {},
  title: '',
  subtitle: '',
};
