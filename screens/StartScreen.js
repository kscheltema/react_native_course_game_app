import React, { useEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  Button,
  Alert,
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
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );
  const [containerHeight, setContainerHeight] = useState(
    Dimensions.get("window").height / 4
  );

  const numInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  useEffect(() => {
    const updateHeightLayout = () => {
      setContainerHeight(Dimensions.get("window").height / 4);
    };
    Dimensions.addEventListener("change", updateHeightLayout);

    const updateWidthLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateWidthLayout);
    return () => {
      Dimensions.removeEventListener(
        "change",
        updateHeightLayout,
        updateWidthLayout
      );
    };
  });

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
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <BodyText>Start a New Game!</BodyText>
          <Card style={(styles.inputCard, { lenght: containerHeight })}>
            <View style={styles.numberContainer}>
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
            </View>
            <View style={styles.buttonContainer}>
              <View style={(styles.buttonSize, { width: buttonWidth })}>
                <Button
                  title="Reset"
                  onPress={resetInputHandler}
                  color={Colors.accent}
                />
              </View>
              <View style={(styles.buttonSize, { width: buttonWidth })}>
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
    </ScrollView>
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
    paddingRight: Dimensions.get("screen").height < 400 ? 25 : 0,
  },
  inputCard: {
    // minHeight: Dimensions.get("screen").height < 400 ? "80%" : "30%",
    // maxHeight: "60%",
    width: Dimensions.get("screen").width < 400 ? "80%" : "90%",
    // width: "80%",
    // minWidth: 300,
    // maxWidth: "90%",
    paddingVertical: Dimensions.get("screen").height > 600 ? 30 : 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginVertical: Dimensions.get("screen").height > 600 ? 0 : 20,
    paddingBottom: Dimensions.get("screen").height > 600 ? 10 : 0,
    paddingHorizontal: Dimensions.get("screen").height > 600 ? 5 : 0,
  },
  buttonStart: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonSize: {
    paddingTop: 17,
    marginHorizontal: 5,
  },
  mainButtonContainer: {
    paddingLeft: 20,
    marginHorizontal: 10,
  },
  numberContainer: {
    flexDirection: Dimensions.get("screen").height < 400 ? "row" : "column",
    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryCard: {
    margin: Dimensions.get("screen").height > 500 ? 1 : 20,
    minHeight: 75,
    maxHeight: "40%",
    minWidth: 200,
    maxWidth: "80%",
    alignItems: "center",
  },
});

export default StartScreen;
