import Trivia from "../components/TriviaComponent";
import { connectContext } from "react-connect-context";
import { QuestionsConsumer } from "context/QuestionsContext";
import { ScoreConsumer } from "context/ScoreContext";
import { compose, mapProps } from "recompose";

const merge = props => {
  const {
    setScore,
    questions,
    requestingQuestions,
    clear,
    error,
    loading,
    onError,
    setQuestions
  } = props;
  return {
    setScore,
    questions,
    error,
    loading,
    requestingQuestions,
    clear,
    onError,
    setQuestions
  };
};

export default compose(
  connectContext(QuestionsConsumer),
  connectContext(ScoreConsumer),
  mapProps(merge)
)(Trivia);
