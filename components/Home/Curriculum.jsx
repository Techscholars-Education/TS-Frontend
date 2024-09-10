"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import JeeIcon from "@/public/Home/JeeIcon.svg";
import NeetIcon from "@/public/Home/NeetIcon.svg";
import FoundationIcon from "@/public/Home/FoundationIcon.svg";
import curve from "@/public/Home/vectorcurve.svg"
const Curriculum = () => {
  return (
    <section className="relative w-full h-[90vh] bg-gray-50">
         <div className="blue_blur rounded-full h-32 w-32 absolute right-[5vw] top-[5vw]"></div>
         <div className="orange_blur rounded-full h-32 w-32 absolute left-40 top-10"></div>
         <div className="pink_blur rounded-full h-32 w-32 absolute top-20 left-[55%] blur-[120px]"></div>
         <div className="pink_blur rounded-full h-32 w-32 absolute left-[50%] bottom-20 blur-[170px]"></div>
   
     <div className="h-auto w-full bg-clip-padding backdrop-filter backdrop-blur-md relative">
     <Image src={curve} className="h-auto w-full absolute -z-20" alt="curve"/>
              
     <div className=" w-full mx-auto  absolute z-0 top-32">
        <div className=" text-center">
          <h5 className="text-sm font-semibold bg-white uppercase text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
            Exam Categories
          </h5>
        </div>
        <h2 className="text-black font-semibold text-2xl  md:text-4xl  text-center my-4 font-Poppins ">
          Explore our exam categories
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm tracking-wide text-black ">
            Unleash your potential and embark on your journey to join the top 1%
          </p>
        </div>
        {/* Exam category */}
        <section className="w-10/12 lg:w-11/12 xl:w-9/12 2xl:w-[1100px] mx-auto grid grid-cols-1  lg:grid-cols-3 font-Inter gap-4 mt-10">
          <Link
            href="/course/jee"
            className="  lg:h-[210px] xl:h-[220px] rounded-lg  hover:scale-105 hover:border-black transition-all border-2 border-[#FFDAEE] border-dashed px-4 py-4 bg-white"
          >
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <Image src={JeeIcon} alt="jee-icon"></Image>
                <h2 className=" md:text-xl  text-lg font-bold">Jee</h2>
              </div>
              <div className="w-full pl-4 flex flex-col gap-3 mt-3">
                
                <p className=" md:text-[.82vw] text-xs mt-2 text-gray-500 ">
                  Start your IITJEE Preparation today with our specalised
                  courses curated by best faculties
                </p>
                <ul className="flex text-[.7vw]  my-4   ">
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1 mr-2">
               11th Class 
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1 mr-2">
               12th Class 
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1">
                Target (13th)
              </li>
            </ul>
              </div>
            </div>
          
          </Link>
          <Link
            href="/course/neet"
            className="  lg:h-[210px] xl:h-[220px] rounded-lg  hover:scale-105 hover:border-black transition-all border-2 border-[#C7E2FF] border-dashed px-4 py-4 bg-white"
          >
             <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <Image src={NeetIcon} alt="jee-icon"></Image>
                <h2 className=" md:text-xl  text-lg font-bold">Jee</h2>
              </div>
              <div className="w-full pl-4 flex flex-col gap-3 mt-3">
                
                <p className=" md:text-[.82vw] text-xs mt-2 text-gray-500 ">
                Establish a solid foundation and take a step ahead of your peers in your academic journey
                </p>
                <ul className="flex text-[.7vw]  my-4   ">
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1 mr-2">
               11th Class 
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1 mr-2">
               12th Class 
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1">
                Target (13th)
              </li>
            </ul>
              </div>
            </div>
          </Link>
          <Link
            href="/course/foundation"
            className="  lg:h-[210px] xl:h-[220px] rounded-lg  hover:scale-105 hover:border-black transition-all border-2 border-[#FFE0D2] border-dashed bg-white px-4 py-4"
          >
             <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <Image src={FoundationIcon} alt="jee-icon"></Image>
                <h2 className=" md:text-xl  text-lg font-bold">Jee</h2>
              </div>
              <div className="w-full pl-4 flex flex-col gap-3 mt-3">
                
                <p className=" md:text-[.82vw] text-xs mt-2 text-gray-500 ">
                Achieve top scores in NEET with our specialised courses, get in-depth understanding of PCB.
                </p>
                <ul className="flex text-[.7vw]  my-4   ">
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1 mr-2">
               11th Class 
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1 mr-2">
               12th Class 
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-300 py-1">
                Target (13th)
              </li>
            </ul>
              </div>
            </div>
          </Link>
        </section>
      </div>

     </div>
    </section>
  );
};

export default Curriculum;




