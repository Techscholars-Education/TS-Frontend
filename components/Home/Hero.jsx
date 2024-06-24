"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import TangledArrow from "../../public/Home/TangledArrow.svg";
import { IoMdCheckmark } from "react-icons/io";
import Searchbar from "./Searchbar";
const Hero = () => {
  return (
    <section className=" relative  pb-16   bg-white ">
      <div className="py-10 flex flex-col justify-center items-center r ">
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

        <Searchbar />

        {/* plane arrow */}

        <Image
          className="absolute hidden lg:block lg:left-24 lg:top-36 xl:left-64 xl:top-[40%] 2xl:top-[50%] 2xl:left-[22%] w-20 2xl:w-16 mx-10 lg:mx-0 "
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
          <p className="text-gray-600 text-xs md:text-sm">
            {" "}
            Affordable pricing
          </p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2  bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600  text-xs md:text-sm">
            {" "}
            Merit based scholarships
          </p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-xs md:text-sm">
            24/7 mentor support{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
