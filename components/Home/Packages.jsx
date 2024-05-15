"use client";
import Link from "next/link";
import React from "react";
import { MdDone } from "react-icons/md";
import Costing from "../Course/Costing";
const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Starter",
      price: "1999",
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
      price: "7999",
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
      price: "17999",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ];

  return (
    <section className="bg-[#F8F8F8] my-16 py-16 font-Poppins w-full mx-auto  ">
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Pricing
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-4xl text-center my-4 font-Poppins ">
          Our annual courses prices starts from
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            An innovative Ed-tech organisation dedicated to democratising access
            to high-quality STEM education across India
          </p>
        </div>
      </div>
      <Costing CostingData={packages} />
    </section>
  );
};

export default Packages;
