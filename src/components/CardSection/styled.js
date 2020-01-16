import {StyleSheet} from 'react-native';

export const cardStyles = props =>
  StyleSheet.create({
    cardStyle: {
      marginTop: props.marginTop,
      flex: 1,
      backgroundColor: '#ffffff',
      paddingVertical: 30,
      minHeight: 100,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 10,
      borderColor: '#AAB1B3',
      paddingHorizontal: props.fullBleed ? 0 : 30,
      borderBottomWidth: props.hairlineBorder ? 1 : 2,
      borderRadius: 10,
      // borderColor: "#AAB1B3",
      // paddingVertical: 30,
      // // backgroundColor: "white",
      // paddingHorizontal: props.fullBleed ? 0 : 30,
      // borderBottomWidth: props.hairlineBorder ? 1 : 2
    },
  });
