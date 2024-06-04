"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import scholarship from "../../public/Home/scholarship.svg";
import call from "../../public/Home/call.svg";
import mentorship from "../../public/Home/mentorship.svg";
import students from "../../public/Home/students.svg";
import analysis from "../../public/Home/analysis.svg";
import HofTech from "../../public/Home/HofTech.svg";

const Aboutslider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  const data = [
    {
      id: 1,
      image: scholarship,
      top: "Every Sunday",
      mid: "Scholarship Admission Exam",
      bottom: "Get upto 50% Scholarship! ",
    },
    {
      id: 2,
      image: call,
      top: "Contact Us",
      mid: "Schedule a call with our councillor",
      bottom: "Request a callback",
    },
    {
      id: 3,
      image: mentorship,
      top: "Mentors",
      mid: "Personalised expert mentorship",
      bottom: "Get mentored by IITians and Doctors",
    },
    {
      id: 4,
      image: students,
      top: "Community",
      mid: "Student Community",
      bottom: "Join and explore smartest student community",
    },
    {
      id: 5,
      image: analysis,
      top: "Faculty",
      mid: "Performance analysis",
      bottom: "Get your detailed performance evaluation",
    },
    {
      id: 6,
      image: HofTech,
      top: "Faculty",
      mid: "House of Techscholars",
      bottom: "Discover techscholars communities and activities",
    },
  ];

  return (
    <section className="  w-11/12 mx-auto pt-2 md:py-8  ">
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                style={{ width: 100 }}
                className=" flex flex-col justify-center items-center py-10  "
              >
                <div className="w-full">
                  <Image
                    className="lg:h-48 lg:w-48 md:w-40 md:h-40 h-32 w-32 mx-auto "
                    src={item.image}
                    alt="slider-svgs"
                  ></Image>
                </div>
                <div className="px-12 text-center mt-4">
                  <div className="mt-10">
                    <h3 className="rounded-full text-xs py-1 border inline-block px-4 text-TechBlue bg-blue-100">
                      {item.top}
                    </h3>
                  </div>
                  <div className=" my-4">
                    <h3 className="text-base md:text-xl font-semibold text-darkBlue py-2">
                      {item.mid}
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg text-gray-600">
                      {item.bottom}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Aboutslider;
