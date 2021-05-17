import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          andriod: styles.headerAndriod,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: Dimensions.get("screen").height < 400 ? 55 : 60,
    paddingTop: 36,
    paddingBottom: 3,
    backgroundColor: Platform.OS === "ios" ? Colors.background : Colors.primary,
    borderBottomColor: Platform.OS === "ios" ? Colors.accent : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 2 : 0,
    justifyContent:
      Dimensions.get("screen").height > 500 ? "center" : "flex-end",
    alignItems: "center",
  },
  headerIOS: {
    backgroundColor: Colors.primary,
  },
  headerAndriod: {
    backgroundColor: Colors.background,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : Colors.background,
    fontSize: 18,
    fontFamily: "open-sans",
  },
});

export default Header;
