import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: Dimensions.get("screen").height < 400 ? 55 : 60,
    paddingTop: 36,
    paddingBottom: 3,
    backgroundColor: Colors.primary,
    justifyContent:
      Dimensions.get("screen").height > 500 ? "center" : "flex-end",
    alignItems: "center",
  },
  headerTitle: {
    color: Colors.text,
    fontSize: 18,
    fontFamily: "open-sans",
  },
});

export default Header;
