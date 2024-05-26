import React from "react";

import Link from "next/link";
import coursePoster from "../../../public/Course/coursePoster.svg";
import CourseCard from "./CourseCard";
import DashboardNavbar from "../DashboardNavbar";


const Course = () => {
  const data = [
    {
      id: 1,
      
      route: "/dashboard/my-course/coursedetail",
      description:
        "What do you need to know to create better products?",
      Poster: coursePoster,
    },
    {
      id: 2,
    
      route: "/dashboard/my-course/coursedetail",
      description:
        "What do you need to know to create better products?.",
      Poster: coursePoster,
    },
    {
      id: 3,
      
      route: "/dashboard/my-course/coursedetail",
      description:
        "What do you need to know to create better products?",
      Poster: coursePoster,
    },
  ];

  return (
    <>
    
      <div className="bg-white font-Poppins min-h-screen py-10 w-full ">
        <DashboardNavbar/>
        <div className="my-14 flex flex-col mx-8">
          <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4">
            My courses
          </h2>
          <p className="text-sm text-gray-600  mx-4 my-4">
          You’ve learned 70% of your goal this week! Keep it up
          </p>
          <div className="flex">
            <Link href="" className="  pt-2.5 py-1.5 px-8 mx-4 rounded-full text-center bg-TechBlue text-sm text-white">Paid
            </Link>
            <Link href="" className="  pt-2.5 py-1.5 px-8 rounded-full text-centertext-sm  bg-slate-100">Free
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:w-11/12 mx-auto ">
          {data.map((item) => {
            return (
              <CourseCard
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
              />
            );
          })}
        </div>
        <div className="space-y-4 mt-10 flex flex-col mx-12">
          <h2 className="text-xl md:text-xl font-semibold text-darkBlue">
             Explore Other Courses
          </h2>
          <p className="text-sm text-gray-600 ">
          You’ve learned 70% of your goal this week! Keep it up
          </p>
        </div>
        <div className="flex justify-center mt-24 items-center space-x-4 md:space-x-10 ">
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:w-11/12 mx-auto ">
          {data.map((item) => {
            return (
              <CourseCard
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
              />
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Course;
