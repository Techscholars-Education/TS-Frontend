"use client";
import React, { useState } from "react";
import Image from "next/image";
const Faqs = () => {
  const [Faqs, _] = useState([
    {
      id: 1,
      question: "What does Techscholars offers?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, id.",
    },
    {
      id: 2,
      question: "What does Techscholars offers?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, id.",
    },
    {
      id: 3,
      question: "What does Techscholars offers?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, id.",
    },
    {
      id: 4,
      question: "What does Techscholars offers?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, id.",
    },
    {
      id: 5,
      question: "What does Techscholars offers?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, id.",
    },
    {
      id: 6,
      question: "What does Techscholars offers?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, id.",
    },
  ]);

  return (
    <section className="font-Poppins">
      <div className="py-10 text-center space-y-4">
        <h1 className="text-5xl text-darkBlue font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-darkBlue">Clear your doubts</p>
      </div>

      <div className="m-2 space-y-6 w-1/2 mx-auto">
        {Faqs.map((item) => {
          return (
            <div
              key={item.id}
              className="group flex flex-col gap-2 rounded-lg p-5 text-darkBlue border-2 shadow-lg"
              tabIndex="1"
            >
              <div className="flex cursor-pointer items-center justify-between">
                <span className="text-xl"> {item.question} </span>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180 invert "
                />
              </div>
              <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
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
