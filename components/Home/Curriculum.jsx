"use client";
import React from "react";
import Image from "next/image";
import medical from "../../public/Home/medical.png";
import physics from "../../public/Home/physics.png";
import openbook from "../../public/Home/openbook.png";
const Curriculum = () => {
  return (
    <section className=" text-black py-16 bg-white ">
      <div className=" w-full mx-auto ">
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
        <section className="md:w-11/12 xl:w-9/12 mx-auto grid grid-cols-1  lg:grid-cols-3 font-Inter gap-4 mt-10 ">
          <div className=" relative h-[230px] lg:h-[230px] xl:h-[230px] border rounded-xl group">
            <div className=" p-4 ">
              <div>
                <h2 className="font-semibold text-2xl">NEET</h2>
              </div>
              <div className="my-4">
                <ul className="flex space-x-4 text-xs ">
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
                    class 11<sup>th</sup>
                  </li>
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
                    class 11<sup>th</sup>
                  </li>
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
                    Target 13<sup>th</sup>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-pink-50 group-hover:bg-pink-100 rounded-t-full absolute bottom-0 overflow-hidden flex justify-center items-center w-full py-3 transition-all group-hover:py-6">
              <Image
                className="w-16 mx-auto "
                src={medical}
                alt="medical-icon"
              ></Image>
            </div>
          </div>
          <div className=" relative h-[230px] lg:h-[230px] xl:h-[230px]  border rounded-xl group">
            <div className=" p-4 ">
              <div>
                <h2 className="font-semibold text-2xl">JEE</h2>
              </div>
              <div className="my-4">
                <ul className="flex space-x-4 text-xs ">
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
                    class 11<sup>th</sup>
                  </li>
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
                    class 11<sup>th</sup>
                  </li>
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
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
          </div>
          <div className="relative h-[230px] lg:h-[230px] xl:h-[230px] border rounded-xl  group">
            <div className="p-4">
              <div>
                <h2 className="font-semibold text-2xl">Foundation</h2>
              </div>
              <div className="my-4">
                <ul className="flex space-x-4 text-xs">
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
                    class 9<sup>th</sup>
                  </li>
                  <li className="border rounded-full px-3 lg:px-2 xl:px-3 border-black py-2">
                    class 10<sup>th</sup>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 group-hover:bg-green-100 rounded-t-full absolute bottom-0 overflow-hidden flex justify-center items-center w-full py-3 transition-all group-hover:py-6">
              <Image
                className="w-16 mx-auto"
                src={openbook}
                alt="openbook-icon"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Curriculum;
