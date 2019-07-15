import StartButton from "../components/StartButton";
import { connectContext } from "react-connect-context";
import { compose, mapProps } from "recompose";
import { AppStatusConsumer } from "context/AppStatusContext";

const merge = props => {
  const { setTrivia } = props;
  return {
    onPress: setTrivia
  };
};

export default compose(
  connectContext(AppStatusConsumer),
  mapProps(merge)
)(StartButton);
