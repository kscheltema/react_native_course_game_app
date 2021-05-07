import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button
          color={Colors.accent}
          title="NEW GAME"
          onPress={props.onRestart}
        />
      </View>
      <Card>
        <Text style={styles.text}>The Game is Over!</Text>
        <Text style={styles.text}>Number of Round: </Text>
        <Text style={styles.number}>{props.roundsNum}</Text>
        <Text style={styles.text}>The User Number was:</Text>
        <Text style={styles.number}>{props.userNum}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "60%",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent,
  },
  button: {
    marginBottom: "6%",
  },
});

export default GameOver;
