import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNum(null);
  };

  const startGameHandler = (selectedNum) => {
    setUserNum(selectedNum);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartScreen onStart={startGameHandler} />;
  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        roundsNum={guessRounds}
        userNum={userNum}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
