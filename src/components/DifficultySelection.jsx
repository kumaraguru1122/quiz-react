// src/components/DifficultySelection.js
import React from 'react';

const DifficultySelection = ({ onSelectDifficulty }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Choose Difficulty</h2>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => onSelectDifficulty('easy')}
      >
        Easy
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => onSelectDifficulty('medium')}
      >
        Medium
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onSelectDifficulty('hard')}
      >
        Hard
      </button>
    </div>
  );
};

export default DifficultySelection;
