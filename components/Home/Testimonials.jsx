"use client";
import React from "react";
import Image from "next/image";
import arrowRight from "../../public/Home/arrow-right.svg";
import Nature from "../../public/Home/Nature.jpg";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 pb-12 font-Poppins ">
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
    </section>
  );
};

export default Testimonials;
