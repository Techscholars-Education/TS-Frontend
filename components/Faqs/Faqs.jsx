"use client";
import React, { useState, useRef } from "react";
const Faqs = () => {
  const [Faqs, _] = useState([
    {
      id: 1,
      question: "Why should I join this course and how will this be helpful?",
      ans: "Joining our course offers expert guidance, comprehensive study materials, and interactive classes, ensuring success in IITJEE and NEET exams.",
    },
    {
      id: 2,
      question: "What does Techscholars offers?",
      ans: "Techscholars provides expert faculty, comprehensive study materials, interactive live classes, practice tests, quizzes, and an All India Test Series.",
    },
    {
      id: 3,
      question: "What makes us different?",
      ans: "We offer personalized learning paths, advanced technology integration, focus on concept clarity, and a supportive learning environment.",
    },
    {
      id: 4,
      question:
        "How will the classes be conducted? What will happen if I miss a class?",
      ans: "Classes are live online. If you miss a class, recordings are available for you to catch up at your convenience",
    },
    {
      id: 5,
      question: "How do we ensure concept clarity?",
      ans: "We ensure concept clarity through interactive teaching methods, regular doubt clearing sessions, extensive practice exercises, and continuous feedback.",
    },
    {
      id: 6,
      question: "What is included in the All India Test Series?",
      ans: "The series includes simulated exams, extensive question banks, performance analytics, and national benchmarking to track your preparation leve",
    },
  ]);

  return (
    <section className="font-Poppins ">
      <div className="py-10 text-center space-y-4">
        <h1 className=" text-center font-Poppins text-2xl md:text-3xl text-darkBlue font-semibold">
          FAQs
        </h1>
      </div>

      <div className="m-2 space-y-6 w-11/12 lg:w-10/12 2xl:w-[1100px] mx-auto  p-4 rounded-md bg-white">
        {Faqs.map((item) => {
          return (
            <AccordionItem
              key={item.id}
              title={item.question}
              content={item.ans}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-gray-100/60 ">
      <button
        className="w-full flex justify-between items-center p-4 text-left text-darkBlue focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className=" text-sm md:text-lg font-semibold">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="px-4 pb-3 text-sm md:text-base font-medium text-darkBlue">
          {content}
        </div>
      </div>
    </div>
  );
};
