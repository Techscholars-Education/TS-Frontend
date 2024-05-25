"use client";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white my-16 font-Poppins w-full mx-auto  ">
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Testimonials
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl px-10 md:px-0 text-center my-4 font-Poppins ">
          What our parents have to say about us
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            Maximize your potential with Techscholars personalised mentorship,
            performance analytics, and collaborative community
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-16 w-8/12 mx-auto ">
        <div className="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/K2vbrZJHLsY?si=dsqj_4Ks-sVMIYjq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
