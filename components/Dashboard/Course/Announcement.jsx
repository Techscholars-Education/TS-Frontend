"use client";
import React from "react";
import CourseDetailNavbar from "./CourseDetailNavbar";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import phy from "@/public/Dashboard/Subject/an_ph.jpg";
import chy from "@/public/Dashboard/Subject/an_ch.jpg";
import math from "@/public/Dashboard/Subject/an_math.jpg";
import eng from "@/public/Dashboard/Subject/an_eng.jpg";
import cse from "@/public/Dashboard/Subject/an_cse.jpg";
import bio from "@/public/Dashboard/Subject/an_bio.jpg";
import { useParams } from "next/navigation";

const Announcement = () => {
  const params = useParams();
  console.log(params.coursedetail);

  const announcement = [
    { id: 1, subject: "Physics", img: phy },
    { id: 2, subject: "Chemistry", img: chy },
    { id: 3, subject: "Math", img: math },
    { id: 4, subject: "English", img: eng },
    { id: 5, subject: "CSE", img: cse },
    { id: 6, subject: "Biology", img: bio },
  ];

  return (
    <div className="font-Poppins min-h-screen py-6 md:full md:mr-8 flex flex-col bg-gray-100/60  ">
      <CourseDetailNavbar courseRoute={params.coursedetail} />
      <div className="flex flex-col bg-white rounded-xl p-3 md:mr-10 mt-4 md:ml-10">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {announcement.map((ele) => (
            <div
              className="flex flex-col m-4 border border-gray-200 rounded-lg w-[21vw] p-5 gap-3 font-Poppins text-darkBlue"
              key={ele.id}
            >
              <div
                id="upper"
                className="py-3 px-4  bg-gray-100/60 rounded-lg flex justify-between"
              >
                <div id="icons" className="flex items-center gap-2">
                  <Image
                    src={logo}
                    className="h-12 w-12 bg-white p-2 rounded-lg"
                    alt="logo"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-darkBlue text-[.9vw]">
                      TS Team
                    </h1>
                    <p className="font-normal text-[.6vw] text-gray-300">
                      12 hours ago
                    </p>
                  </div>
                </div>
                <div className="h-full w-[.1vw] rounded-lg bg-gray-200"></div>
                <div className="flex items-center justify-center">
                  <h1 className="text-[.8vw] font-semibold">{ele.subject}</h1>
                </div>
              </div>

              <div id="mid" className="">
                <Image
                  src={ele.img}
                  className="h-40 w-full object-cover rounded-xl"
                  alt={`${ele.subject}`}
                />
              </div>
              <div id="lower" className="flex flex-col gap-2">
                <h1 className="text-[.8vw] font-normal text-gray-500/80">
                  We are thrilled to announce the launch of your go-to platform
                  for high-quality online education. Whether you&#39;re looking
                  to advance your career, learn a new skill, or explore a
                  personal interest.
                </h1>
                <p className="font-normal text-[.8vw] underline">
                  www.techscholars.com/physics.n.26
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
