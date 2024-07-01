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
    <section className="w-full bg-white py-10  ">
      <div className=" w-11/12 xl:w-9/12 2xl:w-[1100px] grid grid-cols-1 md:grid-cols-2  mx-auto gap-4 ">
        {/* container -1 */}
        <div className=" bg-[#DCD9F866]/30 rounded-xl flex px-6 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all ">
          <div className="my-auto w-2/3">
            <Image
              className=" w-full "
              src={Benefit1}
              alt="classes-icon"
            ></Image>
          </div>
          <div className="w-full px-4 lg:px-10  ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              High quality Classes
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Experience unmatched quality in our courses: from basics to
              advanced mastery.
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-2 mt-5 flex items-center lg:w-[80%] xl:w-40 hover:bg-black hover:text-white duration-200 "
              >
                Find out more <TiArrowRight className="ml-1 text-lg mr-0" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-[#FFE6DF]/30 rounded-xl flex px-3 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all ">
          <div className="my-auto w-1/2">
            <Image
              className=" w-full "
              src={Benefit2}
              alt="doubt-solving-icon"
            ></Image>
          </div>
          <div className="w-full px-4 lg:px-10   ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              Live Doubt solving classes
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Unlock clarity in our Doubt Solving Classes: dedicated sessions
              with expert guidance.
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-2 mt-5 flex items-center lg:w-[80%] xl:w-40 hover:bg-black hover:text-white duration-200 "
              >
                Find out more <TiArrowRight className="ml-1 text-lg mr-0" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-[#FCE2EB]/30 rounded-xl flex px-10 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all ">
          <div className="my-auto w-2/2">
            <Image
              className=" w-full "
              src={Benefit3}
              alt="Weekly-test-icon"
            ></Image>
          </div>
          <div className="w-full px-4 lg:pl-20   ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              Weekly tests
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Embark on a journey of assessment excellence with our All India
              test series
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-2 mt-5 flex items-center lg:w-[80%] xl:w-40 hover:bg-black hover:text-white duration-200 "
              >
                Find out more <TiArrowRight className="ml-1 text-lg mr-0" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-green-50 rounded-xl flex px-6 py-6 lg:py-8 xl:py-12 font-Poppins hover:shadow-xl duration-200 transition-all ">
          <div className="my-auto w-1/2">
            <Image
              className=" w-full "
              src={Benefit4}
              alt="practice-icon"
            ></Image>
          </div>
          <div className="w-full px-4 lg:px-10   ">
            <h3 className="text-darkBlue font-semibold mb-1 text-sm md:text-base lg:text-xl ">
              Daily Practice Questions
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Dive into enriched learning with our meticulously curated DPP and
              Study Material
            </p>
            <div>
              <Link
                href="/course"
                className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-2 mt-5 flex items-center lg:w-[80%] xl:w-40 hover:bg-black hover:text-white duration-200 "
              >
                Find out more <TiArrowRight className="ml-1 text-lg mr-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
