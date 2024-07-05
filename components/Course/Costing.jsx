"use client";
import React from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Costing = (props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-5 my-10 w-full lg:w-11/12 xl:w-10/12 2xl:w-[1200px]  px-10 lg:px-2 mx-auto ">
      <div className="border rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 bg-white font-Inter ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Inter font-semibold text-darkBlue/90">
            Starter
          </h4>
          <h2 className="text-3xl font-bold text-TechBlue py-2">
            &#8377;{props.CostingData[0].price}
            <span className="text-xs font-normal text-gray-500">/Year</span>
          </h2>
          <hr />
        </div>

        <ul className="pt-6 px-6 space-y-4 font-Inter">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 font-medium font-Poppins text-xs md:text-sm">
              Lectures
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 font-medium font-Poppins text-xs md:text-sm">
              DPPs
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 font-medium font-Poppins text-xs md:text-sm">
              Weekly test series
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm">
              All India Test series
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm ">
              <span className="font-bold text-gray-600">LIVE</span> doubt
              clearing sessions
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm ">
              Access to smartest student community
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins  text-xs md:text-sm ">
              <span className="font-bold"> One shot</span> Revision series
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm ">
              Scholars
              <span className="font-bold"> AI </span> (beta)
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm ">
              Personalised Performance Analysis
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm ">
              One - One <span className="font-bold"> Mentorship </span> sessions
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm ">
              Access to<span className="font-bold"> Digital </span> student
              library
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 font-medium font-Poppins text-xs md:text-sm ">
              Regular Workshops, Strategy and <br /> Councilling Sessions.(with
              Certifications).
            </del>
          </li>
        </ul>

        <div className="w-full flex justify-center items-center my-6">
          <Link
            href="/dashboard/courses"
            className="border border-gray-400 w-5/6 rounded-full px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold "
          >
            Purchase Now
          </Link>
        </div>
      </div>

      {/* 2nd */}
      <div className="border relative rounded-xl bg-TechBlue hover:shadow-xl hover:scale-105 transition-all duration-200 font-Inter ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-semibold text-white">Advanced</h4>
          <h2 className="text-3xl font-bold  text-white py-2">
            &#8377;{props.CostingData[1].price}
            <span className="text-xs font-normal text-gray-100">/Year</span>
          </h2>
          <hr />
        </div>

        <ul className="pt-6 px-6 space-y-4 font-Inter">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-white text-xl text-TechBlue font-bold rounded-full p-1" />
            <span className="text-white text-xs md:text-sm">Lectures</span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-white text-xl text-TechBlue font-bold rounded-full p-1" />
            <span className="text-white text-xs md:text-sm">DPPs</span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-white text-xl text-TechBlue font-bold rounded-full p-1" />
            <span className="text-white text-xs md:text-sm">
              Weekly test series
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className="text-white text-xs md:text-sm">
              All India Test series
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className="text-white text-xs md:text-sm ">
              <span className="font-bold ">LIVE</span> doubt clearing sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className="text-white text-xs md:text-sm ">
              Access to smartest student community
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className="text-white text-xs md:text-sm ">
              <span className="font-bold"> One shot</span> Revision series
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white font-medium font-Poppins text-xs md:text-sm ">
              Scholars
              <span className="font-bold"> AI </span> (beta)
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white font-medium font-Poppins text-xs md:text-sm ">
              Personalised Performance Analysis
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white font-medium font-Poppins text-xs md:text-sm ">
              One - One <span> Mentorship </span> sessions
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white font-medium font-Poppins text-xs md:text-sm ">
              Access to<span> Digital </span> student library
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white font-medium font-Poppins text-xs md:text-sm ">
              Regular Workshops, Strategy and <br /> Councilling Sessions.(with
              Certifications).
            </del>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center my-6">
          <Link
            href="/dashboard/courses"
            className="border border-gray-400 w-5/6 rounded-full bg-white text-TechBlue px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold "
          >
            Purchase Now
          </Link>
        </div>

        <span
          datacontent="MOST POPULAR"
          className="w-[100px] h-[100px] absolute font-bold flex justify-center items-center -top-2 -right-2 overflow-hidden before:w-[180px] before:h-8 before:bg-white before:absolute before:rotate-45 before:-translate-y-4 before:content-[attr(dataContent)] before:flex before:justify-center before:items-center before:text-xs before:pl-6 before:text-TechBlue before:shadow-md "
        ></span>
      </div>

      {/* 3rd */}
      <div className="border rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 bg-white font-Inter">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Inter font-semibold text-darkBlue/90">
            Ultimate
          </h4>
          <h2 className="text-3xl font-bold text-TechBlue py-2">
            &#8377;{props.CostingData[2].price}
            <span className="text-xs font-normal text-gray-500">/Year</span>
          </h2>
          <hr />
        </div>

        <ul className="pt-6 px-6 space-y-4 font-Inter">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              Lectures
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              DPPs
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              Weekly test series
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              All India Test series
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              <span className="font-bold text-gray-600">LIVE</span> doubt
              clearing sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              Access to smartest student community
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              <span className="font-bold"> One shot</span> Revision series
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              Scholars
              <span className="font-bold"> AI </span> (beta)
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              Personalised Performance Analysis
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              One - One <span className="font-bold"> Mentorship </span> sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              Access to<span className="font-bold"> Digital </span> student
              library
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-xs md:text-sm font-medium font-Poppins ">
              Regular Workshops, Strategy and <br /> Councilling Sessions.(with
              Certifications).
            </span>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center my-6">
          <Link
            href="/dashboard/courses"
            className="border border-gray-400 w-5/6 rounded-full px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold "
          >
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Costing;
