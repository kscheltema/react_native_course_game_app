import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={screenWidth > 400 ? styles.button : styles.buttonSmall}>
          <Text
            style={
              screenWidth > 400 ? styles.buttonText : styles.buttonTextSmall
            }
          >
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
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
  buttonContainer: {
    overflow: "hidden",
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
