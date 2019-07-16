import AppComponent from "../components/AppComponent";
import { connectContext } from "react-connect-context";
import { compose, mapProps } from "recompose";
import { AppStatusConsumer } from "context/AppStatusContext";

const merge = props => {
  const { screen } = props;
  return {
    screen
  };
};

export default compose(
  connectContext(AppStatusConsumer),
  mapProps(merge)
)(AppComponent);
