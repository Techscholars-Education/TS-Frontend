"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
const Syllabusview = () => {
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

  const aboutTest = {
    Syllabus: [
      "Physics - FULL SYLLABUS",
      "Chemistry - FULL SYLLABUS",
      "Mathematics - FULL SYLLABUS",
    ],
    Instructions: [
      "Duration of the exam: 180 Minutes",
      "Attempt all the questions",
      "Marking is (+1) for every correct answer, (-0,2S) for every wrong answer",
      "Total Marks: ISS -The question paper consists of 3 sections",
      "Section -I: Physics (40 questions)",
      "Section -II: Chemistry (40 questions)",
      "Section -Ill: Mathematics (75 questions)",
    ],
  };

  return (
    <div className="bg-gray-100/60 font-Poppins w-full flex flex-col min-h-screen">
      <DashboardNavbar title="Test series" />

      {/* Particular test series syllabus */}
      <section className="p-10  space-y-6">
        {/* Back btn */}
        <Link
          className="flex justify-start items-center "
          href="/dashboard/testseries/purchased"
        >
          <div className=" font-medium xl:w-[105px] bg-blue-100 hover:bg-blue-400 rounded-full p-2 flex justify-center items-center mb-6 ">
            <IoArrowBackOutline className="mr-1 text-lg text-darkBlue " /> Back
          </div>
        </Link>

        {/* test series heading container */}
        <div className="space-y-5 ">
          <h3 className="text-2xl font-semibold text-darkBlue">{heading}</h3>
          <div className="flex m-1.5 items-center">
            <FaBook className="mt-1 text-xl mr-4 text-neutral-600" />
            <p className="text-[#3D3D3D] text-lg">
              155 Questions • 155 Marks • 180 Mins
            </p>
          </div>
        </div>

        {/* Syllabus */}

        <div className="bg-white px-8 py-9 rounded-md ">
          <h3 className="text-2xl font-semibold text-darkBlue">Syllabus</h3>
          <ul className="list-none my-5 text-gray-500/90 font-[450] space-y-1 text-lg">
            {aboutTest.Syllabus.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <h3 className="text-2xl font-semibold text-darkBlue">Instructions</h3>
          <ul className="list-none my-5 text-gray-500/90 font-[450] space-y-1 text-lg">
            {aboutTest.Instructions.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
          <div className="mt-10 mb-4">
            <Link
              className="bg-TechBlue text-white px-16 py-3 rounded-full hover:bg-black duration-200"
              href="#"
            >
              Start Test
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Syllabusview;
