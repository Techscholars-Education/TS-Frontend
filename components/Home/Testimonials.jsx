"use client";
import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className=" pb-16 bg-gray-50 font-Poppins w-full mx-auto  "
    >
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-blue-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
            Parents Testimonials
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl px-10 md:px-4 text-center my-4 font-Poppins ">
          Hear from Parents: Why they trust us
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            Sharing Heartfelt Stories of Trust in Our Comprehensive Educational
            Approach
          </p>
        </div>
      </div>

      <div className="mt-16 md:mb-10">
        <iframe
          className="mx-auto rounded-xl h-[169px] w-[300px] md:h-[282px] md:w-[500px]  lg:w-[860px] lg:h-[484px] xl:w-[1060px] xl:h-[596px]"
          src="https://www.youtube.com/embed/lCcr2OpPrj0?si=D-_03h1-4tWrUwDa"
          title="Techscholars | Bharat's best educational platform"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Testimonials;
