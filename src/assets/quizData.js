const quizData = {
  easy: [
    {
      question: "What is the main purpose of JavaScript?",
      options: [
        "Styling web pages",
        "Enhancing user interfaces",
        "Managing server-side operations",
      ],
      answer: "Enhancing user interfaces",
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const"],
      answer: "var",
    },
    {
      question: "What does 'NaN' stand for in JavaScript?",
      options: ["Not a Number", "New and Null", "Negative and Null"],
      answer: "Not a Number",
    },
    {
      question: "How can you comment out a line in JavaScript?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "# This is a comment",
      ],
      answer: "// This is a comment",
    },
    {
      question: "What is the purpose of the 'parseInt' function in JavaScript?",
      options: [
        "Converts a string to an integer",
        "Returns the first character of a string",
        "Calculates the square root of a number",
      ],
      answer: "Converts a string to an integer",
    },
    {
      question:
        "What is the default behavior of the 'return' statement in a function?",
      options: [
        "Stops the execution of the function",
        "Returns undefined",
        "Returns the value specified after 'return'",
      ],
      answer: "Returns undefined",
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["#", "//", "/*"],
      answer: "//",
    },
    {
      question: "What is the purpose of the 'typeof' operator in JavaScript?",
      options: [
        "Returns the type of a variable",
        "Defines a new variable",
        "Checks if a variable is defined",
      ],
      answer: "Returns the type of a variable",
    },
    {
      question:
        "What is the correct way to compare two values for equality in JavaScript?",
      options: ["a == b", "a === b", "a = b"],
      answer: "a === b",
    },
    {
      question: "What does the 'NaN' value indicate in JavaScript?",
      options: [
        "Not a valid JavaScript keyword",
        "Not a function",
        "Result of an undefined or unrepresentable mathematical operation",
      ],
      answer:
        "Result of an undefined or unrepresentable mathematical operation",
    },
  ],
  medium: [
    {
      question: "What is the purpose of the 'map' function in JavaScript?",
      options: [
        "To iterate over the elements of an array",
        "To create a new array with the results of calling a provided function on every element",
        "To remove elements from an array",
      ],
      answer:
        "To create a new array with the results of calling a provided function on every element",
    },
    {
      question: "How do you check if a variable is an array in JavaScript?",
      options: [
        "isArray(variable)",
        "variable.isArray()",
        "typeof variable === 'array'",
      ],
      answer: "Array.isArray(variable)",
    },
    {
      question: "What does the 'slice' method do in JavaScript?",
      options: [
        "Adds a new element to the end of an array",
        "Removes elements from an array and returns a new array",
        "Sorts the elements of an array",
      ],
      answer: "Removes elements from an array and returns a new array",
    },
    {
      question: "What is the purpose of the 'bind' method in JavaScript?",
      options: [
        "To create a new array by combining two arrays",
        "To attach a function to a particular object",
        "To create a shallow copy of an object",
      ],
      answer: "To attach a function to a particular object",
    },
    {
      question:
        "How can you prevent the default behavior of an event in JavaScript?",
      options: [
        "event.preventDefault()",
        "event.stopDefault()",
        "event.halt()",
      ],
      answer: "event.preventDefault()",
    },
    {
      question: "What is the purpose of the 'filter' method in JavaScript?",
      options: [
        "To filter out unwanted elements from an array",
        "To create a filtered copy of an object",
        "To apply a filter effect to an image",
      ],
      answer: "To filter out unwanted elements from an array",
    },
    {
      question: "How do you declare a function in JavaScript?",
      options: [
        "function myFunction() {}",
        "var myFunction = function() {}",
        "myFunction() {}",
      ],
      answer: "function myFunction() {}",
    },
    {
      question: "What is the 'strict mode' in JavaScript?",
      options: [
        "A way to enforce more strict coding rules",
        "A method for securing user data",
        "A mode for faster code execution",
      ],
      answer: "A way to enforce more strict coding rules",
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current object",
        "The previous object",
        "The global object",
      ],
      answer: "The current object",
    },
    {
      question: "What is the purpose of the 'debounce' function in JavaScript?",
      options: [
        "To add a delay before executing a function",
        "To remove duplicates from an array",
        "To convert a string to lowercase",
      ],
      answer: "To add a delay before executing a function",
    },
  ],
  hard: [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function that is defined within another function",
        "A way to prevent memory leaks",
        "A built-in JavaScript object",
      ],
      answer: "A function that is defined within another function",
    },
    {
      question: "What is the purpose of the 'apply' method in JavaScript?",
      options: [
        "To call a function with a given 'this' value and arguments provided as an array",
        "To add two arrays element-wise",
        "To check if a variable is an array",
      ],
      answer:
        "To call a function with a given 'this' value and arguments provided as an array",
    },
    {
      question:
        "What is the difference between 'undefined' and 'null' in JavaScript?",
      options: [
        "They are the same",
        "'undefined' is the absence of a value, and 'null' is an intentional absence of a value",
        "'null' is the absence of a value, and 'undefined' is an intentional absence of a value",
      ],
      answer:
        "'undefined' is the absence of a value, and 'null' is an intentional absence of a value",
    },
    {
      question: "What is the purpose of the 'Promise' object in JavaScript?",
      options: [
        "To represent a value that might be available now, or in the future, or never",
        "To create asynchronous functions",
        "To handle exceptions in the code",
      ],
      answer:
        "To represent a value that might be available now, or in the future, or never",
    },
    {
      question: "What does the 'async' keyword do in a JavaScript function?",
      options: [
        "Marks the function as asynchronous, allowing the use of 'await'",
        "Defines an anonymous function",
        "Prevents the function from executing asynchronously",
      ],
      answer: "Marks the function as asynchronous, allowing the use of 'await'",
    },
    {
      question: "How do you handle errors in asynchronous JavaScript code?",
      options: [
        "Using try...catch statements",
        "By ignoring them",
        "By logging them to the console",
      ],
      answer: "Using try...catch statements",
    },
    {
      question: "What is the purpose of the 'yield' keyword in JavaScript?",
      options: [
        "To pause and resume a generator function",
        "To create a new Promise",
        "To return a value from a function",
      ],
      answer: "To pause and resume a generator function",
    },
    {
      question:
        "What is the difference between 'let' and 'const' in JavaScript?",
      options: [
        "'let' is used to declare variables with constant values, and 'const' is used for mutable variables",
        "'let' variables can be reassigned, while 'const' variables cannot be reassigned after declaration",
        "'const' is used for block-scoped variables, and 'let' is used for function-scoped variables",
      ],
      answer:
        "'let' variables can be reassigned, while 'const' variables cannot be reassigned after declaration",
    },
    {
      question: "What is a 'callback' function in JavaScript?",
      options: [
        "A function passed as an argument to another function, to be executed later",
        "A function used to call back to the server",
        "A function that handles errors",
      ],
      answer:
        "A function passed as an argument to another function, to be executed later",
    },
    {
      question: "What is the purpose of the 'Symbol' data type in JavaScript?",
      options: [
        "To represent numeric values",
        "To create unique property keys",
        "To store textual data",
      ],
      answer: "To create unique property keys",
    },
  ],
};

export default quizData;
