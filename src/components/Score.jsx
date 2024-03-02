import React from "react";

const Score = ({score, restart}) => {
  return (
    <div>
      <h2 className="text-xl">Your Score is {score}!</h2>
      <button onClick={restart}>Play Again</button>
    </div>
  );
};

export default Score;
