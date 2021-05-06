import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import Input from "../components/Input";

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLenght={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSize}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.buttonSize}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: "2%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "70%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 15,
  },
  buttonSize: {
    width: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartScreen;
