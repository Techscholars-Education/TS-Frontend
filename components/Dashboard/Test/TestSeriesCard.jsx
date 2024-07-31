import React from "react";
import Link from "next/link";
import star from "../../../public/Home/star.svg";
import { FaClock } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa6";
import Image from "next/image";
import avatar from "../../../public/Dashboard/avatar.jpg";

function TestSeriesCard(props) {
  const item = { ...props.item };
  return (
    <div
      className={`flex flex-col rounded-xl font-Poppins relative bg-white border  `}
    >
      <div className="h-52 w-full bg-gray-300 animate-pulse rounded-xl flex justify-center items-center  ">
        {/* <Image
          className="w-full rounded-xl"
          alt="course-posters"
          src={props.image}
          style={{ height: "200px", width: "400px" }}
          width={400}
          height={200}
        /> */}
        <div className="h-10 w-10 border-2 border-gray-400 animate-spin rounded-xl"></div>
      </div>
      <div className="p-4 font-Poppins text-darkBlue space-y-2">
        <div>
          <h4 className="font-semibold text-lg">{item.heading}</h4>
        </div>
        <div>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
        <ul className="list-disc ml-4 text-sm font-medium text-gray-500 marker:text-TechBlue space-y-2 ">
          {item.bulletPoints.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>

        <hr />

        <div className="w-full  ">
          <Link
            className="bg-TechBlue mt-4 text-white rounded-full w-full py-3 hover:bg-black duration-200 inline-block text-center font-medium font-Poppins"
            href="#"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestSeriesCard;
