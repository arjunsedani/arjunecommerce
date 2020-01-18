import {StyleSheet} from 'react-native';

export const caouselStyles = props =>
  StyleSheet.create({
    scrollContainerStyle: {
      width: props.width,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftContainer: {
      position: 'absolute',
      bottom: -30,
      left: 10
    },
    commentContainer: {
      position: 'absolute',
      bottom: -30,
      left: 50
    },
    shareContainer: {
      position: 'absolute',
      bottom: -30,
      left: 100
    },
    rightContainer: {
      position: 'absolute',
      bottom: -30,
      right: 10
    },
    scrollIndicatorStyle: {
      position: 'absolute',
      bottom: -30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageScrollContainerStyle: {
      alignItems: 'center',
      // overflow: 'hidden',
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
      // borderRadius: 10,
    },
    imageStyle: {
      flex: 1,
      resizeMode: 'stretch',
      width: props.width,
      height: props.height || 250,
    },
  });
