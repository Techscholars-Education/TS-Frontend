"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Benefit1 from "../../public/Home/Benefit1.svg";
import Benefit2 from "../../public/Home/Benefit2.svg";
import Benefit3 from "../../public/Home/Benefit3.svg";
import Benefit4 from "../../public/Home/Benefit4.svg";
import { TiArrowRight } from "react-icons/ti";

const Benefits = () => {
  return (
    <section className="w-full bg-gray-50 py-10  ">
      <div className=" w-11/12 xl:w-9/12 2xl:w-[1100px] grid grid-cols-1 md:grid-cols-2  mx-auto gap-4 bg-clip-padding backdrop-filter backdrop-blur-md">
        {/* container -1 */}
        <div className=" bg-[#9C55FF]/10 rounded-xl flex flex-col items-center justify-center  md:flex md:flex-row px-6 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all  bg-clip-padding backdrop-filter backdrop-blur-md border-[#9C55FF] border-2">
          <div className="my-auto w-1/2 lg:scale-125">
            <Image
              className=" w-full "
              src={Benefit1}
              alt="classes-icon"
            ></Image>
          </div>
          <div className="w-full px-4 lg:px-10 text-center md:text-start  ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              High quality <span className="font-normal">Classes</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Experience unmatched quality in our courses: from basics to
              advanced mastery.
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-black underline  mt-5 flex items-center mx-auto w-[150px] md:mx-0 md:w-[170px] lg:w-[80%] xl:w-40 hover:text-TechBlue duration-200 "
              >
               Read More
              </Link>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className=" bg-[#FFD900]/10 rounded-xl flex flex-col items-center justify-center  md:flex md:flex-row px-3 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all border-[#FFD900] border-2">
          <div className="my-auto w-1/2 lg:scale-125">
            <Image
              className=" w-full "
              src={Benefit2}
              alt="doubt-solving-icon"
            ></Image>
          </div>
          <div className="w-full px-4 lg:px-10 text-center md:text-start    ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              Live Doubt solving <span className="font-normal">Classes</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Unlock clarity in our Doubt Solving Classes: dedicated sessions
              with expert guidance.
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-black underline mt-5 flex items-center mx-auto w-[150px] md:mx-0 md:w-[170px] lg:w-[80%] xl:w-40 hover:text-TechBlue duration-200 "
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className=" bg-[#007AFF]/10 rounded-xl flex flex-col items-center justify-center  md:flex md:flex-row px-10 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all border-[#007AFF] border-2">
          <div className="my-auto w-1/2 ">
            <Image
              className=" w-full "
              src={Benefit3}
              alt="Weekly-test-icon"
            ></Image>
          </div>
          <div className="w-full px-2  lg:pl-10 text-center md:text-start   ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              Weekly <span className="font-normal">Tests</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Embark on a journey of assessment excellence with our All India
              test series
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-black underline mt-5 flex items-center mx-auto w-[150px] md:mx-0 md:w-[170px] lg:w-[80%] xl:w-40 hover:text-TechBlue duration-200 "
              >
              Read More
              </Link>
            </div>
          </div>
        </div>

        {/* 4th */}
        <div className=" bg-[#31A300]/10 rounded-xl flex flex-col items-center justify-center  md:flex md:flex-row px-6 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all border-[#31A300] border-2">
          <div className="my-auto w-1/2 lg:scale-150 ">
            <Image
              className=" w-full "
              src={Benefit4}
              alt="practice-icon"
            ></Image>
          </div>
          <div className="w-full px-4 lg:px-10 text-center md:text-start   ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              Daily Practice <span className="font-normal">Questions</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Dive into enriched learning with our meticulously curated DPP and
              Study Material
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-black underline mt-5 flex items-center mx-auto w-[150px] md:mx-0 md:w-[170px] lg:w-[80%] xl:w-40 hover:text-TechBlue duration-200 "
              >
              Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
