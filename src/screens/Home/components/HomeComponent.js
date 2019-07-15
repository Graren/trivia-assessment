import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import StartButton from "../containers/StartButtonContainer";
import styles from "../styles";

class HomeComponent extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Trivio's</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>
            This is a simple app that pulls questions from the Open Trivia DB
            and keeps track of your best score. To play, press start.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StartButton />
        </View>
      </View>
    );
  }
}

export default HomeComponent;
