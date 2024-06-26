"use client";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import Costing from "../Costing";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

const Classes = () => {
  const [costing11th, setCosting11th] = useState([
    {
    id: 5,
    title: "Starter",
    price: "2499",
   description: "JEE Starter Pack for class 11th",
    features: [
      { feature: "1 user" },
      { feature: "1 connected calendar" },
      { feature: "Up to 12 responses" },
      { feature: "Up to 3 survey results archived" },
    ],
  },
  {
    id: 16,
    title: "Advanced",
    price: "8999",
   description: "JEE Advanced Pack for class 11th",
    features: [
      { feature: "1 user" },
      { feature: "Up to 2 connected calendars" },
      { feature: "Up to 50 responses" },
      { feature: "Up to 10 survey results archived" },
    ],
  },
  {
    id: 21,
    title: "Ultimate",
    price: "18999",
   description: "JEE Ulitmate Pack for class 11th",
    features: [
      { feature: "Per user in company domain" },
      { feature: "Single calendar integrations" },
      { feature: "Unlimited responses" },
      { feature: "Unlimited survey results archived" },
    ],
  },])
  const [costing12th, setCosting12th] = useState([
    {
      id: 6,
      title: "Starter",
      price: "3999",
     description: "JEE Starter Pack for class 12th",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 15,
      title: "Advanced",
      price: "8999",
      description: "JEE Advanced Pack for class 12th",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 22,
      title: "Ultimate",
      price: "18999",
      description: "JEE Ultimate Pack for class 12th",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },])
  const [costing13th, setCosting13th] = useState([
    {
      id: 7,
      title: "Starter",
      price: "4999",
      description: "JEE Starter Pack for class 13th",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 14,
      title: "Advanced",
      price: "9999",
      description: "JEE Advanced Pack for class 13th",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 23,
      title: "Ultimate",
      price: "19999",
      description: "JEE Ultimate Pack for class 13th",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },])

  useLayoutEffect(() => {
    const data = localStorage.getItem("userProductJee-storage");

    if (data) {
      const s = JSON.parse(data);

      const s11 = s.state.classFor11jee;
      const s12 = s.state.classFor12jee;
      const s13 = s.state.classFor13jee;
       
      
      setCosting11th(s11);
      setCosting12th(s12);
      setCosting13th(s13);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  const [activeBatch, setActiveBatch] = useState("11th");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };
  return (
    <>

      <div className="bg-white font-Poppins h-screen w-full ">
        <DashboardNavbar title={"Courses"} />
        <div className="my-6 flex flex-col mr-2 bg-blue-50 h-[82vh] max-w-full pl-5 pr-5 pt-5">
          <div className='max-w-[82vw] bg-white rounded-md  pl-9 flex flex-col  overflow-y-auto'>
 
   
          <div className="mt-10 space-y-4 font-Poppins">
        <h1 className=" text-center font-Poppins text-2xl md:text-3xl text-darkBlue font-semibold">
          JEE Packages
        </h1>
        <p className="text-gray-500 text-sm md:text-base md:px-40 lg:px-60 xl:px-80 text-center">
          An innovative Ed-tech organisation dedicated to democratising access
          to high-quality STEM education across India
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className=" justify-center mt-8 font-Poppins font-normal border mx-auto rounded-full inline ">
          <button
            className={`rounded-full p-2 px-8  transition-all duration-200  ${activeBatch === "11th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
            onClick={() => handleClick("11th")}
          >
            11th
          </button>
          <button
            className={`rounded-full p-2 px-8 transition-all duration-200  ${activeBatch === "12th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
            onClick={() => handleClick("12th")}
          >
            12th
          </button>
          <button
            className={`rounded-full p-2 px-8 transition-all duration-200  ${activeBatch === "13th" ? "bg-TechBlue p-2  text-white" : ""
              }`}
            onClick={() => handleClick("13th")}
          >
            13th
          </button>
        </div>
      </div>
      <Costing
        CostingData={
          activeBatch === "11th"
            ? costing11th
            : activeBatch === "12th"
              ? costing12th
              : costing13th
        }
      />

      <div className="flex justify-center mt-24 items-center mb-20 ">
        <Link
          href="/dashboard/courses"
          className="bg-TechBlue text-lg text-white md:w-44 md:h-12 rounded-full  flex justify-center items-center  duration-300 px-4 py-2 "
        >
          Back
        </Link>
      </div>

          </div>
        </div>
      </div>



      
    </>
  );
};

export default Classes;
