import HomeComponent from "../components/HomeComponent";
import { connectContext } from "react-connect-context";
import { compose, mapProps } from "recompose";
import { ScoreConsumer } from "context/ScoreContext";

const merge = props => {
  const { score, time } = props;
  return {
    score,
    time
  };
};

export default compose(
  connectContext(ScoreConsumer),
  mapProps(merge)
)(HomeComponent);
