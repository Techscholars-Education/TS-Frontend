"use client";
import React, { useState } from "react";
import Link from "next/link";
import Costing from "../Costing";

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
      <div>
        <div className="flex justify-center mt-8 font-Poppins font-normal">
          <button
            className={`rounded-md p-2 px-8 border ml-3  ${
              activeBatch === "9th" ? "bg-darkBlue p-2  text-white" : ""
            }`}
            onClick={() => handleClick("9th")}
          >
            9th
          </button>
          <button
            className={`rounded-md p-2 px-8 border ml-3 ${
              activeBatch === "10th" ? "bg-darkBlue p-2  text-white" : ""
            }`}
            onClick={() => handleClick("10th")}
          >
            10th
          </button>
        </div>
      </div>

      <h1 className=" my-10 text-center font-Poppins text-3xl text-darkBlue font-semibold">
        FOUNDATION Packages
      </h1>

      <Costing CostingData={activeBatch === "9th" ? costing9th : costing10th} />

      <div className="flex justify-center mt-24 items-center ">
        <Link
          href="/course"
          className="bg-darkBlue text-white w-44 h-12 rounded-xl  flex justify-center items-center mx-8 auth-btn duration-300"
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default Classes;
