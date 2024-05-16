"use client";
import React, { useState } from "react";
import Link from "next/link";
import Costing from "../Costing";
import Footer from "@/components/Footer";
const Classes = () => {
  const costing9th = [
    {
      id: 1,
      title: "Starter",
      price: "2899",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 2,
      title: "Advanced",
      price: "9899",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 3,
      title: "Ultimate",
      price: "19899",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ];
  const costing10th = [
    {
      id: 1,
      title: "Starter",
      price: "2999",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 2,
      title: "Advanced",
      price: "9999",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 3,
      title: "Ultimate",
      price: "18999",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ];

  const [activeBatch, setActiveBatch] = useState("9th");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };
  return (
    <>
      <div className="mt-10 space-y-4 font-Poppins">
        <h1 className=" text-center font-Poppins text-3xl text-darkBlue font-semibold">
          FOUNDATION Packages
        </h1>
        <p className="text-gray-500 text-sm md:text-base md:px-80 text-center">
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

      <Costing CostingData={activeBatch === "9th" ? costing9th : costing10th} />

      <div className="flex justify-center mt-24 items-center mb-20 ">
        <Link
          href="/course"
          className="bg-TechBlue text-sm text-white md:w-44 md:h-12 rounded-full  flex justify-center items-center  duration-300 px-4 py-2 "
        >
          Back
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Classes;
