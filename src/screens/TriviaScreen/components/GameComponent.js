import React, { PureComponent } from "react";
import { View, Text } from "react-native";

class GameComponent extends PureComponent {
  render() {
    const { question, selected, onQuestionPress, onButtonPress } = this.props;
    console.log(question.options);
    return (
      <View>
        <View>
          <Text>{question.question}</Text>
        </View>
        {question.options.map(opt => {
          return (
            <View key={opt}>
              <Text style={[selected === opt ? { color: "red" } : {}]}>
                {opt}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default GameComponent;
