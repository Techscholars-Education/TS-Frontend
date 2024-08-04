"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DashboardNavbar from "../DashboardNavbar";
import { LuAlarmClock } from "react-icons/lu";
import Link from "next/link";
const Activetest = () => {
  const { slug } = useParams();

  const [heading, setHeading] = useState("");

  // Sample questions data
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen",
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
    },
    {
      question: "What is the longest river in the world?",
      options: [
        "Amazon River",
        "Nile River",
        "Yangtze River",
        "Mississippi River",
      ],
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
    },
    {
      question: "Who was the first President of the United States?",
      options: [
        "George Washington",
        "Thomas Jefferson",
        "Abraham Lincoln",
        "John Adams",
      ],
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Obsidian"],
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1905", "1918", "1921"],
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    },
    {
      question: "Who discovered penicillin?",
      options: [
        "Marie Curie",
        "Albert Einstein",
        "Alexander Fleming",
        "Isaac Newton",
      ],
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Dollar", "Euro", "Pound Sterling", "Yen"],
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mars", "Earth", "Mercury"],
    },
    {
      question: "Who wrote the 'Iliad' and the 'Odyssey'?",
      options: ["Homer", "Virgil", "Sophocles", "Plato"],
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Pepper"],
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Vietnam"],
    },
    {
      question: "In which year did World War II end?",
      options: ["1940", "1945", "1950", "1939"],
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
    },
    {
      question: "What is the freezing point of water?",
      options: ["0°C", "100°C", "32°C", "273°C"],
    },
    {
      question: "Who is the author of 'Harry Potter' series?",
      options: [
        "J.R.R. Tolkien",
        "J.K. Rowling",
        "George R.R. Martin",
        "Suzanne Collins",
      ],
    },
    {
      question: "What is the largest continent by area?",
      options: ["Africa", "Asia", "Europe", "North America"],
    },
    {
      question: "Which metal is liquid at room temperature?",
      options: ["Mercury", "Iron", "Gold", "Silver"],
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      options: [
        "Marie Curie",
        "Mother Teresa",
        "Jane Addams",
        "Rosalind Franklin",
      ],
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Heart", "Skin", "Brain"],
    },
    {
      question: "Who developed the theory of relativity?",
      options: [
        "Isaac Newton",
        "Nikola Tesla",
        "Albert Einstein",
        "Galileo Galilei",
      ],
    },
    {
      question: "Which is the fastest land animal?",
      options: ["Lion", "Cheetah", "Leopard", "Tiger"],
    },
    {
      question: "In which year did man first land on the moon?",
      options: ["1965", "1969", "1971", "1975"],
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    },
    {
      question: "Who is known as the Father of Computers?",
      options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    },
    {
      question:
        "Which vitamin is produced when a person is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    },
    {
      question: "What is the main language spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "German"],
    },
    {
      question: "What is the boiling point of water?",
      options: ["0°C", "100°C", "50°C", "212°C"],
    },
    {
      question: "Who was the first man to climb Mount Everest?",
      options: [
        "Edmund Hillary",
        "Tenzing Norgay",
        "George Mallory",
        "Reinhold Messner",
      ],
    },
    {
      question: "Which country has the largest population?",
      options: ["India", "United States", "China", "Indonesia"],
    },
    {
      question: "What is the capital of Italy?",
      options: ["Milan", "Rome", "Naples", "Florence"],
    },
    {
      question: "Who is the author of 'Pride and Prejudice'?",
      options: [
        "Charlotte Bronte",
        "Emily Bronte",
        "Jane Austen",
        "Mary Shelley",
      ],
    },
    {
      question: "What is the chemical formula for salt?",
      options: ["H2O", "CO2", "NaCl", "KCl"],
    },
    {
      question: "What is the national sport of Japan?",
      options: ["Cricket", "Football", "Sumo Wrestling", "Baseball"],
    },
    {
      question: "Which country is known for the Eiffel Tower?",
      options: ["Italy", "Spain", "France", "Germany"],
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    },
    {
      question: "What is the largest desert in the world?",
      options: [
        "Sahara Desert",
        "Arabian Desert",
        "Gobi Desert",
        "Antarctic Desert",
      ],
    },
    {
      question: "Who discovered the law of gravity?",
      options: [
        "Albert Einstein",
        "Galileo Galilei",
        "Isaac Newton",
        "Nikola Tesla",
      ],
    },
    {
      question: "What is the capital of Egypt?",
      options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    },
    {
      question:
        "Which organ is responsible for pumping blood throughout the body?",
      options: ["Liver", "Brain", "Heart", "Lungs"],
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      options: [
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "John Steinbeck",
        "William Faulkner",
      ],
    },
    {
      question: "What is the largest island in the world?",
      options: ["Greenland", "Australia", "New Guinea", "Borneo"],
    },
    {
      question: "Which is the largest bone in the human body?",
      options: ["Skull", "Femur", "Humerus", "Spine"],
    },
    {
      question: "What is the capital of Russia?",
      options: ["St. Petersburg", "Moscow", "Kiev", "Minsk"],
    },
    {
      question: "Who was the first person to reach the South Pole?",
      options: [
        "Robert Falcon Scott",
        "Roald Amundsen",
        "Ernest Shackleton",
        "James Cook",
      ],
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    },
    {
      question: "Who is the author of '1984'?",
      options: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "J.D. Salinger",
      ],
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    },
    {
      question: "Which country is known as the Land of the Maple Leaf?",
      options: ["Canada", "United States", "Finland", "Sweden"],
    },
    {
      question: "What is the capital of Spain?",
      options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
    },
    {
      question:
        "Which bird is known for its colorful plumage and ability to mimic sounds?",
      options: ["Parrot", "Peacock", "Sparrow", "Canary"],
    },
  ];

  // For question Container,

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [questionStatuses, setQuestionStatuses] = useState(
    Array(questions.length).fill("not-visited")
  );

  const updateQuestionStatus = (index, status) => {
    setQuestionStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = status;
      return newStatuses;
    });
  };

  const handleOptionSelect = (optionIndex) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = optionIndex;
      return newAnswers;
    });
    updateQuestionStatus(currentQuestionIndex, "answered");
  };

  const handleSaveAndNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleMarkForReview = () => {
    updateQuestionStatus(currentQuestionIndex, "marked-for-review");
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    if (questionStatuses[index] === "not-visited") {
      updateQuestionStatus(index, "not-answered");
    }
    // Update the current page based on the selected question
    setCurrentPage(Math.floor(index / questionsPerPage));
  };

  const countStatus = (status) =>
    questionStatuses.filter((s) => s === status).length;

  const questionsPerPage = 30;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        <div className="my-6 flex justify-between space-x-4">
          <div className="xl:min-h-full xl:w-7/12 space-y-4">
            {/* Question Number, marks details */}
            <div className="flex p-4 bg-white rounded-md items-center">
              <h6 className="bg-TechBlue inline-block p-2 rounded-md text-white font-medium">
                {currentQuestionIndex + 1}.
              </h6>
              <div className="border-2 border-TechBlue mx-10 h-[40px]"></div>
              <div className="border rounded-full py-2 px-4 border-gray-600 font-semibold text-darkBlue">
                Marks:{" "}
                <span className="text-green-600 font-semibold">&#43;1</span>
                <span className="text-red-500 font-semibold mx-1">
                  &#45;0.25
                </span>
              </div>
              <div className="border rounded-full py-2 px-4 border-gray-600 font-semibold text-darkBlue mx-4">
                Type: <span className="font-medium">Single</span>
              </div>
            </div>

            {/* Question, Option container */}
            <div className="p-4 bg-white rounded-md max-h-full">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-darkBlue">
                  {currentQuestion.question}
                </h2>
              </div>
              {currentQuestion.options.map((option, indx) => (
                <div
                  className={`border flex justify-between text-darkBlue items-center p-4 my-2 rounded-md ${
                    answers[currentQuestionIndex] === indx
                      ? "bg-blue-100"
                      : "bg-gray-50"
                  } cursor-pointer`}
                  key={indx}
                  onClick={() => handleOptionSelect(indx)}
                >
                  <div className="flex items-center">
                    <span className="font-semibold text-2xl">0{indx + 1}</span>
                    <div className="border-2 border-TechBlue mx-10 h-[40px]"></div>
                    <label className="text-xl font-medium text-gray-500">
                      {option}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      checked={answers[currentQuestionIndex] === indx}
                      onChange={() => handleOptionSelect(indx)}
                      className="cursor-pointer h-5 w-5"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white rounded-md">
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  className="border border-darkBlue text-darkBlue rounded-full font-medium px-4 py-2"
                >
                  Previous
                </button>
                <button
                  onClick={handleMarkForReview}
                  className="border border-violet-600 bg-violet-600 text-white rounded-full font-medium px-4 py-2"
                >
                  Mark for review
                </button>
                <button
                  onClick={handleSaveAndNext}
                  className="border-2 border-TechBlue bg-TechBlue text-white font-medium rounded-full px-5 py-2"
                >
                  Save & next
                </button>
              </div>
            </div>
          </div>

          {/* Question status and navigation */}
          <div className="xl:h-[550px] bg-white xl:w-5/12 rounded-md">
            <div className="m-4 bg-gray-100/60 grid grid-cols-2 gap-2 p-4 rounded-md">
              <div className="text-gray-500 my-2 font-medium flex items-center">
                <span className="bg-green-700 p-2 text-white rounded-md mr-2">
                  {countStatus("answered") < 10
                    ? `0${countStatus("answered")}`
                    : countStatus("answered")}
                </span>
                <p>Answered</p>
              </div>
              <div className="text-gray-500 my-2 font-medium flex items-center">
                <span className="bg-orange-700 p-2 text-white rounded-md mr-2">
                  {countStatus("not-answered") < 10
                    ? `0${countStatus("not-answered")}`
                    : countStatus("not-answered")}
                </span>
                <p>Not answered</p>
              </div>
              <div className="text-gray-500 my-2 font-medium flex items-center">
                <span className="bg-violet-700 p-2 text-white rounded-md mr-2">
                  {countStatus("marked-for-review") < 10
                    ? `0${countStatus("marked-for-review")}`
                    : countStatus("marked-for-review")}
                </span>
                <p>Marked for review</p>
              </div>
              <div className="text-gray-500 my-2 font-medium flex items-center">
                <span className="bg-gray-500 p-2 text-white rounded-md mr-2">
                  {countStatus("not-visited") < 10
                    ? `0${countStatus("not-visited")}`
                    : countStatus("not-visited")}
                </span>
                <p>Not visited</p>
              </div>
              <div className="text-gray-500 my-2 font-medium flex items-center col-span-2">
                <span className="bg-amber-500 p-2 text-white rounded-md mr-2">
                  {countStatus("answered-and-marked") < 10
                    ? `0${countStatus("answered-and-marked")}`
                    : countStatus("answered-and-marked")}
                </span>
                <p>Answered & marked for review</p>
              </div>
            </div>

            <div className="m-4 gap-4 grid grid-cols-6 p-2 rounded-md">
              {Array.from({ length: questionsPerPage }, (_, index) => {
                const questionNumber =
                  currentPage * questionsPerPage + index + 1;
                if (questionNumber <= questions.length) {
                  return (
                    <button
                      key={questionNumber}
                      onClick={() => jumpToQuestion(questionNumber - 1)}
                      className={`flex items-center justify-center p-2 rounded-md font-medium ${
                        questionNumber - 1 === currentQuestionIndex
                          ? "bg-TechBlue text-white"
                          : "bg-TechBlue/15 text-TechBlue"
                      }`}
                    >
                      {questionNumber}
                    </button>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activetest;
