import "./App.css";
import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";
import Loader from "./components/Loader";
import Start from "./components/Start";
import Questions from "./components/Questions";

const InitialState = {
  questions: [],

  //loading, ready, error, active, finished
  status: "loading",
  index: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFail":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      return { ...state, answer: action.payload };
    default:
      throw new Error("Action unknown.");
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    InitialState
  );

  const numOfQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFail" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Start numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions
            questions={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </MainComponent>
    </div>
  );
}

export default App;
