"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonialsData } from "./P_testimonials.js";
import Image from "next/image.js";
import star from "@/public/Home/star.svg";

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
        <div className=" 2xl:w-[1200px] mx-auto ">
          <Slider {...settings}>
            {testimonialsData.map((item) => {
              return (
                <div key={item.id} className=" w-full sm:w-full py-10  ">
                  <div
                    className={` mx-4 bg-white relative hover:scale-105 duration-200 border-2 rounded-xl hover:shadow-xl 2xl:h-[340px] xl:h-[280px] lg:h-72 md:h-[280px] h-52 flex flex-col justify-between `}
                  >
                    <div className="pl-6 pt-6 ">
                      <FaQuoteLeft className=" text-2xl md:text-4xl text-TechBlue " />
                    </div>
                    <div className=" absolute top-[60px] md:top-20  px-6   ">
                      <p className="text-xs md:text-sm xl:text-base text-black leading-normal tracking-wide text-justify font-medium font-Poppins">
                        {item.content}
                      </p>
                    </div>
                    <div className="mb-2 px-5 relative  xl:bottom-2  flex justify-between ">
                      <h4 className=" text-xs md:text-sm xl:text-base font-Poppins font-medium text-black/80">
                        {item.parentName}
                      </h4>
                      <div className="flex space-x-2 items-center">
                        <Image
                          className="w-4 md:w-full"
                          src={star}
                          alt="star-icon"
                        ></Image>
                        <p className=" text-xs md:text-sm xl:text-base font-Poppins font-semibold text-black/80">
                          {item.starRating}
                        </p>
                      </div>
                    </div>
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
