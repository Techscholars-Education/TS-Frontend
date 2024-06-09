import React from "react";
import Card from "./Card";
import Link from "next/link";
import jee from "@/public/Course/jee.png";
import neet from "@/public/Course/neet.png";
import foundation from "@/public/Course/foundation.png";

const Course = () => {
  const data = [
    {
      id: 1,
      title: "FOUNDATION",
      route: "/course/foundation",
      description:
        "Build a strong academic base with our foundational courses, designed to prepare you for competitive exams.",
      Poster: foundation,
    },
    {
      id: 2,
      title: "JEE",
      route: "/course/jee",
      description:
        "Master the concepts and strategies needed to excel in JEE with our comprehensive courses and expert guidance.",
      Poster: jee,
    },
    {
      id: 3,
      title: "NEET",
      route: "/course/neet",
      description:
        "Achieve top scores in NEET with our specialized courses, focusing on in-depth understanding of medical concepts.",
      Poster: neet,
    },
  ];

  return (
    <>
      <div className="bg-white font-Poppins min-h-screen py-10 w-full ">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-xl md:text-4xl font-semibold text-darkBlue">
            Explore our courses
          </h2>
          <p className="text-sm text-gray-600 px-10 md:px-40 xl:px-96">
            Discover a wide range of expertly designed courses tailored to equip
            you with the knowledge and skills for success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:w-10/12 mx-auto ">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-24 items-center space-x-4 md:space-x-10 ">
          <Link
            href="/course"
            className="bg-TechBlue text-sm text-white md:w-44 md:h-12 rounded-full  flex justify-center items-center  duration-300 px-4 py-2 "
          >
            Explore more
          </Link>
          <Link
            href="/"
            className=" text-sm md:w-44 md:h-12 border-2  border-gray-300 flex justify-center items-center rounded-full duration-300 px-4 py-2 "
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
