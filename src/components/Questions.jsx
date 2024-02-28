import React, { useState } from 'react';
import QUIZ_DATA from '../assets/quizData.json';
import Question from './Question';

const Questions = ({ level }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelections, setUserSelections] = useState(Array(QUIZ_DATA[level].length).fill(null));
  const [score, setScore] = useState(0);

  const currentQuestion = QUIZ_DATA[level][currentQuestionIndex];
  const isCorrect = userSelections[currentQuestionIndex] === currentQuestion.answer;

  const handleOptionClick = (optionIndex) => {
    const updatedSelections = [...userSelections];
    updatedSelections[currentQuestionIndex] = currentQuestion.options[optionIndex];
    setUserSelections(updatedSelections);
  };

  const handleNextQuestion = () => {
    // Check if the user's selection is correct and update the score
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < QUIZ_DATA[level].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle end of questions, for example, show the final score
      console.log('Quiz completed! Final Score:', score);
    }
  };

  return (
    <div>
      <Question
        questionData={currentQuestion}
        userSelection={userSelections[currentQuestionIndex]}
        onOptionClick={handleOptionClick}
      />
      {userSelections[currentQuestionIndex] && !isCorrect && (
        <p>Correct Answer: {currentQuestion.answer}</p>
      )}
      <button onClick={handleNextQuestion}>Next Question</button>
      {currentQuestionIndex === QUIZ_DATA[level].length - 1 && (
        <p>Final Score: {score}</p>
      )}
    </div>
  );
};

export default Questions;
