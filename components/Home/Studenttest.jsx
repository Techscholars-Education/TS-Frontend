"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { studentTestimonials } from "./S_testimonials.js";
import studentTesti from "@/public/Home/studentTesti.png";
import Image from "next/image.js";
const Studenttest = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHOver: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 to-white py-16 font-Poppins w-full mx-auto  ">
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-blue-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
            Testimonials
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl text-center my-4 font-Poppins px-8 ">
          Why students ❤️ love Techscholars
        </h2>
        <p className="text-gray-600 font-medium text-sm md:text-xl text-center my-4 font-Poppins px-8 ">
          Hear from our students
        </p>
      </div>
      <div className=" my-10 w-11/12 2xl:w-[1200px] mx-auto ">
        <Slider {...settings}>
          {studentTestimonials.map((item) => {
            return (
              <div key={item.id} className=" w-[80%] sm:w-full py-10 ">
                <div
                  className={` mx-4 bg-white  relative hover:scale-105 duration-200 shadow-md rounded hover:shadow-xl 2xl:h-[340px] xl:h-[310px] lg:h-96 h-56 flex flex-col justify-between `}
                >
                  <div className=" top-0 px-6 py-4 md:p-6 xl:top-[10%] ">
                    <p className="text-xs lg:text-base text-black leading-normal tracking-wide">
                      {item.content}
                    </p>
                  </div>
                  <div className="mb-2 px-4  xl:bottom-0 ">
                    <div className="flex items-center space-x-2">
                      <div className=" flex items-center space-x-3">
                        <div className="font-Poppins my-2">
                          <h4 className=" text-xs lg:text-xl font-medium text-black/80">
                            {item.studentName}
                          </h4>
                          <p className="text-xs lg:text-sm text-black">
                            {item.aspirant}
                            {" - "}
                            <span>
                              {item.class}
                              <sup>th</sup>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-9xl absolute -top-5 font-Poppins text-gray-600">
                    "
                  </span>
                  <span className="text-9xl absolute -top-5 right-0 font-Poppins text-gray-600">
                    "
                  </span>
                  <Image
                    className="w-44 absolute bottom-4 right-4 opacity-5"
                    src={studentTesti}
                    alt="student-icon"
                  ></Image>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Studenttest;
