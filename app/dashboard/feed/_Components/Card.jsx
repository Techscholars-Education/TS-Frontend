"use client";
import Image from "next/image";
import React from "react";
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
        <div className="w-full  ">
          <Link
            className="bg-TechBlue mt-4 text-white rounded-full w-full py-3 hover:bg-black duration-200 inline-block text-center font-medium font-Poppins"
            href="/dashboard/feed/blog"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
