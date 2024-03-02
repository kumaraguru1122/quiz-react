import React, { useState } from "react";

const Question = ({ question, nextQuestion, setScore }) => {
  const [correct, setCorrect] = useState(null);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false); // New state to track whether an option has been selected

  const checkAnswer = (item) => {
    if (!answered) {
      setSelected(item);

      if (item === question.answer) {
        setCorrect(true);
        setScore((prev) => prev + 1);
      } else {
        setCorrect(false);
      }

      setAnswered(true); // Set answered to true after the user selects an option
    }
  };

  const nextAnswer = () => {
    nextQuestion((prev) => prev + 1);
    setAnswered(false);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((item) => (
        <button
          key={item}
          onClick={() => checkAnswer(item)}
          className={`block p-2 m-2 border-2 ${
            selected === item
              ? correct === true
                ? "border-green-500 bg-green-200"
                : correct === false
                ? "border-red-500 bg-red-200"
                : ""
              : "border-gray-500 bg-gray-300"
          }`}
          disabled={answered} // Disable the button if an option has been selected
        >
          {item}
        </button>
      ))}

      <button onClick={nextAnswer}>Next</button>
    </div>
  );
};

export default Question;
