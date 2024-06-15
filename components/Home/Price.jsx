import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Price = () => {
  return (
    <section className="bg-gray-50 py-16 font-Poppins w-full  mx-auto  ">
      <div className=" xl:w-10/12 2xl:w-[1100px] mx-auto  rounded-xl ">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
            Pricing
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl text-center my-4 font-Poppins ">
          Our annual courses prices starts from
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            An innovative Ed-tech organisation dedicated to democratising access
            to high-quality STEM education across India
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 xl:w-10/12 2xl:w-[1100px] mx-auto my-10 ">
        <div className="border-2 border-gray-200 rounded-t-xl hover:border-black duration-300  ">
          <div className="p-6 space-y-4 ">
            <h2 className="font-bold text-3xl text-darkBlue font-Inter">
              Starter
            </h2>
            <h3 className="text-5xl font-bold text-darkBlue font-Inter">
              ₹ 1999
              <span className="text-sm text-gray-400 font-medium">/year</span>
            </h3>
          </div>

          <div>
            <svg
              id="wave"
              viewBox="0 0 1440 490"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor="rgba(187, 247, 208, 1)" offset="0%"></stop>
                  <stop stopColor="rgba(187, 247, 208, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                className="fill-red-100 "
                d="M0,196L60,163.3C120,131,240,65,360,73.5C480,82,600,163,720,171.5C840,180,960,114,1080,106.2C1200,98,1320,147,1440,155.2C1560,163,1680,131,1800,163.3C1920,196,2040,294,2160,343C2280,392,2400,392,2520,367.5C2640,343,2760,294,2880,261.3C3000,229,3120,212,3240,245C3360,278,3480,359,3600,326.7C3720,294,3840,147,3960,81.7C4080,16,4200,33,4320,40.8C4440,49,4560,49,4680,49C4800,49,4920,49,5040,114.3C5160,180,5280,310,5400,310.3C5520,310,5640,180,5760,179.7C5880,180,6000,310,6120,351.2C6240,392,6360,343,6480,285.8C6600,229,6720,163,6840,163.3C6960,163,7080,229,7200,220.5C7320,212,7440,131,7560,155.2C7680,180,7800,310,7920,334.8C8040,359,8160,278,8280,228.7C8400,180,8520,163,8580,155.2L8640,147L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
              ></path>
            </svg>
          </div>

          <div className="bg-red-100 px-6 pb-6 font-Inter  ">
            <ul className="text-start font-semibold text-gray-800 text-sm space-y-2 h-full">
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Lectures
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                DPPs
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Weekly test series
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Smart student community</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Live doubt clearing support</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Access to BRAHMASTRA(coming soon)</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>24/7 Mentorship guide</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Weekly Live mentorship sessions</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Access to Personal AI Mentor (coming soon)</del>
              </li>
            </ul>
          </div>
          <div className="border border-gray-100"></div>
          <div className="px-6 py-7 bg-red-100 ">
            <Link
              href="/course"
              className=" bg-black text-white px-4 py-3  rounded-full hover:bg-red-600 duration-200 w-full  "
            >
              Purchase Now
            </Link>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-t-xl hover:border-black duration-300 group   ">
          <div className="p-6 space-y-4 ">
            <h2 className="font-bold text-3xl text-darkBlue font-Inter flex items-center">
              Advanced{" "}
              <span className="px-2 mx-4 text-xs bg-TechBlue text-white py-2 rounded-full font-medium">
                Most popular
              </span>{" "}
            </h2>
            <h3 className="text-5xl font-bold text-darkBlue font-Inter">
              ₹ 7999
              <span className="text-sm text-gray-400 font-medium">/year</span>
            </h3>
          </div>

          <div>
            <svg
              id="wave"
              viewBox="0 0 1440 490"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor="rgba(187, 247, 208, 1)" offset="0%"></stop>
                  <stop stopColor="rgba(187, 247, 208, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                className="fill-yellow-100"
                d="M0,196L60,163.3C120,131,240,65,360,73.5C480,82,600,163,720,171.5C840,180,960,114,1080,106.2C1200,98,1320,147,1440,155.2C1560,163,1680,131,1800,163.3C1920,196,2040,294,2160,343C2280,392,2400,392,2520,367.5C2640,343,2760,294,2880,261.3C3000,229,3120,212,3240,245C3360,278,3480,359,3600,326.7C3720,294,3840,147,3960,81.7C4080,16,4200,33,4320,40.8C4440,49,4560,49,4680,49C4800,49,4920,49,5040,114.3C5160,180,5280,310,5400,310.3C5520,310,5640,180,5760,179.7C5880,180,6000,310,6120,351.2C6240,392,6360,343,6480,285.8C6600,229,6720,163,6840,163.3C6960,163,7080,229,7200,220.5C7320,212,7440,131,7560,155.2C7680,180,7800,310,7920,334.8C8040,359,8160,278,8280,228.7C8400,180,8520,163,8580,155.2L8640,147L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
              ></path>
            </svg>
          </div>

          <div className="bg-yellow-100 px-6 pb-6 font-Inter">
            <ul className="text-start font-semibold text-gray-800 text-sm space-y-2 h-full">
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Lectures
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                DPPs
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Weekly test series
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Smart student community
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Live doubt clearing support
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Access to BRAHMASTRA(coming soon)</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>24/7 Mentorship guide</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Weekly Live mentorship sessions</del>
              </li>
              <li className="flex items-center text-gray-500">
                <RxCross2 className="text-red-600 text-xl mr-4 border-2 border-red-600 rounded-full " />
                <del>Access to Personal AI Mentor (coming soon)</del>
              </li>
            </ul>
          </div>

          <div className="border border-gray-50"></div>
          <div className="px-6 py-7 bg-yellow-100 w-full ">
            <Link
              href="/course"
              className=" bg-black text-white px-4 py-3  rounded-full hover:bg-yellow-600 duration-200 w-full  "
            >
              Purchase Now
            </Link>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-t-xl hover:border-black duration-300 group ">
          <div className="p-6 space-y-4 ">
            <h2 className="font-bold text-3xl text-darkBlue font-Inter">
              Ultimate
            </h2>
            <h3 className="text-5xl font-bold text-darkBlue font-Inter">
              ₹ 17999
              <span className="text-sm text-gray-400 font-medium">/year</span>
            </h3>
          </div>

          <div>
            <svg
              id="wave"
              viewBox="0 0 1440 490"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor="rgba(187, 247, 208, 1)" offset="0%"></stop>
                  <stop stopColor="rgba(187, 247, 208, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                className="fill-green-100"
                d="M0,196L60,163.3C120,131,240,65,360,73.5C480,82,600,163,720,171.5C840,180,960,114,1080,106.2C1200,98,1320,147,1440,155.2C1560,163,1680,131,1800,163.3C1920,196,2040,294,2160,343C2280,392,2400,392,2520,367.5C2640,343,2760,294,2880,261.3C3000,229,3120,212,3240,245C3360,278,3480,359,3600,326.7C3720,294,3840,147,3960,81.7C4080,16,4200,33,4320,40.8C4440,49,4560,49,4680,49C4800,49,4920,49,5040,114.3C5160,180,5280,310,5400,310.3C5520,310,5640,180,5760,179.7C5880,180,6000,310,6120,351.2C6240,392,6360,343,6480,285.8C6600,229,6720,163,6840,163.3C6960,163,7080,229,7200,220.5C7320,212,7440,131,7560,155.2C7680,180,7800,310,7920,334.8C8040,359,8160,278,8280,228.7C8400,180,8520,163,8580,155.2L8640,147L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
              ></path>
            </svg>
          </div>

          <div className="bg-green-100 px-6 pb-6 font-Inter">
            <ul className="text-start font-semibold text-gray-800 text-sm space-y-2">
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Lectures
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                DPPs
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Weekly test series
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Smart student community
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Live doubt clearing support
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Access to BRAHMASTRA(coming soon)
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                24/7 Mentorship guide
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                24/7 Mentorship guide
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-600 text-xl mr-4 border-2 border-green-600 rounded-full " />
                Access to Personal AI Mentor (coming soon)
              </li>
            </ul>
          </div>

          <div className="border border-gray-50"></div>
          <div className="px-6 py-7 bg-green-100 ">
            <Link
              href="/course"
              className=" bg-black text-white px-4 py-3  rounded-full hover:bg-green-700 duration-200 w-full  "
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
