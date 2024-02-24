import React from "react";
import img from "../assets/home.svg";

const Home = ({ levels }) => {
  return (
    <main className="bg-amber-100 min-h-screen">
      <header>
        <h1 className="text-4xl text-amber-500 pt-8 font-bold text-center">
          Welcome to JavaScript Quiz
        </h1>
        <p className="text-center text-slate-700 italic text-lg mt-4 max-w-[60ch] mx-auto">
          Test your knowledge of Javascript with our challengin quiz <br /> Are
          you ready to take the challenge? Start the quiz now!
        </p>
      </header>
      <section>
        <div className="max-w-96 border-2 border-slate-800 p-4 mx-auto ">
          <h2 className="text-2xl text-center">Choose your level</h2>
        </div>
      </section>
    </main>
    
  );
};

export default Home;
