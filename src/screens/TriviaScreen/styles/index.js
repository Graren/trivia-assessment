import { StyleSheet } from "react-native";
import {
  white,
  gray200,
  black,
  secondary,
  gray800,
  correct,
  wrong,
  primary
} from "constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    backgroundColor: gray800
  },
  triviaContainer: {
    flex: 1,
    padding: 20
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    textAlign: "center",
    fontSize: 18
  },
  optionButton: {
    backgroundColor: gray200,
    width: "100%",
    paddingVertical: 10,
    marginVertical: 10
  },
  optionText: {
    fontSize: 18,
    color: black
  },
  fulfilledOptionText: {
    fontSize: 18,
    color: white
  },
  selectedOption: {
    backgroundColor: secondary,
    borderColor: gray200,
    borderWidth: 3
  },
  gameTitleContainer: {
    padding: 12
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: white
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  nextButtonContainer: {
    padding: 12
  },
  nextButton: {
    width: "100%",
    backgroundColor: secondary
  },
  nextButtonText: {
    color: white,
    fontSize: 18
  },
  correct: {
    backgroundColor: correct
  },
  incorrect: {
    backgroundColor: wrong
  }
});
