"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classroom from "@/public/Course/classroom.png";
import calendar from "@/public/Course/calendar.png";
import languages from "@/public/Course/languages.png";
import books from "@/public/Course/books.png";
import { BsFillClockFill } from "react-icons/bs";
import lesson from "@/public/Course/lesson.png";
import coursePoster from "@/public/Course/coursePoster.svg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdDone } from "react-icons/md";

const Batch = (props) => {
  const [activeBatch, setActiveBatch] = useState(props.activeBatch);
  const [examType, setExamType] = useState(props.examType);

  useEffect(() => {
    setActiveBatch(props.activeBatch);
    setExamType(props.examType);
  }, [props.activeBatch, props.examType]);
  console.log(activeBatch);
  return (
    <section className=" w-11/12 xl:w-9/12 mx-auto flex flex-col md:flex md:flex-row justify-between font-Poppins my-8 md:space-x-4 space-y-4 ">
      <div className="border  w-full  md:w-1/2 lg:w-2/3 p-6 rounded-md mt-4 bg-white">
        <div>
          <h2 className="font-semibold text-xl">
            <span className="text-TechBlue">
              {activeBatch === "11th"
                ? "ELITE"
                : activeBatch === "12th"
                ? "PRIME"
                : "EXCEL"}
            </span>{" "}
            Batch for {examType} 2026{" "}
            <span className="text-TechBlue">
              {activeBatch === "13th" ? "(Droppers)" : ""}
            </span>
          </h2>
        </div>
        <div className="my-4">
          <h4 className="font-semibold text-xl">Batch Details</h4>
        </div>

        <ul className="space-y-6 my-6 ">
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400  p-3 rounded-full">
              <Image className="w-8" src={classroom} alt="class-icon"></Image>
            </div>
            <div className="text-sm">
              <span>For:</span>
              <p className="font-medium">
                {activeBatch === "13th" ? "" : "Class"}{" "}
                <span className="text-TechBlue">
                  {activeBatch === "11th"
                    ? "11"
                    : activeBatch === "12th"
                    ? "12"
                    : "Droppers"}
                </span>{" "}
                ( 2026 {examType} aspirant )
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400 p-3 rounded-full">
              <Image className="w-8" src={calendar} alt="calender-icon"></Image>
            </div>
            <div className="text-sm">
              <span>Course Duration:</span>
              <p className="font-medium">1 Year | 2024-2025</p>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400  p-3 rounded-full">
              <Image className="w-8" src={books} alt="book-icon"></Image>
            </div>
            <div className="text-sm">
              <span>Subjects:</span>
              <p className="font-medium">
                {examType === "NEET"
                  ? "Physics, Chemistry, Biology"
                  : examType === "JEE"
                  ? "Physics, Chemistry, Biology"
                  : "Physics, Chemistry, Biology, Mathematics"}
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400  p-3 rounded-full">
              <Image
                className="w-8"
                src={languages}
                alt="languages-icon"
              ></Image>
            </div>
            <div className="text-sm">
              <span>Languages:</span>
              <p className="font-medium">English</p>
            </div>
          </li>
        </ul>
        <div className="my-4">
          <h4 className="font-semibold text-xl">Key Points</h4>
        </div>
        <ul className="my-6 space-y-4">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              PDF Notes of each Class will be uploaded 3 Hours after the class.
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              Daily Practice Problems with their Solution will be available in
              PDF Format after class.
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              Scheduled tests will be held according to the planner.
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              All India Test Series (AITS) will be provided according to the
              Test Planner.
            </span>
          </li>
        </ul>
      </div>
      <div className=" w-full md:w-1/2 lg:w-1/3  ">
        <div className="bg-white rounded-lg">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={coursePoster}
              alt="blog"
            />
            <div className="p-6">
              <div className="flex items-center justify-start space-x-4  mb-2 ">
                <Image className="w-12" src={lesson} alt="lesson-icon"></Image>
                <div>
                  <h2 className="text-sm font-medium text-TechBlue">
                    Get started
                  </h2>
                  <p className=" xl:text-base font-medium">
                    New lessons are available now
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between my-4 ">
                <div className="flex items-center">
                  <BsFillClockFill className="mr-2 text-TechBlue" />
                  85 mins
                </div>
                <div className="flex items-center">
                  <MdOutlineSlowMotionVideo className="mr-2 text-orange-400" />
                  Video format
                </div>
              </div>
              <hr />
              <div className="flex items-center flex-wrap my-4">
                <Link
                  href="/payment"
                  className="text-white w-full bg-TechBlue rounded-full py-3 font-semibold flex justify-center items-center hover:bg-black duration-200 "
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Batch;