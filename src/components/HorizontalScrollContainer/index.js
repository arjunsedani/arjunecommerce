import React from 'react';
import {View} from 'react-native';

import {spacingStyles} from './styled';

type SpacingProps = {
  vSpacing: number,
  vOffset: number,
  hSpacing: number,
  hOffset: number,
  vSpacingTop: number,
  vSpacingBottom: number,
  vOffsetTop: number,
  vOffsetBottom: number,
  hSpacingLeft: number,
  hSpacingRight: number,
  hOffsetLeft: number,
  hOffsetRight: number,
};

export const HorizontalScrollContainer = (props: SpacingProps) => {
  return <View {...props} style={spacingStyles({}).spaceContainer} />;
};
