import React from "react";
import { useState } from "react";
import Question from "./Question";
import Score from "./Score"; // Import your Score component
import quizData from "../assets/quizData";
import { useEffect } from "react";

const Questions = ({ level, showScore, setScore }) => {
  let data = quizData[level];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current === data.length - 1) {
      showScore();
    }
  }, [current, data.length, showScore]);

  return (
    <>
      <Question
        question={data[current]}
        nextQuestion={() => setCurrent((prev) => prev + 1)}
        setScore={setScore}
      />
    </>
  );
};

export default Questions;
