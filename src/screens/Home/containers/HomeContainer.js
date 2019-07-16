import HomeComponent from "../components/HomeComponent";
import { connectContext } from "react-connect-context";
import { compose, mapProps } from "recompose";
import { ScoreConsumer } from "context/ScoreContext";

const merge = props => {
  const { score, time, highScore, bestTime } = props;
  return {
    score,
    time,
    highScore,
    bestTime
  };
};

export default compose(
  connectContext(ScoreConsumer),
  mapProps(merge)
)(HomeComponent);
