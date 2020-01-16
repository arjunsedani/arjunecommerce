// import glamorous from 'glamorous-native';

// import { HEADER_HEIGHT, palette } from '../../theme/common';

// export const TopBarContainer = glamorous.view({
//   shadowRadius: 1,
//   shadowOpacity: 1,
//   elevation: 5,
//   height: HEADER_HEIGHT,
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   shadowColor: palette.white,
//   borderColor: palette.white,
//   borderBottomWidth: 0.5,
//   backgroundColor: 'black',
//   shadowOffset: {
//     width: 0,
//     height: 1
//   }
// });

// export const LeftContainer = glamorous.view({
//   position: 'absolute',
//   left: 10
// });

// export const RightContainer = glamorous.view({
//   position: 'absolute',
//   right: 50
// });

// export const ExtremeRightContainer = glamorous.view({
//   position: 'absolute',
//   right: 10
// });



import {StyleSheet} from 'react-native';

import {
  styles,
  color,
  shadow,
  radius,
  spacing,
  fontSize,
} from '../../styles/base';

export const imageCardStyles = props =>
  StyleSheet.create({
    touchablecontainer: {
      marginTop: props.marginTop,
      flex: 1,
      minHeight: 250,
      maxHeight: 250,
      minWidth: 350,
      backgroundColor: '#ffffff',
      shadowColor: '#000000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 10,
      overflow: 'hidden',
    },
  });

export const TopBarContainerStyles = StyleSheet.create({
  TopBarContainer: {
  shadowRadius: 1,
  shadowOpacity: 1,
  elevation: 5,
  height: 56,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: color.white,
  borderColor: color.white,
  borderBottomWidth: 0.5,
  backgroundColor: 'black',
  shadowOffset: {
    width: 0,
    height: 1
  }
  },
  titleContainer: {
    fontSize: 20,
    color: color.white,
    textAlign: 'left'
  },
  leftContainer: {
    position: 'absolute',
    left: 10
  },
  rightContainer: {
    position: 'absolute',
  right: 50
  },
  extremeRightContainer:{
    position: 'absolute',
    right: 10
  }
});

