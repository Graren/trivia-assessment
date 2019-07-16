import React, { Component } from "react";

const initialContextState = {
  score: null,
  time: null,
  highScore: null,
  bestTime: null,
  setScore: () => null,
  onError: () => null,
  requestingScore: () => null,
  clear: () => null
};

const { Provider, Consumer: ScoreConsumer } = React.createContext(
  initialContextState
);

class ScoreProvider extends Component {
  state = {
    ...initialContextState
  };

  setScore = (score, time) => {
    const { highScore, bestTime } = this.state;
    if (
      !highScore ||
      !bestTime ||
      score > highScore ||
      (score === highScore && time < bestTime)
    ) {
      this.setState({
        score,
        time,
        highScore: score,
        bestTime: time,
        loading: false
      });
    } else {
      this.setState({ score, time, loading: false });
    }
  };

  requestingScore = () => {
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
          setScore: this.setScore,
          onError: this.onError,
          requestingScore: this.requestingScore,
          clear: this.clear
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ScoreProvider, ScoreConsumer };
