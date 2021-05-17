import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    padding: Dimensions.get("screen").height > 600 ? 0 : 1,
  },
});

export default BodyText;
