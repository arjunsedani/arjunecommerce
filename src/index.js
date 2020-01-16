import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import TopNavigator from "./lib/router";
const TopIndex = createAppContainer(TopNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#075E54" barStyle="dark-content" />
        <View style={styles.header}>
          <Icon name="ios-camera" size={28} color="white" />
          <Icon name="ios-menu" size={28} color="white" />
        </View>
        <TopIndex />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#075E54",
    paddingHorizontal: 18,
    paddingTop: 5
  }
});
