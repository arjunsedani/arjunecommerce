import { StyleSheet } from 'react-native';

export const inputStyles = props =>
  StyleSheet.create({
    inputcontainer: {
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      fontSize: 17,
      borderWidth: 0.5,
      borderRadius: 10,
      borderColor: '#AAB1B3',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: 'white',
      color: '#002124',
      textAlignVertical: props.multiline ? "top" : "center",
      minHeight: props.minHeight,
      fontFamily: props.fontFamily
    }
  });

export const searchStyles = StyleSheet.create({
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
    color: "#424242"
  },
  cancelIcon: {
    padding: 10
  }
});
