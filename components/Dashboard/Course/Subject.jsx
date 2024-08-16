"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Subject = ({ subject }) => {
  const router = useRouter();
  const params = useParams();

  const heads = [
    {
      id: 1,
      head: "All Contents",
      para: <div>All Videos • All Exercises • All</div>,
    },
    {
      id: 2,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 3,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 4,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 5,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 6,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 7,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 8,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 9,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 10,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 11,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
    {
      id: 12,
      head: "Ch “No.” : “Name of the Chapter” ",
      para: <div>“No.” Videos • ”No.” DPP • ”No.” Notes</div>,
    },
  ];

  return (
    <div className=" font-Poppins min-h-screen py-6 md:full md:mr-8 flex flex-col bg-gray-100/60 ">
      <div className="flex bg-slate-200 p-2 px-3 rounded-full w-24 md:mx-10">
        <IoMdArrowBack className="mt-1 mr-1" />

        <button onClick={() => router.back()} className="">
          Back
        </button>
      </div>

      <div className="flex flex-col  bg-white rounded-xl p-3 md:mr-10 mt-4 md:ml-10">
        <div className="m-4">
          <h2 className="text-[20px] font-[550]">{subject}</h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1">
          {heads.map((ele) => (
            <Link
              href={`/dashboard/my-course/${params.coursedetail}/classes/${subject}/${ele.head.replace(
                /\s+/g,
                "-"
              )}`}
              className="flex gap-3 m-4 border border-gray-100 p-3  pt-5 pb-5 rounded-lg "
              key={ele.id}
            >
              <div className="h-10 w-1 bg-TechBlue rounded-md"></div>
              <div className="flex flex-col">
                <h2 className="text-[14px] font-semibold">{ele.head}</h2>
                <div className="text-[10px] font-normal text-gray-400">
                  {ele.para}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subject;
