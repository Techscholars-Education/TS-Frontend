"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import DashboardNavbar from "../DashboardNavbar";
import TestSeriesCard from "./TestSeriesCard";

function SeriesNotPurchased() {
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
      heading: "Class 11 Physics - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 11 physics subjects and these are Full Length Mock Tests.",
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
      heading: "Class 11 Chemistry - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 11 chemistry subjects and these are Full Length Mock Tests.",
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
      id: 7,
      heading: "Class 11 Biology - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 11 biology subjects and these are Full Length Mock Tests.",
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
      id: 8,
      heading: "Class 11 Maths - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 11 maths subjects and these are Full Length Mock Tests.",
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
      id: 9,
      heading: "Class 12 Physics - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 12 physics subjects and these are Full Length Mock Tests.",
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
      id: 10,
      heading: "Class 12 Chemistry - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 12 chemistry subjects and these are Full Length Mock Tests.",
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
      id: 11,
      heading: "Class 12 Biology - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 12 biology subjects and these are Full Length Mock Tests.",
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
      id: 12,
      heading: "Class 12 Maths - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 12 maths subjects and these are Full Length Mock Tests.",
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
      id: 13,
      heading: "NEET - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the NEET exam and these are Full Length Mock Tests.",
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
      id: 14,
      heading: "JEE Main - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the JEE Main exam and these are Full Length Mock Tests.",
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
      id: 15,
      heading: "JEE Advanced - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the JEE Advanced exam and these are Full Length Mock Tests.",
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
      id: 16,
      heading: "CBSE Class 12 Physics - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the CBSE Class 12 Physics subjects and these are Full Length Mock Tests.",
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
      id: 17,
      heading: "CBSE Class 12 Chemistry - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the CBSE Class 12 Chemistry subjects and these are Full Length Mock Tests.",
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
      id: 18,
      heading: "CBSE Class 12 Biology - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the CBSE Class 12 Biology subjects and these are Full Length Mock Tests.",
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
      id: 19,
      heading: "CBSE Class 12 Maths - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the CBSE Class 12 Maths subjects and these are Full Length Mock Tests.",
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
      id: 20,
      heading: "Class 8 Science - Full Syllabus",
      description:
        "The Test series covers the entire syllabus for the class 8 science subjects and these are Full Length Mock Tests.",
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

  // FOR THE DROPDOWN
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle clicks outside of the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="font-Poppins min-h-screen bg-[#f7faff] pb-24">
      <DashboardNavbar title="Test Series" />
      <div className="flex flex-col md:mx-8">
        <div className="flex md:justify-between mb-8 mr-4 relative z-10">
          <div className="mx-4 my-6">
            <h2 className="text-xl md:text-xl mb-2 font-semibold text-darkBlue">
              Test Series
            </h2>
            <p className="text-gray-500 ml-0.5">
              Test and improve yourself before the main examination
            </p>
          </div>
          {/* Drop-down */}
          <div
            className="relative inline-block text-left xl:mt-8"
            ref={dropdownRef}
          >
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-full border border-TechBlue shadow-sm px-4 py-2 bg-white text-sm font-medium text-TechBlue hover:bg-gray-50 focus:outline-none"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                All
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    JEE
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    NEET
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Foundation
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Others
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FOR ALL TESTSERIES */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-4 w-full xl:pr-6 ">
          {testSeries.map((item) => {
            return (
              <TestSeriesCard key={item.id} item={item} isPurchased={false} />
            );
          })}
        </div>

        {/* JEE */}
        {/* NEET */}
        {/* FOUNDATION */}

        {/* OTHERS Exams test series categories */}
      </div>
    </div>
  );
}

export default SeriesNotPurchased;
