"use client";
import React, { useEffect, useState } from "react";

import CourseDetailNavbar from "./CourseDetailNavbar";
import CourseTestCards from "./CourseTestCards";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useParams } from "next/navigation";

function Tests() {
  const params = useParams();
  const [testSeries, setTestSeries] = useState([
    {
      id: 1,
      class: 9,
      category: "Science",
      name: "Physics Fundamentals",
    },
    {
      id: 2,
      class: 10,
      category: "Mathematics",
      name: "Algebra Master",
    },
    {
      id: 3,
      class: 11,
      category: "Literature",
      name: "World Classics",
    },
    {
      id: 4,
      class: 12,
      category: "History",
      name: "Modern World",
    },
    {
      id: 5,
      class: 9,
      category: "Languages",
      name: "English Grammar",
    },
    {
      id: 6,
      class: 11,
      category: "Computer Science",
      name: "Programming Basics",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [testSeries]);

  return (
    <div className=" font-Poppins min-h-screen py-6 md:w-[82vw] flex flex-col bg-gray-100/60">
      <CourseDetailNavbar courseRoute={params.coursedetail} />
      <div className="flex flex-col  bg-white rounded-xl p-3 mt-4 md:mr-10 md:ml-10">
        {loading ? (
          <p className="text-gray-500 font-medium">Please wait...</p>
        ) : (
          <>
            <div className="space-y-2 my-6 px-4">
              <h2 className="text-darkBlue font-semibold text-2xl ">Tests</h2>
              <p className="text-gray-500 font-base text-sm  ">
                Lets examine how much you have learned
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:pr-12 gap-6 ml-4 w-[68vw]">
              {testSeries.length > 0 ? (
                testSeries.map((item, idx) => (
                  <Link
                    href={`/dashboard/testseries/purchased/${params.coursedetail}`}
                    key={idx}
                  >
                    <CourseTestCards item={item} />
                  </Link>
                ))
              ) : (
                <div className="flex justify-center w-[76vw] items-center md:h-96">
                  <p className="text-gray-400 font-medium">
                    No test series available
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Tests;
