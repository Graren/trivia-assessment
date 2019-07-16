import React, { PureComponent, Fragment } from "react";
import HomeScreen from "screens/Home";
import TriviaScreen from "screens/TriviaScreen";
import { screens } from "context/AppStatusContext";

class AppComponent extends PureComponent {
  render() {
    const { screen } = this.props;
    return (
      <Fragment>
        {screen === screens.HOME ? <HomeScreen /> : <TriviaScreen />}
      </Fragment>
    );
  }
}

export default AppComponent;
