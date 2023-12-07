function Start({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quizzer!</h2>
      <p>{numOfQuestions} Questions to test your React Mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}>
        Let's Start
      </button>
    </div>
  );
}

export default Start;
