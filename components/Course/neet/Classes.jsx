"use client";
import React, { useState } from "react";
import Link from "next/link";
import Costing from "../Costing";
import Footer from "@/components/Footer";
import Batch from "../Batch";
import Faculties from "@/components/Home/Faculties";
import Demo from "../Demo";
import Faqs from "@/components/Faqs/Faqs";

const Classes = () => {
  const costing11th = [
    {
      id: 1,
      type: "ELITE",
      title: "Starter",
      price: "3999",
    },
    {
      id: 2,
      title: "Advanced",
      price: "8999",
    },
    {
      id: 3,
      title: "Ultimate",
      price: "24999",
    },
  ];
  const costing12th = [
    {
      id: 1,
      type: "PRIME",
      title: "Starter",
      price: "3999",
    },
    {
      id: 2,
      title: "Advanced",
      price: "8999",
    },
    {
      id: 3,
      title: "Ultimate",
      price: "24999",
    },
  ];
  const costing13th = [
    {
      id: 1,
      type: "PRIME",
      title: "Starter",
      price: "4999",
    },
    {
      id: 2,
      title: "Advanced",
      price: "9999",
    },
    {
      id: 3,
      title: "Ultimate",
      price: "27999",
    },
  ];

  const [activeBatch, setActiveBatch] = useState("11th");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };
  return (
    <>
      <section className="bg-gray-100">
        <div className="pt-10 space-y-4 font-Poppins ">
          <h1 className=" text-center font-Poppins text-2xl md:text-3xl text-darkBlue font-semibold">
            NEET batches
          </h1>
          <p className="text-gray-500 text-sm md:text-base md:px-40 lg:px-60 xl:px-80 text-center">
            An innovative Ed-tech organisation dedicated to democratising access
            to high-quality STEM education across India
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className=" justify-center mt-8 font-Poppins font-normal border mx-auto rounded-full inline ">
            <button
              className={`rounded-full p-2 px-8  transition-all duration-200  ${
                activeBatch === "11th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
              onClick={() => handleClick("11th")}
            >
              11th
            </button>
            <button
              className={`rounded-full p-2 px-8 transition-all duration-200  ${
                activeBatch === "12th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
              onClick={() => handleClick("12th")}
            >
              12th
            </button>
            <button
              className={`rounded-full p-2 px-8 transition-all duration-200  ${
                activeBatch === "13th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
              onClick={() => handleClick("13th")}
            >
              13th
            </button>
          </div>
        </div>

        <Batch examType={"NEET"} activeBatch={activeBatch} />

        <Costing
          CostingData={
            activeBatch === "11th"
              ? costing11th
              : activeBatch === "12th"
              ? costing12th
              : costing13th
          }
        />

        <Faculties examType={"NEET"} calling={"course"} />

        <Demo examType={"NEET"} />

        <Faqs />

        <div className="flex justify-center mt-24 items-center mb-20 ">
          <Link
            href="/course"
            className="bg-TechBlue text-lg text-white md:w-44 md:h-12 rounded-full  flex justify-center items-center  duration-300 px-4 py-2 "
          >
            Back
          </Link>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Classes;
