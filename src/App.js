import React from "react";
import Result from "./Result";
import Game from "./Game";
import "./index.scss";

const questions = [
  {
    title: "React is ... ?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "Component is ... ",
    variants: [
      "application",
      "part of application or web page",
      "I have no any idea",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "It is simple HTML",
      "It is a function",
      "It is a same HTML, but with an option to run JS-code",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  console.log(question);

  return (
    <div className="App">
      <Game question={question} />
      {/* <Result /> */}
    </div>
  );
}

export default App;
