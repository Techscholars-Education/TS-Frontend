import React from "react";
import Image from "next/image";
const Facultycard = (props) => {
  return (
    <div className=" h-[44vh] md:h-[52vh] lg:h-[56vh] xl:h-full border-2 font-Poppins my-10 mx-4 xl:mx-8 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-2 bg-white shadow-md hover:shadow-xl hover:scale-105 duration-200 flex flex-col justify-between ">
      <div className=" h-full xl:h-4/6 rounded-lg">
        <Image
          className=" h-full xl:h-4/6 w-full object-cover object-center  rounded-lg"
          src={props.item.profile}
          alt="blog"
        />
      </div>
      <div className="py-6 px-2">
        <h1 className="title-font text-sm md:text-lg font-medium text-gray-900 mb-1">
          {props.item.name}
        </h1>
        <h6 className=" text-xs md:text-sm text-gray-500 mb-3 font-medium">
          {props.item.designation} at Techscholars
        </h6>
        <p className="leading-relaxed mb-3 text-gray-500 font-medium  text-xs md:text-sm">
          {props.item.qualification}
        </p>
        <div className="flex items-center flex-wrap ">
          <span className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0 text-xs lg:text-sm">
            {props.item.experience}+ Years of teaching experience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Facultycard;
