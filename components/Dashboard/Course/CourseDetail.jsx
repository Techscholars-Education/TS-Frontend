"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classroom from "@/public/Course/classroom.png";
import calendar from "@/public/Course/calendar.png";
import languages from "@/public/Course/languages.png";
import books from "@/public/Course/books.png";
import coursePoster from "@/public/Course/coursePoster.svg";
import { MdDone } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaClock } from "react-icons/fa6";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import CourseDetailNavbar from "./CourseDetailNavbar";

import { useParams } from "next/navigation";

function CourseDetail() {
  const params = useParams();
  const [currYear, setCurrYear] = useState("");
  const [nxtYear, setNxtYear] = useState("");
  const [userPremium, setUserPremium] = useState(true)
  const [is_premium,setIs_Premium] = useState(false)

  useEffect(() => {
    const currYear = new Date().getFullYear();
    const nxtYear = currYear + 1;
    const nxtnxtYear = currYear + 2;
    setCurrYear(currYear);
    setNxtYear(nxtYear);
  }, [currYear]);

  // useEffect(() => {
  //   const planse = window?.localStorage?.getItem("profile-storage");
  //   const plans = JSON.parse(planse);
  //   setUserPremium(plans.state.profiles.is_premium);
  // }, [1]);

  
  const handlePremium = () =>{
        setIs_Premium(userPremium)
        if(userPremium){
          toast.info("You already have a plan")
        }
  }


  return (
    <div>
      <ToastContainer/>
      <div className="bg-gray-100/60 font-Poppins min-h-screen py-6 md:w-[82vw] mr-4 flex flex-col ">
        <CourseDetailNavbar courseRoute={params.coursedetail} />
        <section className=" w-11/12 xl:w-11/12 2xl:w-[1100px] mx-auto flex flex-col md:flex md:flex-row justify-between font-Poppins my-8 md:space-x-4 space-y-4 ">
          <div className=" w-full  md:w-1/2 lg:w-2/3 p-6 rounded-md mt-4 bg-white">
            <div>
              <h2 className="font-semibold text-xl text-TechBlue">
                {params.coursedetail} - {nxtYear}
              </h2>
            </div>
            <div className="my-4">
              <h4 className="font-semibold text-xl text-darkBlue">
                Batch Details
              </h4>
            </div>

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
                  <p className="font-medium">Batch info</p>
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
                  <p className="font-medium">depends</p>
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
            <div className="my-4">
              <h4 className="font-semibold text-xl">Key Points</h4>
            </div>
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
                  Daily Practice Problems with their Solution will be available
                  in PDF Format after class.
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
                  className="md:h-52 lg:h-48 xl:h-60 2xl:w-[600px] w-full object-cover object-center"
                  src={coursePoster}
                  alt="blog"
                />
                <div className="p-5">
                  <div className="flex items-center justify-start space-x-4  mb-2 ">
                    <div>
                      <p className="text-[12px] font-medium text-[#0079FC]">
                        {params.coursedetail} | {nxtYear}
                      </p>
                      <h2 className="text-lg font-semibold text-TechBlue">
                        {params.coursedetail}
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-start space-x-6 my-4 items-center">
                    <div className="text-darkBlue text-sm items-center font-semibold font-Inter flex">
                      <FaClock className="mx-2 text-xl text-TechBlue " />
                      400+ Hrs
                    </div>
                    <div className="text-darkBlue text-sm items-center font-semibold font-Inter flex">
                      <MdOutlineSlowMotionVideo className="mx-2 text-2xl text-orange-600" />
                      600+ Lessons
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center flex-wrap my-4">
                    <button
                    onClick={handlePremium}
                    className="text-white w-full bg-TechBlue rounded-full py-3 font-semibold flex justify-center items-center hover:bg-black duration-200 "
                    >
                    Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseDetail;
