import {
    StyleSheet,
    Dimensions,
    Platform
  } from 'react-native'
  
  const CARD_WIDTH = Dimensions.get('window').width * 0.8
  const CARD_HEIGHT = Dimensions.get('window').height * 0.7
  const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10


export const cardStyleBase = StyleSheet.create({
    cardStyle: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        margin: 5,
        borderRadius: 15
  }
});
