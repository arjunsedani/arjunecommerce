import { StyleSheet } from "react-native";

export const avatarStyles = StyleSheet.create({
  roundBg: {
    borderRadius: 100,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderColor:"#29ccc4",
    borderWidth: 1,
    backgroundColor: "#b6e3e0"
  },
  initials: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "white"
  }
});
