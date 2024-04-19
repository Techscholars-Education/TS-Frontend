"use client";
import Image from "next/image";
import React from "react";
// import Avatar from "@mui/material/Avatar";
// import AvatarGroup from "@mui/material/AvatarGroup";
// import jeePoster from "../../public/Course/jeePoster.jpg";
import avatar from "../../public/Dashboard/avatar.jpg";

const Card = (props) => {
  return (
    <>
      <div className="flex flex-col rounded-xl bg-slate-100 w-[296px] border h-[428px] mx-6 font-Poppins relative">
        <div>
          <Image
            className="w-full rounded-xl "
            alt="course-posters"
            src={props.image}
          />
        </div>
        <div className="my-5 flex justify-center absolute top-[30%] mx-auto w-full ">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <Image
              className="w-12 h-12 border-2 border-white rounded-full bg-green-300"
              src={avatar}
              alt="avatar-picture"
              width="40"
              height="40"
            />
            <Image
              className="w-12 h-12 border-2 border-white rounded-full bg-green-300"
              src={avatar}
              alt="avatar-picture"
              width="40"
              height="40"
            />
            <Image
              className="w-12 h-12 border-2 border-white rounded-full bg-green-300"
              src={avatar}
              alt="avatar-picture"
              width="40"
              height="40"
            />
            <span
              className="flex items-center justify-center  px-2 text-xs font-medium text-darkBlue bg-gray-100   rounded-full  "
              href="#"
            >
              +40 students
            </span>
          </div>
        </div>

        <div className="flex flex-col m-4 my-10">
          <div className="mb-4">
            <p className="font-base text-xs  ">1-28 july 2022</p>
            <h3 className="font-semibold text-lg text-darkBlue ">
              {props.title}
            </h3>
            <span className="font-base text-xs text-slate-800">
              {props.description}
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <button className="bg-darkBlue  p-2 px-4 rounded-md text-sm text-white">
              <a href="/payment">Explore</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
