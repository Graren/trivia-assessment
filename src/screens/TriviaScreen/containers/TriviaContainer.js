import Trivia from "../components/TriviaComponent";
import { connectContext } from "react-connect-context";
import { QuestionsConsumer } from "context/QuestionsContext";
import { ScoreConsumer } from "context/ScoreContext";
import { AppStatusConsumer } from "context/AppStatusContext";
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
    setQuestions,
    setHome
  } = props;
  return {
    setScore,
    questions,
    error,
    loading,
    requestingQuestions,
    clear,
    onError,
    setQuestions,
    setHome
  };
};

export default compose(
  connectContext(QuestionsConsumer),
  connectContext(ScoreConsumer),
  connectContext(AppStatusConsumer),
  mapProps(merge)
)(Trivia);
