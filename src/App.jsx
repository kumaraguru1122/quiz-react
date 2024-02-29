// src/App.js
import React, { useState } from "react";
import Home from "./components/Home";
import DifficultySelection from "./components/DifficultySelection";
import Questions from "./components/Questions";
import Score from "./components/Score";

const App = () => {
  const [page, setPage] = useState("home"); // Possible values: 'home', 'difficultySelection', 'questions'
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const startQuiz = () => {
    setPage("difficultySelection");
  };

  const selectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setPage("questions");
  };

  const showScore = () => {
    setPage("score");
  };

  return (
    <div className="container mx-auto p-8">
      {page === "home" && <Home startQuiz={startQuiz} />}
      {page === "difficultySelection" && (
        <DifficultySelection onSelectDifficulty={selectDifficulty} />
      )}
      {page === "questions" && (
        <Questions level={selectedDifficulty} showScore={showScore} />
      )}
      {page === "score" && <Score />}
    </div>
  );
};

export default App;
