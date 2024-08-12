"use client";
import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { FaStar, FaCheck } from "react-icons/fa";
import coursePoster from "../../../../public/Course/coursePoster.svg";
import firecourse from "../../../../public/dashboard-icon/firecourse.png";
import timmercourse from "../../../../public/dashboard-icon/timmercourse.png";
import vedio from "../../../../public/dashboard-icon/vedio.png";
import Image from "next/image";
import Faculty from "../../../../public/Faculty.png";
import Link from "next/link";
import demolac from "../../../../public/demolac.png";
import { FaClock } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa6";
import CourseCard from "./../CourseCard";
import Costing from "@/components/Course/Costing";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DropdownFAQ from "./DropdownFAQ";
import { useParams } from "next/navigation";
import classroom from "@/public/Course/classroom.png";
import calendar from "@/public/Course/calendar.png";
import languages from "@/public/Course/languages.png";
import books from "@/public/Course/books.png";

import AboutFaculties from "./AboutFaculties";
import { MdDone } from "react-icons/md";

import Faqs from "@/components/Faqs/Faqs";

function CourseDetailBefore() {
  const [activeBatch, setActiveBatch] = useState("11th");
  const [currYear, setCurrYear] = useState("");
  const [nxtYear, setNxtYear] = useState("");
  const [nxtnxtYear, setNxtNxtYear] = useState("");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };

  const points = [
    "Understand the basics of Prototype & Animation",
    "Understand the basics of MicroInteraction",
    "Creating Animation (20 case studies) for mobile apps",
    "Presenting designs using Animation",
  ];

  const [costing11th, setCosting11th] = useState([
    {
      id: 5,
      title: "Starter",
      price: "2499",
      description: "JEE Starter Pack for class 11th",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 16,
      title: "Advanced",
      price: "8999",
      description: "JEE Advanced Pack for class 11th",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 21,
      title: "Ultimate",
      price: "18999",
      description: "JEE Ulitmate Pack for class 11th",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ]);
  const [costing12th, setCosting12th] = useState([
    {
      id: 6,
      title: "Starter",
      price: "3999",
      description: "JEE Starter Pack for class 12th",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 15,
      title: "Advanced",
      price: "8999",
      description: "JEE Advanced Pack for class 12th",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 22,
      title: "Ultimate",
      price: "18999",
      description: "JEE Ultimate Pack for class 12th",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ]);
  const [costing13th, setCosting13th] = useState([
    {
      id: 7,
      title: "Starter",
      price: "4999",
      description: "JEE Starter Pack for class 13th",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 14,
      title: "Advanced",
      price: "9999",
      description: "JEE Advanced Pack for class 13th",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 23,
      title: "Ultimate",
      price: "19999",
      description: "JEE Ultimate Pack for class 13th",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const { coursename } = useParams();
  useEffect(() => {
    const currYear = new Date().getFullYear();
    const nxtYear = currYear + 1;
    const nxtnxtYear = currYear + 2;
    setCurrYear(currYear);
    setNxtYear(nxtYear);
    setNxtNxtYear(nxtnxtYear);
  }, [currYear]);
  return (
    <div>
      <div className="bg-gray-100/60 font-Poppins min-h-screen py-6 md:w-[82vw] mr-4 flex flex-col ">
        {coursename === "jee" ? (
          <div className="flex ml-10 flex-col">
            <h1 className="font-semibold text-darkBlue text-xl">
              JEE Mains & Advanced Batches
            </h1>
            <div className="py-4">
              <div className=" font-Poppins border border-gray-400 py-2 mx-auto rounded-full inline text-darkBlue/60 font-medium ">
                <button
                  className={`rounded-full p-2 px-8  transition-all duration-200  ${
                    activeBatch === "11th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("11th")}
                >
                  11th
                </button>
                <button
                  className={`rounded-full p-2 px-8 transition-all duration-200  ${
                    activeBatch === "12th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("12th")}
                >
                  12th
                </button>
                <button
                  className={`rounded-full p-2 px-8 transition-all duration-200  ${
                    activeBatch === "13th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("13th")}
                >
                  Droppers
                </button>
              </div>
            </div>
          </div>
        ) : coursename === "neet" ? (
          <div className="flex ml-10 flex-col">
            <h1 className="font-semibold text-darkBlue text-xl">
              NEET Batches
            </h1>
            <div className="py-4">
              <div className=" font-Poppins border border-gray-400 py-2 mx-auto rounded-full inline text-darkBlue/60 font-medium ">
                <button
                  className={`rounded-full p-2 px-8  transition-all duration-200  ${
                    activeBatch === "11th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("11th")}
                >
                  11th
                </button>
                <button
                  className={`rounded-full p-2 px-8 transition-all duration-200  ${
                    activeBatch === "12th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("12th")}
                >
                  12th
                </button>
                <button
                  className={`rounded-full p-2 px-8 transition-all duration-200  ${
                    activeBatch === "13th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("13th")}
                >
                  Droppers
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex ml-10 flex-col">
            <h1 className="font-semibold text-darkBlue text-xl">
              Foundation Batches
            </h1>
            <div className="py-4">
              <div className=" font-Poppins border border-gray-400 py-2 mx-auto rounded-full inline text-darkBlue/60 font-medium ">
                <button
                  className={`rounded-full p-2 px-8  transition-all duration-200  ${
                    activeBatch === "11th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("9th")}
                >
                  9th
                </button>
                <button
                  className={`rounded-full p-2 px-8 transition-all duration-200  ${
                    activeBatch === "12th" ? "bg-TechBlue p-2  text-white" : ""
                  }`}
                  onClick={() => handleClick("10th")}
                >
                  10th
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 grid-cols-1 md:ml-10 ">
          <div className="flex col-span-2 flex-col bg-white rounded-xl mt-4 md:p-4">
            <div>
              <h2 className="font-semibold text-xl text-darkBlue">
                <span className="text-TechBlue">
                  {activeBatch === "11th"
                    ? "ELITE"
                    : activeBatch === "12th"
                    ? "PRIME"
                    : activeBatch === "9th"
                    ? "IGNITE"
                    : activeBatch === "10th"
                    ? "RISE"
                    : "EXCEL"}
                </span>{" "}
                Batch for{" "}
                {coursename == "JEE" || coursename === "NEET" ? coursename : ""}{" "}
                <span>
                  {" "}
                  {activeBatch === "11th"
                    ? `${nxtnxtYear === "" ? "Loading..." : nxtnxtYear}`
                    : activeBatch === "12th"
                    ? `${nxtnxtYear === "" ? "Loading..." : nxtYear}`
                    : activeBatch === "9th"
                    ? `${nxtnxtYear === "" ? "Loading..." : nxtYear}`
                    : activeBatch === "10th"
                    ? `${nxtnxtYear === "" ? "Loading..." : nxtYear}`
                    : `${nxtnxtYear === "" ? "Loading..." : nxtYear}`}
                </span>{" "}
                <span className="text-TechBlue">
                  {activeBatch === "13th"
                    ? "(Droppers)"
                    : activeBatch === "9th"
                    ? "Class 9"
                    : activeBatch === "10th"
                    ? "Class 10 Board exams"
                    : ""}
                </span>
              </h2>

              <h2 className="text-[20px] my-4 font-[550]">Batch Details </h2>
              <ul className="space-y-6 my-6 ">
                <li className="flex items-center justify-start space-x-4">
                  <div className="  p-3 rounded-full bg-blue-100">
                    <Image
                      className="w-8"
                      src={classroom}
                      alt="class-icon"
                    ></Image>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">For:</span>
                    <p className="font-medium">
                      {activeBatch === "13th" ? "" : "Class"}{" "}
                      <span className="text-TechBlue">
                        {activeBatch === "11th"
                          ? "11"
                          : activeBatch === "12th"
                          ? "12"
                          : activeBatch === "9th"
                          ? "9"
                          : activeBatch === "10th"
                          ? "10"
                          : "Droppers"}
                      </span>{" "}
                      ({" "}
                      <span>
                        {" "}
                        {activeBatch === "11th"
                          ? `${nxtnxtYear === "" ? "Loading..." : nxtnxtYear}`
                          : activeBatch === "12th"
                          ? `${nxtnxtYear === "" ? "Loading..." : nxtYear}`
                          : activeBatch === "9th"
                          ? `${nxtnxtYear === "" ? "Loading..." : nxtYear}`
                          : activeBatch === "10th"
                          ? `${nxtnxtYear === "" ? "Loading..." : nxtYear}`
                          : `${nxtnxtYear === "" ? "Loading..." : nxtYear}`}
                      </span>{" "}
                      {coursename == "jee" || coursename === "neet"
                        ? `${coursename.toUpperCase()} aspirants`
                        : ""}{" "}
                      )
                    </p>
                  </div>
                </li>
                <li className="flex items-center justify-start space-x-4">
                  <div className="  p-3 rounded-full bg-blue-100">
                    <Image
                      className="w-8"
                      src={calendar}
                      alt="calender-icon"
                    ></Image>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Course Duration:</span>
                    <p className="font-medium">
                      1 Year |
                      <span>
                        {" "}
                        {`${
                          nxtYear === ""
                            ? "Loading..."
                            : `${currYear} - ${nxtYear}`
                        }`}
                      </span>{" "}
                    </p>
                  </div>
                </li>
                <li className="flex items-center justify-start space-x-4">
                  <div className="  p-3 rounded-full bg-blue-100">
                    <Image className="w-8" src={books} alt="book-icon"></Image>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Subjects:</span>
                    <p className="font-medium">
                      {coursename === "neet"
                        ? "Physics, Chemistry, Biology"
                        : coursename === "jee"
                        ? "Physics, Chemistry, Mathematics"
                        : "Physics, Chemistry, Biology, Mathematics"}
                    </p>
                  </div>
                </li>
                <li className="flex items-center justify-start space-x-4">
                  <div className="  p-3 rounded-full bg-blue-100">
                    <Image
                      className="w-8"
                      src={languages}
                      alt="languages-icon"
                    ></Image>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Languages:</span>
                    <p className="font-medium">English</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <h2 className="text-[20px] my-4 font-[550]">Key point</h2>
              <ul className="my-6 space-y-4">
                <li className="flex justify-start space-x-2 items-center">
                  <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1 w-6 md:w-7 lg:w-5 xl:w-5" />
                  <span className="text-gray-black text-xs md:text-sm">
                    PDF Notes of each Class will be uploaded 3 Hours after the
                    class.
                  </span>
                </li>
                <li className="flex justify-start space-x-2 items-center">
                  <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1 w-8 md:w-8 lg:w-5 xl:w-5" />
                  <span className="text-gray-black text-xs md:text-sm">
                    Daily Practice Problems with their Solution will be
                    available in PDF Format after class.
                  </span>
                </li>
                <li className="flex justify-start space-x-2 items-center">
                  <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1 w-6 md:w-6 lg:w-5 xl:w-5" />
                  <span className="text-gray-black text-xs md:text-sm">
                    Scheduled tests will be held according to the planner.
                  </span>
                </li>
                <li className="flex justify-start space-x-2 items-center">
                  <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1 w-8 md:w-7 lg:w-5 xl:w-5" />
                  <span className="text-gray-black text-xs md:text-sm">
                    All India Test Series (AITS) will be provided according to
                    the Test Planner.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-cols-1">
            <div
              className={`flex flex-col rounded-xl border 
           font-Poppins relative md:w-[20vw] md:ml-8 bg-white mt-4`}
            >
              <div>
                <Image
                  className="w-full rounded-xl "
                  alt="course-posters"
                  src={coursePoster}
                />
              </div>

              <div className="flex flex-col m-4 my-10">
                <div>
                  <div className="flex  items-center my-2">
                    <div>
                      <Image
                        src={firecourse}
                        className="h-8 w-8 "
                        alt="fire-course"
                      />
                    </div>
                    <div className="flex flex-col ml-2">
                      <p className="text-[12px] font-[600] text-[#0079FC]">
                        Business Design
                      </p>
                      <p className="text-sm font-[500]">
                        New lession is available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mt-4 items-center">
                  <div className="text-darkBlue text-sm items-center flex mr-2">
                    <Image
                      src={timmercourse}
                      className="mx-2"
                      alt="timmer-course"
                    />
                    85min
                  </div>
                  <div className="text-darkBlue text-sm items-center flex">
                    <Image src={vedio} className="mx-2" alt="vedio" />
                    400+ Lessons
                  </div>
                </div>
                <hr className="mt-2" />

                <div className="flex justify-between mt-4">
                  <Link
                    href="/dashboard/courses"
                    className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Costing
          CostingData={
            activeBatch === "11th"
              ? costing11th
              : activeBatch === "12th"
              ? costing12th
              : costing13th
          }
        />

        <AboutFaculties />
        <Faqs />
      </div>
    </div>
  );
}

export default CourseDetailBefore;
