import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import Header from "common/containers/HeaderContainer";
import TriviaComponent from "../containers/TriviaContainer";
import styles from "../styles";

class TriviaScreenComponent extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <View
          style={[styles.container, styles.background, styles.triviaContainer]}
        >
          <TriviaComponent />
        </View>
      </Fragment>
    );
  }
}

export default TriviaScreenComponent;
