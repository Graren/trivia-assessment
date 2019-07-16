import React, { Component } from "react";

const initialContextState = {
  questions: [],
  loading: false,
  error: null,
  setQuestions: () => null,
  onError: () => null,
  requestingQuestions: () => null,
  clear: () => null
};

const { Provider, Consumer: QuestionsConsumer } = React.createContext(
  initialContextState
);

class QuestionsProvider extends Component {
  state = {
    ...initialContextState
  };

  setQuestions = questions => {
    this.setState({ questions, loading: false });
  };

  onError = error => {
    this.setState({ loading: false, error });
  };

  requestingQuestions = () => {
    this.setState({ loading: true });
  };

  clear = () => {
    this.setState({ ...initialContextState });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          setQuestions: this.setQuestions,
          onError: this.onError,
          requestingQuestions: this.requestingQuestions,
          clear: this.clear
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { QuestionsProvider, QuestionsConsumer };
