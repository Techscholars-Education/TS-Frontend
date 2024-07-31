"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import DashboardNavbar from "../DashboardNavbar";
import TestSeriesCard from "./TestSeriesCard";
import Cookies from "js-cookie";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function TestDetail() {
  const [loading, setLoading] = useState(true);
  // const [testSeries, setTestSeries] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(2); // default category

  // useEffect(() => {
  //   const fetchTestSeries = async () => {
  //     setLoading(true);
  //     try {
  //       const cookie = Cookies.get("access_token");

  //       const axiosConfig = {
  //         headers: {
  //           Authorization: cookie,
  //         },
  //       };

  //       const response = await axios.get(
  //         `https://api.techscholars.in/pdt/v1/ts/list?category_id=${selectedCategory}`,
  //         axiosConfig
  //       );

  //       setTestSeries(
  //         Array.isArray(response?.data?.test_series)
  //           ? response?.data?.test_series
  //           : []
  //       );
  //     } catch (error) {
  //       console.error("Error fetching test series:", error);
  //       setTestSeries([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTestSeries();
  // }, [selectedCategory]);
  // const [open, setOpen] = React.useState(false);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(parseInt(event.target.value, 10));
  // };

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

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-Poppins min-h-screen bg-[#f7faff] pb-24">
      <DashboardNavbar title="Test Series Foundation" />
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
          <div className="relative inline-block text-left xl:mt-8">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-full border border-TechBlue shadow-sm px-4 py-2 bg-white text-sm font-medium text-TechBlue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                Categories
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
                className="origin-top-right absolute right-0 mt-2 w-28 rounded-md  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1 " role="none">
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 "
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    All
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 "
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    JEE
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 "
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    NEET
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 "
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Foundation
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 "
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
            return <TestSeriesCard key={item.id} item={item} />;
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

export default TestDetail;
