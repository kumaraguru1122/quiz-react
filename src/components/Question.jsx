// src/components/Question.js
import React from 'react';

const Question = ({ questionData }) => {
  const { question, options } = questionData;

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">{question}</h3>
      <ul>
        {options.map((option, optionIndex) => (
          <li key={optionIndex} className="mb-2">
            <button className="bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded">
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
