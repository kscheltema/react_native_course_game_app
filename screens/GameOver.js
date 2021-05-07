import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over!</Text>
      <Card>
        <View style={styles.button}>
          <Button
            color={Colors.primary}
            title="NEW GAME"
            onPress={props.onRestart}
          />
        </View>
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
    alignItems: "center",
    marginTop: 20,
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
    marginVertical: "1%",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "open-sans-bold",
  },
});

export default GameOver;
