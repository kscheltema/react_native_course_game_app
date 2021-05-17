import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: "#fff",
    elevation: 10,
    marginVertical: Dimensions.get("screen").height < 500 ? 30 : 1,
    padding: Dimensions.get("screen").height < 500 ? 10 : 5,
    borderRadius: Dimensions.get("screen").height > 500 ? 5 : 10,
  },
});

export default Card;
