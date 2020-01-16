import {StyleSheet} from 'react-native';

import {styles, color, shadow, radius, spacing} from '../../styles/base';

export const imageCardStyles = props =>
  StyleSheet.create({
    touchablecontainer: {
      marginTop: props.marginTop,
      flex: 1,
      minHeight: styles.imageCardHeight,
      backgroundColor: '#ffffff',
      // borderWidth: 5,
      // borderStyle: 'dashed',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 10,
      // overflow: 'hidden'
    },
  });

export const imageTextStyles = StyleSheet.create({
  backgroundcontainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flex: 1,
    width: null,
    height: null,
    borderRadius: 10,
  },
  titleStyle: {
    position: 'absolute',
    left: 10,
    bottom: 30,
    color: color.white,
    width: '80%',
    textShadowColor: color.textShadow,
    textShadowOffset: shadow.textOffset,
    textShadowRadius: radius.textShadow,
  },
  subtitleStyle: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    color: color.white,
    textShadowColor: color.textShadow,
    textShadowOffset: shadow.textOffset,
    textShadowRadius: radius.textShadow,
  },
});
