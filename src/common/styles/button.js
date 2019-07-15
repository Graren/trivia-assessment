import { StyleSheet, Platform } from "react-native";
import { gray300, white } from "constants/colors";

export default StyleSheet.create({
  button: {
    width: 80,
    height: 48,
    backgroundColor: gray300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    padding: 12,
    ...Platform.select({
      android: {
        elevation: 2
      },
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 1,
          height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1.0
      }
    })
  },
  buttonText: {
    color: white,
    fontSize: 16
  }
});
