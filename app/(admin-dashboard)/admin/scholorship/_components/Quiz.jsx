"use client";

import { useState } from "react";
import { quiz } from "./data";
import "./quiz.css"

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const onDelete = () =>{
    setSelectedAnswerIndex(null);
  }

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <span className="border-2 border-gray-300 rounded-lg p-2 ">
            <span className="text-[.8vw] max-lg:text-[2.5vw] font-semibold font-Poppins ">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="text-[.8vw] max-lg:text-[2.5vw] font-semibold font-Poppins">
              /{addLeadingZero(questions.length)}
            </span>
          </span>
          <div className="bg-[#e6f0ff] rounded-lg w-[33vw] mt-5 h-[7vw] p-3 max-lg:w-[78vw] max-lg:h-[12vh]">
            <h1 className="font-semibold text-gray-800">{question}</h1>
          </div>
           
          <div className="flex gap-5 text-[.8vw] max-lg:text-[2.7vw] mt-2 mb-2">
            <button className="font-semibold">MCQ</button>
            <button className="font-light">Numerical</button>
            <button className="font-light">MSQ</button>
          </div>
          <ul className=" w-[14vw] max-lg:w-[50vw]">
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  `${selectedAnswerIndex === index ? "selected-answer" : null}`
                  
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-5 max-lg:gap-10 max-lg:mb-5">
            <button
            className="border-gray-300 rounded-lg border-2 p-2 hover:border-pink-300 hover:text-pink-300 transition-all ease-in-out duration-200"
              onClick={onDelete}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Delete"}
            </button>
            <button
             className="border-gray-300 rounded-lg border-2 p-2 hover:border-green-200 hover:text-green-200 transition-all ease-in-out duration-200"
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              Next
            </button>
          </div>
        </div>
      ):(
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )

      }
    </div>
  );
};

export default Quiz;
