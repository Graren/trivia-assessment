import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import StartButton from "../containers/StartButtonContainer";
import styles from "../styles";

class HomeComponent extends PureComponent {
  render() {
    const { score, time } = this.props;
    return (
      <View style={[styles.container, styles.homeContainer, styles.background]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Trivio</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.explanation}>
              This is a simple app that pulls questions from the Open Trivia DB
              and keeps track of your best score. To play, press Begin.
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.score}>
            Best score: {score ? score : "Not recorded"}
          </Text>
          <Text style={styles.score}>
            Best time: {time ? time : "Not recorded"}
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
