// src/components/Button.js
import React from "react";

const Button = ({ style, text, onclick }) => {
  return (
    <button
      className={`${style} hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
