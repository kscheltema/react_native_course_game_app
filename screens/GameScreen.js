import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import Colors from "../constants/Colors";

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

const renderListItem = (listLenght, itemData) => (
  <View style={styles.list}>
    <BodyText style={styles.rounds}>*{listLenght - itemData.index}*</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses.length);
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
      currentLow.current = currentGuess + 1;
    }
    const nextNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    setPastGuesses((currentPastGuesses) => [
      nextNum.toString(),
      ...currentPastGuesses,
    ]);
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
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.listLayout}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.listItem}
        />
      </View>
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
    justifyContent: "space-evenly",
    marginTop: Dimensions.get("window").height > 500 ? 10 : 20,
    width: 350,
    maxWidth: "55%",
  },
  listContainer: {
    flexDirection: "row",
    flex: 1,
    marginTop: 20,
    width: Dimensions.get("window").width > 500 ? "60%" : "80%",
    // alignItems:"center",
  },
  list: {
    borderColor: Colors.accent,
    paddingHorizontal: 40,
    borderWidth: 2,
    marginVertical: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  rounds: {
    color: Colors.accent,
  },
  listItem: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
  },
});

export default GameScreen;
