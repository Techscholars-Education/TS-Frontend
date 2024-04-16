"use client";
import React from "react";
import Image from "next/image";
import arrowRight from "../../public/Home/arrow-right.svg";
import Nature from "../../public/Home/Nature.jpg";
import quoteup from "../../public/Home/quoteup.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../public/Home/star.svg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <section className="bg-gray-100 pb-12 font-Poppins w-full mx-auto">
      <div className=" w-9/12 mx-auto rounded-xl">
        <h5 className="text-lg text-center font-bold text-darkBlue font-Poppins">
          Testimonials
        </h5>

        <h2 className="text-darkBlue font-semibold text-5xl text-center mt-10 mb-6 font-Poppins ">
          What our parents have to say about us.
        </h2>
      </div>

      <div className="flex justify-between items-center my-16 w-11/12 mx-auto">
        <div className="bg-white flex justify-center items-center w-16 h-16">
          <Image src={arrowRight} alt="arrow"></Image>
        </div>

        <div className="flex w-5/6 ">
          <Image className=" mx-auto" alt="nature" src={Nature}></Image>
        </div>

        <div className="bg-yellowish flex justify-center items-center w-16 h-16">
          <Image className="rotate-180" alt="arrow" src={arrowRight}></Image>
        </div>
      </div>

      {/* Testimonials slider*/}
      <div className="slider-container">
        <Slider {...settings}>
          <div>
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
          <div>
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
          <div>
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
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
