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
          <h1 className=" text-2xl  md:text-4xl lg:text-5xl text-darkBlue font-medium font-Poppins text-center md:leading-normal lg:leading-normal relative inline-block ">
            Be in the Top 1%
            <br />
            with our{" "}
            <span className="bg-yellow-100 text-2xl md:text-4xl lg:text-5xl font-medium rounded-l-lg md:border-r-4 md:border-yellowish relative px-2 font-Poppins ">
              expert faculties
              <span className="text-base hidden md:block absolute bg-yellowish px-4 py-1 font-semibold top-0 left-[100%] ">
                TechScholars
              </span>
            </span>
          </h1>
        </div>

        {/* Sub heading */}
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-base text-gray-600 tracking-wide ">
            Welcome to TECHSCHOLARS. Transforming average students into toppers
            with our innovative teaching with our services.
          </p>
        </div>

        {/* Search bar for tablet and desktop screen */}
        <div className=" mt-4 hidden md:flex md:w-1/2 lg:w-5/12 mx-auto pl-4 py-1 pr-1 rounded-full bg-white items-center border ">
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
            <button className="rounded-full px-10 text-lg py-2 bg-TechBlue  text-white hover:-translate-y-2  duration-300  auth-btn">
              Search
            </button>
          </div>
        </div>

        {/* free trial box */}

        <div className=" md:hidden flex flex-col space-y-3 mt-4  ">
          <button className="  px-8 bg-TechBlue text-white py-2 rounded-full">
            Start my free 14-day trial
          </button>
          <button className="flex justify-center items-center text-darkBlue border px-12 border-darkBlue py-2 rounded-full ">
            <MdSlowMotionVideo className="mr-2 text-xl mb-1" />
            Watch demo
          </button>
        </div>

        {/* Tangled arrow */}
        <Image
          className="absolute hidden lg:block  left-28 top-52 xl:left-48 xl:top-[50%]  2xl:top-[50%] 2xl:left-[16%] w-16 mx-10 lg:mx-0 "
          src={TangledArrow}
          alt="tangled-arrow"
        ></Image>
      </div>

      {/* tick marks */}
      <div className="flex justify-center space-x-2 md:space-x-8 font-Poppins  -mt-4 flex-wrap ">
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Cancel anytime</p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2  bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Access to all content</p>
        </div>
        <div className="flex space-x-2 justify-center items-center ">
          <div className=" py-2 px-1 md:p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xs md:text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Expert support</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
