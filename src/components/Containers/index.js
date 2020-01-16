import React from "react";
import { View } from 'react-native';

import { containerStyles } from "./styled";

type FlexProps = {
  flexDirection: FlexDirection,
  alignItems: string,
  justifyContent: string,
  flexWrap: string,
  flex: number
};

type TouchProps = {
  width: number,
  height: number,
  justifyContent?: string,
  alignItems?: string
};

export const Container = () => {
  return <View style={containerStyles.container} />;
};

export const FlexContainer = (props: FlexProps) => {
  const { flexDirection, alignItems, justifyContent, flex, flexWrap } = props;
  return (
    <View
      {...props}
      style={
        containerStyles({
          flexDirection,
          alignItems,
          justifyContent,
          flex,
          flexWrap
        }).flexcontainer
      }
    />
  );
};

export const TouchableContainer = (props: TouchProps) => {
  const { width, height, justifyContent, alignItems } = props;
  return (
    <View
      style={
        containerStyles({
          width,
          height,
          alignItems,
          justifyContent
        }).touchablecontainer
      }
    />
  );
};
