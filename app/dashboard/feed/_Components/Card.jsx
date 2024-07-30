"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../../../public/Dashboard/avatar.jpg";
import Link from "next/link";
const Card = (props) => {
  return (
    <>
      <div className=" bg-white font-Poppins rounded-md ">
        <div id="image">
          <Image src={props.image} className=" w-full" alt="logo" />
        </div>
        <div className="my-4 px-2 space-y-2">
          <div>
            <h3 className="font-semibold text-xl text-darkBlue"> Heading</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <hr />
        <div className="w-full px-2 my-6">
          <button className="bg-TechBlue text-white w-full rounded-full py-3 font-normal hover:bg-black duration-200 ">
            <Link href="/dashboard/feed/blog">Read more</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
