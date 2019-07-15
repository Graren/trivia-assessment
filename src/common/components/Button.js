import React, { PureComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/button";

class Button extends PureComponent {
  onPress = () => {
    const { onPress } = this.props;
    onPress();
  };

  render() {
    const { text, buttonStyle = {}, textStyle = {} } = this.props;
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[styles.button, buttonStyle]}
      >
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
