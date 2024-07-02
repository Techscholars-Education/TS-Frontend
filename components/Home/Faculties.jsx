"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { facultiesData } from "./FacultiesData.js";
import Facultycard from "./Facultycard.jsx";

const Faculties = (props) => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    rtl: true,
    autoplay: true,
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
    <section
      className={`${
        props.calling === "home" ? "bg-gray-50/70 " : "bg-gray-100"
      }py-10 font-Poppins w-full mx-auto `}
    >
      <div className=" w-full mx-auto  rounded-xl ">
        <div className=" text-center">
          <h5
            className={`text-xs ${
              props.calling === "home" ? "" : "hidden"
            } font-medium bg-blue-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block`}
          >
            Faculties
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center my-4 font-Poppins ">
          {props.calling == "home"
            ? "Learn from Bharat's top faculties"
            : "Top Faculites"}
        </h2>
      </div>
      <div className="my-4 text-center  ">
        <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm tracking-wide text-gray-600 ">
          Maximize your potential by learning from the best faculties
        </p>
      </div>
      <div className=" my-10 w-10/12 2xl:w-[1300px] mx-auto ">
        <Slider {...settings}>
          {props.examType === "JEE"
            ? facultiesData
                .filter((item) => [3, 5, 2, 8].includes(item.id))
                .map((item) => <Facultycard key={item.id} item={item} />)
            : props.examType === "JEE"
            ? facultiesData
                .filter((item) => [1, 2, 3, 4, 5, 7].includes(item.id))
                .map((item) => <Facultycard key={item.id} item={item} />)
            : facultiesData
                .filter((item) => [3, 4, 6, 7, 1].includes(item.id))
                .map((item) => <Facultycard key={item.id} item={item} />)}
        </Slider>
      </div>
    </section>
  );
};

export default Faculties;
