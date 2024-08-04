"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import coursePoster from "../../../public/Course/coursePoster.svg";
import CourseCard from "./CourseCard";
import DashboardNavbar from "../DashboardNavbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://api.techscholars.in/pdt/v1/product"
        );
        console.log(response.data);

        setCourses(
          Array.isArray(response?.data?.products)
            ? response?.data?.products
            : []
        );
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  console.log(courses);

  return (
    <div className="font-Poppins min-h-screen w-full  bg-[#f7faff]">
      <DashboardNavbar title="Course" />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <>
          <div className="my-4 flex flex-col mx-10">
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
          <div className="w-[80vw] mx-14">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
             
              
              ssr={true} 
              infinite={true}
             
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              
            >
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
            </Carousel>
          </div>
         
          <div className="w-[80vw] mx-14 flex flex-col">
            <div className="mt-12 mb-6">
            <h2 className="font-semibold text-xl">Explore Other Courses</h2>
            </div>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
             
              
              ssr={true} 
              infinite={true}
             
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              
            >
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
            </Carousel>
          </div>
        
          
        </>
      )}
    </div>
  );
};

export default Course;
