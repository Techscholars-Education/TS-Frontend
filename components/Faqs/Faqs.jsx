"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
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
    <section className="font-Poppins">
      <div className="py-10 text-center space-y-4">
        <h1 className=" text-center font-Poppins text-2xl md:text-3xl text-darkBlue font-semibold">
          Frequently asked questions
        </h1>
        <p className="text-gray-500 text-sm md:text-base md:px-40 lg:px-60 xl:px-80 text-center">
          Clear your doubts
        </p>
      </div>

      <div className="m-2 space-y-6 w-11/12 lg:w-9/12 mx-auto">
        {Faqs.map((item) => {
          return (
            <div
              key={item.id}
              className="group flex flex-col gap-2 rounded-lg p-4 border bg-white "
              tabIndex="1"
            >
              <div className="flex cursor-pointer items-center justify-between">
                <span className=" text-sm md:text-lg text-gray-600 ">
                  {" "}
                  {item.question}{" "}
                </span>
                <FaChevronDown className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180 " />
              </div>
              <div className="invisible h-auto max-h-0 text-xs md:text-sm text-gray-500 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                {item.ans}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
