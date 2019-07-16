import { StyleSheet, Platform } from "react-native";
import { secondary, gray200, white, black, gray800 } from "constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    backgroundColor: gray800
  },
  homeContainer: {
    paddingHorizontal: 16,
    paddingVertical: 22,
    justifyContent: "space-between"
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: secondary,
    fontSize: 44,
    fontWeight: "700"
  },
  textContainer: {
    padding: 12,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 6,
    backgroundColor: gray200,
    ...Platform.select({
      android: {
        elevation: 5
      },
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
      }
    })
  },
  explanation: {
    color: black,
    fontSize: 16,
    textAlign: "center"
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  score: {
    color: secondary,
    fontSize: 20
  },
  startButtonText: {
    color: white,
    fontSize: 18
  },
  startButton: {
    backgroundColor: secondary,
    borderRadius: 6,
    height: 48,
    width: "100%"
  }
});
