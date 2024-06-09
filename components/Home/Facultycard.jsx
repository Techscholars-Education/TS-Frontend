import React from "react";
import Image from "next/image";
const Facultycard = (props) => {
  return (
    <div className=" h-[430px]  font-Poppins my-10 mx-4 xl:mx-8  border-opacity-60 rounded-lg p-2 bg-white shadow-md hover:shadow-xl hover:scale-105 duration-200 flex flex-col  ">
      <div className=" h-[250px] rounded-lg ">
        <Image
          className=" h-full xl:h-[250px] w-full object-cover object-center  rounded-lg"
          src={props.item.profile}
          alt="blog"
        />
      </div>
      <div className="py-3 px-2  h-[150px] md:h-[180px] lg:h-[200px]  xl:h-[160px] relative">
        <h1 className="title-font text-sm md:text-lg font-medium text-gray-900 mb-1">
          {props.item.name}
        </h1>
        <h6 className=" text-xs md:text-sm text-gray-500 mb-3 font-medium">
          {props.item.designation} at Techscholars
        </h6>
        <p className="leading-relaxed mb-3 text-gray-500 font-medium  text-xs md:text-sm">
          {props.item.qualification}
        </p>
        <div className="flex items-center flex-wrap absolute bottom-0 ">
          <span className="text-TechBlue inline-flex items-center md:mb-2 lg:mb-0 text-xs lg:text-sm">
            {props.item.experience}+ Years of teaching experience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Facultycard;
