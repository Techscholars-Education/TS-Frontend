import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoBookOutline } from "react-icons/io5";
import slug from "slug";
function TestItem(props) {
  const query = slug(props.title);
  return (
    <div className="flex md:flex-row flex-col justify-between bg-white rounded-xl p-8 md:m-4 mx-1 md:mx-6 font-Poppins ">
      <div className="flex flex-col ">
        <h2 className="text-[22px] font-[550] mb-3">{props.title}</h2>
        <div className="flex m-1.5">
          <FaRegClipboard className="mt-1 mr-4 text-gray-600" />
          <p className="text-[#3D3D3D] text-[16px]">
            155 Questions • 155 Marks • 180 Mins • Attempts: O
          </p>
        </div>
        <div className="flex m-1.5">
          <SlCalender className="mt-1 mr-4 text-gray-700 " />
          <p className="text-[#3D3D3D] text-[16px]">
            Held on 22 Mar 2024 at 05:00 PM
          </p>
        </div>
        <div className="flex m-1.5">
          <IoBookOutline className="mt-1 mr-4 text-gray-700" />{" "}
          <Link
            href={`/dashboard/testseries/purchased/syllabus/${query}`}
            className="text-blue-400 underline text-[16px] underline-offset-4 hover:underline-offset-2 duration-200 hover:cursor-pointer"
          >
            View Syllabus
          </Link>
        </div>
      </div>

      <Link
        href={`/dashboard/testseries/purchased/active-test/${query}`}
        className="md:mt-12  xl:h-[80px] flex flex-col items-center font-Poppins font-medium text-TechBlue group hover:text-black text-lg duration-200 "
      >
        <FaArrowRight className="rounded-full  bg-TechBlue text-white h-10 w-10 p-2  group-hover:scale-110 group-hover:bg-black duration-200" />
        Start
      </Link>
    </div>
  );
}

export default TestItem;
