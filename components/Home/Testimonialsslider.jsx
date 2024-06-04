"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import quoteup from "../../public/Home/quoteup.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../public/Home/star.svg";
import { testimonialsData } from "./P_testimonials.js";

const Testimonialsslider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: false,
    autoplay: true,
    pauseOnHOver: true,
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
    <div className="w-full mx-auto bg-gray-50 ">
      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {testimonialsData.map((item) => {
            return (
              <div className="py-4 md:py-10 " key={item.id}>
                <div className="border lg:h-80 h-[38vh] p-4 rounded shadow-md mx-4 hover:shadow-xl hover:scale-105 duration-200 flex flex-col justify-between bg-white  ">
                  <div>
                    <Image
                      className="invert w-6 md:w-8 "
                      src={quoteup}
                      alt="quoteup"
                    />
                  </div>

                  <div className="py-4">
                    <p className=" text-xs lg:text-base text-gray-600 font-Poppins leading-relaxed lg:leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-between font-Poppins ">
                    <div className=" flex items-center space-x-3">
                      <div className="font-Poppins">
                        <h4 className=" text-xl font-semibold  text-gray-600">
                          {item.parentName}
                        </h4>
                        <p className="text-xs lg:text-sm text-gray-500">
                          {item.studentName}
                          {" - "}
                          <span>
                            {item.class}
                            <sup>th</sup>
                            -[{item.aspirant}]
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center items-center space-x-2 ">
                      <Image src={star} alt="rating-star"></Image>
                      <p className=" text-sm md:text-xs lg:text-base text-darkBlue font-semibold">
                        {item.starRating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
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
