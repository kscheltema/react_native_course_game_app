import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Keyboard,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

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
          <View style={styles.mainButtonContainer}>
            <MainButton onPress={() => props.onStart(selectedNum)}>
              <Icon name="play-arrow" size={24} color="#fff" />
            </MainButton>
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
        <BodyText>Start a New Game!</BodyText>
        <Card style={styles.inputCard}>
          <Text style={styles.buttonTitle}>Select a Number</Text>
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
  buttonTitle: {
    fontSize: 16,
    marginTop: 15,
  },
  inputCard: {
    height: Dimensions.get("screen").height > 500 ? 150 : "40%",
    width: "80%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  buttonStart: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonSize: {
    width: Dimensions.get("window").width / 3,
    paddingTop: 17,
    marginHorizontal: 5,
  },
  mainButtonContainer: {
    paddingLeft: 20,
    marginHorizontal: 10,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryCard: {
    margin: Dimensions.get("screen").height > 500 ? 5 : 20,
    width: "80%",
    alignItems: "center",
  },
});

export default StartScreen;
