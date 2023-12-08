function Progress({ index, numOfQuestions, points, maxPossiblePoints }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + 1} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
