import { StyleSheet } from "react-native";

export const spacingStyles = props =>
  StyleSheet.create({
    spaceContainer: {
      padding: 0,
      margin: 0,
      paddingTop: props.vSpacingTop || props.vSpacing,
      paddingBottom: props.vSpacingBottom || props.vSpacing,
      marginTop: props.vOffsetTop || props.vOffset,
      marginBottom: props.vOffsetBottom || props.vOffset,
      paddingLeft: props.hSpacingLeft || props.hSpacing,
      paddingRight: props.hSpacingRight || props.hSpacing,
      marginLeft: props.hOffsetLeft || props.hOffset,
      marginRight: props.hOffsetRight || props.hOffset
    }
  });
