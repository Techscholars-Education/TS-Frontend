"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Laptop from "../../public/Home/Laptop.svg";
import Agreement from "../../public/Home/Agreement.svg";
import Businessman from "../../public/Home/Businessman.svg";
import Bubble from "../../public/Home/Bubble.svg";
import Searchslider from "../../public/Home/Searchslider.svg";
import Mansion from "../../public/Home/Mansion.svg";

const Aboutslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
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

  const data = [
    {
      id: 1,
      image: Laptop,
      top: "Every Sunday",
      mid: "Scholarship Admission Exam",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 2,
      image: Agreement,
      top: "Contact Us",
      mid: "Schedule a call with our councillor",
      bottom: "Know what we can offer",
    },
    {
      id: 3,
      image: Businessman,
      top: "Faculty",
      mid: "Personalised expert mentorship",
      bottom: "Attention on what you want",
    },
    {
      id: 4,
      image: Bubble,
      top: "Every Sunday",
      mid: "Student Community",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 5,
      image: Searchslider,
      top: "Every Sunday",
      mid: "Performance analysis",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 6,
      image: Mansion,
      top: "Every Sunday",
      mid: "House of Techscholars",
      bottom: "Techsholars scholarship test",
    },
  ];

  return (
    <section className="  w-11/12 mx-auto my-10  ">
      <div className="slider-container">
        <Slider className="w-full" {...settings}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className=" flex justify-center items-center py-10 "
              >
                <div className="w-full">
                  <Image
                    className="h-32 mx-auto "
                    src={item.image}
                    alt="slider-svgs"
                  ></Image>
                </div>
                <div className="px-6 mt-4">
                  <div className="mt-10">
                    <h3 className="rounded-full text-xs py-1 border inline-block px-4 text-TechBlue bg-blue-100">
                      {item.top}
                    </h3>
                  </div>
                  <div className=" my-4">
                    <h3 className="text-xl font-semibold text-darkBlue py-2">
                      {item.mid}
                    </h3>
                  </div>
                  <div>
                    <h3>{item.bottom}</h3>
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
