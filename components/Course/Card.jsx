"use client";
import Image from "next/image";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import jeePoster from "../../public/Course/jeePoster.jpg";

const Card = (props) => {
  return (
    <>
      <div className="flex flex-col rounded-xl bg-slate-100 w-[296px] h-[428px] mx-6 font-Poppins">
        <div>
          <Image className="w-full rounded-xl " src={props.image} />
        </div>
        <div className="flex justify-center">
          <div className="rounded-full w-4/6 py-1 relative bottom-6 flex justify-center bg-slate-200">
            <AvatarGroup
              renderSurplus={(surplus) => (
                <span>+{surplus.toString()[0]}k</span>
              )}
              total={4251}
            >
              <Avatar alt="Remy Sharp" src={jeePoster} />
              <Avatar alt="Travis Howard" src={jeePoster} />
              <Avatar alt="Agnes Walker" src={jeePoster} />
              <Avatar alt="Trevor Henderson" src={jeePoster} />
            </AvatarGroup>
          </div>
        </div>

        <div className="flex flex-col m-4">
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
