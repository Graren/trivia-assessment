import React from "react";
import Button from "common/components/Button";
import styles from "../styles";

const StartButton = ({ onPress, text = "Begin" }) => (
  <Button
    onPress={onPress}
    text={text}
    textStyle={styles.startButtonText}
    buttonStyle={styles.startButton}
  />
);

export default StartButton;
