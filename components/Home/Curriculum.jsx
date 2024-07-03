"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import JeeIcon from "@/public/Home/JeeIcon.svg";
import NeetIcon from "@/public/Home/NeetIcon.svg";
import FoundationIcon from "@/public/Home/FoundationIcon.svg";
const Curriculum = () => {
  return (
    <section className=" text-black py-16 bg-blue-100/30 ">
      <div className=" w-full mx-auto ">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-blue-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
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
        <section className="w-10/12 lg:w-11/12 xl:w-9/12 2xl:w-[1100px] mx-auto grid grid-cols-1  lg:grid-cols-3 font-Inter gap-4 mt-10 ">
          <Link
            href="/course/jee"
            className="  lg:h-[210px] xl:h-[200px] rounded-lg  hover:scale-105 hover:border-black transition-all border-2 border-gray-500 px-4 py-4"
          >
            <div className="flex">
              <div>
                <Image src={JeeIcon}></Image>
              </div>
              <div className="w-full pl-4  ">
                <h2 className=" md:text-xl  text-lg font-bold">Jee</h2>
                <p className=" md:text-sm text-xs mt-2  ">
                  Start your IITJEE Preparation today with our specalised
                  courses curated by best faculties
                </p>
              </div>
            </div>
            <ul className="flex text-xs text-gray-900 my-4  md:ml-12 md:pl-5 lg:ml-12 lg:pl-0 xl:pl-4  ">
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1 mr-2">
                class 11<sup>th</sup>
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1 mr-2">
                class 12<sup>th</sup>
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1">
                Target 13<sup>th</sup>
              </li>
            </ul>
          </Link>
          <Link
            href="/course/neet"
            className="  lg:h-[210px] xl:h-[200px] rounded-lg  hover:scale-105 hover:border-black transition-all border-2 border-gray-500 px-4 py-4"
          >
            <div className="flex">
              <div>
                <Image src={NeetIcon}></Image>
              </div>
              <div className="w-full pl-4   ">
                <h2 className=" md:text-xl  text-lg font-bold">Neet</h2>
                <p className=" md:text-sm text-xs mt-2  ">
                  Achieve top scores in NEET with our specialised courses, get
                  in-depth understanding of PCB.
                </p>
              </div>
            </div>
            <ul className="flex text-xs text-gray-900 my-4 md:ml-12 md:pl-5 lg:ml-12 lg:pl-0 xl:pl-4  ">
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1 mr-2">
                class 11<sup>th</sup>
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1 mr-2">
                class 12<sup>th</sup>
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1">
                Target 13<sup>th</sup>
              </li>
            </ul>
          </Link>
          <Link
            href="/course/foundation"
            className="  lg:h-[210px] xl:h-[200px] rounded-lg  hover:scale-105 hover:border-black transition-all border-2 border-gray-500 px-4 py-4"
          >
            <div className="flex">
              <div>
                <Image src={FoundationIcon}></Image>
              </div>
              <div className="w-full pl-4  ">
                <h2 className=" md:text-xl  text-lg font-bold">Foundation</h2>
                <p className=" md:text-sm text-xs mt-2  ">
                  Establish a solid foundation and take a step ahead of your
                  peers in your academic journey
                </p>
              </div>
            </div>
            <ul className="flex text-xs text-gray-900 my-4  md:ml-12 md:pl-5 lg:ml-12 lg:pl-0 xl:pl-4  ">
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1 mr-2">
                class 9<sup>th</sup>
              </li>
              <li className="border rounded-full px-1 xl:px-2 border-gray-700 py-1 mr-2">
                class 10<sup>th</sup>
              </li>
            </ul>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Curriculum;

{
  /* <Link
href="/course/jee"
className=" relative h-[230px] lg:h-[230px] xl:h-[230px]  border rounded-t-xl group hover:border-black transition-all "
>
<div className=" p-4 ">
  <div>
    <h2 className="font-semibold text-2xl">JEE</h2>
  </div>
  <div className="my-4">
    <ul className="flex space-x-4 text-xs text-gray-600 ">
      <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-gray-300 py-2">
        class 11<sup>th</sup>
      </li>
      <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-gray-300 py-2">
        class 12<sup>th</sup>
      </li>
      <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-gray-300 py-2">
        Target 13<sup>th</sup>
      </li>
    </ul>
  </div>
</div>
<div className="bg-yellow-50 group-hover:bg-yellow-100 rounded-t-full absolute bottom-0 overflow-hidden flex justify-center items-center w-full py-3 transition-all group-hover:py-6">
  <Image
    className="w-16 mx-auto "
    src={physics}
    alt="physics-icon"
  ></Image>
</div>
</Link>
<Link
href="/course/foundation"
className="relative h-[230px] lg:h-[230px] xl:h-[230px] border rounded-t-xl  group hover:border-black transition-all "
>
<div className="p-4">
  <div>
    <h2 className="font-semibold text-2xl">Foundation</h2>
  </div>
  <div className="my-4">
    <ul className="flex space-x-4 text-xs text-gray-600">
      <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-gray-300 py-2">
        class 9<sup>th</sup>
      </li>
      <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-gray-300 py-2">
        class 10<sup>th</sup>
      </li>
    </ul>
  </div>
</div>
<div className="bg-green-50 group-hover:bg-green-100 rounded-t-full absolute bottom-0 overflow-hidden  flex justify-center items-center w-full py-3 transition-all group-hover:py-6">
  <Image
    className="w-16 mx-auto"
    src={openbook}
    alt="openbook-icon"
  />
</div>
</Link> */
}
