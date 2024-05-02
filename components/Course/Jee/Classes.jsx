"use client";
import React, { useState } from "react";
import Link from "next/link";
import Costing from "../Costing";

const Classes = () => {
  const costing11th = [
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
  const costing12th = [
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
  const costing13th = [
    {
      id: 1,
      title: "Starter",
      price: "3999",
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
      price: "19999",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ];

  const [activeBatch, setActiveBatch] = useState("11th");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };
  return (
    <>
      <div>
        <div className="flex justify-center mt-8 font-Poppins font-normal">
          <button
            className={`rounded-md p-2 px-8 border ml-3  ${
              activeBatch === "11th" ? "bg-darkBlue p-2  text-white" : ""
            }`}
            onClick={() => handleClick("11th")}
          >
            11th
          </button>
          <button
            className={`rounded-md p-2 px-8 border ml-3 ${
              activeBatch === "12th" ? "bg-darkBlue p-2  text-white" : ""
            }`}
            onClick={() => handleClick("12th")}
          >
            12th
          </button>
          <button
            className={`rounded-md p-2 px-4 border ml-3 ${
              activeBatch === "13th" ? "bg-darkBlue p-2 px-4 text-white" : ""
            }`}
            onClick={() => handleClick("13th")}
          >
            Target 13th
          </button>
        </div>
      </div>

      <h1 className=" my-10 text-center font-Poppins text-3xl text-darkBlue font-semibold">
        JEE Packages
      </h1>

      <Costing
        CostingData={
          activeBatch === "11th"
            ? costing11th
            : activeBatch === "12th"
            ? costing12th
            : costing13th
        }
      />

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
