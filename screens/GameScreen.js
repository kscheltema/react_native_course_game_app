import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const NextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("That is impossible!", "That is wrong!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Opponents Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={NextGuessHandler.bind(this, "lower")}>
          <Icon name="remove" size={24} color="#fff" />
        </MainButton>
        <MainButton onPress={NextGuessHandler.bind(this, "higher")}>
          <Icon name="add" size={24} color="#fff" />
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "50%",
  },
});

export default GameScreen;
