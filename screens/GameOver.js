import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import BodyText from "../components/BodyText";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <Card style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/final.png")}
          resizeMode="cover"
        />
      </Card>

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
  imageContainer: {
    width: "80%",
    height: "60%",
    overflow: "hidden",
    borderRadius: 100,
    margin: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});

export default GameOver;
