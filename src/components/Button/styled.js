import {StyleSheet} from 'react-native';
import {fontSize} from '../../styles/base';

export const buttonStyles = props =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: props.primary ? '#29ccc4' : '#FFFFFF',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      padding: 10,
      borderRadius: 15,
      paddingHorizontal: 20,
      shadowColor: '#AAB1B3',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: props.outlined ? 1 : 0,
      alignSelf: props.fullWidth ? 'stretch' : 'auto',
      elevation: 5,
      shadowRadius: 1,
      shadowOpacity: 1,
    },
    buttonTextStyle: {
      fontSize: fontSize.fs2,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
  });
