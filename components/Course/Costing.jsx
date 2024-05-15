import React from "react";
import { MdDone } from "react-icons/md";
import Link from "next/link";
const Costing = (props) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 mx-20 gap-5 my-10 ">
      <div className="border rounded-xl ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Poppins font-semibold text-darkBlue/90">
            Starter
          </h4>
          <h2 className="text-3xl font-semibold text-TechBlue py-2">
            &#8377;20000
            <span className="text-xs font-normal text-gray-500">/year</span>
          </h2>
          <hr />
        </div>

        <ul className="pt-6 px-6 space-y-4">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">Lectures</span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">Weekly test series</span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">
              Doubt clearing sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center blur-[1.8px]">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">
              Access the smartest student community
            </span>
          </li>
        </ul>
        <p className="text-center text-darkBlue text-xl">...</p>
        <div className="w-full flex justify-center items-center my-4">
          <button className="border w-5/6 rounded-full px-6 py-2 ">
            Purchase Now
          </button>
        </div>
      </div>

      {/* 2nd */}
      <div className="border relative rounded-xl bg-TechBlue ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Poppins font-semibold text-white">
            Advanced
          </h4>
          <h2 className="text-3xl font-semibold text-white py-2">
            &#8377;20000
            <span className="text-xs font-normal text-gray-100">/year</span>
          </h2>
          <hr />
        </div>

        <ul className="pt-6 px-6 space-y-4">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">Lectures</span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">Weekly test series</span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">Doubt clearing sessions</span>
          </li>
          <li className="flex justify-start space-x-2 items-center blur-[1.8px]">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">
              Access the smartest student community
            </span>
          </li>
        </ul>
        <p className="text-center text-white text-xl">...</p>
        <div className="w-full flex justify-center items-center my-4">
          <button className="border w-5/6 rounded-full px-6 py-2 bg-white text-TechBlue">
            Purchase Now
          </button>
        </div>

        <span
          dataContent="MOST POPULAR"
          className="w-[100px] h-[100px] absolute flex justify-center items-center -top-2 -right-2 overflow-hidden before:w-[180px] before:h-8 before:bg-white before:absolute before:rotate-45 before:-translate-y-4 before:content-[attr(dataContent)] before:flex before:justify-center before:items-center before:text-xs before:pl-6 before:text-TechBlue before:shadow-md "
        ></span>
      </div>

      {/* 3rd */}
      <div className="border rounded-xl ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Poppins font-semibold text-darkBlue/90">
            Ultimate
          </h4>
          <h2 className="text-3xl font-semibold text-TechBlue py-2">
            &#8377;20000
            <span className="text-xs font-normal text-gray-500">/year</span>
          </h2>
          <hr />
        </div>

        <ul className="pt-6 px-6 space-y-4">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">Lectures</span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">Weekly test series</span>
          </li>
          <li className="flex justify-start space-x-2 items-center   ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-500 text-sm font-medium">
              Doubt clearing sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center blur-[1.8px]">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">
              Access the smartest student community
            </span>
          </li>
        </ul>
        <p className="text-center text-darkBlue text-xl">...</p>
        <div className="w-full flex justify-center items-center my-4 ">
          <button className="border w-5/6 rounded-full px-6 py-2 ">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Costing;
