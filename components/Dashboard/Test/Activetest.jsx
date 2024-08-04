"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DashboardNavbar from "../DashboardNavbar";
import { LuAlarmClock } from "react-icons/lu";
const Activetest = () => {
  const { slug } = useParams();

  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (slug) {
      // Convert slug to a more readable format if needed
      const formattedHeading = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      setHeading(formattedHeading);
    }
  }, [slug]);

  // For question Container
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const question =
    "* The first ionisation potential of Na is 5. lev . The value of electron gain enthalpy of Na+ will be";
  const availableOptions = ["123", "123", "123", "124"];

  return (
    <div className="bg-white font-Poppins w-full flex flex-col ">
      <DashboardNavbar title={"Test Series"} />
      <div className="mb-6 flex flex-col mr-2 bg-gray-100/60 h-[85vh] max-w-full pl-5 pr-5 pt-6 overflow-y-auto ">
        {/* Test headind, timer, submit, view instructions */}
        <div className=" flex justify-between items-center px-4 py-4 bg-white rounded-md">
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
            <button className="border border-darkBlue text-darkBlue rounded-full font-medium px-4 py-2">
              View instructions
            </button>
            <button className="border-2 border-TechBlue bg-TechBlue text-white font-medium rounded-full  px-5 py-2">
              Submit Test
            </button>
          </div>
        </div>

        {/* (Question number, marks details), (Question, options container),(All questions container) */}

        <div className="my-6 flex justify-between space-x-4 ">
          {/* Question numnber, marks details ,(Question, options container) */}
          <div className=" xl:w-7/12 space-y-4 ">
            {/* Question Number, marks details */}
            <div className="flex p-4 bg-white rounded-md items-center">
              <h6 className="bg-TechBlue inline-block p-2 rounded-md text-white font-medium">
                40.
              </h6>
              <div className="border-2 border-TechBlue mx-10 h-[40px] "></div>
              <div className="border  rounded-full py-2 px-4 border-gray-600 font-semibold text-darkBlue">
                Marks:{" "}
                <span className="text-green-600 font-semibold">&#43;1</span>
                <span className="text-red-500 font-semibold mx-1">
                  &#45;0.25
                </span>
              </div>
              <div className="border  rounded-full py-2 px-4 border-gray-600 font-semibold text-darkBlue mx-4">
                Type: <span className=" font-medium">Single</span>
              </div>
            </div>

            {/* Question, Option container */}
            <div className="p-4 bg-white rounded-md">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-darkBlue">
                  {question}
                </h2>
              </div>
              {availableOptions.map((item, indx) => (
                <div
                  className={`border flex justify-between text-darkBlue items-center p-4 my-2 rounded-md ${
                    selectedOption === indx ? "bg-blue-100" : "bg-gray-50"
                  } cursor-pointer`}
                  key={indx}
                  onClick={() => handleOptionSelect(indx)}
                >
                  <div className="flex items-center">
                    <span className="font-semibold text-2xl">0{indx + 1}</span>
                    <div className="border-2 border-TechBlue mx-10 h-[40px]"></div>
                    <label className="text-xl font-medium text-gray-500">
                      {item}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      checked={selectedOption === indx}
                      onChange={() => handleOptionSelect(indx)}
                      className="cursor-pointer h-5 w-5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full  bg-white xl:w-5/12 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Activetest;
