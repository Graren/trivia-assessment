import { Alert } from "react-native";
import Header from "../components/Header";
import { connectContext } from "react-connect-context";
import { AppStatusConsumer } from "context/AppStatusContext";
import { mapProps, compose } from "recompose";

const merge = props => {
  const { setHome, ...rest } = props;
  const onBack = () => {
    Alert.alert(
      "Are you sure?",
      "If you leave now your score and your time will not be saved",
      [
        {
          text: "Close",
          style: "destructive",
          onPress: () => setHome()
        },
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => null
        }
      ]
    );
  };
  return {
    onBack,
    ...rest
  };
};

export default compose(
  connectContext(AppStatusConsumer),
  mapProps(merge)
)(Header);
