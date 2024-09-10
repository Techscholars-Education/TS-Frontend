"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { facultiesData } from "./FacultiesData.js";
import Facultycard from "./Facultycard.jsx";
import "./aboutcoursedot.css"

const Faculties = (props) => {
  const settings = {
    infinite: true,
    speed: 700,
    dots: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    rtl: true,
    autoplay: true,
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


    const [isFaculties, setIsFaculties] = useState(true);
  
    const handleToggle = () => {
      setIsFaculties(!isFaculties);
      // console.log("Switch is now:", isFaculties ? "Mentors" : "Faculties");
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
            } font-medium bg-blue-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block uppercase`}
          >
            Our Faculties & MENTORS
          </h5>
        </div>
        
        <div className=" w-full h-20 flex items-center justify-center mt-4">
          
        <div className="flex justify-center items-center h-[100vh] w-full">
      <label className="relative inline-block w-[240px] h-[50px] cursor-pointer select-none">
        <input
          type="checkbox"
          className="sr-only"
          checked={isFaculties}
          onChange={handleToggle}
        />
        <span
          className={`block w-full h-full rounded-full transition-all duration-300 relative cursor-pointer bg-white border-[1px] border-gray-400`}
        >
          {/* Circle button */}
          <span
            className={`absolute  w-[130px] h-full bg-[#0079FC] text-white rounded-full transition-all duration-300 flex justify-center items-center text-[16px] font-medium shadow-md ${
              isFaculties ? "left-0" : "left-[108px]"
            }`}
          > <div className="w-6 h-6 rounded-full bg-white mr-1"/>
            {isFaculties ? "FACULTIES" : "MENTORS"}
          </span>
        </span>
        {/* Text for both sides */}
        <span
          className={`absolute top-[14px] left-[14px] font-semibold text-[16px] ${
            isFaculties ? "text-white" : "text-gray-500"
          }`}
        >
          {isFaculties ? "" : "FACULTIES"}
        </span>
        <span
          className={`absolute top-[14px] right-[14px] font-semibold text-[16px] ${
            isFaculties ? "text-gray-500" : "text-white"
          }`}
        >
         {isFaculties ? "MENTORS" : ""}
        </span>
      </label>
    </div>
         
              
        </div>

        <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center mt-4 font-Poppins ">
          {props.calling == "home"
            ? "Learn from Bharat's top faculties"
            : "Faculties in this batch"}
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
            : props.examType === "NEET"
            ? facultiesData
                .filter((item) => [1, 2, 3, 4, 5, 7].includes(item.id))
                .map((item) => <Facultycard key={item.id} item={item} />)
            : props.examType === "FOUNDATION"
            ? facultiesData
                .filter((item) => [3, 4, 6, 7, 1].includes(item.id))
                .map((item) => <Facultycard key={item.id} item={item} />)
            : facultiesData.map((item) => (
                <Facultycard key={item.id} item={item} />
              ))}
        </Slider>
      </div>
    </section>
  );
};

export default Faculties;
