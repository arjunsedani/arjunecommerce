import {StyleSheet, Dimensions} from 'react-native';


import {
  styles,
  color,
  shadow,
  radius,
  spacing,
  fontSize,
} from '../../styles/base';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;

export const imageCardStyles = props =>
  StyleSheet.create({
    touchablecontainer: {
      marginTop: props.marginTop,
      flex: 1,
      minHeight: 250,
      maxHeight: Dimensions.get('window').width * 0.9,
      width: CARD_WIDTH,
      margin: 5,
      // minWidth: Dimensions.get('window').width * 0.9,
      backgroundColor: '#ffffff',
      shadowColor: '#AAB1B3',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 1,
      shadowOpacity: 1,
      elevation: 10,
      borderRadius: 10,
      overflow: 'hidden'
    },
  });

export const imageTextStyles = StyleSheet.create({
  backgroundcontainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 50,
    // flex: 1,
    width: null,
    height: null,
  },
  titleStyle: {
    position: 'absolute',
    left: 10,
    bottom: 20,
    color: color.black,
    width: '80%',
    fontSize: fontSize.fs2,
    textShadowColor: color.textShadow,
    textShadowOffset: shadow.textOffset,
    textShadowRadius: radius.textShadow,
  },
  subtitleStyle: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    color: color.dark30,
    textShadowColor: color.textShadow,
    textShadowOffset: shadow.textOffset,
    textShadowRadius: radius.textShadow,
  },
});
