import questions from "./Questions";

function Result({ correct }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="result icon"
      />
      <h2>
        Your result is {correct} correct answers of {questions.length} questions
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}

export default Result;
