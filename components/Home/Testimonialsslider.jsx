"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import quoteup from "../../public/Home/quoteup.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../public/Home/star.svg";
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
  const testimonialsData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  return (
    <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        {testimonialsData.map((item) => {
          return (
            <div className="py-10" key={item.id}>
              <div className="border bg-white p-4 rounded-xl mx-4 hover:shadow-xl hover:scale-105 duration-200  ">
                <div>
                  <Image
                    className="invert w-6 md:w-10 "
                    src={quoteup}
                    alt="quoteup"
                  />
                </div>

                <div className="py-4">
                  <p className=" text-xs md:text-base text-darkBlue/70 font-Poppins">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, laboriosam. Lorem ipsum.
                  </p>
                </div>

                <div className="flex items-center justify-between font-Poppins ">
                  <div className="w-1/2 flex items-center space-x-4">
                    <div className="w-[30px] h-[30px] rounded-full bg-TechBlue"></div>
                    <h4 className=" text-xs md:text-base mfont-semibold text-darkBlue">
                      John Doe
                    </h4>
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    <Image src={star} alt="rating-star"></Image>
                    <p className=" text-xs md:text-base text-darkBlue font-semibold">
                      4.3
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
