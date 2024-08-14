"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../../public/Dashboard/avatar.jpg";
import avatar2 from "@/public/Course/avatar2.jpeg";
import avatar3 from "@/public/Course/avatar3.jpg";
import coursePoster from "@/public/Course/coursePoster.svg";
import Link from "next/link";
import timmercourse from "../../../public/dashboard-icon/timmercourse.png";
import vedio from "../../../public/dashboard-icon/vedio.png";
import test_syllabus_icon from "@/public/Test/test_syllabus_icon.svg";

const CourseCard = (props) => {
  const item = props.item;
  return (
    <>
      <div className="flex flex-col rounded-xl font-Poppins relative md:w-[22vw] mx-1 mt-2 bg-white border border-gray-100 ">
        <div>
          <Image
            className="w-full rounded-xl "
            alt="course-posters"
            src={coursePoster}
          />
        </div>

        <div className="flex flex-col m-4">
          <div>
            <div className="flex  items-center">
              <div className="flex flex-col ml-2">
                <p className="text-[12px] font-[550] text-[#0079FC]">
                  {item.target_year} & {item.year}
                </p>

                <h1 className="text-base font-medium text-darkBlue py-1">
                  {item.course_title}
                </h1>
              </div>
            </div>
          </div>
          <div className=" ml-2 py-2 font-Poppins flex justify-start space-x-2">
            <Image src={test_syllabus_icon} alt="calender-icon"></Image>
            <p className="text-xs text-gray-500 font-medium">
              From {item.start_date} | To {item.end_date}
            </p>
          </div>
          <div className="flex justify-start  items-center  mt-2">
            <div className="text-darkBlue text-sm font-medium items-center flex mr-2 ">
              <Image
                src={timmercourse}
                className="mx-2 w-4"
                alt="timmer-course"
              />
              150+ Hrs
            </div>
            <div className="text-darkBlue text-sm font-medium items-center flex">
              <Image src={vedio} className="mx-2 w-4" alt="video" />
              400+ Lessons
            </div>
          </div>
          <hr className="mt-2" />
          <div className=" flex justify-start w-full py-4 ">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <Image
                className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                src={avatar}
                alt="avatar-picture"
              />
              <Image
                className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                src={avatar2}
                alt="avatar-picture"
              />
              <Image
                className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                src={avatar3}
                alt="avatar-picture"
              />
              <span className="w-[40px] h-[40px] border border-white text-xs font-medium rounded-full bg-TechBlue text-white/90 flex items-center justify-center">
                +40
              </span>
              <span
                className="flex items-center justify-center px-2 lg:text-sm xl:text-base  text-darkBlue font-semibold pl-5 rounded-full  "
                href="#"
              >
                Students Enrolled
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <Link
              href="/"
              className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white font-medium hover:bg-black duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
