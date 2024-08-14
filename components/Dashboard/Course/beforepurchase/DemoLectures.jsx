"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DemoLectures = () => {
  const settings = {
    infinite: true,
    speed: 500,
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
    <section className=" mx-10 font-Poppins bg-gray-100/40 rounded-md my-16">
      <h2 className="text-darkBlue text-xl font-semibold py-4  ">
        Demo Lectures
      </h2>

      <div className=" rounded-md py-6">
        <Slider {...settings}>
          <div className="aspect-video px-4  ">
            <iframe
              src="https://www.youtube.com/embed/tg6ME1kCp4w"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture"
              allowFullScreen
              className="w-full h-full
          rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video px-4  ">
            <iframe
              src="https://www.youtube.com/embed/CPM-0u2Kur4"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video px-4  ">
            <iframe
              src="https://www.youtube.com/embed/rUkguB8jF4E"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video px-4  ">
            <iframe
              src="https://www.youtube.com/embed/rUkguB8jF4E"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video px-4  ">
            <iframe
              src="https://www.youtube.com/embed/rUkguB8jF4E"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default DemoLectures;
