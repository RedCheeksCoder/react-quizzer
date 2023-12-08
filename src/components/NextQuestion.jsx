function NextQuestion({ dispatch, answer, index, numOfQuestions }) {
  if (answer === null) return null;

  if (index < numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}>
        Next Question
      </button>
    );
  if (index === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}>
        Finish quiz
      </button>
    );
}

export default NextQuestion;
