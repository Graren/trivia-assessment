import { StyleSheet } from "react-native";
import { primary, white } from "constants/colors";

export default StyleSheet.create({
  header: {
    backgroundColor: primary,
    flexDirection: "row",
    width: "100%",
    height: 64
  },
  backButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "20%"
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16
  },
  headerTitle: {
    color: white,
    fontSize: 20,
    fontWeight: "700"
  }
});
