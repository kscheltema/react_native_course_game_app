import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [userNum, setUserNum] = useState();

  const startGameHandler = (selectedNum) => {
    setUserNum(selectedNum);
  };

  let content = <StartScreen onStart={startGameHandler} />;
  if (userNum) {
    content = <GameScreen userChoice={userNum} />;
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
