import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import BodyText from "../components/BodyText";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <Image style={styles.image} source={require("../assets/final.png")} />
      <Card>
        <View style={styles.button}>
          <Button
            color={Colors.primary}
            title="NEW GAME"
            onPress={props.onRestart}
          />
        </View>
        <Text style={styles.text}>Number of Rounds: </Text>
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
  number: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.accent,
  },
  button: {
    marginVertical: "1%",
  },
  image: {
    width: "80%",
    height: 300,
  },
});

export default GameOver;
