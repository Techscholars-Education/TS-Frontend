"use client";
import React from "react";
import CourseDetailNavbar from "./CourseDetailNavbar";
import s1 from "@/public/Dashboard/Subject/s1.png";
import s2 from "@/public/Dashboard/Subject/s2.png";
import s3 from "@/public/Dashboard/Subject/s3.png";
import s4 from "@/public/Dashboard/Subject/s4.png";
import s5 from "@/public/Dashboard/Subject/s5.png";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
function Classes() {
  const params = useParams();

  const subjects = [
    {
      id: 1,
      subject: "Notices",
      chapters: 16,
      icon: (
        <div className="h-10 w-10 bg-[#FDFDFD] flex items-center justify-center rounded-md">
          <Image src={s1} alt="s1" className="h-7 w-7" />
        </div>
      ),
    },
    {
      id: 2,
      subject: "Maths",
      chapters: 21,
      icon: (
        <div className="h-10 w-10 bg-[#FDFDFD] flex items-center justify-center rounded-md">
          <Image src={s2} alt="s2" className="h-7 w-7" />
        </div>
      ),
    },
    {
      id: 3,
      subject: "Physics",
      chapters: 30,
      icon: (
        <div className="h-10 w-10 bg-[#FDFDFD] flex items-center justify-center rounded-md">
          <Image src={s3} alt="s3" className="h-7 w-7" />
        </div>
      ),
    },
    {
      id: 4,
      subject: "Chemistry",
      chapters: 8,
      icon: (
        <div className="h-10 w-10 bg-[#FDFDFD] flex items-center justify-center rounded-md">
          <Image src={s4} alt="s4" className="h-7 w-7" />
        </div>
      ),
    },
    {
      id: 5,
      subject: "Organic Chemistry",
      chapters: 10,
      icon: (
        <div className="h-10 w-10 bg-[#FDFDFD] flex items-center justify-center rounded-md">
          <Image src={s5} alt="s5" className="h-7 w-7" />
        </div>
      ),
    },
    {
      id: 6,
      subject: "Inorganic Chemistry",
      chapters: 12,
      icon: (
        <div className="h-10 w-10 bg-[#FDFDFD] flex items-center justify-center rounded-md">
          <Image src={s3} alt="s6" className="h-7 w-7" />
        </div>
      ),
    },
    {
      id: 7,
      subject: "Mathematics Adva..",
      chapters: 14,
      icon: (
        <div className="h-10 w-10 bg-[#FDFDFD] flex items-center justify-center rounded-md">
          <Image src={s2} alt="s7" className="h-7 w-7" />
        </div>
      ),
    },
  ];

  return (
    <div className=" font-Poppins min-h-screen py-6 md:full md:mr-8 flex flex-col bg-gray-100/60 ">
      <CourseDetailNavbar courseRoute={params.coursedetail} />
      <div className="flex flex-col  bg-white rounded-xl p-3 md:mr-10 mt-4 md:ml-10">
        <div className="m-4">
          <h2 className="text-[20px] font-[550]">Subject</h2>
          <p className="text-[14px] text-gray-500 mt-2">
            Select your subjects & start learning
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1">
          {subjects.map((ele) => (
            <Link
              href={`/dashboard/my-course/coursedetail/classes/${ele.subject}`}
              className="flex gap-3 m-4 border border-gray-100 p-3  pt-5 pb-5 rounded-lg "
              key={ele.id}
            >
              <div>{ele.icon}</div>
              <div className="flex flex-col">
                <h2 className="text-[14px]">{ele.subject}</h2>
                <p className="text-[12px] text-[#666666] font-medium">
                  {ele.chapters} Chapters
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Classes;
