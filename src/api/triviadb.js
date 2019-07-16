import he from "he";
const url = "https://opentdb.com/api.php?amount=10";

/**
 *  Durstenfeld shuffle. Taken from StackOverflow
 */
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const requestQuestions = async () => {
  const { results } = await fetch(url).then(res => res.json());
  const questions = results.map(res => {
    const {
      category,
      type,
      difficulty,
      question,
      correct_answer,
      incorrect_answers
    } = res;
    return {
      category,
      type,
      difficulty,
      question: he.decode(question),
      correctAnswer: he.decode(correct_answer),
      options: shuffleArray([
        ...incorrect_answers.map(ans => he.decode(ans)),
        he.decode(correct_answer)
      ])
    };
  });
  return questions;
};
