import React from "react";
import Image from "next/image";
const EachFaculty = (props) => {
  return (
    <div className=" xl:w-[250px]   xl:mx-2.5 lg:mx-10 md:mx-4 xl:h-[325px] h-[400px] md:h-[460px] lg:h-[460px] shadow-sm font-Inter relative border-opacity-60 rounded-3xl   bg-white  duration-200 flex flex-col  ">
      <div className=" xl:h-[180px] rounded-3xl p-4 relative ">
        <Image
          className=" h-full xl:h-[180px] w-full object-cover object-center rounded-lg "
          src={props.item.profile}
          alt="blog"
        ></Image>
        <span className="text-TechBlue bg-white/60 rounded-md p-2 inline-flex font-medium items-center md:mb-2 lg:mb-0 text-xs md:text-xs absolute top-6 left-6 xl:top-6 xl:left-8">
          {props.item.experience}+ Years of experience.
        </span>
      </div>
      <div className="py-3  h-[150px] md:h-[180px] lg:h-[200px]  xl:h-[160px] relative px-2 font-Poppins ">
        <h1 className="title-font text-sm md:text-lg font-semibold text-black rounded-md mb-0 px-2 pt-4 ">
          {props.item.name}
        </h1>
        <p className="leading-relaxed  text-TechBlue font-medium  text-xs md:text-sm px-2 pb-1">
          {props.item.qualification}
        </p>
        <h6 className=" text-xs md:text-sm  text-black/70  font-medium px-2">
          {props.item.designation} at Techscholars
        </h6>
      </div>
    </div>
  );
};

export default EachFaculty;
