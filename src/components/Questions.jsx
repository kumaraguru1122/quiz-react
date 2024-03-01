import React from "react";
import Question from "./Question";
import quizData from "../assets/quizData";

const Questions = ({ level }) => {
  let data = quizData[level];
  const [current, setCurrent] = React.useState(0);
  const [score, setScore] = React.useState(0);

  return (
    <>
       <Question question={data[current]} current={setCurrent}/>
      <div className="progress">
        {current + 1} of {data.length} - Score: {score}/{data.length}
      </div>
    </>
  );
};

export default Questions;
