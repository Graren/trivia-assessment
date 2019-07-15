import React, { Component, Fragment } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { AppStatusProvider } from "context/AppStatusContext";
import { QuestionsProvider } from "context/QuestionsContext";
import { ScoreProvider } from "context/ScoreContext";
import AppContainer from "./containers/AppContainer";
import styles from "./styles";
import { primary } from "constants/colors";

class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor={primary} />
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scroll}
            contentInsetAdjustmentBehavior="automatic"
          >
            <AppStatusProvider>
              <ScoreProvider>
                <QuestionsProvider>
                  <AppContainer />
                </QuestionsProvider>
              </ScoreProvider>
            </AppStatusProvider>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
