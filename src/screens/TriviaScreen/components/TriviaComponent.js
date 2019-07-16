import React, { PureComponent, Fragment } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { requestQuestions } from "api/triviadb";
import styles from "../styles";
import GameComponent from "./GameComponent";

class TriviaComponent extends PureComponent {
  state = {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    finished: false,
    questionAnswered: false,
    selectedOption: null,
    time: 0
  };

  _interval = null;

  componentDidMount = async () => {
    const {
      questions,
      setQuestions,
      onError,
      requestingQuestions
    } = this.props;
    if (!questions || questions.length === 0) {
      requestingQuestions();
      try {
        const questions = await requestQuestions();
        setQuestions(questions);
      } catch (err) {
        onError(err);
      }
    }
  };

  componentDidUpdate() {
    const { finished } = this.state;
    const { questions } = this.props;
    if (!finished && questions && questions.length > 0 && !this._interval) {
      this.setState(
        () => ({
          time: 0
        }),
        () => {
          this._interval = setInterval(() => {
            this.setState({ time: this.state.time + 1 });
          }, 1000);
        }
      );
    }
  }

  onFinish = () => {
    const { setScore, setHome } = this.props;
    const { correctAnswers, time } = this.state;
    clearInterval(this._interval);
    this._interval = null;
    this.setState({ finished: true }, () => {
      setScore(correctAnswers, time);
      setHome();
    });
  };

  componentWillUnmount = () => {
    const { clear } = this.props;
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
    clear();
  };

  onClose = () => {};

  onOptionSelect = opt => {
    this.setState({ selectedOption: opt });
  };

  onButtonPress = () => {
    const { questions } = this.props;
    const {
      questionAnswered,
      currentQuestionIndex,
      correctAnswers,
      selectedOption
    } = this.state;
    if (questionAnswered) {
      if (currentQuestionIndex === questions.length - 1) this.onFinish();
      else
        this.setState({
          questionAnswered: false,
          currentQuestionIndex: currentQuestionIndex + 1,
          selectedOption: null
        });
    } else {
      const question = questions[currentQuestionIndex];
      const { correctAnswer } = question;
      this.setState({
        questionAnswered: true,
        correctAnswers:
          selectedOption === correctAnswer ? correctAnswers + 1 : correctAnswers
      });
    }
  };

  render() {
    const { questions, loading, error } = this.props;
    const {
      currentQuestionIndex,
      questionAnswered,
      selectedOption
    } = this.state;
    const question =
      questions && questions.length > 0
        ? questions[currentQuestionIndex]
        : null;
    return (
      <Fragment>
        {error ? (
          <View style={[styles.container, styles.centeredContainer]}>
            <Text style={styles.error}>
              An error has ocurred, please try again later
            </Text>
          </View>
        ) : loading || !question ? (
          <View style={[styles.container, styles.centeredContainer]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <GameComponent
            question={question}
            selected={selectedOption}
            onSelect={this.onOptionSelect}
            onButtonPress={this.onButtonPress}
            questionAnswered={questionAnswered}
            last={currentQuestionIndex === questions.length - 1}
          />
        )}
      </Fragment>
    );
  }
}

export default TriviaComponent;
