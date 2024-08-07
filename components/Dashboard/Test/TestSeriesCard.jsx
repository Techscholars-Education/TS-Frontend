"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import coursePoster from "@/public/Course/coursePoster.svg";
import test_syllabus_icon from "@/public/Test/test_syllabus_icon.svg";
import slug from "slug";

function TestSeriesCard(props) {
  const item = { ...props.item };
  const [url, setUrl] = useState("");

  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);

  useEffect(() => {
    setUrl(slug(item.heading));

    setTimeout(() => {
      setIsThumbnailLoaded(true);
    }, 1000);
  }, [url, item.heading, isThumbnailLoaded]);

  return (
    <div
      className={`flex flex-col rounded-xl font-Poppins relative bg-white border  `}
    >
      {isThumbnailLoaded ? (
        <>
          {" "}
          <Image
            className="w-full rounded-xl"
            alt="course-posters"
            src={coursePoster}
          />
        </>
      ) : (
        <div className="h-52 w-full bg-gray-400 animate-pulse rounded-md"></div>
      )}

      <div className="p-4 font-Poppins text-darkBlue space-y-2">
        <div>
          <h4 className="font-semibold text-lg">{item.heading}</h4>
        </div>
        <div>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
        <ul className="list-none pl-0 text-sm font-base text-gray-700 ">
          {item.bulletPoints.map((item, index) => (
            <li key={index} className="flex items-center ">
              <span className="text-TechBlue text-4xl mr-2 leading-none">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <hr />
        <div className=" pt-2 space-y-2">
          <div className="flex justify-start space-x-2 items-center ">
            <FaGraduationCap className="text-2xl text-orange-500" />
            <p className="font-medium">{item.testType} test</p>
          </div>
          <div className="flex justify-start space-x-2 items-center ">
            <Image className=" w-5" src={test_syllabus_icon} alt="test-icon" />
            <p className="font-medium pl-1 ">{item.testSyllabus}</p>
          </div>
        </div>

        <div className="w-full  ">
          <Link
            className=" border border-darkBlue mt-4 text-darkBlue rounded-full w-full py-3 hover:bg-black hover:text-white duration-200 inline-block text-center font-medium font-Poppins"
            href={`/dashboard/testseries/${url}`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestSeriesCard;
