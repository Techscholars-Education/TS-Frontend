"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import { FaFilePdf } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import TestSeriesCard from "./TestSeriesCard";
const DetailedView = () => {
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
  ];

  return (
    <div className="bg-gray-100 font-Poppins w-full flex flex-col min-h-screen">
      <DashboardNavbar title="Test series" />

      {/* Particular course details */}
      <div className=" flex  my-10 mx-10 space-x-8 ">
        {/* container 1 */}
        <div className=" w-full bg-white rounded-xl p-8 ">
          <div>
            <h2 className="text-xl font-semibold text-darkBlue">{heading}</h2>
          </div>
          <ul className="list-disc marker:text-TechBlue pl-6 my-3 space-y-2 text-gray-500 font-[450]">
            <li>Total 8 tests will be held in this series</li>
            <li>Designed and Reviewed by top faculties</li>
            <li>PDF Solutions provided after the exam</li>
            <li>Accessible till 31st May 2025</li>
          </ul>
          <div className="my-4">
            <h2 className="text-xl font-semibold text-darkBlue">Syllabus</h2>
            <ul className="list-disc marker:text-TechBlue pl-6 my-3 space-y-2 text-gray-500 font-[450]">
              <li>Physics - Full Syllabus</li>
              <li>Chemistry - Full Syllabus</li>
              <li>Biology - Full Syllabus</li>
            </ul>
          </div>
          <div className="my-4">
            <h2 className="text-xl font-semibold text-darkBlue">
              Instructions
            </h2>
            <ul className="list-disc marker:text-TechBlue pl-6 my-3 space-y-2 text-gray-500 font-[450]">
              <li>Full Marks - 100</li>
              <li>Time - 3 Hours</li>
              <li>
                50 Questions | +2 marks for correct answer | No negative marking{" "}
              </li>
            </ul>
          </div>
          <div className="mt-6 flex items-center space-x-2">
            <FaFilePdf className="text-4xl text-red-700" />
            <Link
              href={"sample.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
              className="text-darkBlue text-xl font-semibold hover:text-blue-700"
            >
              Download the exam schedule
            </Link>
          </div>
        </div>

        {/* container 2 */}
        <div className="xl:w-[500px] bg-white rounded-xl xl:h-[460px] ">
          {/* For image */}
          <div className="w-full h-52 bg-gray-300 animate-pulse rounded-xl"></div>

          <div className="p-4 space-y-2">
            <span className="text-TechBlue font-[500] text-sm ">
              Class 9- Foundation - 2025
            </span>
            <h2 className="text-lg font-semibold text-darkBlue ">{heading}</h2>
            <hr />
            <div className="flex justify-start space-x-2 items-center ">
              <GiNotebook className="text-2xl text-darkBlue" />
              <p className="font-medium">MCQ</p>
            </div>
            <div className="flex justify-start space-x-2 items-center ">
              <FaGraduationCap className="text-2xl text-darkBlue" />
              <p className="font-medium">Full syllabus MOCK test</p>
            </div>
            <div className="w-full  ">
              <Link
                className="bg-TechBlue mt-4 text-white rounded-full w-full py-3 hover:bg-black duration-200 inline-block text-center font-medium font-Poppins"
                href="#"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* EXPLORE OTHER COURSES SECTION */}
      <div className="md:mx-8 mb-20">
        <h2 className="text-2xl font-semibold text-darkBlue mx-4">
          Explore other test series
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-4 w-full xl:pr-6 my-4 ">
          {testSeries.map((item) => {
            return <TestSeriesCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
