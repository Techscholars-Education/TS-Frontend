"use client";
import React from "react";
import Image from "next/image";
import jee from "../../public/Home/jee.svg";
import neet from "../../public/Home/neet.svg";
import foundation from "../../public/Home/foundation.svg";
import { Slide } from "react-awesome-reveal";
const Curriculum = () => {
  return (
    <section className="bg-TechBlue text-white my-16 py-16">
      <div className=" w-11/12 xl:w-10/12 mx-auto ">
        <h2 className="text-white font-semibold text-2xl  md:text-4xl  text-center my-4 font-Poppins ">
          Explore our exam categories
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm tracking-wide ">
            Welcome to TECHSCHOLARS. Transforming average students into toppers
            with our innovative teaching with our services.
          </p>
        </div>

        {/* Exam category */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  my-10 ">
          <Slide
            triggerOnce="true"
            cascade
            damping={0.3}
            direction="up"
            duration={500}
          >
            <div className=" h-full flex justify-center items-start p-4 xl:p-8 border border-white rounded-2xl  ">
              <div className=" p-2 w-[75px]  bg-white rounded-full  ">
                <Image
                  className=" mx-auto my-1 invert "
                  src={jee}
                  alt="jee-icon"
                ></Image>
              </div>

              <div className=" px-2 xl:px-6 w-full  ">
                <h3 className=" font-Poppins text-xl font-semibold ">Jee</h3>
                <p className="text-xs lg:text-sm font-Poppins text-white py-2 leading-normal">
                  Master the concepts and strategies needed to excel in JEE with
                  our comprehensive courses and expert guidance.
                </p>
                <div className="flex mt-4 space-x-2 flex-wrap">
                  <div className="border border-white rounded-full text-xs px-2 py-1 my-1">
                    11<sup>th</sup> Class
                  </div>
                  <div className="border border-white rounded-full text-xs px-2 py-1 my-1">
                    12<sup>th</sup> Class
                  </div>
                  <div className="border border-white rounded-full text-xs px-1 py-1 my-1">
                    Target 13<sup>th</sup>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full flex  justify-center items-start p-4 xl:p-8 border border-white rounded-2xl ">
              <div className=" p-2 w-[70px]  bg-white rounded-full">
                <Image
                  className=" mx-auto my-1 invert "
                  src={neet}
                  alt="neet-icon"
                ></Image>
              </div>

              <div className=" px-2 xl:px-6 w-full ">
                <h3 className=" font-Poppins text-xl font-semibold ">Neet</h3>
                <p className="text-xs lg:text-sm font-Poppins text-white py-2 leading-normal">
                  Achieve top scores in NEET with our specialized courses, get
                  in-depth understanding of medical concepts.
                </p>
                <div className="flex mt-4 space-x-2 flex-wrap">
                  <div className="border border-white rounded-full text-xs px-2 py-1 my-1">
                    11<sup>th</sup> Class
                  </div>
                  <div className="border border-white rounded-full text-xs px-2 py-1 my-1">
                    12<sup>th</sup> Class
                  </div>
                  <div className="border border-white rounded-full text-xs px-1 py-1 my-1">
                    Target 13<sup>th</sup>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full flex justify-center items-start p-4 xl:p-8 border border-white rounded-2xl  ">
              <div className=" p-2 w-[70px]  bg-white rounded-full">
                <Image
                  className=" mx-auto my-2 invert "
                  src={foundation}
                  alt="foundation-icon"
                ></Image>
              </div>

              <div className=" px-2 xl:px-6  w-full">
                <h3 className=" font-Poppins text-xl font-semibold ">
                  Foundation
                </h3>
                <p className="text-xs lg:text-sm font-Poppins py-2 leading-normal">
                  Build a strong academic base with our foundational courses,
                  designed to prepare you for competitive exams.
                </p>
                <div className="flex mt-4 space-x-2 flex-wrap">
                  <div className="border border-white rounded-full text-xs px-2 py-1 my-1">
                    9<sup>th</sup> Class
                  </div>
                  <div className="border border-white rounded-full text-xs px-2 py-1 my-1">
                    10<sup>th</sup> Class
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
