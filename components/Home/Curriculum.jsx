"use client";
import React from "react";
import Image from "next/image";
import jee from "../../public/Home/jee.svg";
import neet from "../../public/Home/neet.svg";
import foundation from "../../public/Home/foundation.svg";
import { Slide } from "react-awesome-reveal";
const Curriculum = () => {
  return (
    <section className=" text-black py-16 bg-white ">
      <div className=" w-11/12 mx-auto ">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
            Exam Categories
          </h5>
        </div>
        <h2 className="text-black font-semibold text-2xl  md:text-4xl  text-center my-4 font-Poppins ">
          Explore our exam categories
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm tracking-wide text-gray-600 ">
            Unleash your potential and embark on your journey to join the top 1%
          </p>
        </div>
        {/* Exam category */}
        <section className="text-gray-600 body-font font-Poppins">
          <div className="container px-2 md:px-5 py-12 md:py-16 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 xl:w-1/3 lg:w-full">
                <div className="flex hover:scale-105 duration-200 hover:-translate-x-4 hover:-translate-y-4 hover:shadow-xl  border-2 rounded-3xl border-black  border-opacity-50 px-4 py-8 sm:flex-row flex-col shadow-md hover:shadow:xl h-full">
                  <div className="w-16 h-16 sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-TechBlue flex-shrink-0">
                    <Image src={jee} alt="jee-icon"></Image>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      JEE
                    </h2>
                    <p className="leading-relaxed text-base">
                      Start your IITJEE Preparation today with our specalised
                      courses curated by best faculties of India
                    </p>
                    <ul className="mt-3 text-black inline-flex items-center  justify-start space-x-2 w-full text-xs">
                      <li className="border border-black rounded-full px-4 py-1">
                        11<sup>th</sup>class
                      </li>
                      <li className="border border-black rounded-full px-4 py-1">
                        12<sup>th</sup>class
                      </li>
                      <li className="border border-black rounded-full px-4 py-1">
                        Target 13<sup>th</sup>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-4 xl:w-1/3 lg:w-full">
                <div className="flex hover:scale-105 duration-200 hover:-translate-y-4 hover:shadow-xl border-2 rounded-3xl border-black border-opacity-50 px-4 py-8 sm:flex-row flex-col shadow-md hover:shadow:xl h-full">
                  <div className="w-16 h-16 sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-TechBlue flex-shrink-0">
                    <Image src={neet} alt="neet-icon"></Image>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      NEET
                    </h2>
                    <p className="leading-relaxed text-base">
                      Achieve top scores in NEET with our specialised courses,
                      get in-depth understanding of PCB.
                    </p>
                    <ul className="mt-3 text-black inline-flex items-center  justify-start space-x-2 w-full text-xs">
                      <li className="border border-black rounded-full px-4 py-1">
                        11<sup>th</sup>class
                      </li>
                      <li className="border border-black rounded-full px-4 py-1">
                        12<sup>th</sup>class
                      </li>
                      <li className="border border-black rounded-full px-4 py-1">
                        Target 13<sup>th</sup>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-4 xl:w-1/3 lg:w-full">
                <div className="flex hover:scale-105 duration-200 hover:translate-x-4 hover:-translate-y-4 hover:shadow-xl  border-2 rounded-3xl border-black border-opacity-50 px-4 py-8 sm:flex-row flex-col shadow-md h-full">
                  <div className="w-16 h-16 sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-TechBlue flex-shrink-0">
                    <Image src={foundation} alt="foundation-icon"></Image>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      Foundation
                    </h2>
                    <p className="leading-relaxed text-base">
                      Establish a solid foundation and take a step ahead of your
                      peers in your academic journey
                    </p>
                    <ul className="mt-3 text-black inline-flex items-center  justify-start space-x-2 w-full text-xs">
                      <li className="border border-black rounded-full px-4 py-1">
                        9<sup>th</sup>class
                      </li>
                      <li className="border border-black rounded-full px-4 py-1">
                        10<sup>th</sup>class
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Curriculum;
