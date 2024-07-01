import React from "react";
import Image from "next/image";

const Facultycard = (props) => {
  return (
    <div className=" xl:w-[420px]  xl:mx-2.5 lg:mx-10 md:mx-4 h-[440px] md:h-[460px] lg:h-[480px] shadow-sm font-Inter my-10 relative border-opacity-60 rounded-3xl  bg-white hover:shadow-lg hover:scale-105 duration-200 flex flex-col  ">
      <div className=" h-[250px] rounded-3xl p-4 relative ">
        <Image
          className=" h-full xl:h-[250px] w-full object-cover object-center rounded-lg "
          src={props.item.profile}
          alt="blog"
        ></Image>
        <span className="text-TechBlue bg-white/80 rounded-md p-2 inline-flex font-medium items-center md:mb-2 lg:mb-0 text-xs md:text-sm absolute top-6 left-6 xl:top-6 xl:left-8">
          {props.item.experience}+ Years of experience.
        </span>
      </div>
      <div className="py-3  h-[150px] md:h-[180px] lg:h-[200px]  xl:h-[160px] relative px-2 font-Poppins ">
        <h1 className="title-font text-xl md:text-2xl font-semibold text-black/70 rounded-md mb-0 p-4 ">
          {props.item.name}
        </h1>
        <p className="leading-relaxed mb-3 text-TechBlue font-medium  text-lg md:text-xl px-4">
          {props.item.qualification}
        </p>
        <h6 className=" text-lg md:text-xl  text-black/70 mb-3 font-medium px-4">
          {props.item.designation} at Techscholars
        </h6>
      </div>
    </div>
  );
};

export default Facultycard;
