import React from "react";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

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
        <ul className="list-disc ml-4 text-sm font-base text-gray-700 marker:text-TechBlue space-y-2 ">
          {item.bulletPoints.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>

        <hr />
        <div className=" pt-2 space-y-2">
          <div className="flex justify-start space-x-2 items-center ">
            <GiNotebook className="text-2xl text-darkBlue" />
            <p className="font-medium">{item.testType}</p>
          </div>
          <div className="flex justify-start space-x-2 items-center ">
            <FaGraduationCap className="text-2xl text-darkBlue" />
            <p className="font-medium">{item.testSyllabus}</p>
          </div>
        </div>

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
