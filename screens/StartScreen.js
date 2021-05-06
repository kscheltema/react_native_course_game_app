import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();

  const numInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredValue);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid Number!", "Your number has to be between 1 and 99", [
        { text: "Okay", style: "cancel", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNum(chosenNum);
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryCard}>
        <Text>Your Selected Number is: </Text>
        <View style={styles.buttonStart}>
          <NumberContainer>{selectedNum}</NumberContainer>
          <View style={styles.buttonSize}>
            <Button title="Start Game" color={Colors.accent} />
          </View>
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputCard}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLenght={2}
            onChangeText={numInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonSize}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.buttonSize}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  inputCard: {
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
  buttonStart: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonSize: {
    width: "40%",
    paddingTop: 15,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryCard: {
    margin: 20,
  },
});

export default StartScreen;
