// src/components/Home.js
import React from 'react';

const Home = ({ startQuiz }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
