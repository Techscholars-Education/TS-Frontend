"use client";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 pb-12 font-Poppins " >
      <div className=" w-9/12 mx-auto rounded-xl">
        <h5 className="text-lg text-center font-bold text-darkBlue font-Poppins">
          Testimonials
        </h5>
        <h2 className="text-darkBlue font-semibold text-5xl text-center mt-10 mb-6 font-Poppins ">
          What our parents have to say about us.
        </h2>
      </div>
      <div className="flex justify-center items-center my-16 w-11/12 mx-auto ">
        <div className="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
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
