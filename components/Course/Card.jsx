"use client";
import Image from "next/image";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import JEE from "../../public/Course/JEE.jpg";

const Card = () => {
  return (
    <>
      <div className="flex flex-col rounded-xl bg-slate-100 w-[296px] h-[428px] mx-6 font-Poppins">
        <div>
          <Image className="w-full rounded-xl " src={JEE} />
        </div>
        <div className="flex justify-center">
          <div className="rounded-full w-4/6 py-1 relative bottom-6 flex justify-center bg-slate-200">
            <AvatarGroup
              renderSurplus={(surplus) => (
                <span>+{surplus.toString()[0]}k</span>
              )}
              total={4251}
            >
              <Avatar
                alt="Remy Sharp"
                src={require("../../app/assets/course.png")}
              />
              <Avatar
                alt="Travis Howard"
                src={require("../../app/assets/course.png")}
              />
              <Avatar
                alt="Agnes Walker"
                src={require("../../app/assets/course.png")}
              />
              <Avatar
                alt="Trevor Henderson"
                src={require("../../app/assets/course.png")}
              />
            </AvatarGroup>
          </div>
        </div>

        <div className="flex flex-col m-4">
          <div className="mb-4">
            <p className="font-base text-xs  ">1-28 july 2022</p>
            <h3 className="font-semibold text-lg text-darkBlue ">JEE</h3>
            <span className="font-base text-xs text-slate-800">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
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
