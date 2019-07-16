import React, { PureComponent, Fragment } from "react";
import { View, Text } from "react-native";
import Option from "./Option";
import Button from "common/components/Button";
import styles from "../styles";

class GameComponent extends PureComponent {
  render() {
    const {
      question,
      selected,
      questionAnswered,
      onSelect,
      onButtonPress,
      last = false
    } = this.props;
    return (
      <Fragment>
        <View style={[styles.gameTitleContainer, styles.centeredContainer]}>
          <Text style={styles.gameTitle}>{question.question}</Text>
        </View>
        <View style={styles.optionsContainer}>
          {question.options.map(opt => {
            return (
              <Option
                key={opt}
                option={opt}
                disabled={questionAnswered}
                onPress={() => onSelect(opt)}
                selected={opt === selected}
                textStyle={questionAnswered ? styles.fulfilledOptionText : {}}
                style={
                  questionAnswered
                    ? question.correctAnswer === opt
                      ? styles.correct
                      : styles.incorrect
                    : {}
                }
              />
            );
          })}
        </View>
        <View style={[styles.nextButtonContainer, styles.centeredContainer]}>
          <Button
            text={last ? "Finish" : questionAnswered ? "Next" : "Submit"}
            onPress={onButtonPress}
            buttonStyle={styles.nextButton}
            textStyle={styles.nextButtonText}
            disabled={!selected}
          />
        </View>
      </Fragment>
    );
  }
}

export default GameComponent;
