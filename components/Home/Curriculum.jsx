"use client";
import React from "react";
import Image from "next/image";
import jee from "../../public/Home/jee.svg";
import neet from "../../public/Home/neet.svg";
import foundation from "../../public/Home/foundation.svg";
import { Slide } from "react-awesome-reveal";
const Curriculum = () => {
  return (
    <section className=" text-black py-16 bg-gradient-to-r from-TechBlue/5 to-white ">
      <div className=" w-11/12 xl:w-10/12 mx-auto ">
        <h2 className="text-black font-semibold text-2xl  md:text-4xl  text-center my-4 font-Poppins ">
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
            <div className=" h-full flex justify-center items-start p-4 xl:p-8 border-2 border-black rounded-2xl  ">
              <div className=" p-2 lg:w-[75px]  bg-TechBlue rounded-full  ">
                <Image
                  className=" mx-auto my-1  "
                  src={jee}
                  alt="jee-icon"
                ></Image>
              </div>

              <div className=" w-full  ">
                <h3 className=" font-Poppins text-xl font-semibold px-2 text-black ">
                  Jee
                </h3>
                <p className="text-xs lg:text-sm font-Poppins text-black py-2 leading-normal px-2">
                  Master the concepts and strategies needed to excel in JEE with
                  our comprehensive courses and expert guidance.
                </p>
                <div className="flex mt-4 space-x-2 flex-wrap ">
                  <div className="border border-black text-black rounded-full text-xs px-2 py-1 my-1">
                    11<sup>th</sup> Class
                  </div>
                  <div className="border border-black text-black rounded-full text-xs px-2 py-1 my-1">
                    12<sup>th</sup> Class
                  </div>
                  <div className="border border-black text-black rounded-full text-xs px-2 py-1 my-1">
                    Target 13<sup>th</sup>
                  </div>
                </div>
              </div>
            </div>

            <div className=" h-full flex  justify-center items-start p-4 xl:p-8 border-2 border-black rounded-2xl ">
              <div className=" p-2 w-[70px]  bg-TechBlue rounded-full">
                <Image
                  className=" mx-auto my-1  "
                  src={neet}
                  alt="neet-icon"
                ></Image>
              </div>

              <div className=" w-full ">
                <h3 className=" font-Poppins text-xl font-semibold px-2 text-black ">
                  Neet
                </h3>
                <p className="text-xs lg:text-sm font-Poppins text-black py-2 leading-normal px-2">
                  Achieve top scores in NEET with our specialized courses, get
                  in-depth understanding of medical concepts.
                </p>
                <div className="flex mt-4 space-x-2 flex-wrap">
                  <div className="border border-black text-black rounded-full text-xs px-2 py-1 my-1">
                    11<sup>th</sup> Class
                  </div>
                  <div className="border border-black text-black rounded-full text-xs px-2 py-1 my-1">
                    12<sup>th</sup> Class
                  </div>
                  <div className="border border-black text-black rounded-full text-xs px-2 py-1 my-1">
                    Target 13<sup>th</sup>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full flex justify-center items-start p-4 xl:p-8 border-2 border-black rounded-2xl  ">
              <div className=" p-2 w-[70px]  bg-TechBlue rounded-full">
                <Image
                  className=" mx-auto my-2 "
                  src={foundation}
                  alt="foundation-icon"
                ></Image>
              </div>

              <div className=" w-full text-black">
                <h3 className=" font-Poppins text-xl font-semibold px-2  ">
                  Foundation
                </h3>
                <p className="text-xs lg:text-sm font-Poppins py-2 leading-normal px-2">
                  Build a strong academic base with our foundational courses,
                  designed to prepare you for competitive exams.
                </p>
                <div className="flex mt-4 space-x-2 flex-wrap">
                  <div className="border border-black rounded-full text-xs px-2 py-1 my-1">
                    9<sup>th</sup> Class
                  </div>
                  <div className="border border-black rounded-full text-xs px-2 py-1 my-1">
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
