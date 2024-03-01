import React, { useState } from "react";

const Question = ({ question, current }) => {
  const [correct, setCorrect] = useState(null);
  const [selected, setSelected] = useState(null);

  const checkAnswer = (item) => {
    setSelected(item);

    if (item === question.answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((item) => (
        <button
          key={item}
          onClick={() => checkAnswer(item)}
          className={`bg-slate-900 block p-2 m-2 border-2 ${
            selected === item
              ? correct === true
                ? "border-green-500 bg-green-200"
                : correct === false
                ? "border-red-500 bg-red-200"
                : ""
              : "border-gray-500 bg-gray-300"
          }`}
        >
          {item}
        </button>
      ))}

      <button onClick={() => current((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default Question;
