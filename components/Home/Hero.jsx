"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import TangledArrow from "../../public/Home/TangledArrow.svg";
import { IoMdCheckmark } from "react-icons/io";
import Searchbar from "./Searchbar";
import fungs from "@/public/Home/fungs.png";
import axies from "@/public/Home/axies.png";
import chemical from "@/public/Home/chemical.png";
import reactimg from "@/public/Home/react.png";
const Hero = () => {
  return (
    <section className="pb-16 bg-gray-50 relative">
            
             <div className="bg-blue-50 backdrop-blur-2xl  rounded-full h-44 w-44 absolute right-10 top-10"></div>
             <div className="bg-orange-50 filter opacity-75 backdrop-blur-2xl rounded-full h-32 w-32 absolute left-40 bottom-10"></div>
             <div className="h-auto w-full bg-clip-padding backdrop-filter backdrop-blur-md">
      <div className="py-10 flex flex-col justify-center items-center r ">
      <Image src={axies} alt="axies" className="h-16 w-16 absolute left-[7vw] top-16"/>
      <Image src={reactimg} alt="react" className="h-16 w-16 absolute left-[12vw] bottom-16"/>
      <Image src={fungs} alt="react" className="h-16 w-16 absolute right-[12vw] top-16"/>
      <Image src={chemical} alt="react" className="h-16 w-16 absolute right-[7vw] bottom-16"/>
        {/* Main heading */}
        <div>
          <h1 className=" text-xl  md:text-4xl lg:text-4xl xl:text-5xl text-darkBlue font-medium font-Poppins text-center md:leading-normal lg:leading-normal xl:leading-normal relative inline-block ">
            Be in the <span className="text-TechBlue">top 1%</span>
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
            Transforming average students into toppers with our innovative
            teaching
          </p>
        </div>

        {/* Search bar for tablet and desktop screen */}

        <Searchbar />

        {/* Tangled arrow */}

        {/* <Image
          className="absolute hidden lg:block lg:left-24 lg:top-36 xl:left-64 xl:top-[40%] 2xl:top-[50%] 2xl:left-[22%] w-20 2xl:w-16 mx-10 lg:mx-0 "
          src={TangledArrow}
          alt="TangledArrow"
        ></Image> */}
      </div>

      {/* tick marks */}

      <div className="flex justify-center space-x-2 md:space-x-8 font-Poppins  -mt-4 flex-wrap ">
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-xs md:text-sm">
            {" "}
            Performance Insights
          </p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2  bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600  text-xs md:text-sm">
            {" "}
            Study with the top 1%
          </p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-xs md:text-sm">
            24/7 Customer Support
          </p>
        </div>
      </div>
      
      </div>
    </section>
  );
};

export default Hero;
