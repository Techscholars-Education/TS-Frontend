"use client";
import React from "react";
import Image from "next/image";
import quotation from "../../public/Home/quotation.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { studentTestimonials } from "./S_testimonials.js";
const Studenttest = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
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
          slidesToScroll: 2,
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
    <section className="bg-[#F8F8F8] my-16 py-16 font-Poppins w-full mx-auto  ">
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Testimonials
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl text-center my-4 font-Poppins px-8 ">
          Students share why they ❤️ love us
        </h2>
      </div>
      <div className=" my-10 w-11/12 mx-auto ">
        <Slider {...settings}>
          {studentTestimonials.map((item) => {
            return (
              <div key={item.id} className=" w-[80%] sm:w-full py-10 ">
                <div className=" rounded-xl mx-4 border relative hover:scale-105 duration-200 hover:shadow-xl lg:h-[38vh] h-[25vh] flex flex-col justify-between">
                  <div className=" top-0 px-6 py-4 md:p-6 xl:top-[10%] ">
                    <p className=" text-xs sm:text-sm md:text-base text-gray-600 leading-normal ">
                      {item.content}
                    </p>
                  </div>
                  <div className="mb-2 px-4  xl:bottom-0 ">
                    <div className="flex items-center space-x-2">
                      <div className=" flex items-center space-x-3">
                        <div className="font-Poppins">
                          <h4 className=" text-sm  lg:text-xl font-semibold text-gray-600">
                            {item.studentName}
                          </h4>
                          <p className="text-xs lg:text-sm text-gray-500">
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

                  <Image
                    className="absolute -bottom-2 md:-bottom-6 -right-2 w-8  lg:w-12 xl:w-12 xl:-bottom-4"
                    src={quotation}
                    alt="quotation-icon"
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
