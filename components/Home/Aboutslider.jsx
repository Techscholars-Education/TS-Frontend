"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import laptop from "../../public/Home/laptop.svg";
import Agreement from "../../public/Home/Agreement.svg";
import mentor from "../../public/Home/mentor.svg";
import bubble from "../../public/Home/bubble.svg";
import sheet from "../../public/Home/sheet.svg";
import mansion from "../../public/Home/mansion.svg";
import arrowRight from "../../public/Home/arrow-right.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-yellowish hover:scale-125 duration-300 transition-all flex  justify-center items-center w-16 h-16  cursor-pointer absolute z-10 top-[50%] -right-16"
    >
      <Image className="rotate-180" src={arrowRight}></Image>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white hover:scale-125 duration-300 transition-all flex  justify-center items-center w-16 h-16  cursor-pointer absolute z-10 top-[50%] -left-20"
    >
      <Image src={arrowRight}></Image>
    </div>
  );
}

const Aboutslider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const data = [
    {
      id: 1,
      image: laptop,
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
      image: mentor,
      top: "Faculty",
      mid: "Personalised expert mentorship",
      bottom: "Attention on what you want",
    },
    {
      id: 4,
      image: bubble,
      top: "Every Sunday",
      mid: "Student Community",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 5,
      image: sheet,
      top: "Every Sunday",
      mid: "Performance analysis",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 6,
      image: mansion,
      top: "Every Sunday",
      mid: "House of Techscholars",
      bottom: "Techsholars scholarship test",
    },
  ];

  return (
    <section className=" relative w-11/12 mx-auto mt-20 ">
      <div>
        <Slider className="flex justify-center items-center" {...settings}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className=" flex justify-center items-center max-w-2xl "
              >
                <Image
                  className=" mx-auto "
                  src={item.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4  h-2/5 text-center ">
                  <div className="font-base text-lg mb-2 text-center">
                    {item.top}
                  </div>
                  <div className="font-bold text-3xl text-darkBlue mb-2">
                    {item.mid}
                  </div>
                  <p className="text-darkBlue text-base">{item.bottom}</p>
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
