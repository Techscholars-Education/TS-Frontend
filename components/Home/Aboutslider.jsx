"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import scholarai from "../../public/Home/scholarai.png";
import performanceAnalysis from "../../public/Home/performanceAnalysis.png";
import mentorship from "../../public/Home/mentorship.png";
import houseOfTech from "../../public/Home/houseOfTech.png";
import studentCommunity from "../../public/Home/studentCommunity.png";
import scholarshipTest from "../../public/Home/scholarshipTest.png";
import highQualityClasses from "../../public/Home/highQualityClasses.png";
import "./dots.css"
const Aboutslider = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    customPaging: (i) => (
      <div className="custom-dot"></div>
    ),
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  const data = [
    {
      id: 1,
      image: scholarai,
      top: "Artificial Intelligence",
      mid: "Scholar AI",
      bottom: "AI Mentor, daily quizzes, weekly challenges, and rankings",
      color: "yellow-50",
    },
    {
      id: 2,
      image: performanceAnalysis,
      top: "Analysis",
      mid: "Performance Analysis",
      bottom: "Track your progress with our in-detailed personalised dashboard",
      color: "green-50",
    },
    {
      id: 3,
      image: mentorship,
      top: "Contact Us",
      mid: "Mentorship",
      bottom: "Get mentorship from IITians and Medicos",
      color: "pink-50",
    },
    {
      id: 4,
      image: houseOfTech,
      top: "Community Activities",
      mid: "House’s of Techscholars",
      bottom: "Discover Techscholars Communities and Activities",
      color: "yellow-50",
    },
    {
      id: 5,
      image: studentCommunity,
      top: "Community",
      mid: "Student Community ",
      bottom: "Join and explore the smartest student community",
      color: "green-50",
    },
    {
      id: 6,
      image: scholarshipTest,
      top: "Scholarships",
      mid: "Scholarship Test",
      bottom: "Scholarship for the top 1% performers in TS-SAT",
      color: "pink-50",
    },
    {
      id: 7,
      image: highQualityClasses,
      top: "Mentors",
      mid: "High Quality Classes",
      bottom: "Learn from the best teachers and excel in your examination",
      color: "pink-50",
    },
  ];

  return (
    <section className="w-11/12 xl:w-10/12 2xl:w-[1400px] mx-auto pt-2 md:pt-8">
      <div className="h-full mx-auto pb-10">
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col justify-center mb-7 items-center py-10 border border-${item.color} rounded-3xl max-w-72 xl:max-w-[400px] h-[400px] md:h-[450px] lg:h-[480px] xl:h-[490px] mx-auto ml-8 md:ml-7 lg:ml-3 xl:ml-4 2xl:ml-12`}
            >
              <div className="w-full mx-auto">
                <Image
                  className="lg:h-56 lg:w-72 md:w-40 md:h-40 h-32 w-32 mx-auto"
                  src={item.image}
                  alt="slider-svgs"
                />
              </div>
              <div className="px-4 text-start mt-4 h-full">
                <div className="mt-10 md:px-2 xl:px-3">
                  <h3 className="rounded-full text-xs py-1 border border-TechBlue/20 bg-TechBlue/5 inline-block px-4 bg-blue-50 text-TechBlue">
                    {item.top}
                  </h3>
                </div>
                <div className="mt-4 xl:h-[60px]">
                  <h3 className="md:px-2 text-xl md:text-2xl xl:text-[1.4vw] xl:px-3 font-semibold text-darkBlue/90">
                    {item.mid}
                  </h3>
                </div>
                <div>
                  <h3 className="text-sm md:px-2 xl:px-3 md:text-base text-gray-600 lg:px-2">
                    {item.bottom}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Aboutslider;
