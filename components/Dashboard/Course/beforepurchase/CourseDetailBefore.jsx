"use client";

import React, { useState } from "react";

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
function CourseDetailBefore() {
  const [activeBatch, setActiveBatch] = useState("11th");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };
  const data = [
    {
      id: 1,

      route: "/dashboard/my-course/coursedetail",
      description: "What do you need to know to create better products?",
      Poster: coursePoster,
    },
    {
      id: 2,

      route: "/dashboard/my-course/coursedetail",
      description: "What do you need to know to create better products?.",
      Poster: coursePoster,
    },
    {
      id: 3,

      route: "/dashboard/my-course/coursedetail",
      description: "What do you need to know to create better products?",
      Poster: coursePoster,
    },
  ];
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

  return (
    <div>
      <div className="bg-[#f7faff] font-Poppins min-h-screen py-6 md:w-[82vw] mr-4 flex flex-col ">
        {coursename === "jee" ? (
          <div className="flex ml-10 flex-col">
            <h1 className="font-[500] text-xl">JEE Mains & Advanced Batches</h1>
            <div className=" mt-8  font-Poppins font-normal border rounded-full inline w-72 ">
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
                13th
              </button>
            </div>
          </div>
        ) : coursename === "neet" ? (
          <div className="flex ml-10 flex-col">
            <h1 className="font-[500] text-xl">NEET Batches</h1>
            <div className=" mt-8  font-Poppins font-normal border rounded-full inline w-72 ">
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
                13th
              </button>
            </div>
          </div>
        ) : (
          <div className="flex ml-10 flex-col">
            <h1 className="font-[500] text-xl">Foundation Batches</h1>
            <div className=" mt-8  font-Poppins font-normal border rounded-full inline w-48">
              <button
                className={`rounded-full p-2 px-8  transition-all duration-200  ${
                  activeBatch === "11th" ? "bg-TechBlue p-2  text-white" : ""
                }`}
                onClick={() => handleClick("11th")}
              >
                9th
              </button>
              <button
                className={`rounded-full p-2 px-8 transition-all duration-200  ${
                  activeBatch === "12th" ? "bg-TechBlue p-2  text-white" : ""
                }`}
                onClick={() => handleClick("12th")}
              >
                10th
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 grid-cols-1 md:ml-10 ">
          <div className="flex col-span-2 flex-col bg-white rounded-xl mt-4 md:p-4">
            <div>
              {coursename === "jee" && activeBatch === "11th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">ELITE </span>Batch for JEE
                  2026
                </h2>
              )}

              {coursename === "jee" && activeBatch === "12th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">PRIME </span>Batch for JEE
                  2025
                </h2>
              )}

              {coursename === "jee" && activeBatch === "13th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">EXCEL </span>Batch for JEE
                  2025 (Droppers)
                </h2>
              )}

              {coursename === "neet" && activeBatch === "11th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">ELITE </span>Batch for NEET
                  2026
                </h2>
              )}

              {coursename === "neet" && activeBatch === "12th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">PRIME </span>Batch for NEET
                  2025
                </h2>
              )}

              {coursename === "neet" && activeBatch === "13th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">EXCEL </span>Batch for NEET
                  2025 (Droppers)
                </h2>
              )}

              {coursename === "foundation" && activeBatch == "10th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">RISE </span>Batch for Class 10
                  Board Exam
                </h2>
              )}

              {coursename === "foundation" && activeBatch == "9th" && (
                <h2 className="text-[22px] my-4 font-[550]">
                  <span className="text-TechBlue">IGNITE </span>Batch for Class
                  9
                </h2>
              )}

              <h2 className="text-[20px] my-4 font-[550]">Batch Details </h2>
              <div className="flex">
                <div className="r">
                  <SlCalender className="text-red-400 ounded-full mr-3 bg-slate-100 mt-4" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-[14px]">Course duration</p>
                  </div>
                  <div>
                    <p className="text-[18px]">22 Nov 2023 - 31 May 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <FaStar className="text-yellow-400 ounded-full mr-3 bg-slate-100 mt-4" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-[14px]">Validity</p>
                  </div>
                  <div>
                    <p className="text-[18px]">Till JEE Exam 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-[20px] my-4 font-[550]">Key point</h2>
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center  rounded-full p-2"
                >
                  <FaCheck className="text-white mr-2 bg-blue-500 p-1 rounded-full" />
                  <span>{point}</span>
                </div>
              ))}
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
        <div className="mx-12 ">
          <h1 className="font-[500] my-4 text-xl">
            JEE Mains & Advanced Batches
          </h1>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            showDots={false}
          >
            <FacultyCard />
            <FacultyCard />
            <FacultyCard />
            <FacultyCard />
            <FacultyCard />
            <FacultyCard />
          </Carousel>
        </div>
        <div className="mx-12 mt-8">
          <h1 className="font-[500] my-4 text-xl">Demo Lectures</h1>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            showDots={false}
          >
            <div className="rounded-lg">
              <Image src={demolac} height={140} width={200} alt="demalac-1" />
            </div>
            <div className="rounded-lg">
              <Image src={demolac} height={140} width={200} alt="demalac-2" />
            </div>
            <div className="rounded-lg">
              <Image src={demolac} height={140} width={200} alt="demalac-3" />
            </div>
            <div className="rounded-lg">
              <Image src={demolac} height={140} width={200} alt="demalac-4" />
            </div>
            <div className="rounded-lg">
              <Image src={demolac} height={140} width={200} alt="demalac-5" />
            </div>
          </Carousel>
        </div>
        <div className="mx-12 mt-8">
          <h1 className="text-center font-[600] text-xl mt-4">FAQ</h1>

          <DropdownFAQ title="What does Techscholars offer?" />
          <DropdownFAQ title="What makes us different?" />
          <DropdownFAQ title="How do we ensure concept clarity?" />
          <DropdownFAQ title="What does Techscholars offer?" />
          <DropdownFAQ title="What does Techscholars offer?" />
          <DropdownFAQ title="What does Techscholars offer?" />
          <DropdownFAQ title="What does Techscholars offer?" />
        </div>
      </div>
    </div>
  );
}

function FacultyCard() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="ml-4">
        <CardActionArea>
          <Image height="140" src={Faculty} alt="green iguana" />
          <CardContent>
            <h2 className="text-xl font-[600]">Kalgi Shah</h2>
            <p className="text-TechBlue">M.Sc Biochemistry</p>
            <Typography variant="body2" color="text.secondary">
              Senior Biology Faculty at Techscholars
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CourseDetailBefore;
