"use client";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex flex-col rounded-xl bg-slate-100 w-[296px] h-[428px] mx-6 font-Poppins">
        <div>
          <Image
            className="w-full rounded-xl "
            src={require("../../app/assets/course.png")}
          />
        </div>
        <div className="flex justify-center">
          <div className="rounded-full w-4/6 py-1 relative bottom-2 flex justify-center bg-slate-200">
            hello
          </div>
        </div>

        <div className="flex flex-col m-4">
          <div className="mb-4">
            <p className="font-base text-xs  ">1-28 july 2022</p>
            <h3 className="font-semibold text-lg text-darkBlue ">
              Product Management basic-Course
            </h3>
            <span className="font-base text-xs text-slate-800">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-orange-600 text-[16.68px] font-[700]">
              $380{" "}
              <span className="font-base text-md text-darkBlue ">$500</span>
            </p>
            <button className="bg-darkBlue  p-2 px-4 rounded-md text-md text-white">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
