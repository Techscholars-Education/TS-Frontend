import React from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Price = () => {
  return (
    <section className="bg-[#F7FAFF] py-16 font-Poppins w-full  mx-auto ">
      {/* Headings */}
      <div className=" xl:w-11/12 2xl:w-[1100px] mx-auto  rounded-xl  ">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-blue-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
            Pricing
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl text-center my-4 font-Poppins ">
          Our annual courses prices starts from
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            Unlock Excellence: Where High-Quality Education Meets Unbeatable
            Affordability
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-5 my-10 w-full lg:w-11/12 xl:w-10/12 2xl:w-[1200px]  px-10 lg:px-2 mx-auto ">
        <div className="border rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 bg-white font-Inter ">
          <div className="px-6 pt-6">
            <h4 className="text-lg font-Inter font-semibold text-darkBlue/90">
              Starter
            </h4>
            <h2 className="text-3xl font-semibold text-TechBlue py-2">
              1999
              <span className="text-xs font-normal text-gray-500">/Year</span>
            </h2>
            <hr />
          </div>

          <ul className="pt-6 px-6 space-y-4 font-Inter">
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">Lectures</span>
            </li>
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">DPPs</span>
            </li>
            <li className="flex justify-start space-x-2 items-center  ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">
                Weekly test series
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm">
                Access the smartest student community
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                <span className="font-bold text-gray-600">LIVE</span> doubt
                clearing sessions
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                Special Access to{" "}
                <span className="font-bold text-gray-600"> BRAHMASTRA</span>
                (Coming Soon)
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                {" "}
                <span className="font-bold">24/7</span> Mentorship guide
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                Weekly <span className="font-bold">LIVE</span> Mentorship
                Sessions
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                Special Access to{" "}
                <span className="font-bold text-gray-600">
                  {" "}
                  Personal AI Mentor
                </span>
                (Coming Soon)
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
            <h2 className="text-3xl font-semibold  text-white py-2">
              6999
              <span className="text-xs font-normal text-gray-100">/Year</span>
            </h2>
            <hr />
          </div>

          <ul className="pt-6 px-6 space-y-4">
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">Lectures</span>
            </li>
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-white  text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">DPPs</span>
            </li>
            <li className="flex justify-start space-x-2 items-center  ">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                Weekly test series
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-white  text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                Access the smartest student community
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-white  text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                <span className="font-bold text-white-600">LIVE</span> doubt
                clearing sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                Special Access to{" "}
                <span className="font-bold "> BRAHMASTRA</span>
                (Coming Soon)
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-white text-xs md:text-sm ">
                {" "}
                <span className="font-bold">24/7</span> Mentorship guide
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-white text-sm ">
                Weekly <span className="font-bold">LIVE</span> Mentorship
                Sessions
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-white text-xs md:text-sm ">
                Special Access to{" "}
                <span className="font-bold "> Personal AI Mentor</span>
                (Coming Soon)
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
            <h2 className="text-3xl font-semibold text-TechBlue py-2">
              16999
              <span className="text-xs font-normal text-gray-500">/Year</span>
            </h2>
            <hr />
          </div>

          <ul className="pt-6 px-6 space-y-4">
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">Lectures</span>
            </li>
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">
                Weekly test series
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center   ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-500 text-xs md:text-sm font-medium">
                Doubt clearing sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">
                Access the smartest student community
              </span>
            </li>

            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className=" text-xs md:text-sm text-gray-600">
                <span className="font-bold text-white-600">LIVE</span> doubt
                clearing sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className=" text-xs md:text-sm text-gray-600">
                Special Access to{" "}
                <span className="font-bold "> BRAHMASTRA</span>
                (Coming Soon)
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm ">
                <span className="font-bold">24/7</span> Mentorship guide
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm ">
                Weekly <span className="font-bold">LIVE</span> Mentorship
                Sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-blue-600 text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm ">
                Special Access to
                <span className="font-bold "> Personal AI Mentor</span>
                (Coming Soon)
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
    </section>
  );
};

export default Price;
