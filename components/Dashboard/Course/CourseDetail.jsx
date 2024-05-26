"use client";

import React from 'react'
import DashboardNavbar from '../DashboardNavbar'
import CourseDetailNavbar from './CourseDetailNavbar'
import { SlCalender } from "react-icons/sl";
import { FaStar, FaCheck } from "react-icons/fa";
import coursePoster from "../../../public/Course/coursePoster.svg";

import Image from "next/image";


import Link from "next/link";

import { FaClock } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa6";
import CourseCard from './CourseCard';
function CourseDetail() {
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
  const points = [
    "Key Point One",
    "Key Point Two",
    "Key Point Three",
    "Key Point Four",
    "Key Point Five",
  ];

  return (
    <div>
      <div className="bg-white font-Poppins min-h-screen py-10 w-[82vw] flex flex-col ">
        <CourseDetailNavbar />
        <div className='grid grid-cols-3 ml-10'>
          <div className='flex col-span-2 flex-col'>
            <div>
              <h2 className='text-[20px] font-[550]'>
                Discription
              </h2>
              <p className='text-[14px] my-4 text-[#666666]'>
                The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively.
              </p>
            </div>
            <div>
              <h2 className='text-[20px] my-4 font-[550]'>This Batch includes</h2>
              <div className='flex'>
                <div className='r'>
                  <SlCalender className="text-red-400 ounded-full mr-3 bg-slate-100 mt-4" />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <p className='text-[14px]'>Course duration</p>
                  </div>
                  <div>
                    <p className='text-[18px]'>
                      22 Nov 2023 - 31 May 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className=''>
                  <FaStar className="text-yellow-400 ounded-full mr-3 bg-slate-100 mt-4" />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <p className='text-[14px]'>Validity</p>
                  </div>
                  <div>
                    <p className='text-[18px]'>
                      Till JEE Exam 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h2 className='text-[20px] my-4 font-[550]'>Key point</h2>
              {points.map((point, index) => (
                <div key={index} className="flex items-center  rounded-full p-2">
                  <FaCheck className="text-white mr-2 bg-blue-500 p-1 rounded-full" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='grid-cols-1'>
            <div
              className={`flex flex-col rounded-xl border 
           font-Poppins relative w-[20vw] ml-8`}
            >
              <div>
                <Image
                  className="w-full rounded-xl "
                  alt="course-posters"
                  src={coursePoster}
                />
              </div>

              <div className="flex flex-col m-4 my-10">
                <div>
                  <div className="flex  items-center my-2">
                    <div>
                      <FaFire className="h-6 w-6 text-red-300" />
                    </div>
                    <div className="flex flex-col ml-2">
                      <p className="text-[12px] text-[#0079FC]">Business Design</p>
                      <p className="text-sm">New lession is available</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mt-4 items-center">
                  <div className="text-darkBlue text-sm items-center flex">
                    <FaClock className="mx-2" />
                    150+ Hrs
                  </div>
                  <div className="text-darkBlue text-sm items-center flex">
                    <PiGraduationCapFill className="mx-2" />
                    400+ Lessons
                  </div>
                </div>
                <hr />





                <div className="flex justify-between mt-4">
                  <Link
                    href="#"
                    className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white"
                  >
                    ENROLLED
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-10 flex flex-col mx-12">
          <h2 className="text-xl md:text-xl font-semibold text-darkBlue">
             Explore Other Courses
          </h2>
          <p className="text-sm text-gray-600 ">
          You’ve learned 70% of your goal this week! Keep it up
          </p>
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

      </div>
    </div>
  )
}

export default CourseDetail