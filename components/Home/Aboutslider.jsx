"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import first from "../../public/Home/first.png";
import second from "../../public/Home/second.png";
import third from "../../public/Home/third.png";
import fourth from "../../public/Home/fourth.png";
import fifth from "../../public/Home/fifth.png";
import sixth from "../../public/Home/sixth.png";
import arrowRight from "../../public/Home/arrow-right.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-yellowish hover:scale-125 duration-300 transition-all flex  justify-center items-center w-16 h-16  cursor-pointer absolute z-10 top-[40%] -right-16"
    >
      <Image className="rotate-180" src={arrowRight} alt="right-arrow"></Image>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white hover:scale-125 duration-300 transition-all flex  justify-center items-center w-16 h-16  cursor-pointer absolute z-10 top-[40%] -left-20"
    >
      <Image src={arrowRight} alt="left-arrow"></Image>
    </div>
  );
}

const Aboutslider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const data = [
    {
      id: 1,
      image: first,
      top: "Every Sunday",
      mid: "Scholarship Admission Exam",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 2,
      image: second,
      top: "Contact Us",
      mid: "Schedule a call with our councillor",
      bottom: "Know what we can offer",
    },
    {
      id: 3,
      image: third,
      top: "Faculty",
      mid: "Personalised expert mentorship",
      bottom: "Attention on what you want",
    },
    {
      id: 4,
      image: fourth,
      top: "Every Sunday",
      mid: "Student Community",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 5,
      image: fifth,
      top: "Every Sunday",
      mid: "Performance analysis",
      bottom: "Techsholars scholarship test",
    },
    {
      id: 6,
      image: sixth,
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
              <div key={item.id} className=" flex justify-center items-center ">
                <Image
                  className=" mx-auto w-80  "
                  src={item.image}
                  alt="Benefit Images"
                />
                <div className="px-6 py-4 w-4/5 mx-auto  ">
                  <div className="font-base text-lg mb-2 text-start ">
                    {item.top}
                  </div>
                  <div className="font-medium text-start text-4xl text-darkBlue mb-2  min-h-20">
                    {item.mid}
                  </div>
                  <p className="text-darkBlue text-base text-start ">
                    {item.bottom}
                  </p>
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
