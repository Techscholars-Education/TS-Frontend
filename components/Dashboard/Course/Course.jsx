"use client";
import React, { useEffect, useState } from "react";
import DashboardNavbar from "../DashboardNavbar";
import CourseCard from "./CourseCard";
import LoadingTestSeries from "@/components/Dashboard/Test/LoadingTestSeries";
import useMyCourse from "@/hooks/useMyCourse";
import { useMyCourseStore } from "@/hooks/useStore";


const Course = () => {
  const [isPuchasedClicked, setIsPurchasedClicked] = useState(true);

  const [isContentLoading, setIsContentLoading] = useState(true);
  const {my_course} = useMyCourseStore()

  const myCourses = [
    {
      target_year: 2025,
      year: 2024,
      course_title: "Introduction to Programming",
      start_date: "2024-08-15",
      end_date: "2025-08-15",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Advanced Python",
      start_date: "2024-08-20",
      end_date: "2025-08-20",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Data Structures and Algorithms",
      start_date: "2024-08-25",
      end_date: "2025-08-25",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Web Development Basics",
      start_date: "2024-08-30",
      end_date: "2025-08-30",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Machine Learning",
      start_date: "2024-08-05",
      end_date: "2025-08-05",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Database Management Systems",
      start_date: "2024-08-10",
      end_date: "2025-08-10",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Cloud Computing Fundamentals",
      start_date: "2024-08-15",
      end_date: "2025-08-15",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Cybersecurity Essentials",
      start_date: "2024-08-20",
      end_date: "2025-08-20",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Artificial Intelligence",
      start_date: "2024-08-25",
      end_date: "2025-08-25",
    },
    {
      target_year: 2025,
      year: 2024,
      course_title: "Software Engineering",
      start_date: "2024-08-30",
      end_date: "2025-08-30",
    },
  ];
const {usemyCourse} = useMyCourse()
  useEffect(()=>{
    usemyCourse()
    console.log(my_course);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[1])

  useEffect(() => {
    setTimeout(() => {
      setIsContentLoading(false);
    }, 2000);
  }, [setIsPurchasedClicked, isContentLoading]);

  return (
    <div className="font-Poppins min-h-screen bg-[#f7faff] pb-24">
      <DashboardNavbar title="Courses" />
      <div className="flex flex-col md:mx-8">
        {/* ABOUT HEADINGS AND BUTTONS  */}
        <div className="flex md:justify-between  mr-4 relative z-10">
          <div className="mx-4 my-6">
            <h2 className="text-xl md:text-xl mb-2 font-semibold text-darkBlue">
              My Courses
            </h2>
            <p className="xl:text-xs  text-gray-600">
              You&apos;ve learned 70% of your goal this week! Keep it up!
            </p>
            <div className="flex items-center space-x-4 my-6">
              <button
                onClick={() => {
                  setIsPurchasedClicked(true);
                }}
                disabled={isPuchasedClicked}
                className={` ${
                  isPuchasedClicked
                    ? "bg-TechBlue text-white disabled:cursor-not-allowed "
                    : "bg-blue-100 text-darkBlue"
                } font-medium py-2 px-8 rounded-full duration-200 transition-all hover:bg-black hover:text-white  `}
              >
                Purchased
              </button>
              <button
                onClick={() => {
                  setIsPurchasedClicked(false);
                }}
                disabled={!isPuchasedClicked}
                className={` ${
                  !isPuchasedClicked
                    ? "bg-TechBlue text-white disabled:cursor-not-allowed"
                    : "bg-blue-100 text-darkBlue"
                } font-medium py-2 px-8 rounded-full duration-200 transition-all hover:bg-black hover:text-white `}
              >
                Free
              </button>
            </div>
          </div>
        </div>

        {/* FOR PURCHASED */}

        {isContentLoading && isPuchasedClicked ? (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-4 w-full xl:pr-6 mt-4 ">
            {myCourses.map((item) => {
              return <LoadingTestSeries key={item.id} />;
            })}
          </div>
        ) : (
          <>
            {" "}
            {isPuchasedClicked ? (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-4 w-full xl:pr-6 mt-4 ">
                {myCourses.map((item) => {
                  return (
                    <CourseCard key={item.id} item={item} isPurchased={true} />
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-400 font-medium font-Poppins">
                Oops!, No free courses available at the moment
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
