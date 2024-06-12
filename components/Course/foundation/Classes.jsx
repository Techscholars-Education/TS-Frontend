"use client";
import React, { useState } from "react";
import Link from "next/link";
import Costing from "../Costing";
import Footer from "@/components/Footer";
import Demo from "../Demo";
import Faqs from "@/components/Faqs/Faqs";
import Batch from "../Batch";
const Classes = () => {
  const costing9th = [
    {
      id: 1,
      title: "Starter",
      price: "1999",
      type: "IGNITE",
    },
    {
      id: 2,
      title: "Advanced",
      price: "6999",
    },
    {
      id: 3,
      title: "Ultimate",
      price: "16999",
    },
  ];
  const costing10th = [
    {
      id: 1,
      title: "Starter",
      price: "2499",
      type: "RISE",
    },
    {
      id: 2,
      title: "Advanced",
      price: "7999",
    },
    {
      id: 3,
      title: "Ultimate",
      price: "17999",
    },
  ];

  const [activeBatch, setActiveBatch] = useState("9th");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };
  return (
    <>
      <section className="bg-gray-100">
        <div className="pt-10 space-y-4 font-Poppins ">
          <h1 className=" text-center font-Poppins text-2xl md:text-3xl text-darkBlue font-semibold">
            Foundation Batches
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
                activeBatch === "9th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
              onClick={() => handleClick("9th")}
            >
              9th
            </button>
            <button
              className={`rounded-full p-2 px-8 transition-all duration-200  ${
                activeBatch === "10th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
              onClick={() => handleClick("10th")}
            >
              10th
            </button>
          </div>
        </div>

        <Batch examType={"FOUNDATION"} activeBatch={activeBatch} />

        <Costing
          CostingData={activeBatch === "9th" ? costing9th : costing10th}
        />

        <Demo examType={"FOUNDATION"} />

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
