"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import search from "../../public/Home/search.svg";
import TangledArrow from "../../public/Home/TangledArrow.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" relative mb-16 ">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 90 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate="visible"
        className="py-10 flex flex-col justify-center items-center  "
      >
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.3 }}
        >
          <h1 className="text-7xl text-darkBlue font-normal font-Poppins text-center leading-normal relative inline-block ">
            Be in the Top 1%
            <br />
            with our{" "}
            <span className="bg-yellow-100 text-7xl font-normal rounded-l-lg border-r-4 border-yellowish relative px-2 py-2  font-Poppins ">
              <ReactTyped
                strings={[
                  "expert faculties",
                  "doubt clearing support",
                  "All India test series",
                  "live mentorship sessions",
                ]}
                typeSpeed={90}
                backSpeed={60}
                cursorChar=""
                loop
              />
              <span className="text-base absolute bg-yellowish px-6 py-2 font-semibold top-0 left-[100%] ">
                TechScholars
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Sub heading */}
        <div className="mt-16 text-center">
          <p className="font-Poppins text-base md:text-lg lg:text-xl text-darkBlue tracking-wider">
            Transforming average students into toppers with our innovative
            teaching with our services.
          </p>
        </div>

        {/* Search bar */}
        <div className=" mt-16 w-5/12 mx-auto px-5 py-4 rounded-xl bg-white flex items-center shadow-md ">
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
          className="absolute hidden lg:block  left-0 xl:left-20  2xl:top-[50%] 2xl:left-[16%] w-28 mx-10 lg:mx-0 "
          src={TangledArrow}
        ></Image>
      </motion.div>
    </section>
  );
};

export default Hero;
