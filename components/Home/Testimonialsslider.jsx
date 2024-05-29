"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import quoteup from "../../public/Home/quoteup.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../public/Home/star.svg";
import Parents from "../../public/Home/Parents.jpg";
import { testimonialsData } from "./P_testimonials.js";

const Testimonialsslider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        {testimonialsData.map((item) => {
          return (
            <div className="py-4 md:py-10 " key={item.id}>
              <div className="border bg-white p-4 rounded-xl mx-4 hover:shadow-xl hover:scale-105 duration-200  ">
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
                    <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full opacity-90">
                      <Image
                        className="rounded-full"
                        src=""
                        alt="family-icon"
                      />
                    </div>
                    <div className="font-Poppins">
                      <h4 className=" text-sm lg:text-base text-gray-600">
                        {item.parentName}
                      </h4>
                      <p className="text-xs lg:text-sm text-gray-500">
                        {item.studentName}
                        {" - "}
                        <span>
                          {item.class}
                          <sup>th</sup>
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
      <div className="flex justify-center items-center my-14">
        <Link
          className="text-center bg-TechBlue text-white font-Poppins font-medium rounded-full px-6 py-3 text-sm"
          href="/course"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Testimonialsslider;
