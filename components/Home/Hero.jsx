import React from "react";
import search from "../../public/Home/search.svg";
import TangledArrow from "../../public/Home/TangledArrow.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <section className=" relative">
      <div className="py-10 ">
        {/* Main heading */}
        <h1 className="text-7xl text-darkBlue font-Poppins text-center font-base leading-normal relative ">
          Be in the Top 1%
          <br /> with{" "}
          <span className="bg-yellow-100 rounded-l-lg px-2 border-r-4 border-yellowish">
            need to meet
          </span>
          <span className="text-base absolute bg-yellowish px-6 py-2 font-bold  ">
            TechScholars
          </span>
        </h1>

        {/* Sub heading */}
        <div className="py-8 text-center">
          <p className="font-Poppins text-lg text-darkBlue tracking-wider">
            Transforming average students into toppers with our innovative
            teaching with our services.
          </p>
        </div>

        {/* Search bar */}
        <div className=" my-10 w-5/12 mx-auto px-5 py-4 rounded-xl bg-white flex items-center shadow-md ">
          <div>
            <Image className="w-12" src={search}></Image>
          </div>
          <div className="font-Poppins w-full mx-2">
            <input
              className="outline-none p-3 text-lg text-darkBlue  w-full"
              type="text"
              placeholder="Search the class type"
            />
          </div>
          <div>
            <button className="  rounded-xl px-10 text-xl py-3 bg-yellowish  text-darkBlue hover:-translate-y-2  duration-300  auth-btn">
              Search
            </button>
          </div>
        </div>

        <Image
          className="absolute top-[42%] left-[20%] w-28"
          src={TangledArrow}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
