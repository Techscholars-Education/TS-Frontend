"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { studentTestimonials } from "./S_testimonials.js";
import testimonialsBorder from "@/public/Home/testimonialsBorder.svg";
import { FaQuoteLeft } from "react-icons/fa";
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <section className="bg-gray-50 to-white py-16 font-Poppins w-full mx-auto  ">
      <div className=" w-full mx-auto  rounded-xl">
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl text-center my-4 font-Poppins px-8 ">
          Students have to say for us
        </h2>
        <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide text-center ">
          Hear from our students
        </p>
      </div>
      <div className=" my-10 w-11/12 2xl:w-[1200px] mx-auto ">
        <Slider {...settings}>
          {studentTestimonials.map((item) => {
            return (
              <div className="relative">
                <Image
                  src={testimonialsBorder}
                  alt="border-container-icon "
                  className="mx-auto md:w-[300px]  lg:w-[400px] w-[300px]  "
                />
                <div className="absolute top-10 px-12 md:top-8 md:px-16   lg:top-10 xl:top-8 lg:px-[70px] xl:px-[55px]">
                  <h4 className=" text-xs lg:text-base xl:text-base  font-medium text-justify ">
                    {item.content}
                  </h4>
                </div>
                <div className="absolute bottom-5 left-12 md:left-16  lg:left-20 xl:left-16 flex space-x-2 ">
                  <h6 className="text-xs lg:text-base font-semibold text-gray-900">
                    {item.studentName}{" "}
                  </h6>
                  <h6 className="text-xs lg:text-base font-normal text-gray-900">
                    - ({item.class}
                    <sup>th</sup>)
                  </h6>
                </div>
                <div className=" absolute bottom-0 right-12 rotate-180 ">
                  <FaQuoteLeft className=" text-3xl md:text-5xl text-TechBlue " />
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

{
  /* <div key={item.id} className=" w-[80%] sm:w-full py-10 ">
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
  <span className="text-9xl absolute -top-8 font-Inter text-gray-600">
    &ldquo;
  </span>
  <span className="text-9xl absolute -top-8 right-0 font-Inter text-gray-600">
    &ldquo;
  </span>
</div>
</div> */
}
