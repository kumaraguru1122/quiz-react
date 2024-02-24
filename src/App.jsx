import React, { useState, useEffect } from "react";
import Home from "./components/Home";
// import Level from "./components/Level";
// import Questions from "./components/Questions";
// import Result from "./components/Result";
import quizData from "./assets/quizData";

const App = () => {
  const levels = ["easy", "medium", "hard"];
  const [level, setLevel] = useState("");

  return (
    <>
      <Home levels={levels} />
    </>
  );
};

export default App;
