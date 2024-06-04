import React from "react";
import Image from "next/image";
import mobile from "../../public/Home/mobile.png";

const Aboutapp = () => {
  return (
    <>
      <div className=" w-full mx-auto  rounded-xl py-6">
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl px-10 md:px-0 text-center my-4 font-Poppins ">
          Join Bharat&#8216;s Most Trusted Educational Platform Today
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            Explore our YouTube Channel and subscribe to get access to quality
            education for free.
          </p>
        </div>
      </div>
      <section className=" flex flex-col-reverse md:flex md:flex-row  w-11/12 mx-auto font-Poppins md:space-x-10 ">
        <div className=" w-full md:w-1/3 flex justify-center  ">
          <Image src={mobile} alt="Techscholar-app-image"></Image>
        </div>
        <div className=" grid grid-cols-2 w-full gap-6 "></div>
      </section>
    </>
  );
};

export default Aboutapp;
