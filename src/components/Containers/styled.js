import { StyleSheet } from 'react-native';

export const containerStyles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    flexcontainer: {
      flexDirection: props.flexDirection,
      alignItems: props.alignItems,
      justifyContent: props.justifyContent,
      flex: props.flex,
      flexWrap: props.flexWrap,
    },
    touchablecontainer: {
      width: props.width,
      height: props.height,
      justifyContent: props.justifyContent ? props.justifyContent : 'center',
      alignItems: props.alignItems ? props.alignItems : "center",
    },
  });
