import React, { Fragment } from "react";
import { View } from "react-native";
import Button from "common/components/Button";
import styles from "../styles";

const StartButton = ({ onPress, text = "Start" }) => (
  <Button
    onPress={onPress}
    text={text}
    textStyle={styles.startButtonText}
    buttonStyle={styles.startButton}
  />
);

export default StartButton;
