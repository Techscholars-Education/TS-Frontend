"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { facultiesData } from "@/components/Home/FacultiesData";
import EachFaculty from "./EachFaculty";
const AboutFaculties = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
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
    <section className=" mx-10 font-Poppins">
      <h2 className="text-darkBlue text-xl font-semibold py-4 ">
        Faculties in this batch
      </h2>

      <div className="  xl:mx-3">
        <Slider {...settings}>
          {facultiesData.map((item) => {
            return <EachFaculty key={item.id} item={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default AboutFaculties;
