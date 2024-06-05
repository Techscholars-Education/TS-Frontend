import React from "react";
import Link from "next/link";
import Image from "next/image";
import classroom from "@/public/Course/classroom.png";
import calendar from "@/public/Course/calendar.png";
import languages from "@/public/Course/languages.png";
import books from "@/public/Course/books.png";
import { BsFillClockFill } from "react-icons/bs";
import lesson from "@/public/Course/lesson.png";
import coursePoster from "@/public/Course/coursePoster.svg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdDone } from "react-icons/md";
const Batch = () => {
  return (
    <section className=" w-11/12 xl:w-10/12 mx-auto flex flex-col md:flex md:flex-row justify-between font-Poppins my-8 md:space-x-4 space-y-4 ">
      <div className="border  w-full  md:w-1/2 lg:w-2/3 p-6 rounded-md ">
        <div>
          <h2 className="font-semibold text-xl">
            <span className="text-TechBlue">ELITE</span> Batch for JEE 2026
          </h2>
        </div>
        <div className="my-4">
          <h4 className="font-semibold text-xl">Batch Details</h4>
        </div>

        <ul className="space-y-6 my-6">
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400  p-3 rounded-full">
              <Image className="w-8" src={classroom}></Image>
            </div>
            <div className="text-sm">
              <span>For:</span>
              <p className="font-medium">Class 11 ( 2026 JEE aspirant )</p>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400 p-3 rounded-full">
              <Image className="w-8" src={calendar}></Image>
            </div>
            <div className="text-sm">
              <span>Course Duration:</span>
              <p className="font-medium">1 Year | 2024-2025</p>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400  p-3 rounded-full">
              <Image className="w-8" src={books}></Image>
            </div>
            <div className="text-sm">
              <span>Subjects:</span>
              <p className="font-medium">Physics, Chemistry, Mathematics</p>
            </div>
          </li>
          <li className="flex items-center justify-start space-x-4">
            <div className=" border border-gray-400  p-3 rounded-full">
              <Image className="w-8" src={languages}></Image>
            </div>
            <div className="text-sm">
              <span>Languages:</span>
              <p className="font-medium">English</p>
            </div>
          </li>
        </ul>
        <div className="my-4">
          <h4 className="font-semibold text-xl">Key Points</h4>
        </div>
        <ul className="my-6 space-y-4">
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              eius?
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              eius?
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              eius?
            </span>
          </li>
          <li className="flex justify-start space-x-2 items-center">
            <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
            <span className="text-gray-black text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              eius?
            </span>
          </li>
        </ul>
      </div>
      <div className=" w-full md:w-1/2 lg:w-1/3">
        <div className="">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={coursePoster}
              alt="blog"
            />
            <div className="p-6">
              <div className="flex items-center justify-start space-x-4  mb-2 ">
                <Image className="w-12" src={lesson}></Image>
                <div>
                  <h2 className="text-sm font-medium text-TechBlue">
                    Get started
                  </h2>
                  <p className=" xl:text-base font-medium">
                    New lessons are available now
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between my-4 ">
                <div className="flex items-center">
                  <BsFillClockFill className="mr-2 text-TechBlue" />
                  85 mins
                </div>
                <div className="flex items-center">
                  <MdOutlineSlowMotionVideo className="mr-2 text-orange-400" />
                  Video format
                </div>
              </div>
              <hr />
              <div className="flex items-center flex-wrap my-4">
                <Link
                  href="/payment"
                  className="text-white w-full bg-TechBlue rounded-full py-3 font-semibold flex justify-center items-center hover:bg-black duration-200 "
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Batch;
