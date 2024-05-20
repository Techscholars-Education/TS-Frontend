"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import search from "../../public/Home/search.svg";
import TangledArrow from "../../public/Home/TangledArrow.svg";
import { IoMdCheckmark } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";

const Hero = () => {
  return (
    <section className=" relative mb-16  ">
      <div className="py-10 flex flex-col justify-center items-center  ">
        {/* Main heading */}
        <div>
          <h1 className=" text-xl  md:text-4xl lg:text-4xl xl:text-5xl text-darkBlue font-medium font-Poppins text-center md:leading-normal lg:leading-normal xl:leading-normal relative inline-block ">
            Be in the Top 1%
            <br />
            with our{" "}
            <span className="bg-blue-100 text-xl md:text-4xl lg:text-4xl xl:text-5xl font-medium rounded-l-lg md:border-r-4 md:border-TechBlue relative px-2 font-Poppins ">
              <ReactTyped
                strings={[
                  "expert faculties",
                  "doubt clearing support",
                  "live mentorship sessions",
                ]}
                typeSpeed={70}
                backSpeed={50}
                showCursor={false}
                loop
              ></ReactTyped>
              <span className="text-base hidden lg:block absolute bg-TechBlue text-white px-4 py-1 font-semibold top-0 left-[100%] ">
                Techscholars
              </span>
            </span>
          </h1>
        </div>

        {/* Sub heading */}
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 xl:px-80 xl:text-base text-xs md:text-base text-gray-600 tracking-wide ">
            Transforming average students into toppers with our personalised
            teaching
          </p>
        </div>

        {/* Search bar for tablet and desktop screen */}
        <div className=" mt-4 hidden md:flex md:w-1/2 lg:w-6/12 mx-auto pl-4 py-1 pr-1 rounded-full bg-white items-center border ">
          <div>
            <Image className="w-12" src={search} alt="search-icon"></Image>
          </div>
          <div className="font-Poppins w-full mx-2">
            <input
              className="outline-none p-1 text-base text-darkBlue w-full"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            <button
              className="cursor-pointer transition-all bg-TechBlue text-white px-6 py-2 rounded-full
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Search
            </button>
          </div>
        </div>

        {/* free trial box */}

        <div className=" md:hidden flex flex-col space-y-3 mt-4  ">
          <button className="  px-8 bg-TechBlue text-white py-2 rounded-full border-2 border-TechBlue">
            Start my free 14-day trial
          </button>
          <button className="flex justify-center items-center text-darkBlue border px-12 border-darkBlue py-2 rounded-full ">
            <MdSlowMotionVideo className="mr-2 text-xl mb-1" />
            Watch demo
          </button>
        </div>

        {/* plane arrow */}
        <Image
          className="absolute hidden lg:block lg:left-16 lg:top-48 xl:left-48 xl:top-[60%]  2xl:top-[50%] 2xl:left-[16%] w-20 mx-10 lg:mx-0 "
          src={TangledArrow}
          alt="TangledArrow"
        ></Image>
      </div>

      {/* tick marks */}
      <div className="flex justify-center space-x-2 md:space-x-8 font-Poppins  -mt-4 flex-wrap ">
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Affordable pricing</p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2  bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Merit based scholarships</p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-sm">24/7 mentor support </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
