import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";

const MainButton = (props) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={screenWidth > 400 ? styles.button : styles.buttonSmall}>
        <Text
          style={screenWidth > 400 ? styles.buttonText : styles.buttonTextSmall}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonSmall: {
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
  },
  buttonTextSmall: {
    color: "#fff",
    fontFamily: "open-sans-bold",
    fontSize: 12,
    textAlign: "center",
  },
});

export default MainButton;
