"use client";
import React, { useEffect, useState } from "react";
import DashboardNavbar from "../DashboardNavbar";
import TestSeriesCard from "./TestSeriesCard";
import LoadingTestSeries from "./LoadingTestSeries";

function SeriesPurchased() {
  const [isPuchasedClicked, setIsPurchasedClicked] = useState(true);

  const [isContentLoading, setIsContentLoading] = useState(true);

  const testSeries = [
    {
      id: 1,
      heading: "Class 9 Science - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 9 science subjects and these are Full Length Mock Tests.",
      bulletPoints: [
        "Total 8 tests will be held in this series.",
        "Designed and Reviewed by top faculties.",
        "PDF Solutions provided after the exam.",
        "Accessible till 31st May 2025.",
      ],
      testType: "MCQ",
      testSyllabus: "Full Syllabus Mock Test",
    },
    {
      id: 2,
      heading: "Class 9 Maths - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 9 maths subjects and these are Full Length Mock Tests.",
      bulletPoints: [
        "Total 8 tests will be held in this series.",
        "Designed and Reviewed by top faculties.",
        "PDF Solutions provided after the exam.",
        "Accessible till 31st May 2025.",
      ],
      testType: "MCQ",
      testSyllabus: "Full Syllabus Mock Test",
    },
    {
      id: 3,
      heading: "Class 10 Science - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 10 science subjects and these are Full Length Mock Tests.",
      bulletPoints: [
        "Total 8 tests will be held in this series.",
        "Designed and Reviewed by top faculties.",
        "PDF Solutions provided after the exam.",
        "Accessible till 31st May 2025.",
      ],
      testType: "MCQ",
      testSyllabus: "Full Syllabus Mock Test",
    },
    {
      id: 4,
      heading: "Class 10 Maths - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 10 maths subjects and these are Full Length Mock Tests.",
      bulletPoints: [
        "Total 8 tests will be held in this series.",
        "Designed and Reviewed by top faculties.",
        "PDF Solutions provided after the exam.",
        "Accessible till 31st May 2025.",
      ],
      testType: "MCQ",
      testSyllabus: "Full Syllabus Mock Test",
    },
    {
      id: 5,
      heading: "Class 12 Maths - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 10 maths subjects and these are Full Length Mock Tests.",
      bulletPoints: [
        "Total 8 tests will be held in this series.",
        "Designed and Reviewed by top faculties.",
        "PDF Solutions provided after the exam.",
        "Accessible till 31st May 2025.",
      ],
      testType: "MCQ",
      testSyllabus: "Full Syllabus Mock Test",
    },
    {
      id: 6,
      heading: "Class 11 Maths - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 10 maths subjects and these are Full Length Mock Tests.",
      bulletPoints: [
        "Total 8 tests will be held in this series.",
        "Designed and Reviewed by top faculties.",
        "PDF Solutions provided after the exam.",
        "Accessible till 31st May 2025.",
      ],
      testType: "MCQ",
      testSyllabus: "Full Syllabus Mock Test",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsContentLoading(false);
    }, 2000);
  }, [setIsPurchasedClicked, isContentLoading]);

  return (
    <div className="font-Poppins min-h-screen bg-[#f7faff] pb-24">
      <DashboardNavbar title="Test Series" />
      <div className="flex flex-col md:mx-8">
        {/* ABOUT HEADINGS AND BUTTONS  */}
        <div className="flex md:justify-between  mr-4 relative z-10">
          <div className="mx-4 my-6">
            <h2 className="text-xl md:text-xl mb-2 font-semibold text-darkBlue">
              My Test Series
            </h2>
            <div className="flex items-center space-x-4 my-6">
              <button
                onClick={() => {
                  setIsPurchasedClicked(true);
                }}
                disabled={isPuchasedClicked}
                className={` ${
                  isPuchasedClicked
                    ? "bg-TechBlue text-white disabled:cursor-not-allowed "
                    : "bg-blue-100 text-darkBlue"
                } font-medium py-2 px-8 rounded-full duration-200 transition-all hover:bg-black hover:text-white  `}
              >
                Purchased
              </button>
              <button
                onClick={() => {
                  setIsPurchasedClicked(false);
                }}
                disabled={!isPuchasedClicked}
                className={` ${
                  !isPuchasedClicked
                    ? "bg-TechBlue text-white disabled:cursor-not-allowed"
                    : "bg-blue-100 text-darkBlue"
                } font-medium py-2 px-8 rounded-full duration-200 transition-all hover:bg-black hover:text-white `}
              >
                Free
              </button>
            </div>
          </div>
        </div>

        {/* FOR PURCHASED */}

        {isContentLoading && isPuchasedClicked ? (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-4 w-full xl:pr-6 mt-4 ">
            {testSeries.map((item) => {
              return <LoadingTestSeries key={item.id} />;
            })}
          </div>
        ) : (
          <>
            {" "}
            {isPuchasedClicked ? (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-4 w-full xl:pr-6 mt-4 ">
                {testSeries.map((item) => {
                  return (
                    <TestSeriesCard
                      key={item.id}
                      item={item}
                      isPurchased={true}
                    />
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-400 font-medium font-Poppins">
                Oops!, No free test series available at the moment
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default SeriesPurchased;
