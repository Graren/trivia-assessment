const url = "https://opentdb.com/api.php?amount=10";

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
      question,
      correctAnswer: correct_answer,
      options: [...incorrect_answers, correct_answer]
    };
  });
  return questions;
};
