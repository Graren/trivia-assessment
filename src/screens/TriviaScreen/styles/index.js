import { StyleSheet } from "react-native";
import { gray200 } from "constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    backgroundColor: gray200
  },
  triviaContainer: {
    flex: 1
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    textAlign: "center",
    fontSize: 18
  }
});
