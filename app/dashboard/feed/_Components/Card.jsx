"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../../../public/Dashboard/avatar.jpg";
import Link from "next/link";
import star from "../../../../public/Home/star.svg";
import { FaClock } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
const Card = (props) => {
  return (
    <>
      <div
        className={`flex flex-col rounded-xl border ${
          props.title === "JEE" ? "shadow-xl" : "shadow-md"
        }   mx-2 mb-2 font-Poppins relative`}
      >
        <div>
          <Image
            className="w-full rounded-xl "
            alt="course-posters"
            src={props.image}
          />
        </div>

        <div className="flex flex-col m-4 my-10">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl font-Inter text-darkBlue ">
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
              
            </div>
          </div>

          <hr />
          <div className="flex justify-start mt-4 items-center">
            <div className="text-darkBlue text-sm items-center flex">
              <FaClock className="mx-2" />
              150+ Hrs
            </div>
            <div className="text-darkBlue text-sm items-center flex">
              <PiGraduationCapFill className="mx-2" />
              400+ Lessons
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <Link
              href={props.route ? props.route : "/"}
              className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white"
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
