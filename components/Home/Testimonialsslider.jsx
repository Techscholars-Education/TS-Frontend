"use client";
import React from "react";
import Image from "next/image";
import quoteup from "../../public/Home/quoteup.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../public/Home/star.svg";
const Testimonialsslider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  const testimonialsData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  return (
    <div className="w-[97%] mx-auto">
      <Slider {...settings}>
        {testimonialsData.map((item) => {
          return (
            <div key={item.id}>
              <div className="border-2 border-yellowish bg-white p-4 rounded-xl mx-4 max-w-xl  ">
                <div>
                  <Image src={quoteup} alt="quoteup" />
                </div>

                <div className="my-6">
                  <p className="text-base text-darkBlue/70">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, laboriosam. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Nam, voluptate. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </div>

                <div className="flex items-center justify-between font-Poppins ">
                  <div className="w-1/2 flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-yellowish"></div>

                    <h4 className="font-semibold text-darkBlue">John Doe</h4>
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    <Image src={star} alt="rating-star"></Image>
                    <p className="text-darkBlue font-semibold">4.3</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonialsslider;
