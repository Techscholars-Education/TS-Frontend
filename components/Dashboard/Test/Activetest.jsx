"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DashboardNavbar from "../DashboardNavbar";
import { LuAlarmClock } from "react-icons/lu";

const Activetest = () => {
  const { slug } = useParams();

  const [heading, setHeading] = useState("");

  // MAIN FUNCTIONLITY

  const totalQuestions = 180;
  const questionsPerPage = 30;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentGridPage, setCurrentGridPage] = useState(0);
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
  const [markedForReview, setMarkedForReview] = useState(
    Array(totalQuestions).fill(false)
  );

  const [visitedQuestions, setVisitedQuestions] = useState(new Set([0]));

  const generateQuestions = () => {
    return Array.from({ length: totalQuestions }, (_, index) => ({
      question: `* What is the capital of ${
        ["France", "Germany", "Spain", "Italy", "UK"][index % 5]
      }?`,
      options: ["London", "Berlin", "Paris", "Madrid"],
    }));
  };

  const questions = generateQuestions();

  useEffect(() => {
    const newGridPage = Math.floor(currentQuestionIndex / questionsPerPage);
    setCurrentGridPage(newGridPage);
  }, [currentQuestionIndex]);

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSaveAndNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleMarkForReview = () => {
    setMarkedForReview((prev) => {
      const newMarkedForReview = [...prev];
      newMarkedForReview[currentQuestionIndex] =
        !newMarkedForReview[currentQuestionIndex];
      return newMarkedForReview;
    });
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleAnswerChange = (value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = value;
      return newAnswers;
    });
  };

  const renderQuestionGrid = () => {
    const startIndex = currentGridPage * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, totalQuestions);
    const gridItems = [];

    for (let i = startIndex; i < endIndex; i++) {
      let buttonClass = "w-12 h-12 font-medium ";
      if (i === currentQuestionIndex) {
        buttonClass += "bg-blue-500 text-white ";
      } else if (markedForReview[i]) {
        buttonClass += "bg-violet-500 text-white ";
      } else if (answers[i] !== null) {
        buttonClass += "bg-green-500 text-white ";
      } else {
        buttonClass += "bg-blue-200/60 text-TechBlue";
      }

      gridItems.push(
        <button
          key={i}
          className={`${buttonClass}  rounded-md  `}
          onClick={() => setCurrentQuestionIndex(i)}
        >
          {i + 1}.
        </button>
      );
    }

    return gridItems;
  };

  const currentQuestion = questions[currentQuestionIndex];

  const visitedCount = visitedQuestions.size;
  const notVisitedCount = totalQuestions - visitedCount;
  const markedForReviewCount = markedForReview.filter(Boolean).length;
  const answeredCount = answers.filter((answer) => answer !== null).length;

  // View Instructions
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (slug) {
      // Convert slug to a more readable format if needed
      const formattedHeading = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      setHeading(formattedHeading);
    }
  }, [slug]);

  return (
    <div className="bg-white font-Poppins w-full flex flex-col ">
      <DashboardNavbar title={"Test Series"} />

      {/* INSTRUCTION Modal */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center font-Poppins bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-darkBlue">
              Test Instructions
            </h2>
            <p className="mb-4">
              This is a simple modal for instructions for techscholars tests.
            </p>
            <button
              onClick={toggleModal}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ABOUT TEST */}
      <div className="mb-6 flex flex-col mr-2 bg-gray-100/60 h-[85vh] max-w-full pl-5 pr-5 pt-6 overflow-y-auto">
        {/* Test heading, timer, submit, view instructions */}
        <div className="flex justify-between items-center px-4 py-4 bg-white rounded-md">
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl font-medium text-darkBlue">{heading}</h3>
            </div>
            <div className="flex items-center text-xl font-medium">
              <LuAlarmClock className="text-2xl mr-4" />
              00:45:49
            </div>
          </div>

          <div className="space-x-6">
            <button
              onClick={toggleModal}
              className="border border-darkBlue text-darkBlue rounded-full font-medium px-4 py-2"
            >
              View instructions
            </button>
            <button className="border-2 border-TechBlue bg-TechBlue text-white font-medium rounded-full px-5 py-2">
              Submit Test
            </button>
          </div>
        </div>

        {/* Question content */}
        <div className="p-4 mx-auto  w-full  font-Poppins ">
          <div className=" flex  justify-between space-x-4 ">
            {/* QUESTION HEADING, QUESTON ITSELF, BUTTONS */}
            <div className="mb-6 space-y-4 xl:w-[650px]  ">
              {/* QUESTION NUMBER, MARKS */}
              <div className="bg-white flex items-center space-x-5 p-3 rounded-md ">
                <h2 className="text-xl font-semibold text-white bg-TechBlue inline-block px-3 py-2 rounded-md">
                  {currentQuestionIndex + 1}.
                </h2>
                <div className="border-2 border-TechBlue h-10 mx-5"></div>
                <div className="space-x-2 border p-2 rounded-full border-gray-600">
                  Marks: <span className="text-green-500 font-medium">+1</span>{" "}
                  <span className="text-red-500 font-medium">-0.25</span>
                </div>
                <div className="space-x-2 border p-2 rounded-full border-gray-600 font-medium text-darkBlue">
                  Type: Single
                </div>
              </div>

              {/* QUESTION ITSELF */}

              <div className="pt-6 bg-white p-6  rounded-md">
                <h2 className="font-semibold mb-4 text-xl text-darkBlue ">
                  {currentQuestion.question}
                </h2>
                <div
                  className="space-y-2 "
                  value={answers[currentQuestionIndex]}
                  onValueChange={handleAnswerChange}
                >
                  {currentQuestion.options.map((option, optionIndex) => (
                    <div
                      className={`border border-gray-200 flex justify-between text-darkBlue items-center p-2.5 my-2 rounded-md cursor-pointer ${
                        answers[currentQuestionIndex] === optionIndex
                          ? "bg-blue-100"
                          : ""
                      }`}
                      key={optionIndex}
                      onClick={() => handleAnswerChange(optionIndex)}
                    >
                      <div className="flex items-center">
                        <span className="font-semibold text-2xl">
                          0{optionIndex + 1}
                        </span>
                        <div className="border-2 border-TechBlue mx-10 h-[40px]"></div>
                        <label
                          htmlFor={`option-${optionIndex}`}
                          className="text-lg font-medium text-gray-500"
                        >
                          {option}
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          checked={
                            answers[currentQuestionIndex] === optionIndex
                          }
                          onChange={() => handleAnswerChange(optionIndex)}
                          className="cursor-pointer h-5 w-5"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PREVIOUS, MARK FOR REVIEW AND SAVE & NEXT BUTTONS */}
              <div className="flex justify-between bg-white p-4 rounded-md">
                <button
                  className="border border-darkBlue py-2 px-4 rounded-full font-medium hover:cursor-pointer hover:bg-black hover:text-white duration-200"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
                <button
                  className=" bg-violet-600 text-white py-2 px-4 rounded-full font-medium hover:cursor-pointer hover:bg-black duration-200"
                  onClick={handleMarkForReview}
                  variant="outline"
                >
                  Mark for Review
                </button>
                <button
                  className=" py-2 px-4 rounded-full font-medium bg-TechBlue text-white hover:bg-black hover:cursor-pointer duration-200"
                  onClick={handleSaveAndNext}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                >
                  Save & Next
                </button>
              </div>
            </div>

            {/* QUESTION NUMBER CONTAINER */}
            <div className=" rounded-md xl:w-[400px] bg-white h-full">
              <div className="m-4 bg-gray-100/60 grid grid-cols-2 gap-2 p-4 rounded-md">
                <div className="text-gray-500 my-2 font-medium flex items-center">
                  <span className="bg-green-700 p-2 text-white rounded-md mr-2">
                    {answeredCount < 10 ? `0${answeredCount}` : answeredCount}
                  </span>
                  <p>Answered</p>
                </div>
                <div className="text-gray-500 my-2 font-medium flex items-center">
                  <span className="bg-orange-700 p-2 text-white rounded-md mr-2">
                    {notVisitedCount < 10
                      ? `0${notVisitedCount}`
                      : notVisitedCount}
                  </span>

                  <p>Not answered</p>
                </div>
                <div className="text-gray-500 my-2 font-medium flex items-center">
                  <span className="bg-violet-700 p-2 text-white rounded-md mr-2">
                    {markedForReviewCount < 10
                      ? `0${markedForReviewCount}`
                      : markedForReviewCount}
                  </span>
                  <p>Marked for review</p>
                </div>
                <div className="text-gray-500 my-2 font-medium flex items-center">
                  <span className="bg-gray-500 p-2 text-white rounded-md mr-2">
                    {markedForReviewCount < 10
                      ? `0${markedForReviewCount}`
                      : markedForReviewCount}
                  </span>
                  <p>Not visited</p>
                </div>
                <div className="text-gray-500 my-2 font-medium flex items-center col-span-2">
                  <span className="bg-orange-500 p-2 text-white rounded-md mr-2">
                    {markedForReviewCount < 10
                      ? `0${markedForReviewCount}`
                      : markedForReviewCount}
                  </span>
                  <p>Answered & marked for review</p>
                </div>
              </div>

              <div
                className={`grid grid-cols-6 gap-x-0 gap-y-5 mb-2 place-items-center mx-4 pb-4 `}
              >
                {renderQuestionGrid()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activetest;
