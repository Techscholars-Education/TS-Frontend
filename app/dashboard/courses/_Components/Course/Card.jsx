"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import avatar from "@/public/Dashboard/avatar.jpg";
import Link from "next/link";
import avatar2 from "@/public/Course/avatar2.jpeg";
import avatar3 from "@/public/Course/avatar3.jpg";

import { FaClock } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
const Card = (props) => {

  const [premium, setPremium] = useState()
     
  useEffect(()=>{
    const image = window?.localStorage?.getItem("profile-storage");
    const datajs = JSON.parse(image);
    setPremium(datajs.state.profiles.is_premium);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[1])
  
  return (
  <>
     <div
        className={`flex flex-col rounded-xl border border-gray-100 bg-white ${
          props.title === "JEE" ? "shadow-lg" : "shadow-sm"
        }   mx-2 font-Poppins relative`}
      >
        <div>
          <Image
            className=" rounded-t-xl h-full w-full "
            width={100}
            height={100}
            alt="course-posters"
            src={props.image}
          />
        </div>

        <div className="flex flex-col m-4 my-4">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl font-Inter  text-darkBlue ">
                {props.title}
              </h3>
            </div>
          </div>
          <p className="font-base text-xs xl:text-sm leading-relaxed text-gray-500 py-3 font-Poppins">
            {props.description}
          </p>
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

          <hr />
          <div className="flex justify-start space-x-6 mt-4 items-center">
            <div className="text-darkBlue text-sm items-center font-medium flex">
              <FaClock className="mx-2 text-xl" />
              400+ Hrs
            </div>
            <div className="text-darkBlue text-sm items-center font-medium flex">
              <PiGraduationCapFill className="mx-2 text-2xl" />
              600+ Lessons
            </div>
          </div>

          <div className="flex justify-between my-3">
            <Link
              href={props.route ? props.route : "/"}
              className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white hover:bg-black hover:text-white duration-200"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

  </>
  );
};

export default Card;
