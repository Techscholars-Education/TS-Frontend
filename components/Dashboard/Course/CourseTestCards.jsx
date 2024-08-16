"use client";
import React from "react";
import coursePoster from "@/public/Course/coursePoster.svg";

import Image from "next/image";
const CourseTestCards = (props) => {
  return (
    <div className="flex flex-col rounded-xl font-Poppins relative bg-white border hover:shadow-md duration-200 transition-all ">
      <Image
        className="w-full rounded-xl"
        alt="course-posters"
        priority={true}
        src={coursePoster}
      />

      <div className="p-4 font-Poppins text-darkBlue space-y-2">
        <div className="flex justify-start space-x-4 items-center">
          <span className="px-2 py-1 text-xs text-white bg-orange-500 rounded-full">
            class - {props.item.class}
          </span>
          <span className="px-2 py-1 text-xs text-white bg-purple-600 rounded-full">
            {props.item.category}
          </span>
        </div>
        <div className="space-y-2 py-2 ">
          <h3 className="text-darkBlue font-medium">{props.item.name}</h3>
          <p className="text-xs text-gray-500">
            detailed solution for every paper
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseTestCards;
