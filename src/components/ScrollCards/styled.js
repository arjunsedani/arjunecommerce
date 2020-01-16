import { StyleSheet } from 'react-native';

import { styles, color, shadow, radius } from '../../styles/base';

export const scrollCardStyles = StyleSheet.create({
  touchablecontainer: {
    minHeight: 100,
    minWidth: 160,
    flex: 1,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5
    // overflow: "hidden"
  },
  backgroundcontainer: {
    // position: "absolute",
    // top: 10,
    // right: 10,
    // bottom: 10,
    // left: 10,
    flex: 1,
    width: null,
    height: null,
    borderRadius: 10
  },
  titleStyle: {
    color: color.white,
    width: "80%",
    textShadowColor: color.textShadow,
    textShadowOffset: shadow.textOffset,
    textShadowRadius: radius.textShadow
  },
  subtitleStyle: {
    color: color.white,
    textShadowColor: color.textShadow,
    textShadowOffset: shadow.textOffset,
    textShadowRadius: radius.textShadow
  }
});
