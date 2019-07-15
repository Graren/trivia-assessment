import React, { Component, Fragment } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { AppStatusProvider } from "context/AppStatusContext";
import { QuestionsProvider } from "context/QuestionsContext";
import { ScoreProvider } from "context/ScoreContext";
import AppContainer from "./containers/AppContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
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
