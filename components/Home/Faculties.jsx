"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { facultiesData } from "./FacultiesData.js";
import Facultycard from "./Facultycard.jsx";

const Faculties = () => {
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
          slidesToShow: 2,
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
  return (
    <section className="bg-white py-6 font-Poppins w-full mx-auto bg-gradient-to-r from-TechBlue/5 to-white ">
      <div className=" w-full mx-auto  rounded-xl ">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Faculities
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center my-4 font-Poppins ">
          Learn from Bharat&#39;s top faculties
        </h2>
      </div>
      <div className=" my-10 w-11/12 mx-auto ">
        <Slider {...settings}>
          {facultiesData.map((item) => {
            return <Facultycard key={item.id} item={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Faculties;
