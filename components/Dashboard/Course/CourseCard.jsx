"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../../public/Dashboard/avatar.jpg";
import Link from "next/link";
import star from "../../../public/Home/star.svg";
import { FaClock } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import firecourse from '../../../public/dashboard-icon/firecourse.png'
import timmercourse from '../../../public/dashboard-icon/timmercourse.png'
import { FaFire } from "react-icons/fa6";

const CourseCard = (props) => {
  return (
    <>
      <div
        className={`flex flex-col rounded-xl border ${
          props.title === "JEE" ? "shadow-xl" : "shadow-md"
        }   font-Poppins relative md:w-[20vw] mx-1  mt-2 bg-white`}
      >
        <div>
          <Image
            className="w-full rounded-xl "
            alt="course-posters"
            src={props.image}
          />
        </div>

        <div className="flex flex-col m-4 my-2">
          <div>
            <div className="flex  items-center">
             <div className="h-8 w-8">
              <Image src={firecourse}/>
              
             </div>
             <div className="flex flex-col ml-2">
              <p className="text-[12px] font-[600] text-[#0079FC]">{props.title}</p>
              <p className="text-sm font-[500]">{props.description.split(' ')[0]}</p>
             </div>
            </div>
          </div>
          <p className="font-base text-xs xl:text-sm leading-relaxed ml-2 text-gray-500 py-1.5 font-Poppins">
            {props.description}
          </p>
          <div className="flex justify-start  items-center">
            <div className="text-darkBlue text-sm items-center flex">
              <Image src={timmercourse} className="mx-2" />
              150+ Hrs
            </div>
            <div className="text-darkBlue text-sm items-center flex">
              <PiGraduationCapFill className="mx-2" />
              400+ Lessons
            </div>
          </div>
          <hr className="mt-2"/>
          <div className=" flex justify-start w-full py-4 ">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <Image
                className="w-[30px] h-[30px] border-2 border-white rounded-full bg-green-300"
                src={avatar}
                alt="avatar-picture"
                width="40"
                height="40"
              />
              <Image
                className="w-[30px] h-[30px] border-2 border-white rounded-full bg-green-300"
                src={avatar}
                alt="avatar-picture"
                width="40"
                height="40"
              />
              <Image
                className="w-[30px] h-[30px] border-2 border-white rounded-full bg-green-300"
                src={avatar}
                alt="avatar-picture"
                width="40"
                height="40"
              />
              <span
                className="flex items-center w-[30px] h-[30px] justify-center stdbgclr  px-2 text-xs font-medium text-TechBlue   rounded-full  "
                href="#"
              >
                +40 
              </span>
            </div>
            <span className="text-black mt-1 font-[500] ml-2 text-[13px]">students  Enrolled</span>
          </div>

        
          

          <div className="flex justify-between mt-2">
            <Link
              href={props.route ? props.route : "/"}
              className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white"
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
