import {StyleSheet} from 'react-native';

export const spacingStyles = props =>
  StyleSheet.create({
    spaceContainer: {
      minHeight: 300,
      padding: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 2,
    },
  });
