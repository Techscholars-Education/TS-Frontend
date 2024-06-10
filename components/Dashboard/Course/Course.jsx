"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import coursePoster from "../../../public/Course/coursePoster.svg";
import CourseCard from "./CourseCard";
import DashboardNavbar from "../DashboardNavbar";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://api.techscholars.in/pdt/v1/product');
        
        setCourses(Array.isArray(response?.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    
  }, []);
  console.log(courses)

  return (
    <div className="font-Poppins min-h-screen w-full bg-[#F0F7FF]">
      <DashboardNavbar title="Course" />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <>
          <div className="my-14 flex flex-col mx-8">
            <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4">
              My courses
            </h2>
            <p className="text-sm text-gray-600 mx-4 my-4">
              You’ve learned 70% of your goal this week! Keep it up
            </p>
            <div className="flex">
              <Link
                href=""
                className="pt-2.5 py-1.5 px-8 mx-4 rounded-full text-center bg-TechBlue text-sm text-white"
              >
                Paid
              </Link>
              <Link
                href=""
                className="pt-2 py-1.5 px-8 rounded-full text-center text-sm bg-slate-200"
              >
                Free
              </Link>
            </div>
          </div>
          <div className="px-20 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:w-11/12 mx-auto">
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.name}
                  description={course.description}
                  route={`/dashboard/my-course/coursedetail`}
                  image={coursePoster}
                />
              ))
            ) : (
              <p>No courses available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Course;
