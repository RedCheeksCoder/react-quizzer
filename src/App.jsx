import "./App.css";
import MainComponent from "./MainComponent";
import Header from "./Header";
import { useEffect, useReducer } from "react";

const InitialState = {
  questions: [],

  //loading, ready, error, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFail":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown.");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, InitialState);
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
        <p>1/15</p>
        <p>Jesus is Lord ❤</p>
      </MainComponent>
    </div>
  );
}

export default App;
