import React from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Costing = (props) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 mx-10 md:mx-20 gap-5 my-10 ">
      <div className="border rounded-xl ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Poppins font-semibold text-darkBlue/90">
            Starter
          </h4>
          <h2 className="text-3xl font-semibold text-TechBlue py-2">
            &#8377;{props.CostingData[0].price}
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
            <span className="text-gray-600 text-sm">DPPs</span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">Weekly test series</span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 text-sm">
              Access the smartest student community
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 text-sm ">
              <span className="font-bold text-gray-600">LIVE</span> doubt
              clearing sessions
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 text-sm ">
              Special Access to{" "}
              <span className="font-bold text-gray-600"> BRAHMASTRA</span>
              (Coming Soon)
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 text-sm ">
              {" "}
              <span className="font-bold">24/7</span> Mentorship guide
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 text-sm ">
              Weekly <span className="font-bold">LIVE</span> Mentorship Sessions
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-gray-600 text-sm ">
              Special Access to{" "}
              <span className="font-bold text-gray-600">
                {" "}
                Personal AI Mentor
              </span>
              (Coming Soon)
            </del>
          </li>
        </ul>
        <p className="text-center text-darkBlue text-xl">...</p>
        <div className="w-full flex justify-center items-center my-4">
          <Link
            href="/course"
            className="border w-5/6 rounded-full px-6 py-3 text-center  "
          >
            Purchase Now
          </Link>
        </div>
      </div>

      {/* 2nd */}
      <div className="border relative rounded-xl bg-TechBlue ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Poppins font-semibold text-white">
            Advanced
          </h4>
          <h2 className="text-3xl font-semibold text-white py-2">
            &#8377;{props.CostingData[1].price}
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
            <span className=" text-sm text-white">DPPs</span>
          </li>
          <li className="flex justify-start space-x-2 items-center  ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">Weekly test series</span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">
              Access the smartest student community
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">
              <span className="font-bold text-white-600">LIVE</span> doubt
              clearing sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
            <span className=" text-sm text-white">
              Special Access to <span className="font-bold "> BRAHMASTRA</span>
              (Coming Soon)
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white text-sm ">
              {" "}
              <span className="font-bold">24/7</span> Mentorship guide
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white text-sm ">
              Weekly <span className="font-bold">LIVE</span> Mentorship Sessions
            </del>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
            <del className="text-white text-sm ">
              Special Access to{" "}
              <span className="font-bold "> Personal AI Mentor</span>
              (Coming Soon)
            </del>
          </li>
        </ul>
        <p className="text-center text-white text-xl">...</p>
        <div className="w-full flex justify-center items-center my-4">
          <Link
            href="/course"
            className="border w-5/6 rounded-full text-center  px-6 py-3 bg-white text-TechBlue"
          >
            Purchase Now
          </Link>
        </div>

        <span
          datacontent="MOST POPULAR"
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
            &#8377;{props.CostingData[2].price}
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
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm">
              Access the smartest student community
            </span>
          </li>

          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className=" text-sm text-gray-600">
              <span className="font-bold text-white-600">LIVE</span> doubt
              clearing sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className=" text-sm text-gray-600">
              Special Access to <span className="font-bold "> BRAHMASTRA</span>
              (Coming Soon)
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm ">
              <span className="font-bold">24/7</span> Mentorship guide
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm ">
              Weekly <span className="font-bold">LIVE</span> Mentorship Sessions
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center ">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-600 text-sm ">
              Special Access to
              <span className="font-bold "> Personal AI Mentor</span>
              (Coming Soon)
            </span>
          </li>
        </ul>
        <p className="text-center text-darkBlue text-xl">...</p>
        <div className="w-full flex justify-center items-center my-4 ">
          <Link
            href="/course"
            className="border w-5/6 rounded-full px-6 py-3 text-center  "
          >
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Costing;
