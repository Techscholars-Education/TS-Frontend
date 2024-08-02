"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DashboardNavbar from "../DashboardNavbar";
import { LuAlarmClock } from "react-icons/lu";
const Activetest = () => {
  const { slug } = useParams();

  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (slug) {
      // Convert slug to a more readable format if needed
      const formattedHeading = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      setHeading(formattedHeading);
    }
  }, [slug]);

  return (
    <div className="bg-white font-Poppins w-full flex flex-col ">
      <DashboardNavbar title={"Test Series"} />
      <div className="mb-6 flex flex-col mr-2 bg-gray-100/60 h-[85vh] max-w-full pl-5 pr-5 pt-6 overflow-y-auto ">
        {/* Test headind, timer, submit, view instructions */}
        <div className=" flex justify-between items-center px-4 py-4 bg-white rounded-md">
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl font-medium text-darkBlue">{heading}</h3>
            </div>
            <div className="flex items-center text-xl font-medium">
              <LuAlarmClock className="text-2xl mr-4" />
              00:45:49
            </div>
          </div>

          <div className="space-x-6">
            <button className="border border-darkBlue text-darkBlue rounded-full font-medium px-4 py-2">
              View instructions
            </button>
            <button className="border-2 border-TechBlue bg-TechBlue text-white font-medium rounded-full  px-5 py-2">
              Submit Test
            </button>
          </div>
        </div>

        {/* (Question number, marks details), (Question, options container),(All questions container) */}

        <div className="border-2 border-black my-6">
          {/* Question numnber, marks details ,(Question, options container) */}
          <div className="border-2 border-red-600 ">
            {/* Question Number, marks details */}
            <div>
              <h6 className="bg-TechBlue inline-block p-2 rounded-md text-white font-medium">
                40.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activetest;
