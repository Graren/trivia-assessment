import React, { Component } from "react";

const screens = {
  HOME: "HOME",
  TRIVIA: "TRIVIA"
};

const initialContextState = {
  screen: screens.HOME,
  setHome: () => null,
  setTrivia: () => null
};

const { Provider, Consumer: AppStatusConsumer } = React.createContext(
  initialContextState
);

class AppStatusProvider extends Component {
  state = {
    ...initialContextState
  };

  setHome = () => {
    this.setState({ screen: screens.HOME });
  };

  setTrivia = () => {
    this.setState({ screen: screens.TRIVIA });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          setHome: this.setHome,
          setTrivia: this.setTrivia
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { AppStatusProvider, AppStatusConsumer, screens };
