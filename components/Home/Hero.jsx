"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import search from "../../public/Home/search.svg";
import TangledArrow from "../../public/Home/TangledArrow.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <section className=" relative ">
      <div className="py-10 flex flex-col justify-center items-center  ">
        {/* Main heading */}
        <h1 className="text-7xl text-darkBlue font-normal font-Poppins text-center leading-normal relative inline-block ">
          Be in the Top 1%
        </h1>
        <h2 className="bg-yellow-100 text-4xl font-normal rounded-l-lg border-r-4 border-yellowish relative px-2 py-2  font-Poppins ">
          Our Courses are{" "}
          <ReactTyped
            strings={["by the Toppers", "for the Toppers"]}
            typeSpeed={90}
            backSpeed={60}
            cursorChar=""
            loop
          />
          <span className="text-base absolute bg-yellowish px-6 py-2 font-semibold top-0 left-[100%] ">
            TechScholars
          </span>
        </h2>

        {/* Sub heading */}
        <div className="my-12 text-center">
          <p className="font-Poppins text-base md:text-lg lg:text-xl text-darkBlue tracking-wider">
            Transforming average students into toppers with our innovative
            teaching with our services.
          </p>
        </div>

        {/* Search bar */}
        <div className=" my-6 w-5/12 mx-auto px-5 py-4 rounded-xl bg-white flex items-center shadow-md ">
          <div>
            <Image className="w-12" src={search}></Image>
          </div>
          <div className="font-Poppins w-full mx-2">
            <input
              className="outline-none p-3 text-lg text-darkBlue  w-full"
              type="text"
              placeholder="Search the class type"
            />
          </div>
          <div>
            <button className="  rounded-xl px-10 text-xl py-3 bg-yellowish  text-darkBlue hover:-translate-y-2  duration-300  auth-btn">
              Search
            </button>
          </div>
        </div>

        <Image
          className="absolute hidden lg:block  left-0 xl:left-20  2xl:top-[42%] 2xl:left-[20%] w-28 mx-10 lg:mx-0 "
          src={TangledArrow}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
