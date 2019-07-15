import Header from "../components/Header";
import { connectContext } from "react-connect-context";
import { AppStatusConsumer } from "context/AppStatusContext";
import { mapProps, compose } from "recompose";

const merge = props => {
  const { setHome, ...rest } = props;
  return {
    onBack: setHome,
    ...rest
  };
};

export default compose(
  connectContext(AppStatusConsumer),
  mapProps(merge)
)(Header);
