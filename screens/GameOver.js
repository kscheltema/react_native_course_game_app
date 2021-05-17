import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    // <ScrollView contentContainerStyle={styles.scrollProps}>
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <Card style={styles.imageContainer}>
        <Image
          style={styles.image}
          fadeDuration={300}
          source={require("../assets/final.png")}
          // source={{uri: "complete_url"}} //web // width & height prop is required due to unknown properties from web
          resizeMode="cover"
        />
      </Card>

      <Card style={styles.resultsContainer}>
        <View style={styles.button}>
          <MainButton onPress={props.onRestart}>
            <Icon name="replay" size={20} color="#fff" />
            <Text style={styles.buttonText}> Replay</Text>
          </MainButton>
        </View>
        <Text style={styles.bottomTextContainer}>
          Your phone needed -
          <Text style={styles.number}>{props.roundsNum}</Text>
          <Text>- rounds to guess the number - </Text>
          <Text style={styles.number}>{props.userNum}</Text>
          <Text>-</Text>
        </Text>
      </Card>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: Dimensions.get("screen").height > 500 ? 20 : 0,
  },
  scrollProps: {
    marginHorizontal: 20,
  },
  resultsContainer: {
    height: Dimensions.get("screen").height > 500 ? 120 : 50,
    justifyContent: "center",
  },
  number: {
    fontSize: Dimensions.get("screen").height < 600 ? 16 : 22,
    textAlign: "center",
    color: Colors.accent,
    fontFamily: "open-sans-bold",
  },
  button: {
    marginVertical: Dimensions.get("screen").height > 500 ? 1 : "1%",
    paddingBottom: 15,
  },
  buttonText: {
    fontSize: 18,
  },
  imageContainer: {
    width: "75%",
    height: Dimensions.get("screen").height > 500 ? "50%" : "40%",
    overflow: "hidden",
    borderRadius: 80,
    margin: Dimensions.get("screen").height > 500 ? 0 : 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 80,
  },
  bottomTextContainer: {
    height: Dimensions.get("screen").height < 600 ? 150 : "80%",
    textAlign: "center",
    fontSize: Dimensions.get("screen").height < 600 ? 14 : 20,
  },
});

export default GameOver;
