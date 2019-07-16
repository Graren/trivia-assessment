import React from "react";
import Button from "common/components/Button";
import styles from "../styles";

const Option = ({
  option,
  onPress,
  selected = false,
  style = {},
  textStyle = {},
  disabled = false
}) => (
  <Button
    onPress={onPress}
    text={option}
    buttonStyle={[
      styles.optionButton,
      selected ? styles.selectedOption : {},
      style
    ]}
    textStyle={[styles.optionText, textStyle]}
    disabled={disabled}
  />
);

export default Option;
