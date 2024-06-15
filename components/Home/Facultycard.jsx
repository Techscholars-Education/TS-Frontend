import React from "react";
import Image from "next/image";
import virtualTeacher from "@/public/Home/virtualTeacher.png";
const Facultycard = (props) => {
  return (
    <div className=" h-[440px] md:h-[460px] lg:h-[480px] font-Poppins my-10 mx-4 xl:mx-8 border border-gray-200 relative border-opacity-60 rounded-t-lg  bg-white shadow-md hover:shadow-xl hover:scale-105 duration-200 flex flex-col  ">
      <div className=" h-[250px] rounded-lg p-2 ">
        <Image
          className=" h-full xl:h-[250px] w-full object-cover object-center  rounded-lg"
          src={props.item.profile}
          alt="blog"
        />
      </div>
      <div className="py-3  h-[150px] md:h-[180px] lg:h-[200px]  xl:h-[160px] relative px-2 font-Poppins ">
        <h1 className="title-font text-sm md:text-2xl font-semibold text-black/70 rounded-md mb-1 p-2 ">
          {props.item.name}
        </h1>
        <h6 className=" text-xs md:text-sm text-black/70 mb-3 font-medium px-2">
          {props.item.designation} at Techscholars
        </h6>
        <p className="leading-relaxed mb-3 text-black/70 font-medium  text-xs md:text-sm px-2">
          {props.item.qualification}
        </p>
        <div className="flex items-center flex-wrap absolute md:-bottom-8 lg:-bottom-6  xl:-bottom-12 p-2 ">
          <span className="text-green-500 inline-flex font-medium items-center md:mb-2 lg:mb-0 text-xs md:text-sm">
            <span className=" text-2xl md:text-3xl lg:text-3xl xl:text-6xl text-green-500 font-bold">
              {props.item.experience}
            </span>
            + Years of teaching experience.
          </span>
        </div>
      </div>

      <Image
        src={virtualTeacher}
        className="opacity-5 absolute w-36 bottom-10 right-4 "
        alt="Teacher-icon"
      ></Image>
    </div>
  );
};

export default Facultycard;
