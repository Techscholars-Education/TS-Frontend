"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "@/public/Home/testimonials.png";
import { testimonialsData } from "./P_testimonials.js";
import Image from "next/image.js";

const Testimonialsslider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: true,
    autoplay: true,
    pauseOnHOver: true,
    responsive: [
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
    <div className="w-full mx-auto bg-gray-50 ">
      <div className=" mx-auto">
        <div className="w-11/12 2xl:w-[1200px] mx-auto ">
          <Slider {...settings}>
            {testimonialsData.map((item) => {
              return (
                <div key={item.id} className=" w-full sm:w-full py-10  ">
                  <div
                    className={` mx-4 bg-white relative hover:scale-105 duration-200 shadow-md rotate-3 hover:rotate-0 rounded-xl hover:shadow-xl 2xl:h-[340px] xl:h-[310px] lg:h-96 h-56 flex flex-col justify-between `}
                  >
                    <div className=" top-0 px-6 py-4 md:p-6 xl:top-[10%] ">
                      <p className="text-xs lg:text-lg text-black leading-normal tracking-wide">
                        {item.content} ;
                      </p>
                    </div>
                    <div className="mb-2 px-4  xl:bottom-0 ">
                      <div className="flex items-center space-x-2">
                        <div className=" flex items-center space-x-3">
                          <div className="font-Poppins my-2">
                            <h4 className=" text-xs lg:text-xl font-medium text-black/80">
                              {item.parentName}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Image
                      className="w-44 absolute bottom-4 right-4 opacity-5"
                      src={testimonials}
                      alt="testimonials-icon"
                    ></Image>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="flex justify-center items-center mt-14 pb-10">
          <Link
            className="text-center bg-TechBlue text-white font-Poppins font-medium rounded-full px-6 py-3 text-sm hover:bg-black hover:shadow-sm hover:shadow-black transition-all ease-linear duration-200"
            href="/course"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonialsslider;
