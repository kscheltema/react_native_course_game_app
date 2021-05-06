import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: "2%",
    alignItems: "center",
  },
});

export default StartScreen;
