import React from 'react';
import { View } from "react-native";

import { spacingStyles } from './styled';

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
  hOffsetRight: number
};

export const Spacing = (props: SpacingProps) => {
  const {
    vSpacing,
    vOffset,
    hSpacing,
    hOffset,
    vSpacingTop,
    vSpacingBottom,
    vOffsetTop,
    vOffsetBottom,
    hSpacingLeft,
    hSpacingRight,
    hOffsetLeft,
    hOffsetRight
  } = props;
  return (
    <View
      {...props}
      style={
        spacingStyles({
          vSpacing,
          vOffset,
          hSpacing,
          hOffset,
          vSpacingTop,
          vSpacingBottom,
          vOffsetTop,
          vOffsetBottom,
          hSpacingLeft,
          hSpacingRight,
          hOffsetLeft,
          hOffsetRight
        }).spaceContainer
      }
    />
  );
};
