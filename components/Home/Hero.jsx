"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import search from "../../public/Home/search.svg";
import TangledArrow from "../../public/Home/TangledArrow.svg";
import { IoMdCheckmark } from "react-icons/io";

const Hero = () => {
  return (
    <section className=" relative mb-16  ">
      <div className="py-10 flex flex-col justify-center items-center  ">
        {/* Main heading */}
        <div>
          <h1 className="text-5xl text-darkBlue font-medium font-Poppins text-center leading-normal relative inline-block ">
            Be in the Top 1%
            <br />
            with our{" "}
            <span className="bg-yellow-100 text-5xl font-medium rounded-l-lg border-r-4 border-yellowish relative px-2 font-Poppins ">
              expert faculties
              <span className="text-base absolute bg-yellowish px-4 py-1 font-semibold top-0 left-[100%] ">
                TechScholars
              </span>
            </span>
          </h1>
        </div>

        {/* Sub heading */}
        <div className="my-4 text-center  ">
          <p className="font-Poppins md:text-base  text-gray-600 tracking-wide ">
            Welcome to TECHSCHOLARS. Transforming average students into toppers
            <br />
            with our innovative teaching with our services.
          </p>
        </div>

        {/* Search bar */}
        <div className=" mt-4 w-5/12 mx-auto pl-4 py-1 pr-1 rounded-full bg-white flex items-center border ">
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
            <button className="rounded-full px-10 text-lg py-2 bg-yellowish  text-white hover:-translate-y-2  duration-300  auth-btn">
              Search
            </button>
          </div>
        </div>

        <Image
          className="absolute hidden lg:block  left-28 top-52 xl:left-48 xl:top-[50%]  2xl:top-[50%] 2xl:left-[16%] w-16 mx-10 lg:mx-0 "
          src={TangledArrow}
          alt="tangled-arrow"
        ></Image>
      </div>

      <div className="flex justify-center space-x-8 font-Poppins  -mt-4 ">
        <div className="flex space-x-2 justify-center items-center">
          <div className=" p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Cancel anytime</p>
        </div>
        <div className="flex space-x-2 justify-center items-center">
          <div className=" p-2  bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Access to all content</p>
        </div>
        <div className="flex space-x-2 justify-center items-center">
          <div className=" p-2 bg-blue-100 rounded-full ">
            <IoMdCheckmark className="text-blue-600 w-5 text-xl  " />
          </div>
          <p className="text-gray-600 text-sm"> Expert support</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
