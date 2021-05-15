import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3.5,
    borderColor: Colors.accent,
    backgroundColor: Colors.accent,
    padding: Dimensions.get("screen").height > 500 ? 2 : 10,
    borderRadius: 10,
    margin: Dimensions.get("screen").height > 500 ? 3 : 15,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.background,
    fontSize: 24,
  },
});

export default NumberContainer;
