import {StyleSheet} from 'react-native';

export const caouselStyles = props =>
  StyleSheet.create({
    scrollIndicatorStyle: {
      position: 'absolute',
      bottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageScrollContainerStyle: {
      alignItems: 'center',
      overflow: 'hidden',
      width: props.width,
      height: props.height || 250,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 10,
    },
    imageStyle: {
      flex: 1,
      resizeMode: 'stretch',
      width: props.width,
      height: props.height || 250,
    },
  });
